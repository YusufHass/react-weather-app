# Use an official Node runtime as a parent image
FROM node:20.8.0

# Set the working directory to /app
WORKDIR /App

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy local directories to the current local directory of our docker image (/app)
# COPY ./src ./src
# COPY ./public ./public

# Bundle app source
COPY . .

# Copy local directories to the current local directory of our docker image (/app)
# COPY ./src ./src
# COPY ./public ./public
# Install app dependencies
RUN npm install



# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]

# run the app using following command or Docker Desktop
# docker run -p 3000:3000 weather-app




