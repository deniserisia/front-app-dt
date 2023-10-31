# docker run -p 8080:80 --name front_great -d great_front_app

# Use the official Node.js runtime as a parent image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Angular application for dev
RUN npm run build -- --configuration=development

# Expose the port that the application will run on
EXPOSE 84

# Define the command to start the application
CMD [ "npm", "start" ]
