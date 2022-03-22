import { Action } from '@ngrx/store';

export class ActionModel implements Action {
    type: any;
    payload: any;

    constructor(type: any, payload: any){
        type = type;
        payload = payload
    }
}