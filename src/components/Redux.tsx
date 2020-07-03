import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { fullScreenStyle, generateRandomColor } from '../App';

type Theme = {
    backgroundColor?: string
}

type StoreState = {
    theme: Theme
}

enum ActionType {
    SetBackgroundColor
}

type Action = {
    type: ActionType
    payload: string
}

const themeReducer = (state?: Theme, action?: Action): Theme => {
    switch (action?.type) {
        case ActionType.SetBackgroundColor: return { ...state, backgroundColor: action.payload }
        default: return { ...state }
    }
}

const reducers = combineReducers<StoreState>({
    theme: themeReducer
});

const store = createStore<StoreState, Action, {}, {}>(
    reducers,
    { theme: { backgroundColor: 'green' } },
);

const Redux: React.FC = () => {
    return (
        <Provider store={store}>
            <SubComponent />
        </Provider>
    );
};

const SubComponent = () => {
    const theme = useSelector<StoreState, Theme>((store: StoreState) => store.theme)
    const dispatch = useDispatch()

    return (
        <div style={{ ...fullScreenStyle, ...theme }}>
            <button
                style={{ margin: '50px' }}
                onClick={() => dispatch({ type: ActionType.SetBackgroundColor, payload: generateRandomColor() })} >
                change background color
            </button>
        </div>
    )
}

export default Redux;