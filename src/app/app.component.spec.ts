import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AggridtestComponent } from './components/aggridtest/aggridtest.component';
import { AgGridModule } from 'ag-grid-angular';
import { of } from 'rxjs';
import { YoutubeSearchListService } from './services/youtube-searchlist.api.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AggridtestComponent
      ],
      imports: [
        AgGridModule.withComponents([]),
      ],
      providers: [
        {provide: YoutubeSearchListService, useValue: {get: () => of([])}},
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
