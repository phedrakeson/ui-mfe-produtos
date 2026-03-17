import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Produto {
  nome: string;
  valor: number;
  imagem: string;
}
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  produtos: Produto[] = [
    { nome: 'Notebook', valor: 3500, imagem: 'https://picsum.photos/300/200?random=1' },
    { nome: 'Mouse', valor: 50, imagem: 'https://picsum.photos/300/200?random=2' },
    { nome: 'Teclado', valor: 150, imagem: 'https://picsum.photos/300/200?random=3' },
    { nome: 'Monitor', valor: 800, imagem: 'https://picsum.photos/300/200?random=4' },
    { nome: 'Webcam', valor: 200, imagem: 'https://picsum.photos/300/200?random=5' },
  ];
}
