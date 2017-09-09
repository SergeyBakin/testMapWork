import  { Component, NgModule, ComponentRef, Injector, ApplicationRef, ComponentFactoryResolver, Injectable, NgZone }  from '@angular/core';

import * as L from 'leaflet';
import "reflect-metadata";
import "zone.js/dist/zone";
import "zone.js/dist/long-stack-trace-zone";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
