import { GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';
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
        case DELETE_ITEM:
            return {
                ...state, 
                items: state.items.filter(item=> item.id !== action.payload)
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default:
            return state;
    }
}