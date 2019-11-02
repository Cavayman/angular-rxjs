import {Component, OnInit} from '@angular/core';
import {MetaInformationService} from '../../shared/services/meta-information.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  startPolling = false;

  constructor(private metaInfService: MetaInformationService) {
  }

  ngOnInit() {
    this.metaInfService.getOnlineStatus().subscribe(res => this.startPolling = res);
  }

}
