import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridtestComponent } from './aggridtest.component';
import { AgGridModule } from 'ag-grid-angular';
import { of } from 'rxjs';
import { YoutubeSearchListService } from 'src/app/services/youtube-searchlist.api.service';

describe('AggridtestComponent', () => {

  beforeEach(async(() => {
    const testData = {
      videoId: 'testId',
      thumbnails: {
        default: {
          url: 'testUrl'
        }
      },
      publishedAt: new Date('2011-05-12T20:01:31.000Z'),
      title: 'testTitle',
      description: 'testDescription'
    };

    TestBed.configureTestingModule({
      declarations: [ AggridtestComponent ],
      imports: [AgGridModule.withComponents([])],
      providers: [
        { provide: YoutubeSearchListService, useValues: {get: () => of(testData)}}
      ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(AggridtestComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render ag-grid', () => {
    const fixture = TestBed.createComponent(AggridtestComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ag-grid-angular')).toBeTruthy();
  });
});
