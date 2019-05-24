import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { AggridtestComponent } from './components/aggridtest/aggridtest.component';
import { YoutubeSearchListService } from './services/youtube-searchlist.api.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomCellComponent } from './components/customCell/custom-cell.component';
import { CustomHeaderComponent } from './components/customHeader/custom-header.component';
import { ToggleButtonComponent } from './components/toggleBotton/toggle-botton.component';
import { SelectionModeService } from './services/selection-mode.service';

@NgModule({
  declarations: [
    AppComponent,
    AggridtestComponent,
    CustomCellComponent,
    CustomHeaderComponent,
    ToggleButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    YoutubeSearchListService,
    SelectionModeService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CustomCellComponent,
    CustomHeaderComponent,
    ToggleButtonComponent
  ]
})
export class AppModule { }
