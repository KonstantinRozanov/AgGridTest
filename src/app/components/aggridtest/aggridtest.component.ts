import { Component } from '@angular/core';
import { YoutubeSearchListService } from 'src/app/services/youtube-searchlist.api.service';
import { VideoModel } from 'src/app/domain/test/video-model';
import { GridReadyEvent, ColDef, GetContextMenuItemsParams, MenuItemDef, StatusPanelDef, GridOptions } from 'ag-grid-community';
import { ThumbnailModel } from 'src/app/domain/test/thumbnail-model';
import 'ag-grid-enterprise';
import { CustomCellComponent } from '../customCell/custom-cell.component';
import { CustomHeaderComponent } from '../customHeader/custom-header.component';
import { ToggleButtonComponent } from '../toggleBotton/toggle-botton.component';
import { SelectionModeService } from 'src/app/services/selection-mode.service';

@Component({
  selector: 'app-aggridtest',
  templateUrl: './aggridtest.component.html',
  styleUrls: ['./aggridtest.component.css']
})
export class AggridtestComponent {
  public readonly gridOptions: GridOptions = {};

  public readonly frameworkComponents = {
    clickableStatusBarComponent: ToggleButtonComponent
  };

  public readonly statusBar: { statusPanels: StatusPanelDef[] } = {
    statusPanels: [
      { statusPanel: 'agTotalRowCountComponent', align: 'left' },
      { statusPanel: 'agSelectedRowCountComponent', align: 'left' },
      { statusPanel: 'clickableStatusBarComponent', align: 'left' }
    ]
  };

  public readonly columnDefs: ColDef[] = [{
    headerName: '',
    field: 'select',
    cellRendererFramework: CustomCellComponent,
    headerComponentFramework: CustomHeaderComponent,
    hide: true
  }, {
    headerName: '',
    field: 'thumbnails',
    autoHeight: true,
    cellRenderer: (params: { value: ThumbnailModel }) =>
      `<img src="${params.value.url}" width="${params.value.width}" height="${params.value.heigth}"/>`,
  }, {
    headerName: 'Pablished on',
    field: 'publishedAt',
    cellRenderer: params => new Date(params.value).toLocaleString()
  }, {
    headerName: 'Description',
    field: 'description'
  }, {
    headerName: 'Video title',
    field: 'videoId',
    cellRenderer: (params: any) => `<a href="https://www.youtube.com/watch?v=${params.data.videoId}">${params.data.title}</a>`
  }];

  constructor(private service: YoutubeSearchListService, private selectionService: SelectionModeService) { }

  public contextMenuItems(params: GetContextMenuItemsParams): (MenuItemDef | string)[] {
    const result: (MenuItemDef | string)[] = [
      'copy',
      'copyWithHeaders',
      'paste'
    ];

    if (params.column.getColId() === 'title') {
      result.push(
        {
          name: 'Open in new tab',
          action: () => window.open(`https://www.youtube.com/watch?v=${params.node.data.videoId}`, '_blank'),
          icon: 'ag-icon-plus'
        });
    }
    return result;
  }

  public onGridReady(params: GridReadyEvent): void {
    this.service.get().subscribe(result => params.api.setRowData(result));
    this.selectionService.selectionMode$.subscribe((mode: boolean) => {
      this.gridOptions.columnApi.setColumnVisible('select', mode);
      this.gridOptions.rowMultiSelectWithClick = mode;
      this.gridOptions.rowSelection = mode ? 'multiple' : 'single';
    });
  }
}
