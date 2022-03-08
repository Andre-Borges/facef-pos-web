----------------------------------------------------------
Atividade 2 - Execução
----------------------------------------------------------
https://www.rabbitmq.com/tutorials/tutorial-three-python.html

* demonstrar
- interface web
- producing / consuming (publicando em todos)
- mostrar os bindings
    sudo docker exec -it rabbitmq /bin/bash
    rabbitmqctl list_bindings
- deburrar os receivers e mostrar filas

Rodar:

```bash
python3 emit_log.py unifacef -> Enviar tarefas.
python3 receive_logs.py -> Em outro terminal para receber as tarefas.
```