import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title:string = 'Frequently Asked Questions';
  descrption:string = 'Browse through the most frequently asked questions';
}
