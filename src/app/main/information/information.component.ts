import {Component, OnInit} from '@angular/core';
import {MetaInformationService} from '../../shared/services/meta-information.service';
import {UserStore} from '../../shared/services/user-store.service';
import {combineLatest, forkJoin, merge} from 'rxjs';
import {NumberStoreService} from '../../shared/services/number-store.service';

interface MetaInf {
  online: boolean;
  loggedIn: boolean;
}

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  metaInf: MetaInf = {online: false, loggedIn: false};

  constructor(private metaInfService: MetaInformationService,
              private userStoreService: UserStore,
              private numberService: NumberStoreService) {
  }

  ngOnInit() {
    combineLatest(this.userStoreService.isUserLoggedIn(),
      this.metaInfService.getOnlineStatus()).subscribe(res => {
      this.metaInf.loggedIn = res[0];
      this.metaInf.online = res[1];
      if (this.metaInf.online && this.metaInf.loggedIn) {
        console.log('User is online and logged in');
      }
    });
  }

  onChange(value) {

  }
}
