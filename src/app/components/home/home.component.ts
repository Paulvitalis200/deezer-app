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
  constructor(private artistsService: ArtistsService, breakpointObserver: BreakpointObserver, private router: Router) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isMobile = result.matches;
    });
    breakpointObserver.observe([Breakpoints.Tablet]).subscribe((result) => {
      this.isTablet = result.matches;
    });
  }

  ngOnInit(): void {
    // this.getArtists()
    // console.log("ARTIOST: ", this.artistList)
    console.log("TOTAL: ", this.totalResults)
  }

  getArtists() {
    this.loading = true
    this.artistsFound = false
    this.artistsService.getArtists(this.artist).subscribe((res: any) => {
      console.log("RES: ", res)
      this.loading = false
      let unfilteredData = res.data
      let uniqueChars = unfilteredData.filter((artist: any, index: any) => {
        return unfilteredData.indexOf(artist.artist.name.toLowerCase()) === index;
      });
      console.log("UNIQUE: ", uniqueChars)
      this.artistList = res.data
      // this.artistList = unfilteredData.filter((artist: any) => artist.artist.name.toLowerCase() === this.artist)
      // unfilteredData.findIndex((artist))
      this.totalResults = res.total
      // if (res.total === 0) {
      //   this.totalResults
      // }
      console.log("TOTAL: ", this.totalResults)
      this.artistsFound = true
    },
      (err) => {
        console.log("Error: ", err)
      })
  }

  applyFilter(event: Event): void {
    const filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    this.filterLength = filter.length
    this.artist = filter
    this.getArtists()

    console.log("FILTER: ", filter)
    console.log("FILTER LENGTH: ", filter.length)
  }

  goToArtist(id: number) {
    this.router.navigateByUrl(`/artist/${id}`)
  }

}
