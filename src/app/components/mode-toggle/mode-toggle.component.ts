import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mode-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mode-toggle.component.html',
  styleUrl: './mode-toggle.component.scss'
})
export class ModeToggleComponent {
  @Output() changeThemeColorEvent = new EventEmitter<boolean>();
  isThemeDark = false;

  changeThemeColor() {
    const body = document.getElementsByTagName('body')[0];
    this.isThemeDark = !this.isThemeDark;
    this.changeThemeColorEvent.emit(this.isThemeDark);

    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
    } else {
      body.classList.add('dark-theme');
    }
  }
}
