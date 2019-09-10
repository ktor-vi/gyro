# GYRO - Find ATM's near me. 
*Quack*

### A.  Install the server-side

1. Pull it 

2. Verify that nothing is running on port 80 (apache, other docker containers) *then*


`npm install` - installs the dependencies

`npm run build` - builds the server 

`npm run work:server` - prepares the server

`docker-compose up` - Docker takes the lead and makes everything go **smoothly* 

### B. Install the client-side 


`npm install` - installs the dependencies

`npm run build:client` - builds client-side using webpack 

`npm run work:server` - runs client-side (still webpack)


#### Post-scriptum

**Note : The Docker command won't close it's output, but it is normal. Run : **

`docker ps`

And you should see *TWO* Containers : Node and MongoDB

**Note : Kill the container when you're finished**

`docker kill [containerId]`

### And we're off 
*Quack* 
