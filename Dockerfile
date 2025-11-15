# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including dev) for build
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --production --legacy-peer-deps && \
    npm cache clean --force

# Copy built files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/attached_assets ./attached_assets

# Expose port
EXPOSE 10000

# Set environment to production
ENV NODE_ENV=production
ENV PORT=10000

# Start the application
CMD ["node", "dist/index.js"]
