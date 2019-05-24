import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SelectionModeService {
    private selectionModeSubject: Subject<boolean> = new Subject<boolean>();

    public get selectionMode$(): Observable<boolean> {
        return this.selectionModeSubject.asObservable();
    }

    public selectionMode(value: boolean): void {
        this.selectionModeSubject.next(value);
    }
}
