# B3_CBD_Challenger

## Descrição
Esta aplicação é uma prova de avaliação de conhecimento para a posição de desenvolvedor
na direoria de desenvolvimento de sisemas de middle e back office na B3.
O objetivo é avalidar a habilidade do desenvolvedor na aplicação de principios SOLID,
Testes unitários e performance.

## Estrutura do Projeto
- **b3_cbd_challenger.cliente**: Aplicação frontend feita em Angular 19.
- **B3_CBD_Challenger.Server**: API para comunicação com o backend feita em .net8.
- **B3_CBD_Challenger.Application**: Biblioteca de classes com as regras de negócio.
- **B3_CBD_Challenger.Test**: Projeto de testes unitários que contempla Testes unitários da API e da Application.

## Configuração
1. Clone o repositório.
2. Abra a solução no Visual Studio 2022.
3. Certifique-se que tenha a versão correta do Angular e do Node instalados conforme abaixo:
	
    Angular CLI: 19.0.2
    Node: 22.11.0
    Package Manager: npm 10.9.1

4. Para evitar a a abertura de 2 browser, um para o projeto angular e outro para o projeto api,
   no Visual Studio clique com o botão direito sobre o projeto .Server > Debug > Open debug launch profileUI
   e em seguida desmarque a opção Launch browser.

 
## Como Executar
1. Compile a solução.
2. Clique em  debug na opção https, que já está pré-configurada para execução do projeto web.

## Testes
Execute os testes com o comando:
```bash
dotnet test