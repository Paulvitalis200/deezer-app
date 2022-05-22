import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistsService } from 'src/app/core/services/artists/artists.service';
import { ArtistComponent } from './artist/artist.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  artist: string = ''
  artistList: any = []
  isMobile: boolean = false;
  isTablet: boolean = false;
  loading: boolean = false;
  artistsFound: boolean = false;
  totalResults!: number;
  filterLength: number = 0;
  constructor(private artistsService: ArtistsService,
    breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isMobile = result.matches;
    });
    breakpointObserver.observe([Breakpoints.Tablet]).subscribe((result) => {
      this.isTablet = result.matches;
    });
  }

  ngOnInit(): void {
  }

  getArtists() {
    this.loading = true
    this.artistsFound = false
    this.artistsService.getArtists(this.artist).subscribe((res: any) => {
      this.loading = false
      let unfiltered = res.data
      let check: any = {};
      let newArtist: any = [];
      unfiltered.map((album: any) => {
        if (!check[album['artist']['name']]) {
          check[album['artist']['name']] = true;
          newArtist.push(album);
        }
      })
      this.artistList = newArtist;
      this.totalResults = res.total
      this.artistsFound = true
    },
      (_err) => {

      })
  }

  applyFilter(event: Event): void {
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.filterLength = filter.length
    this.artist = filter
    this.getArtists()
  }

  goToArtist(id: number) {
    this.router.navigateByUrl(`/artist/${id}`)
  }

}
