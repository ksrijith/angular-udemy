import { Component, OnInit, OnChanges, Input, ViewEncapsulation } from '@angular/core';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement')
  element: { type: string, name: string, content: string };
  constructor() { 
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

}
