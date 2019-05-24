import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { SelectionModeService } from 'src/app/services/selection-mode.service';

@Component({
    selector: 'app-bottom',
    template: `
        <div class="ag-name-value">
            <span class="component"><input type="button" (click)="onClick()" value="Toggle"/></span>
        </div>
    `
})
export class ToggleButtonComponent {
    private selectionModeActive: boolean;

    public gridOptions: GridOptions = {};

    constructor(private service: SelectionModeService) { }

    public agInit() {}

    public onClick(): void {
        this.selectionModeActive = !this.selectionModeActive;
        this.service.selectionMode(this.selectionModeActive);
    }
}
