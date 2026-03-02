# ─────────────────────────────────────────────
# Stage 1 — Build Next.js (static export)
# ─────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Build sem prefixo /reconcavoos (para servir na raiz em K3s)
ENV NODE_ENV=production
RUN npm run build

# ─────────────────────────────────────────────
# Stage 2 — Serve com Nginx
# ─────────────────────────────────────────────
FROM nginx:alpine AS runner

# Remove config padrão do nginx
RUN rm -rf /etc/nginx/conf.d /etc/nginx/nginx.conf

# Copia config personalizada
COPY nginx.conf /etc/nginx/nginx.conf

# Copia os arquivos estáticos gerados pelo Next.js
COPY --from=builder /app/out /usr/share/nginx/html

# Permissões para nginx rodar como não-root (uid 101)
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
