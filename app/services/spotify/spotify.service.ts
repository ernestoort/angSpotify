/**
 * Created by ernestoo on 18/11/16.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;

  constructor(private http: Http) {

  }

  searchMusic(str: string, type = 'artist') {
    console.log('Call to searchMusic with str: ' + str);
    this.searchUrl = 'https://api.spotify.com/v1/search?' +
      'query=' + str +
      '&offset=0' +
      '&limit=20' +
      '&type=' + type + '&market=US';
    return this.http.get(this.searchUrl)
      .map((res: Response) => res.json());
  }


  getArtist(id: string) {
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this.http.get(this.artistUrl)
      .map((res: Response) => res.json());
  }

  getAlbums(id: string) {
    this.albumsUrl = 'https://api.spotify.com/v1/artists/' + id + '/albums';
    return this.http.get(this.albumsUrl)
      .map((res: Response) => res.json());
  }


  getAlbum(id: string) {
    this.albumUrl = 'https://api.spotify.com/v1/albums/' + id ;
    return this.http.get(this.albumUrl)
      .map((res: Response) => res.json());
  }
}
