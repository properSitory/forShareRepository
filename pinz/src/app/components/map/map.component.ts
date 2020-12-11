import { Component, OnInit } from '@angular/core';

import { Map, MapOptions, Layer, tileLayer, LatLng, latLng, Marker, marker, icon, point, polyline } from 'leaflet';

import * as L from 'leaflet';

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

  // // Marker for the top of Mt. Ranier
  // summit = marker([ 46.8523, -121.7603 ], {
  //   icon: icon({
  //     iconSize: [ 25, 41 ],
  //     iconAnchor: [ 13, 41 ],
  //     iconUrl: 'leaflet/marker-icon.png',
  //     shadowUrl: 'leaflet/marker-shadow.png'
  //   })
  // });

  // // Path from paradise to summit - most points omitted from this example for brevity
  // route = polyline([[ 46.78465227596462,-121.74141269177198 ],
  //   [ 46.80047278292477, -121.73470708541572 ],
  //   [ 46.815471360459924, -121.72521826811135 ],
  //   [ 46.8360239546746, -121.7323131300509 ],
  //   [ 46.844306448474526, -121.73327445052564 ],
  //   [ 46.84979408048093, -121.74325201660395 ],
  //   [ 46.853193528950214, -121.74823296256363 ],
  //   [ 46.85322881676257, -121.74843915738165 ],
  //   [ 46.85119913890958, -121.7519719619304 ],
  //   [ 46.85103829018772, -121.7542376741767 ],
  //   [ 46.85101557523012, -121.75431755371392 ],
  //   [ 46.85140013694763, -121.75727385096252 ],
  //   [ 46.8525277543813, -121.75995212048292 ],
  //   [ 46.85290292836726, -121.76049157977104 ],
  //   [ 46.8528160918504, -121.76042997278273 ]]);

  // Leaflet bindings
  zoom = this.mapService.mapOptions.zoom;
  center = latLng(this.mapService.mapOptions.center);
  // options = {
  //   layers: [tileLayer(this.mapService.layersControl.baseLayers[0].url, { attribution: this.mapService.layersControl.baseLayers[0].attribution })],
  //   zoom: this.mapService.mapOptions.zoom,
  //   center: latLng(this.mapService.mapOptions.center)
  // };

  // Form bindings
  formZoom = this.mapService.mapOptions.zoom;
  zoomLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  lat = this.mapService.mapOptions.center.lat;
  lng = this.mapService.mapOptions.center.lng;

  constructor(public mapService: MapService) { }

  ngOnInit(): void { }

  onMapReady(toto: Map): void {
    this.map = this.mapService.mapInit(toto);
    // this.addSampleMarker();
    //  A GEDUGGUER
    // this.map.on('click', (e) => {
    //   // let myMarker = new Marker([40.0000,40.88]);
    //   // console.log(' log de : e');
    //   // console.log(e);
    //   // console.log(' log de : map');
    //   // console.log(this.map);
    //   this.markerId++;
    //   alert('You clicked the map at LAT: ' + e.latlng.lat + ' and LONG: ' + e.latlng.lng);
    //   const myMarker = L.marker(e.latlng, { title: 'MyPoint' + this.markerId, alt: 'The Big I', draggable: true })
    //     .addTo(this.map)
    //     .on('dragend', () => {
    //       myMarker.bindPopup(myMarker._icon.title + ' moved to: ' + myMarker.getLatLng().lat + ', ' + myMarker.getLatLng().lng + '.');
    //       console.log(' log de : myMarker');
    //       console.log(myMarker);
    //     });

    // });
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
    // console.log("Groumph !!!!!!!!!!!!!!!!!!!!!");
    // console.log(this.markers);
    // console.log("données Event :" , e);
    const newMarker = marker(
      e.latlng,
      // [this.lat, this.lng],
      {
        title: 'marker' + this.markerId,
        icon: icon({
          iconSize: [40, 40],
          iconAnchor: [20, 40],
          iconUrl: 'assets/map-pin.png',
          // iconRetinaUrl: '680f69f3c2e6b90c1812a813edf67fd7.png',
          // shadowUrl: ''
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
    // this.markers.pop();
    this.markerId = 0;
    this.markers = [];
  }

  removeMarker(e = null): void {
    // console.log('e !!!!!!!!!!!!!!!!!!!');
    // console.log(e.target.id);
    this.map.removeLayer(this.markers[parseInt(e.target.id) - 1]);
  }

  infomarker(e): void {
    console.log('Info marker :');
    console.log(e);
  }
}
