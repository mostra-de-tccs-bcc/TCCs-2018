module.exports = {
    title: 'Mostra TCCs 2018',
    description: 'Trabalhos realizados para conclusão do curso de Bacharelado em Ciência da Computação da UNESP - Bauru',
    lang: 'pt-BR',
    base: '/TCCs-2018/',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css',
                integrity: 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU',
                crossorigin: 'anonymous',
            }
        ]
    ],
    themeConfig: {
        sidebarDepth: 0,
        search: false,
        nav: [
            { text: 'Projetos', link: '/projetos/' }
        ],
        sidebar: {
            '/projetos/': [
                {
                    title: 'Alunos',
                    collapsable: false,
                    children: [
                        ['aron', 'Aron Barreira Bordin'],
                        ['barbara', 'Barbara Carvalho Silva'],
                        ['caio', 'Caio Henrique Assad Racy'],
                        ['emerson', 'Emerson Belancieri de Souza'],
                        ['guilherme', 'Guilherme Silvestre'],
                        ['hugo', 'Hugo Cicarelli'],
                        ['joao', 'João Pedro Mucheroni Covolan'],
                        ['karoline', 'Karoline Keiko Ikenami'],
                        ['lucas', 'Lucas Fernandes Nogueira'],
                        ['luccas', 'Luccas Fernandes de Quadros'],
                        ['luis_fel', 'Luis Felipe Bueno da Silva'],
                        ['luis_fer', 'Luis Fernando de Oliveira Uzai'],
                        ['luiz_g', 'Luiz Guilherme Silva'],
                        ['marcello', 'Marcello Cainelli Filho'],
                        ['mariana', 'Mariana Dias'],
                        ['mateus', 'Mateus Gomes Cabana'],
                        ['matheus', 'Matheus Solha'],
                        ['renata', 'Renata  Falguera Gonçalves'],
                        ['rodrigo', 'Rodrigo Bueno'],
                        ['victor', 'Victor Hugo da Silva Dias'],
                    ],
                },
            ],
        }
    },
}