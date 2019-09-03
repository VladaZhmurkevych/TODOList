import { Component, OnInit } from '@angular/core';
import {State, Store} from "../store/store";

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  todoList: string[];
  page: number = 0;
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.state$.subscribe((state: State) => {
      this.todoList = state.toDoList;
      this.page = Math.floor(this.todoList.length / 5);

    })

  }

  nextPage() {
    if(this.todoList.length > (this.page + 5)){
      this.page++;
    }

  }

  prevPage(){
    if(this.page !== 0) {
      this.page--;
    }

  }
}
