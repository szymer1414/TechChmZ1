# Etap 1: Budowanie aplikacji
FROM node:alpine AS builder
WORKDIR /app
COPY skrypt.js package.json ./
RUN npm install --production

# Etap 2: Uruchamianie aplikacji
FROM scratch
COPY --from=builder /app /app
WORKDIR /app
ENTRYPOINT ["node", "skrypt.js"]