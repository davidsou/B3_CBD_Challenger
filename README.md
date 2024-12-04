# B3_CBD_Challenger

## Descri��o
Esta aplica��o � uma prova de avalia��o de conhecimento para a posi��o de desenvolvedor
na direoria de desenvolvimento de sisemas de middle e back office na B3.
O objetivo � avalidar a habilidade do desenvolvedor na aplica��o de principios SOLID,
Testes unit�rios e performance.

## Estrutura do Projeto
- **b3_cbd_challenger.cliente**: Aplica��o frontend feita em Angular 19.
- **B3_CBD_Challenger.Server**: API para comunica��o com o backend feita em .net8.
- **B3_CBD_Challenger.Application**: Biblioteca de classes com as regras de neg�cio.
- **B3_CBD_Challenger.Test**: Projeto de testes unit�rios que contempla Testes unit�rios da API e da Application.

## Configura��o
1. Clone o reposit�rio.
2. Abra a solu��o no Visual Studio 2022.
3. Certifique-se que tenha a vers�o correta do Angular e do Node instalados conforme abaixo:
	
    Angular CLI: 19.0.2
    Node: 22.11.0
    Package Manager: npm 10.9.1

4. Para evitar a a abertura de 2 browser, um para o projeto angular e outro para o projeto api,
   no Visual Studio clique com o bot�o direito sobre o projeto .Server > Debug > Open debug launch profileUI
   e em seguida desmarque a op��o Launch browser.

 
## Como Executar
1. Compile a solu��o.
2. Clique em  debug na op��o https, que j� est� pr�-configurada para execu��o do projeto web.

## Testes
Execute os testes com o comando:
```bash
dotnet test