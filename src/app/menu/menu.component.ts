import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../shared/services/theme.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  theme: Observable<string>;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
  }

  changeTheme(checked: string) {
    this.themeService.setTheme(checked);
  }
}
