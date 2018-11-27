import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../shared/Pessoa';

@Component({
  selector: 'app-colecoes',
  templateUrl: './colecoes.component.html',
  styleUrls: ['./colecoes.component.css']
})
export class ColecoesComponent implements OnInit {

  constructor() { }

  pessoa = new Pessoa('Samuel', 42);

  ngOnInit() {

    console.log (this.pessoa.getNome);

    this.pessoa.setNome = 'samuel alterado';

    // this.colecoes ();

    this.iterators();

    this.arrow();

  }

  colecoes(): any {
    const carros = new Set();
    carros.add('Ferrari');
    carros.add('BMW');
    console.log(carros.has('Ferrari')); // true
    console.log(carros.has('BMW'));
    // true
    console.log(carros.has('Honda'));
    // false
    carros.delete('BMW');
    console.log(carros.has('BMW')) ; // false
    const map = new Map();
    map.set('server', 'http://git.serpro/');
    map.set('project', 'sief-angular');
    console.log(map.get('server') + map.get('project'));
  }

  iterators(): any {
    const cores = ['azul', 'amarelo', 'verde'];
    // iterator forEach
    cores.forEach(function (cor) {
      console.log(cor);
    });
    // iterator for-of
    for (const cor of cores) {
      console.log(cor);
    }
    // iterator for
    for (let i = 0; i < cores.length; i++) {
      console.log(cores[i]);
  }

    const pessoa = new Pessoa('Samuel Meira de Oliveira' , 5 );

    for (const key in pessoa) {
      if (pessoa.hasOwnProperty(key)) {
        const element = pessoa[key];
        console.log (`${key}: ${element}`);
      }
    }
  }

  arrow(): any {

    const a = ['Hidrogênio' , 'Hélio' , 'Lítio' , 'Berílio'];

    console.log(a.map(function (s) {
      return s.length;
    })); // [ 10, 5, 5, 7 ]

    console.log(a.map( s => s.length )); // [ 10, 5, 5, 7 ]

    const notas = [8, 4, 10, 5, 7];

    console.log(notas.filter(function (nota) {
      return nota >= 7;
    })); // [ 8, 10, 7 ]


    const novaNota = notas.filter ( (nota , index) => {
      console.log (`Indice: ${index}` );
      return nota >= 7;
    } );

    console.log (`Novo array filtrado: ${novaNota}`);

    const n = notas.reduce ( (prevVal , elemento) => {
      prevVal += elemento;
      return prevVal;
    }, 0 );

    console.log (`Exemplo de somatorio com reduce: ${n}`);

    console.log(notas.filter(nota => nota >= 7)); // [ 8, 10, 7 ]
  }

}
