import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-introduction',
  imports: [CommonModule,RouterModule ],
  templateUrl: './my-introduction.html',
  styleUrl: './my-introduction.scss'
})
export class MyIntroduction {

}
