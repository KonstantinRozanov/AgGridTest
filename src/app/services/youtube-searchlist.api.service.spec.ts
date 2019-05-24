import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { YoutubeSearchListService } from './youtube-searchlist.api.service';

describe('YoutubeSearchListService', () => {
    let injector: TestBed;
    let service: YoutubeSearchListService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [
            HttpClientTestingModule
          ],
          providers: [
            YoutubeSearchListService
          ]
        });
        injector = getTestBed();
        service = injector.get(YoutubeSearchListService);
        httpMock = injector.get(HttpTestingController);
      });

    it('should be created', () => {
        const newService: YoutubeSearchListService = TestBed.get(YoutubeSearchListService);
        expect(newService).toBeTruthy();
      });

    it('should return an Observable<VideoModel[]> VideoModel', () => {
        const dummyResponse = {
          items: [
            {
              kind: 'youtube#searchResult',
              etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/QtJ4MlYKdN_zTBjfY3xY6mn7ZRg"',
              id: {
                kind: 'youtube#video',
                videoId: '3fumBcKC6RE'
              },
              snippet: {
                publishedAt: '2011-05-12T20:01:31.000Z',
                channelId: 'UCEOhcOACopL42xyOBIv1ekg',
                title: 'Lil Wayne - John (Explicit) ft. Rick Ross',
                description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
                thumbnails: {
                  default: {
                    url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
                    width: 120,
                    height: 90
                  },
                  medium: {
                    url: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
                    width: 320,
                    height: 180
                  },
                  high: {
                    url: 'https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg',
                    width: 480,
                    height: 360
                  }
                },
                channelTitle: 'LilWayneVEVO',
                liveBroadcastContent: 'none'
              }
            },
            {
              kind: 'youtube#searchResult',
              etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/px0Y6gG6bRmBwXTc8I0w5FoI5iE"',
              id: {
                kind: 'youtube#video',
                videoId: 'PoPpnyhmCsw'
              },
              snippet: {
                publishedAt: '2019-04-04T05:26:43.000Z',
                channelId: 'UCR8P0ip1nPxU1LgRc0hvv6g',
                title: 'ජෝන් අමරතුoග ලීක් කරගනී - John Amarathunga Leaked Video',
                description: 'Subscribe and shear Oddi Production - https://www.facebook.com/Oddi.Productions/',
                thumbnails: {
                  default: {
                    url: 'https://i.ytimg.com/vi/PoPpnyhmCsw/default.jpg',
                    width: 120,
                    height: 90
                  },
                  medium: {
                    url: 'https://i.ytimg.com/vi/PoPpnyhmCsw/mqdefault.jpg',
                    width: 320,
                    height: 180
                  },
                  high: {
                    url: 'https://i.ytimg.com/vi/PoPpnyhmCsw/hqdefault.jpg',
                    width: 480,
                    height: 360
                  }
                },
                channelTitle: 'Oddi Production',
                liveBroadcastContent: 'none'
              }
            }
          ]
        };

        (service as any).url = 'api/test';

        service.get().subscribe(items => {
          expect(items.length).toBe(2);

          const item = items[0];
          expect(item.videoId).toEqual('3fumBcKC6RE');
          expect(item.title).toEqual('Lil Wayne - John (Explicit) ft. Rick Ross');
          expect(item.publishedAt).toEqual(new Date('2011-05-12T20:01:31.000Z'));
          expect(item.thumbnails.url).toEqual('https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg');
          expect(item.description).toEqual('Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.');
        });
        const req = httpMock.expectOne('api/test');
        expect(req.request.method).toBe('GET');
        req.flush(dummyResponse);
      });
});
