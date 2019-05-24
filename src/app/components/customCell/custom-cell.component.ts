import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, GridApi } from 'ag-grid-community';

@Component({
    selector: 'app-parent-cell',
    templateUrl: './custom-cell.component.html'
})
export class CustomCellComponent implements ICellRendererAngularComp {
    private params: ICellRendererParams;
    private gridApi: GridApi;

    public checked = false;

    public checkBoxClass(): string {
        if (this.checked) {
            return 'ag-icon-checkbox-checked';
        }
        return 'ag-icon-checkbox-unchecked';
    }

    public agInit(params: ICellRendererParams): void {
        this.params = params;

        this.checked = params.value;
        this.gridApi = params.api;
        this.gridApi.addEventListener('rowSelected',
            event => {
                if (this.params.data.videoId === event.node.data.videoId) {
                    this.checked = event.node.isSelected();
                }
            });
    }

    public onChange(event): void {
        this.gridApi.forEachNode(node => {
            if (node.data.videoId === this.params.data.videoId) {
                node.setSelected(event.currentTarget.checked);
            }
        });
    }

    refresh(): boolean {
        return false;
    }
}
