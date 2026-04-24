# Desafio-backend-frameworks-Nassau
Feito para testar minhas habilidades no Backend

#Aluno: Lucas Rodrigo / 01809313

## Comparação entre Frameworks: Uma análise comparativa entre o Node.js/Express e o Java/Spring Boot
R-      Entre os 2, o Node.js/express se trata de uma framework, servindo mais para startups, já que o codigo dele se trata de algo mais simples e flexivel, contudo acaba sendo fraca para projetos gigantescos. Contudo o Java/Spring Boot acaba cumprindo esse requisito de gerenciar grandes projetos, por se tratar num codigo mais robusto, mas a sua curva de aprendizado acaba sendo mais intença, servindo mais para aqueles que tem mais habilidades.

Resumindo, Node.js/express é algo mais agil e tem bem menos burocracia na hora da prototipação, já Java/Spring Boot ele é mais focado na padronização e mais seguro para sistemas de corporações grandes.

# Explicação das Pastas/camadas:
## Node_modules
Ela é a espinha dorsal do projeto, no qual essa camada é algo gigantesco, graças a essa camada o express pode funcionar. Contudo pra a pasta não subir para o Git hub, é sempre bom dar gitignore nela.

## Pacote-de-controles
É a primeira area que vai receber os dados, no qual posteriormente vai re passar os dados recebidos para uma outra camada.
Ele so vai começar a funcionar quando o cliente for fazer a ação, no caso fazer seu pedido. Ao mesmo tempo o pacote de controles é a camada que inicia tudo e ao mesmo tempo é a que termina, devolvendo os dados ja processados ao cliente.

## Pacote-service
É necessariamente a mente do codigo, no qual essa camada vai analisar analisar os dados recebidos e vai processando eles para a validação.

## Pacote-models
É a definição de como esses dados deve ser, obrigatorimente ela é a camada que vai se comunicar com o banco de dados

# Fluxo
Cliente realiza o pedido:
Controles > service > Models

posteriormente realiza o caminho inverso para responder o cliente
Models > Service > Controles



