import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Test Server', content: 'Just a Test Server' }];
  onServerAdded(data: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: data.serverName,
      content: data.serverContent
    });
  }

  onBlueprintAdded(data: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: data.serverName,
      content: data.serverContent
    });
  }
}
