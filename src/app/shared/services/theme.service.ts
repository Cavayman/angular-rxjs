import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ThemeService {
  private theme = new Subject<string>();
  currentTheme = this.theme.asObservable();

  setTheme(theme: string): void {
    this.theme.next(theme);
  }
}
