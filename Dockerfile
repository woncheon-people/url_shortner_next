FROM node:18-alpine AS base

# FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json yarn.lock* ./
RUN yarn --frozen-lockfile

# FROM base AS builder
# WORKDIR /app
COPY . .
RUN yarn build

# FROM base AS runner
# WORKDIR /app
ENV NODE_ENV production
EXPOSE 3000

CMD ["yarn", "start"]