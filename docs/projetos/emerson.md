# Implementação de oclusão mútua por meio da utilização de sensor de profundidade  para sistemas de estúdio virtual
**Emerson  Belancieri de Souza**  
**Orientador: Prof. Associado Antonio Carlos Sementille**
***
Com a popularização de aplicações de realidade aumentada, como os estúdios de produção virtual, busca-se cada vez métodos melhores para solucionar os problemas dessa tecnologia. Um desses problemas é a determinação da profundidade de objetos em um ambiente real, no qual está inserido o processo de oclusão mútua. O objetivo desse processo é a definição de quais objetos, reais e virtuais, estão a frente, atrás ou se sobrepondo uns aos outros. O método mais comum de oclusão mútua entre objetos reais e virtuais em uma aplicação de realidade aumentada é baseado na utilização de marcadores fiduciais colocados no ambiente real, para estabelecer um plano ao qual os objetos pertencem, e então decidir quais planos estão a frente ou atrás uns dos outros. Esse método apresenta um baixo nível de realismo, pois a profundidade de um ambiente ou objeto reais são tratados como um único plano, quando na verdade a profundidade é uma grandeza contínua. Nesse contexto, é apresentada uma abordagem alternativa, utilizando sensores de profundidade para obter informações de profundidade de um ambiente real mais próximas da realidade, para a realização da oclusão mútua. Esse trabalho descreve a implementação de um método de calibração de câmeras em uma aplicação do motor de jogos Unity3D, o processo de calibração é necessário para obter a profundidade correta de cada ponto de uma imagem capturada por uma câmera RGB externa. Então, é implementado um método de oclusão mútua baseada na geração de malhas tridimensionais a partir do mapa de profundidade obtido por meio do sensor, projetado na imagem obtida da câmera RGB. A aplicação desse método resulta em um modelo tridimensional aproximado do ambiente visível pelo sensor, o qual é tratado como um objeto virtual qualquer no motor de jogos, que por sua vez, dadas essas condições, é capaz de realizar o processo de oclusão automaticamente.  

**Palavras-chave: Calibração de câmeras, visão 3D, sensor de profundidade, oclusão mútua.**

## Downloads

<p><a :href="$withBase('/files/resumo_emerson.odt')" download>Resumo</a></p>
<p><a :href="$withBase('/files/apresen_emerson.pdf')" download>Apresentação</a></p>
