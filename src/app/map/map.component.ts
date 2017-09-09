import { Component, OnInit, ApplicationRef } from '@angular/core';
import { MapService } from '../service/map.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css', '../../../node_modules/leaflet/dist/leaflet.css']
})
export class MapComponent implements OnInit {

  constructor(
      private appRef: ApplicationRef,
      private mapService: MapService
  ) { }

  ngOnInit() {
      this.mapService.init('map', this.appRef);
      // this.marker = this.mapService.addMarker();
  }

}
