# Use an official Node.js image from the Docker Hub
FROM node:18-slim

# Install dependencies for Puppeteer (e.g., fonts, libs, and others)
RUN apt-get update && apt-get install -y \
  wget \
  ca-certificates \
  fonts-liberation \
  libappindicator3-1 \
  libasound2 \
  libnspr4 \
  libnss3 \
  libx11-xcb1 \
  libxcomposite1 \
  libxdamage1 \
  libxrandr2 \
  --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

# Install Puppeteer
RUN npm install puppeteer

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the application dependencies (optional)
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port (optional, for web servers)
EXPOSE 3000

# Set the default command
CMD ["node", "your_script.js"]
