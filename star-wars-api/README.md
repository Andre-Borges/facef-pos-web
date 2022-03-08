# Star Wars API

- Módulo de Desenvolvimento Mobile (React Native) / Kubernates - Uni-FACEF.

## Passos para rodar o app no cluster kubernetes

Subir o deployment:

```sh
kubectl apply -f star-wars-deployment.yaml
```

Subir o service:

```sh
kubectl apply -f star-wars-service.yaml
```

Criar o túnel para o app ficar acessível por conexão HTTP:

```sh
kubectl port-forward service/star-wars-api-service 9000:9000
```

## Links Ferramentas

- microk8s: https://microk8s.io/docs
  - Leve, Zero OPS, Instalação simples
  - Configurar o kubectl https://microk8s.io/docs/working-with-kubectl
- Minikube: https://kubernetes.io/docs/tasks/tools/install-minikube/
  - Desenvolvido pela comunidade do kubernetes
- kubeclt: https://kubernetes.io/docs/tasks/tools/install-kubectl/
  - Utilitário de comando para interação com as API do Kubernetes

## Lista de comandos

```
kubeclt get nodes -o wide - lista os nodes com mais informacoes
kubeclt get pods -o wide - lista os pods com mais informacoes
kubectl get pods -w - lista os pods e acompanha todas as alteracoes
kubectl set image deployment hello-api hello-api=diegoferandens/k8s-facef:0.0.2 - troca a imagem e versão do deployment
kubectl logs -f pods <pod_id> - mostra os logs do pod e acompanha novas saidas de logs
kubectl logs -p <pod_id> - mostra os logs antes do restart do pod/container
kubectl describe pod <pod_id> - exibe todas as informacoes de um pod
kubectl top pod - exibe os recurso utilizado.

kubectl apply -f file.yaml - aplica todos os recursos descritos no arquivo
kubectl diff -f file.yaml - exibe as diferenças entre o cluster e o arquivo
kubectl delete -f file.yaml - apaga todos os recursos descritos no arquivo

kubectl autoscale deployment hello-api-deployment --min 1 --max 10 --cpu-percent 50 - cria um autoscale para o deployment


microk8s enable metrics-server - habilita o metric-server
minikube addons enable metrics-server - habilita o metric-server


kubectl run -it --rm load-generator --image=busybox /bin/sh
while true; do wget -q -O- http://hello-api-service:8080; done

```
