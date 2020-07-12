import * as React from 'react';
import { RecoilRoot } from 'recoil';
import { fullScreenStyle, generateRandomColor } from '../App';
import { atom } from 'recoil';
import { useRecoilState } from 'recoil';

const Recoil: React.FC = () => {
    return (
        <RecoilRoot>
            <SubComponent />
        </RecoilRoot>
    );
};

type Theme = {
    backgroundColor?: string
}

const themeState = atom<Theme>({
    key: 'theme',
    default: {backgroundColor: 'green'}
})

const SubComponent = () => {
    const [theme, setTheme] = useRecoilState(themeState)

    return (
        <div style={{ ...fullScreenStyle, ...theme }}>
            <button
                style={{ margin: '50px' }}
                onClick={() => setTheme((oldTheme) => {return {...oldTheme, backgroundColor: generateRandomColor()}})} >
                change background color
            </button>
        </div>
    )
}

export default Recoil;