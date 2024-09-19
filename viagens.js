/**

*** Classe que representa uma "Viagem".
    @constructor
    @param {Object} args - Os argumentos para criar uma viagem.
    @param {string} args.destino - O destino da viagem.
    @param {string} args.tipo - O tipo da viagem (ex: "lazer", "negócios").
    @param {string} args.data - A data da viagem.
    @param {number} args.duracao - A duração da viagem em dias.
*** Subclasse de "Viagem", "ViagemInternacional".
    * @class
    * @extends Viagem
    * @param {string} args.passaporte - O número do passaporte.
    * @param {string} args.custo - O custo da viagem.
*** Subclasse de "Viagem", "ViagemNacional".
    * @class
    * @extends Viagem
    * @param {string} args.estado - O estado de destino.
*** Subclasse de "Viagem", "ViagemAventura".
    * @class
    * @extends Viagem
    * @param {string} args.tipoAventura - O tipo de aventura (ex: "escalada", "mergulho").
    * @param {string} args.dificuldade - O nível de dificuldade da aventura.
**/

class Viagem {
    constructor(args) {
        // Verificação de argumentos
        if (!args) 
            return console.error("É necessário passar um argumento");
        
        // Variáveis da classe
        this.destino = args.destino || "Destino não informado";
        this.tipo = args.tipo || "Tipo não informado";
        this.data = args.data || "Data não informada";
        this.duracao = args.duracao || "Duração não informada";
    }   
}

class ViagemInternacional extends Viagem {
    constructor(args) {
        super(args);
        this.passaporte = args.passaporte || "Número do passaporte não informado";
        this.custo = args.custo || "Custo não informado";
    }
}

class ViagemNacional extends Viagem {
    constructor(args) {
        super(args);
        this.estado = args.estado || "Estado não informado";
    }
}

class ViagemAventura extends Viagem {
    constructor(args) {
        super(args);
        this.tipoAventura = args.tipoAventura || "Tipo de aventura não informado";
        this.dificuldade = args.dificuldade || "Dificuldade não informada";
    }
}

// Função para verificar se o valor é booleano
function conferirBooleano(valor, padrao) {
    return typeof valor === "boolean" ? valor : padrao;
}

// Testando as classes
const viagemPraia = new ViagemNacional({
    destino: "Florianópolis",
    tipo: "lazer",
    data: "2023-12-15",
    duracao: 7,
    estado: "Santa Catarina"
});

const viagemEuropa = new ViagemInternacional({
    destino: "Paris",
    tipo: "negócios",
    data: "2024-05-10",
    duracao: 14,
    passaporte: "123456789",
    custo: "2000 USD"
});

const aventuraMontanha = new ViagemAventura({
    destino: "Nepal",
    tipo: "aventura",
    data: "2024-09-01",
    duracao: 10,
    tipoAventura: "escalada",
    dificuldade: "alta"
});

// Teste instanciando uma viagem sem argumentos
const viagemInvalida = new Viagem({});
// Output esperado:
/*
    Viagem {
        destino: 'Destino não informado',
        tipo: 'Tipo não informado',
        data: 'Data não informada',
        duracao: 'Duração não informada'
    }
*/
