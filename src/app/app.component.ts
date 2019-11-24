import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Projeto da Amabile';
  mensagem: string = "";
  quantidade: number = 0;

  clique(): void {
    let contador = (titulo: string) => {
      return `${titulo} ${this.quantidade}`;  
    }

    this.mensagem = this.contador("cliquei");
  }

  contador(titulo: string): string {
    this.quantidade = this.quantidade + 1;
    return `${titulo} ${this.quantidade}`;
  }
}
