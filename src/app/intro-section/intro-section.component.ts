import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.scss']
})
export class IntroSectionComponent {
  isNavbarOpen = false;
  closeMenu = '../../assets//images/icon-close-menu.svg' ;
  menuOpen= '../../assets//images/icon-menu.svg' ;

  handleAction() {
    this.isNavbarOpen = !this.isNavbarOpen;

  }

  openFeature :boolean = false ;
  openComapny : boolean = false

}
