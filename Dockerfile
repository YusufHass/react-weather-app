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

#STEPS FOR BUILDING AND RUNNING IN DOCKER

#1. BUILDING USING THE FOLLOWING COMMAND. So building will create image in the Docker desktop
      #docker build -t weather-app .  

#2. RUNNING THE APPLICATION. we can run the app using the following command in terminal or open Docker Desktop and run it.from it
     # docker run -p 8089:3000 weather-app

     #** Remember on the [docker run -p 8089:3000 weather-app] "weather-app" is the application name and it should 
     #in small letter





