import { Component, OnInit } from '@angular/core';
import {State, Store} from "../store/store";
import {DataManagerService} from "../data-manager.service";

@Component({
  selector: 'app-input-to-do',
  templateUrl: './input-to-do.component.html',
  styleUrls: ['./input-to-do.component.scss']
})
export class InputToDoComponent implements OnInit {
  todoList: string[];
  constructor(
    private store: Store,
    private dataManager: DataManagerService
  ) {

  }

  ngOnInit() {
    this.store.state$.subscribe((state: State) => {
      this.todoList = state.toDoList;
    })
  }

  addElement(text: string) {
    if(!text) {
      return;
    }
    let element = this.todoList.find(item => item === text);
    if(!element) {
      this.todoList.push(text);
      this.dataManager.setTODOList(this.todoList);
    }
  }


}
