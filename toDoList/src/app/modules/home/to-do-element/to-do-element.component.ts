import {Component, Input, OnInit} from '@angular/core';
import {State, Store} from "../store/store";
import {DataManagerService} from "../data-manager.service";

@Component({
  selector: 'app-to-do-element',
  templateUrl: './to-do-element.component.html',
  styleUrls: ['./to-do-element.component.scss']
})
export class ToDoElementComponent implements OnInit {
 @Input() element: string;
 todoList: string[];
  constructor(
    private store: Store,
    private dataManager: DataManagerService,
  ) { }

  ngOnInit() {
    this.store.state$.subscribe((state: State) => {
      this.todoList = state.toDoList;
    })
  }


  deleteElement(text: string) {
    const deletedElementIndex = this.todoList.findIndex(item => item === text);
    this.todoList.splice(deletedElementIndex, 1);
    this.dataManager.setTODOList(this.todoList);
  }

}
