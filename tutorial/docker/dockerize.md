Docker is a platform for building, shipping, and running applications using containers, which are lightweight, self-contained packages that contain all the necessary code and dependencies.

<br>

The first step is to set up a dockerfile, which defines the configuration of a Docker image

```plain
nano Dockerfile
```{{exec}}

Then you need to build the docker image and then run the image.

```plain
docker build -t test .
docker run -it test
```{{exec}}


### Example of Dockerfile text
We can use the following docker code to create and run a docker image:

# Dockerfile content
FROM openjdk:11

# Copy application files
COPY . /usr/src/myapp

# Set working directory
WORKDIR /usr/src/myapp

# Run Java App
RUN javac Main.java

# Expose port
EXPOSE 80

# Define command to start application
CMD ["java", "Main"]