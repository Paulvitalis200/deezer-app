import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/core/services/artists/artists.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  artist: string = ''
  constructor(private artistsService: ArtistsService) { }

  ngOnInit(): void {
    this.getArtists()
  }

  getArtists() {
    this.artistsService.getArtists(this.artist).subscribe((res: any) => {
      console.log("RES: ", res)
    },
      (err) => {
        console.log("Error: ", err)
      })
  }

  applyFilter(event: Event): void {
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.artist = filter
    this.getArtists()
    console.log("FILTER: ", filter)
  }

}
