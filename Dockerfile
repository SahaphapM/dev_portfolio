# Stage 1: Build the Angular application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install Angular CLI and project dependencies
RUN npm install -g @angular/cli
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application for production
# The output will be in the 'dist' directory (e.g., dist/dev_portfolio)
RUN ng build --configuration production

# Stage 2: Serve the application with 'serve'
FROM node:20-alpine AS serve

# Install 'serve' globally
RUN npm install -g serve

# Set the working directory to where the built Angular app will be
WORKDIR /app

# --- แก้ไขบรรทัดนี้ ---
# Copy the built Angular application from the build stage, specifically from the 'browser' subfolder
# ตรวจสอบให้แน่ใจว่า 'dev_portfolio' ตรงกับชื่อโปรเจกต์ใน angular.json และโครงสร้าง dist/ ของคุณ
COPY --from=build /app/dist/dev_portfolio ./

# Expose the port 'serve' will listen on (default is 3000)
EXPOSE 3000

# Command to run 'serve'
# -s fallback to index.html for client-side routing
# -l 3000 listen on port 3000
CMD ["serve", "-s", "-l", "3000"]