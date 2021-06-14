import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // Membuat Template HTML Inline
  // template : `
  // <h1>Aplikasi {{title}}</h1>
  // <h1 style="color : red">Hello Selamat Datang Angular</h1>
  // <h2>Hello {{name}}</h2>
  // `,

  // Memasang contact component di appcomponent
  // di selector/tag contact
  template : '<contact></contact>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'latihan';
  // Membuat Variable name
  name = 'Rizki Wahyudi';
}
