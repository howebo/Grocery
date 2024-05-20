# Use an official node image as a base
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Ensure the .env file is included in the Docker image
COPY .env .env

# Compile TypeScript files
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD ["node", "dist/server.js"]
