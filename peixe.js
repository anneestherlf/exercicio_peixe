var config = { // Em config encontramos um conjuntos de configurações básicas do nosso jogo
    type: Phaser.AUTO, // Indica que o navegador escolhe automaticamente o tipo de renderizador da página web
    width: 800, // Largura 
    height: 600, // Altura da tela do nosso jogo

    scene: { // Define as funções que serão executadas durante o ciclo de vida do jogo (preload, create, update)
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config); // Estamos criando uma variável 'game' e guardando nela um 'novo jogo phaser' que vai usar as configurações que definimos em config. ou seja, esse comando cria uma instância do jogo Phaser

//Criando variável para adicionar movimentos no peixe
var peixinho;

// Preload() para carregar os recursos do jogo. Os recursos aqui estarão disponíveis para uso na função create()
function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    // 'mar' é o apelido/identificador da imagem de fundo

    // Carregar o logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    // Carregar o peixe
    this.load.image('peixe', 'assets/peixes/tubarao.png');

    // Elemento de plano de fundo
    this.load.image('concha', 'assets/peixes/concha.png');
    this.load.image('crustaceo', 'assets/peixes/crustaceo.png');
}

// Em create() poderemos criar e configurar elementos do jogo, usando uma 'imagem.jpg' que carregamos em preload() para criar um player em create()
function create() {
    // Usando 'mar' para adicionar a imagem na tela do jogo. 400 e 300 são as coordenadar do posicionamento da imagem na tela (metade da largura e altura, ou seja, o centro da tela)
    this.add.image(400, 300, 'mar');

    // Adicionar o logo na tela
    // o setScale() realiza alterações no tamanho da imagem
    this.add.image(400, 525, 'logo').setScale(0.5);

    // Adicionar elemento na tela
    this.add.image(720, 530, 'concha').setOrigin(0, 0).setFlip(true, false);
    this.add.image(130, 100, 'crustaceo').setOrigin(1, 1).setFlip(true, false);

    //adicionar o peixe na tela 
    //setFlip indica se a imagem deve ser espelhada horizontalmente ou verticalmente
    // setOrigin determina a origem da imagem. O ponto em torno do qual o posicionamento, a rotação e o dimensionamento da imagem serão definidos
    // this.add.image(400,300, 'peixe').setOrigin(0.5,0.5).setFlip(true, false);

    // Guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe');

    // Transformando a variável
    peixinho.setFlip(true, false);
}

// Em update() definiremos a lógica de atualização em tempo real do jogo, como o movimento de personagens. Depois de executar as duas primeiras funções, a update() será chamada em um loop constante
function update() {

    // adicionando controles no peixe
    peixinho.x = this.input.x; // Posição em x (horizontal)
    peixinho.y = this.input.y; // Posição em y (vertical)
    // this.input.x se refere à posição do cursor
    // Acabamos de dizer que a posição x do peixinho deve assumir o valor da posição x do mouse, e depois repetimos para y
    // Definimos também que a posição do peixinho deve ser atualizada constantemente (função update()), assumindo os valores da posição do cursor!
}