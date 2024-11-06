import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeToggleComponent } from "../mode-toggle/mode-toggle.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ModeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDarkTheme: boolean = false;
  isDisplayMenu: boolean = false;

  changeColorTheme($event: boolean) {
    this.isDarkTheme = $event;
  }

  getTogglerClasses() {
    return {
      'navbar-toggler-icon': true,
      'dark-icon': this.isDarkTheme,
      'light-icon': !this.isDarkTheme
    };
  }
}
