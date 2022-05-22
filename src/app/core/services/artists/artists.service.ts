import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) { }

  getArtists(artistName: string) {
    return this.http.get(`${environment.apiBaseUrl}/search?q=artist:"${artistName}"`)
  }

  getArtist(id: number) {
    return this.http.get(`${environment.apiBaseUrl}/artist/${id}`)
  }
}
