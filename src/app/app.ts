import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports:[RouterLink,RouterOutlet],
  styleUrl: './app.css',
  
})

export class App {
  protected readonly title = signal('Angular-App');
  
  email : String = "Ayoub@gmail.com";
}
