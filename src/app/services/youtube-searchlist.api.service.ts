import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoModel } from '../domain/test/video-model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class YoutubeSearchListService {
    // tslint:disable-next-line:max-line-length
    private readonly url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john';

    constructor(private readonly http: HttpClient) { }

    public get(): Observable<VideoModel[]> {
        return this.http.get<any>(this.url)
            .pipe(map(result => result.items
                .map((item: any) => ({
                    thumbnails: item.snippet.thumbnails.default,
                    publishedAt: new Date(item.snippet.publishedAt),
                    description: item.snippet.description,
                    videoId: item.id.videoId,
                    title: item.snippet.title
                }))));
    }
}
