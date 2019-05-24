import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, GridApi } from 'ag-grid-community';

@Component({
    selector: 'app-header-cell',
    templateUrl: './custom-header.component.html'
})
export class CustomHeaderComponent implements ICellRendererAngularComp {
    public gridApi: GridApi;
    public checked = false;
    public indeterminate = false;

    public checkBoxClass(): string {
        if (this.checked) {
            return 'ag-icon-checkbox-checked';
        }
        if (this.indeterminate) {
            return 'ag-icon-checkbox-indeterminate';
        }
        return 'ag-icon-checkbox-unchecked';
    }

    agInit(params: ICellRendererParams): void {
        this.gridApi = params.api;
        this.gridApi.addEventListener('rowSelected',
            () => {
                const selectedRows = this.gridApi.getSelectedRows().length;

                if (selectedRows === 0) {
                    this.checked = false;
                    this.indeterminate = false;
                } else if (selectedRows === this.gridApi.paginationGetRowCount()) {
                    this.checked = true;
                    this.indeterminate = false;
                } else {
                    this.indeterminate = true;
                    this.checked = false;
                }
            });
    }

    public onClick(): void {
        const selectedRows = this.gridApi.getSelectedRows().length;

        if (selectedRows === this.gridApi.paginationGetRowCount()) {
            this.gridApi.deselectAll();
        } else {
            this.gridApi.selectAll();
        }
    }

    refresh(): boolean {
        return false;
    }
}
