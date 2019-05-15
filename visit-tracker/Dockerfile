#Set base image
FROM node:alpine

# Set working directory
WORKDIR '/app'

# Copy package.json to get all dependencies
COPY package.json .

# Install dependencies
RUN npm install

# Copy over additional files that may have changed
# Prevents cache-busting every time a file is changed
COPY . .

CMD ["npm", "start"]

