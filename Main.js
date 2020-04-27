//Referente a Universidades e Repúblicas

class Curso {
    constructor(nome, carga) {
        this.nome = nome;
        this.carga = carga;
    }
}

class Universidade {
    constructor(nome, curso) {
        this.nome = nome;
        this.cursos = curso;
    }
}

class Republica {
    constructor(nome, idade, n_moradores) {
        this.nome = nome;
        this.idade = idade;
        this.n_moradores = n_moradores;
    }
}

//Referente ao comércio

class Bebida {
    constructor(nome, valor, lata) {
        this.nome = nome;
        this.valor = valor;
        this.lata = lata;
    }
}

class Pedido {
    constructor(n_pessoas, vet_bebidas) {
        this.n_pessoas = n_pessoas;
        this.vet_bebidas = vet_bebidas;
        this.total = 0;
    }

    CalculaTotal() {
        for(let i = 0; i < this.vet_bebidas.length; i++) {
            this.total = this.total + this.vet_bebidas[i].valor;
        }

        return (this.total);
    }

    CalculaIndividual() {
        this.total = 0;
        return (this.CalculaTotal()/this.n_pessoas);
    }

    setTotalToZero() {
        this.total = 0;
    }
}

//Referente a Pessoa

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, universidade, curso, republica) {
        super(nome, idade);
        this.universidade = universidade;
        this.curso = curso;
        this.republica = republica;
    }

    PedirConta(pedido) {
        pedido.setTotalToZero();

        return ("O total da conta foi: "
            + pedido.CalculaTotal().toFixed(2)
            + ". Sendo assim, ficou: "
            + pedido.CalculaIndividual().toFixed(2)
            + " pra cada.");
    }
}

class Bartender extends Pessoa {
    constructor(nome, idade) {
        super(nome, idade);
    }

    ChecarID(Pessoa) {
        if(Pessoa.idade > 17) {
            return `${Pessoa.nome} é maior de idade.\n`;
        } else {
            return `${Pessoa.nome} é menor de idade.\n`;
        }
    }
}

//Main

let republica0 = new Republica("Orfanato", 10, 6);

let curso0 = new Curso("CJM", 3630);
let curso1 = new Curso("SJM", 3000);
let curso2 = new Curso("EJM", 3630);

let universidade0 = new Universidade("UFOP", [curso0, curso1]);

let pessoa0 = new Estudante("Pedro",        20, universidade0, curso0, republica0);
let pessoa1 = new Estudante("Ana",          17, universidade0, curso0, republica0);
let pessoa2 = new Estudante("Constantino",  24, universidade0, curso2, republica0);
let pessoa3 = new Estudante("Parmênedes",   17, universidade0, curso1, republica0);
let pessoa4 = new Bartender("Cícero",       33);

let bebida0 = new Bebida("Guaraná Jesus", 4.99, true);
let bebida1 = new Bebida("Hidromel 1,25L", 59.89, false);
let bebida2 = new Bebida("Cerveja Heineken", 5.49, true);

let pedido0 = new Pedido(4, [bebida0, bebida0, bebida1, bebida2]);

console.log(pessoa4.ChecarID(pessoa0), pessoa4.ChecarID(pessoa1), pessoa4.ChecarID(pessoa2), pessoa4.ChecarID(pessoa3));

console.log(pessoa0, pessoa1, pessoa2, pessoa3, pessoa4);

console.log(pedido0);
console.log(pessoa1.PedirConta(pedido0));