import {FetchTodosAction, DeleteTodoAction} from './todos';

//this is opinionated,
//check documentation of typescript & redux
//for alternative on how to set up ActionTypes
export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction;