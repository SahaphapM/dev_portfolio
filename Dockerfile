# Stage 1: Build Angular static files
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npx ng build --configuration production --project dev_portfolio

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/dev_portfolio/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod -R 755 /usr/share/nginx/html
EXPOSE 80
