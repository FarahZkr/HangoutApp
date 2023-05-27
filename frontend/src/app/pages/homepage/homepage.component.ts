import { Component } from '@angular/core';
import * as tt from '@tomtom-international/web-sdk-maps';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  map : any;
  
  ngOnInit(){
    this.map = tt.map({
      key: 'V4AVpnH6brUALxWCYGorHx4sQXWdIG7c',
      container: 'map',
      zoom:1.2
    });
  }

}
