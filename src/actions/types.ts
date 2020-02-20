import {FetchTodosAction, DeleteTodoAction} from './todos';

//this is opinionated,
//check documentation of typescript & redux
//for alternative on how to set up ActionTypes
//or watch this video for alternative way of setting up
//https://www.youtube.com/watch?v=dZZxegovK9Q  @5:50 mark
export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction;