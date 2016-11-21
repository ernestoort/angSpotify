/**
 * Created by ernestoo on 20/11/16.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify/spotify.service';
import {Artist} from '../../Artist';
import {Album} from '../../Album';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album;

  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          });
      });
  }
}
