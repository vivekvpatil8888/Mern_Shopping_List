import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';
import {v4 as uuid} from 'uuid';

const initialState ={
    items: [
        {id: uuid(), name: 'Eggs'},
        {id: uuid(), name: 'Mils'},
        {id: uuid(), name: 'Cake'},
        {id: uuid(), name: 'Something else'}
    ]
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}