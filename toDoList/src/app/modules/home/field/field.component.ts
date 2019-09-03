import { Component, OnInit } from '@angular/core';
import {State, Store} from "../store/store";

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  todoList: string[];
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.state$.subscribe((state: State) => {
      this.todoList = state.toDoList;
    })
  }

}
