import { Component } from '@angular/core';
import { ModeToggleComponent } from "../mode-toggle/mode-toggle.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ModeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDarkTheme: any;

  changeColorTheme($event: boolean) {
    this.isDarkTheme = $event;
  }
}
