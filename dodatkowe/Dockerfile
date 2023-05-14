# Etap 1: Budowanie aplikacji
FROM node:alpine AS builder
WORKDIR /app
COPY skrypt.js package.json ./
RUN npm install --production

# linux/amd64
FROM node:alpine
WORKDIR /app
COPY --from=builder /app/dist /app
COPY --from=builder /app/node_modules /app/node_modules
CMD ["node", "index.js"]

# linux/arm/v7
FROM --platform=linux/arm/v7 node:alpine
WORKDIR /app
COPY --from=builder /app/dist /app
COPY --from=builder /app/node_modules /app/node_modules
CMD ["node", "index.js"]

# linux/arm64/v8
FROM --platform=linux/arm64/v8 node:alpine
WORKDIR /app
COPY --from=builder /app/dist /app
COPY --from=builder /app/node_modules /app/node_modules
CMD ["node", "index.js"]