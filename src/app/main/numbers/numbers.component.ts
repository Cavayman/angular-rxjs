import {Component, OnInit} from '@angular/core';
import {NumberStoreService} from '../../shared/services/number-store.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  constructor(private numberService: NumberStoreService) {
  }

  ngOnInit() {
  }

}
