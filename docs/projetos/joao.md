# Programação não linear para dimensionamento de biodigestores rurais
**João Pedro Mucheroni Covolan**  
**Orientadora: Drª. Márcia Aparecida Zanoli Meira e Silva**
***
Os biodigestores rurais são hoje uma importante alternativa para a geração de energia, além de permitirem uma destinação correta aos dejetos oriundos da produção agropecuária. Neste trabalho foi desenvolvido um software em Java que permite calcular as dimensões de biodigestores dos três principais modelos presentes no contexto brasileiro: indiano, chinês e batelada. Para isso foram utilizadas modelagens de seus parâmetros e restrições como problemas de programação não linear restritos. Aplicando-se o método Primal Dual Barreira Logarítmica, os problemas restritos foram transformados em irrestritos e, em seguida, otimizados através do método de Newton. Além disso, como esse último método exige a resolução de sistemas lineares, realizou-se uma análise comparativa, em termos de tempo de processamento, entre o método de Gauss com Pivotamento Parcial (GPP) sem troca linhas, o método da Decomposição LU (DLU) e um método de Newton modificado utilizando DLU, sendo encontrados resultados superiores nos dois últimos casos.  

**Palavras-chave: Otimização. Biodigestor. Java. Newton. LU.**

## Downloads

<p><a :href="$withBase('/files/resumo_joao.doc')" download>Resumo</a></p>
<p><a :href="$withBase('/files/apresen_joao.pdf')" download>Apresentação</a></p>
