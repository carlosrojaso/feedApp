import { Component } from '@angular/core';
import { FeedService } from '../feed.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private results: any;
  constructor(
    private feedService: FeedService
  ) {
    this.feedService.getFeedContent().subscribe(
      (response) => {
        this.results = response.items;
        console.log('data>>>', response.items);
      }
    );
  }
}
