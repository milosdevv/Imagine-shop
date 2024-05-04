import { Component, OnInit } from '@angular/core';
import { MapService } from '../../../services/map.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnInit {
  mapImageUrl: string;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.getMap();
  }

  getMap(): void {
    this.mapService.getMap().subscribe(
      (response: any) => {
        console.log(response);
        // Assuming the response contains a 'imageUrl' property with the URL of the static map
        // this.mapImageUrl = response.imageUrl;
      },
      (error) => {
        console.error('Error fetching map:', error);
      }
    );
  }
}
