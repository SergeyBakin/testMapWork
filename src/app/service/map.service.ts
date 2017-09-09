import { Injectable, ApplicationRef } from '@angular/core';
import { CustomCompileService } from './custom-compile.service';

import * as L from 'leaflet';
import "reflect-metadata";
import "zone.js/dist/zone";
import "zone.js/dist/long-stack-trace-zone";

@Injectable()
export class MapService {
  map: any;
  baseMaps: any;
  markersLayer: any;
  appRef: ApplicationRef;

  constructor(private compileService: CustomCompileService) {
      compileService.configure(this.appRef);
  }

  init(selector, appRef: ApplicationRef) {
      this.appRef = appRef;
      this.baseMaps = {
          CartoDB: L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          })
      };
      // L.Icon.Default.imagePath = '.';
      // L.Icon.Default.mergeOptions({
      //     iconUrl: require('leaflet/dist/images/marker-icon.png'),
      //     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
      // });
      this.map = L.map(selector);
      this.baseMaps.CartoDB.addTo(this.map);
      this.map.setView([51.505, -0.09], 13);

      // this.markersLayer = new L.FeatureGroup(null);
      // this.markersLayer.clearLayers();
      // this.markersLayer.addTo(this.map);

      this.compileService.configure(this.appRef);
  }

  // addMarker() {
  //     var m = L.marker([51.510, -0.09]);
  //     m.bindTooltip('Angular 4 marker (PopupComponent)');
  //     m.bindPopup(null);
  //     m.on('click', (e) => {
  //         m.setPopupContent(
  //             this.compileService.compile(PopupComponent, (c) => { c.instance.param = 0; setInterval(() => c.instance.param++, 1000); })
  //         );
  //     });
  //     this.markersLayer.addLayer(m);
  //     return m;
  // }

}
