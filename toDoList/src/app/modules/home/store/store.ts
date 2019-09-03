import {Observable, BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

export interface State {
  toDoList: string[],
  doneToDO: string[],
}

const initialState: State = {
  toDoList: [],
  doneToDO: [],
};

@Injectable()
export class Store {
  state$: Observable<State>;
  // tslint:disable-next-line:variable-name
  private _state$: BehaviorSubject<State>;

  constructor() {
    this._state$ = new BehaviorSubject(initialState);
    this.state$ = this._state$.asObservable();
  }

  get state(): State {
    return this._state$.getValue();
  }

  setState(nextState: State): void {
    this._state$.next(nextState);
  }
}
