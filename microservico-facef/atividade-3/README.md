----------------------------------------------------------
Atividade 3 - Execução
----------------------------------------------------------
https://www.rabbitmq.com/tutorials/tutorial-five-python.html

* demonstrar
- distribuição dos pacotes (utilizando os critérios, no caso filtros, irá pegar apenas uma parte do "pacote" enviado)

<facility>.<severity>

* receber todos
python3 receive_logs_topic.py "#"

* receber facility = "kern"
python3 receive_logs_topic.py "kern.*"

* receber severity = "critical"
python3 receive_logs_topic.py "*.critical"

* recebendo múltiplos
python3 receive_logs_topic.py "kern.*" "*.critical"

* enviando mensagens
python3 emit_log_topic.py "kern.critical" "A critical kernel error"
