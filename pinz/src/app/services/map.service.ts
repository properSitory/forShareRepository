import { Injectable } from '@angular/core';

import { Map, MapOptions, tileLayer, LatLng, latLng, Marker, marker, icon, point, polyline } from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: any;

  // Define our base layers so we can reference them multiple times
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Layers control object with our two base layers and the three overlay layers
  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    },
    // overlays: {
    //   'Mt. Rainier Summit': this.summit,
    //   'Mt. Rainier Paradise Start': this.paradise,
    //   'Mt. Rainier Climb Route': this.route
    // }
  };

  // mapOptions: any = {
  //   layers: [{ url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attribution: 'Open Street Map' }],
  //   zoom: 5,
  //   // center: [46.879966, -121.726909]
  //   center: latLng(43.2951, - 0.370797, 0)
  // };
  mapOptions: any = {
    layers: [
      tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: 'Map data © OpenStreetMap contributors'
        })
    ],
    zoom: 12,
    // center: [46.879966, -121.726909]
    center: latLng(43.294699628704194, -0.3682994842529297, 0)
  };

  constructor() { }

  mapInit(toto: Map): Map {
      this.map = toto;
      return this.map;
  }

  getMap(): any {
    return this.map;
  }

}
