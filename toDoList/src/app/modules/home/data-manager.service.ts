import { Injectable } from '@angular/core';
import {Store} from "./store/store";

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private store: Store) { }

  setTODOList(toDoList: string[]) {
    this.store.setState({
      ...this.store.state,
      toDoList,
    })
  }

  setChecked(doneToDO: string[]) {
    this.store.setState({
      ...this.store.state,
      doneToDO,
    })
  }
}
