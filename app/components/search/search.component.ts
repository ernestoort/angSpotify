/**
 * Created by ernestoo on 18/11/16.
 */

import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify/spotify.service';
import {Artist} from '../../Artist';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchResult: Artist[];
  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit() {
  }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
      this.searchResult = res.artists.items;
    });
  }


}
