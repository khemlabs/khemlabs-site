docker stop node-inspector
docker rm -v node-inspector
docker run --name node-inspector --net=container:site-app --volumes-from site-app -d khemlabs/node-inspector
