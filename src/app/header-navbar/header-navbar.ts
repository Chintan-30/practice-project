import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-navbar',
  standalone: true,
  templateUrl: './header-navbar.html',
  styleUrl: './header-navbar.scss',
  imports: [RouterModule]
})
export class HeaderNavBarComponent {}
