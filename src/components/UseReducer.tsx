import * as React from 'react';
import { generateRandomColor, fullScreenStyle } from '../App';

interface Props { }

type Theme = {
    backgroundColor: string
}

enum ActionType { 
    SetBackgroundColor 
}

type Action = {
    type: ActionType
    payload: string
}

const initialState = { backgroundColor: 'green' }

const reducer: React.Reducer<Theme, Action> = (prevState: Theme, action: Action) => {
    switch(action.type){
        case ActionType.SetBackgroundColor : return {...prevState, backgroundColor: action.payload }
        default : return prevState
    }
}

const UseReducer: React.FC<Props> = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <div style={{ ...fullScreenStyle, ...state }}>
            <button
                style={{ margin: '50px' }}
                onClick={() => dispatch({ type: ActionType.SetBackgroundColor, payload: generateRandomColor() })} >
                change background color
            </button>
        </div>
    );

};

export default UseReducer;