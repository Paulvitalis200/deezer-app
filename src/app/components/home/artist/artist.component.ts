import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistsService } from 'src/app/core/services/artists/artists.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  isMobile: boolean = false;
  isTablet: boolean = false;
  artist: any;
  topTracks: any = []
  loading: boolean = true;
  tracksLoading: boolean = true;
  albumsLoading: boolean = true;
  albumsList: any = []

  constructor(private artistsService: ArtistsService,
    private route: ActivatedRoute,
    breakpointObserver: BreakpointObserver,
    private router: Router,
    private _location: Location
  ) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isMobile = result.matches;
    });
    breakpointObserver.observe([Breakpoints.Tablet]).subscribe((result) => {
      this.isTablet = result.matches;
    });
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const artistIdFromRoute = String(routeParams.get('id'));
    this.getArtist(artistIdFromRoute)
    this.getTopTracks(artistIdFromRoute)
    this.getAlbums(artistIdFromRoute)
  }

  getArtist(id: string) {
    this.artistsService.getArtist(id).subscribe((res: any) => {
      this.artist = res
      this.loading = false;
    })
  }

  getTopTracks(id: string) {
    this.artistsService.getArtistTopTracks(id).subscribe((res: any) => {
      this.topTracks = res.data
      this.tracksLoading = false
    })
  }

  getAlbums(id: string) {
    this.artistsService.getArtistAlbums(id).subscribe((res: any) => {
      let albums = res.data

      let check: any = {};
      let newAlbum: any = [];
      albums.map((album: any) => {
        if (!check[album['title']]) {
          check[album['title']] = true;
          newAlbum.push(album);
        }
      })
      this.albumsList = newAlbum
      this.albumsLoading = false
    })
  }

  goBack() {
    this._location.back();
  }
}
