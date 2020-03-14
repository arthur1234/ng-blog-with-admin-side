import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


export  type AlertType = 'success' | 'warning' | 'danger';
export interface Alert {
    type: string;
    text: string;
}
@Injectable()
export class AlertService {
    public alerts$ = new Subject<Alert>();

    success(text: string) {
        this.alerts$.next({type: 'success', text});
    }

    warning(text: string) {
        this.alerts$.next({type: 'warning', text});
    }
    danger(text: string) {
        this.alerts$.next({type: 'danger', text});
    }
}
