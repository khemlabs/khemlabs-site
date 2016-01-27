# README #

Khemlabs Official Website

### What is this repository for? ###

HTML + CSS + Javscript

## How do I get set up with Vagrant? ##

```
#!bash
git clone https://github.com/khemlabs/khemlabs-site.git
cd khemlabs-site
GMAIL_USER="user" GMAIL_PASSWORD="password" EMAIL_TO="list" vagrant up --no-parallel
OR
DISABLE_EMAIL="true" vagrant up --no-parallel
```

## Debugging ##

```
#!bash
bash scripts/debug.sh

http://127.0.0.1:9080/?ws=127.0.0.1:9080&port=5858
```

## Known Issues ##

When executing this project with vagrant, "local.sh" is run before lifting nodejs server, that's why it could happen that although the "docker instance" is running, the page is not accesible. You only have to wait until local.sh finish.

## How do I get set up with Docker? ##

```
#!bash
git clone https://github.com/khemlabs/khemlabs-site.git
cd khemlabs-site
docker build -t khemlabs/site .
```

## Run docker without proxy ##

```
#!bash
docker run --name redis -d redis
docker run -d --name khemlabsite --link redis:redishost -p 3000:3000 -e GMAIL_USER="user" -e GMAIL_PASSWORD='password' -e EMAIL_TO='list' khemlabs/site
```

## Run docker with proxy ##

```
#!bash
docker run --name redis -d redis
docker run -d --name nginx-proxy -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
docker run -d --name khemlabsite --link redis:redishost -e GMAIL_USER="user" -e GMAIL_PASSWORD='password' -e EMAIL_TO='list' -e VIRTUAL_HOST=host khemlabs/site
```

### How do I get set up in my local machine? ###

```
#!bash
git clone https://github.com/khemlabs/khemlabs-site.git
cd khemlabs-site
npm install
node app.js
```

### Environment Variables ###

## REDIS_HOST ##

* Type: string
* Required: optional
* Default: "redishost"

## DISABLE_EMAIL ##

* Type: Boolean
* Required: optional
* Default: false

## EMAIL_TO ##

* Type: string
* Required: When DISABLE_EMAIL is false
* Example: "emailone@gmail.com, email2@gmail.com, email3@gmail.com"

## GMAIL_USER ##

* Type: email
* Required: When DISABLE_EMAIL is false

## GMAIL_PASSWORD ##

* Type: string
* Required: When DISABLE_EMAIL is false

### Who do I talk to? ###

* dnangelus
* elgambet
* ajchambeaud
