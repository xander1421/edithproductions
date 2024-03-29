FROM node:20-alpine3.17 as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN yarn install
# Build the app
RUN yarn run build

# Bundle static assets with nginx
FROM nginx:1.23.2-alpine as production
ENV NODE_ENV production
# Copy built assets from `dist` image
COPY --from=builder /app/dist /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]