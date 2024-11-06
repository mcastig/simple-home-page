import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeToggleComponent } from '../mode-toggle/mode-toggle.component';

/**
 * Header component for the application.
 *
 * This component handles the overall layout of the header, including the navigation bar,
 * theme toggle, and offcanvas menu.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ModeToggleComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /**
   * Indicates whether the dark theme is currently active.
   */
  isDarkTheme: boolean = false;

  /**
   * Indicates whether the offcanvas menu is currently displayed.
   */
  isDisplayMenu: boolean = false;

  /**
   * Handles the theme change event emitted by the `ModeToggleComponent`.
   * Updates the `isDarkTheme` property accordingly.
   *
   * @param $event The new theme state (true for dark, false for light).
   */
  changeColorTheme($event: boolean) {
    this.isDarkTheme = $event;
  }

  /**
   * Returns a class object to be used for the navbar toggler icon.
   * The classes are dynamically determined based on the `isDarkTheme` property.
   *
   * @returns An object containing the classes to be applied.
   */
  getTogglerClasses() {
    return {
      'navbar-toggler-icon': true, // Always apply the base class
      'dark-icon': this.isDarkTheme, // Apply the dark icon class if the theme is dark
      'light-icon': !this.isDarkTheme // Apply the light icon class if the theme is light
    };
  }
}
