#instalar

npm i -g serverless

#iniciar 

serverless || sls 

#sempre fazer deploy antes de tudo, para verificar se esta tudo ok 

sls deploy

#invocar na AWS

sls invoke -f nome_handle

#invocar

sls invoke local -f nome_handle

#configurar dashboard

sls

#logs

sls logs -f nome_handle --tail