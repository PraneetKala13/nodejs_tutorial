# nodejs_tutorial
Tutorial on how to setup a full node.js project with all the tools necessary to make development and deployment fast, easy and secure.

# Dockerfile content

FROM ubuntu:latest
LABEL maintainer="Praneet <pran@gmail.com>"

# Set working directory
WORKDIR assets/app

# Copy application files
COPY . assets/app

# Expose port
EXPOSE 80

# Define command to start application
CMD ["java", "app.js"]