import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Servers have been created.';
  serverName = ' ';

  constructor() {
    setTimeout(() => { this.allowNewServer = true; }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }

  ngOnInit() {
  }

}
