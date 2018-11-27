export class Pessoa {

    constructor(private nome: string, private idade: number) {}

    get getNome() {
        return this.nome;
    }

    set setNome(valor) {
        this.nome = valor;
    }
}
