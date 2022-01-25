import { TodoActionTypes } from '../shared/enum/todo-action-types.enum';
import { ActionParent } from '../actions/todo.actions';
import { Todo } from '../models/Todo';

const initialState: Todo[] =[
    {title: "Todo1"},
    {title: "Todo2"},
    {title: "Todo3"},
    {title: "Todo4"}
];

export function TodoReducer (state = initialState, action:ActionParent){
    switch(action.type) {
        default: return state;

    }


}