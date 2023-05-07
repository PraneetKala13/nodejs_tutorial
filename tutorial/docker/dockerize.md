Docker is a platform for building, shipping, and running applications using containers, which are lightweight, self-contained packages that contain all the necessary code and dependencies.

The example project comes with a pre-configured Dockerfile that you can use to build an image. Take a look at it.

You can build the image like this:
```plain
docker build -t test .
```{{exec}}

Then run it like this:
```plain
docker run -itd --rm --name test -p 3000:3000 test
```{{exec}}

Now when you visit the [public URL]({{TRAFFIC_HOST1_3000}}) again you should see the application running but this time in a docker container. You can use this image to easily deploy your application to any cloud provider.