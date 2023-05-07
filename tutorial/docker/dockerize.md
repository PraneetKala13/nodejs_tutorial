Docker is a platform for building, shipping, and running applications using containers, which are lightweight, self-contained packages that contain all the necessary code and dependencies.

<br>

Set up a dockerfile, which defines the configuration of a Docker image

```plain
nano Dockerfile
```{{exec}}

<br>

Build the docker image and then run the image.

```plain
docker build -t test .
docker run -it test
```{{exec}}
