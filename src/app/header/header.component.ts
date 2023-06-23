import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  titleNegritas: string = 'br';
  titleClean:string = 'Architects';
  proyects:string = 'Projects';
  about:string = 'About';
  contact:string = 'Contact';
}
