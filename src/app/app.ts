import { Component } from '@angular/core';
import { HeaderNavBarComponent } from './header-navbar/header-navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderNavBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'practice-project';
}
