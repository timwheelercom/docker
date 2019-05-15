# Use Linux Alpine OS
FROM node:alpine

# Specify the working directory
WORKDIR /usr/app

# Copy existing package.json into project
COPY ./package.json ./

# Install node dependencies
RUN npm install

# Copy over any additional files
# Especially those that have changed
# While under development
COPY ./ ./


# Start server
CMD ["npm", "start"]