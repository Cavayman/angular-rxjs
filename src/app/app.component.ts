import {Component, OnInit} from '@angular/core';
import {ThemeService} from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  themeString = '';

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe(theme => {
      console.log('APP module theme:', theme);
      this.themeString = theme;
    });
  }
}
