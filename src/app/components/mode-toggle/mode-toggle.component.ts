import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mode-toggle',
  standalone: true,
  imports: [],
  templateUrl: './mode-toggle.component.html',
  styleUrl: './mode-toggle.component.scss'
})
export class ModeToggleComponent {
  @Output() changeThemeColorEvent = new EventEmitter<boolean>();
  isThemeDark = false;

  changeThemeColor() {
    const body = document.getElementsByTagName('body')[0];

    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      this.isThemeDark = false;
    } else {
      body.classList.add('dark-theme');
      this.isThemeDark = true;
    }
    return this.changeThemeColorEvent.emit(this.isThemeDark);
  }
}
