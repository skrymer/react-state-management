import * as React from 'react';
import {fullScreenStyle, generateRandomColor} from '../App'


const UseState: React.FC = () => {
    const [backgroundColor, setBackgroundColor] = React.useState(generateRandomColor())

    return (
        <div style={{ ...fullScreenStyle, backgroundColor }}>
            <button style={{ margin: '50px' }} onClick={() => setBackgroundColor(generateRandomColor())}>change background color</button>
        </div>
    );
};

export default UseState;