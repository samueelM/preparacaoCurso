import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identifiers',
  templateUrl: './identifiers.component.html',
  styleUrls: ['./identifiers.component.css']
})
export class IdentifiersComponent implements OnInit {

  private nome: string;
  _nome = this.nome;

  constructor() { }

  ngOnInit() {
    this._nome = 'Novo nome';

    const __ = this._nome.substring(0, 1);

    console.log (this._nome);

    const multilinhas = `texto string linha 1
    texto string linha 2
    texto string linha 3`;

    const nome2 = 'Rex';
    const idade = 2;

    console.log(multilinhas);

    const frase = `Meu cachorro ${nome2} tem ${idade * 7} anos.`;
    console.log(frase);

  }

}
