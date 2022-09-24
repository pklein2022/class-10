import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'generate-angular-component';
  // todolist: Todo[] =
  // [
  //   {
  //     id: 1,
  //     action: "Dishes",
  //     completed: true
  //   },
  //   {
  //     id: 2,
  //     action: "Sweep",
  //     completed: false
  //   },
  // ];

  // toggleComplete(index){
  //   this.todolist[index].completed = !this.todolist[index].completed

  // }
  // addTodo(){
  //   let newTodo: Todo = {
  //     id: this.todolist.length + 1,
  //     action: "some chore",
  //     completed: false
  //   }
  //   this.todolist.push(newTodo)
  // }
}
