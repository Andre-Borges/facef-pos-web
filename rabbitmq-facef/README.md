# RabbitMQ Facef

- Módulo de Mensagerias com RabbitMQ - Uni-FACEF.

### Comandos

```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management

docker-compose stop && docker-compose rm -f && docker-compose up -d 
http://localhost:15672/ -> guest/guest

microk8s helm3 install rabbitmq stable/rabbitmq
echo "Password      : $(kubectl get secret --namespace default rabbitmq -o jsonpath="{.data.rabbitmq-password}" | base64 --decode)"

sudo apt install openjdk-11-jdk maven
brew cask install adoptopenjdk11
brew install maven
choco install jdk11 maven


java -version
javac -version

mvn spring-boot:run

```

### Links

- https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
- https://www.eclipse.org/downloads/packages/
- https://start.spring.io/
- https://www.rabbitmq.com/download.html
- http://activemq.apache.org/
- https://kafka.apache.org/
- https://www.rabbitmq.com/
- https://redis.io/topics/pubsub
- https://nats.io/
- https://maven.apache.org/install.html
- https://chocolatey.org/install
- https://brew.sh/index_pt-br
- https://sdkman.io/
