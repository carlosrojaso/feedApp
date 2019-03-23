import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feed } from './model/feed';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private rssToJsonServiceBaseUrl: String = 'https://rss2json.com/api.json?rss_url=';

  constructor(
    private http: HttpClient
  ) { }

  getFeedContent(): Observable<any> {
    const fixedRSS = 'https://rss2json.com/api.json?rss_url=https://feeds.feedburner.com/Ion-book';
    return this.http.get(fixedRSS, { responseType: 'json' });
  }
}
