# Etap 1: Budowanie aplikacji
FROM node:alpine AS builder
WORKDIR /app
COPY skrypt.js package.json ./
RUN npm install --production

# Etap 2: Uruchamianie aplikacji
FROM node:alpine
COPY --from=builder /app /app
WORKDIR /app
CMD ["node", "skrypt.js"]

# linux/amd64
FROM node:alpine
WORKDIR /app
COPY --from=builder /app/dist /app
COPY --from=builder /app/node_modules /app/node_modules
CMD ["node", "skrypt.js"]

# linux/arm/v7
FROM --platform=linux/arm/v7 node:alpine
WORKDIR /app
COPY --from=builder /app/dist /app
COPY --from=builder /app/node_modules /app/node_modules
CMD ["node", "skrypt.js"]

# linux/arm64/v8
FROM --platform=linux/arm64/v8 node:alpine
WORKDIR /app
COPY --from=builder /app/dist /app
COPY --from=builder /app/node_modules /app/node_modules
CMD ["node", "skrypt.js"]