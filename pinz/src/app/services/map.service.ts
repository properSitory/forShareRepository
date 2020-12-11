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
  };

  mapOptions: any = {
    layers: [
      tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: 'Map data © OpenStreetMap contributors'
        })
    ],
    zoom: 12,
    center: latLng(44.844246441624016, -0.5748510360717775, 0)
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
