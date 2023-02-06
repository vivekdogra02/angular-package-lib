import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vd-status-light',
  templateUrl: './status-light.component.html',
  styleUrls: ['./status-light.component.scss']
})
export class StatusLightComponent implements OnInit {

  @Input() color: string = 'safe';
  maskColor: string = '';
  constructor() { }

  ngOnInit(): void {
    this.maskColor = this.statusToColor(this.color);
  }

  statusToColor(status: string) {
    switch(status) {
      case 'danger': return 'red';
      case 'safe' : return 'green';
      case 'warning': return 'yellow';
      default: return 'green';
    }
  }

}
