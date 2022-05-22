import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from 'src/app/core/services/artists/artists.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  constructor(private route: ActivatedRoute, private artistsService: ArtistsService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const artistIdFromRoute = String(routeParams.get('id'));
    console.log("ARTIST: ", artistIdFromRoute)
    this.getArtist(parseInt(artistIdFromRoute))
  }

  getArtist(id: number) {
    this.artistsService.getArtist(id).subscribe((res: any) => {
      console.log("RES: ", res)
    })
  }
}
