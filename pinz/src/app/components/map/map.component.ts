import { Component, OnInit } from '@angular/core';
import { Map, MapOptions, Layer, tileLayer, LatLng, latLng, Marker, marker, icon, point, polyline } from 'leaflet';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService]
})
export class MapComponent implements OnInit {

  map: any;

  markerId = 0;

  markers: Layer[] = [];
  // Leaflet bindings
  zoom = this.mapService.mapOptions.zoom;
  center = latLng(this.mapService.mapOptions.center);

  // Form bindings
  formZoom = this.mapService.mapOptions.zoom;
  zoomLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  lat = this.mapService.mapOptions.center.lat;
  lng = this.mapService.mapOptions.center.lng;

  constructor(public mapService: MapService) { }

  ngOnInit(): void { }

  onMapReady(toto: Map): void {
    this.map = this.mapService.mapInit(toto);

  }

  // Output binding for center
  onCenterChange(center: LatLng): void {
    setTimeout(() => {
      this.lat = center.lat;
      this.lng = center.lng;
    });
  }

  onZoomChange(zoom: number): void {
    setTimeout(() => {
      this.formZoom = zoom;
    });
  }

  doApply(): void {
    this.center = latLng(this.lat, this.lng);
    this.zoom = this.formZoom;
  }

  addMarker(e = null): void {
    const newMarker = marker(
      e.latlng,

      {
        title: 'marker' + this.markerId,
        icon: icon({
          iconSize: [40, 40],
          iconAnchor: [20, 40],
          iconUrl: 'assets/map-pin.png',
        }),
        draggable: true
      }
    )
      .on('add', () => {
        newMarker.bindPopup(newMarker.options.title + ' moved to: ' + newMarker.getLatLng().lat + ', ' + newMarker.getLatLng().lng + '.' + `<button id=${this.markerId} type="button" class="btn btn-primary marker"
        >Supprimer le marqueur</button>` +
          `<button type="button" class="btn btn-primary infomarker">infomarker</button>`);
      })
      .on('dragend', () => {
        newMarker.bindPopup(newMarker.options.title + ' moved to: ' + newMarker.getLatLng().lat + ', ' + newMarker.getLatLng().lng + '.' + `<button id=${this.markerId} type="button" class="btn btn-primary marker"
        >Supprimer le marqueur</button>` +
          `<button type="button" class="btn btn-primary infomarker">infomarker</button>`);
      })
      .on('popupopen', (a) => {
        console.log('a !!!!!!!!!!!!!!!!!!!');
        console.log(a);
        const popUp = a.target.getPopup();
        popUp.getElement()
          .querySelector('.marker')
          .addEventListener('click', e => {
            this.removeMarker(e);
          });
        popUp.getElement()
          .querySelector('.infomarker')
          .addEventListener('click', e => {
            this.infomarker(e);
          });
      });
    console.log(newMarker);
    this.markers.push(newMarker);
    this.markerId++;
  }

  popmarker(): void {
    this.markerId = 0;
    this.markers = [];
  }

  removeMarker(e = null): void {
    this.map.removeLayer(this.markers[parseInt(e.target.id) - 1]);
  }

  infomarker(e): void {
    console.log('Info marker :');
    console.log(e);
  }
}
