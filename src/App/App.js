
import { useState } from 'react';
import * as Styled from './styles';

function App() {
    const [screenValue, setScreenValue] = useState('0');
    const [operation, setOperation] = useState(null);
    const [rememberedNumber, setRememberedNumber] = useState(null);
    const [startOver, setStartOver] = useState(false);

    function buttonClick(e) {
        if(!isNaN(e.target.textContent)) {
            if(screenValue === '0' || startOver) {
                setScreenValue(e.target.textContent)
                setStartOver(false);
            } else {
                setScreenValue(screenValue + e.target.textContent);
            }
        } else {
            switch(e.target.textContent) {
                case 'C':
                    setScreenValue('0');
                    break;
                case '←':
                    if(screenValue === '0') return;

                    if(screenValue.length === 1) {
                        setScreenValue('0');
                    } else {
                        setScreenValue(screenValue.substring(0, screenValue.length - 1))
                    }
                    break;
                case 'x':
                    setOperation('x');
                    setRememberedNumber(screenValue);
                    setStartOver(true);
                    break;
                case '/':
                    setOperation('/');
                    setRememberedNumber(screenValue);
                    setStartOver(true);
                    break;
                case '+':
                    setOperation('+');
                    setRememberedNumber(screenValue);
                    setStartOver(true);
                    break;
                case '-':
                    setOperation('-');
                    setRememberedNumber(screenValue);
                    setStartOver(true);
                    break;
                default:
                    setStartOver(!startOver);
                    switch(operation) {
                        case 'x':
                            setScreenValue(screenValue * rememberedNumber);
                            break;
                        case '/':
                            setScreenValue(rememberedNumber / screenValue);
                            break;
                        case '+':
                            setScreenValue(+screenValue + +rememberedNumber);
                            break;
                        case '-':
                            setScreenValue(rememberedNumber - screenValue);
                            break;
                        default:
                            break;
                    }
                    setRememberedNumber(null);
                    setOperation(null)
            }
        }
    }
    console.log('render');
  return (
    <Styled.Calculator>
        <Styled.Screen>{screenValue}</Styled.Screen>
        <Styled.Row>
            <button className='duble' onClick={buttonClick}>C</button>
            <button onClick={buttonClick}>←</button>
            <button onClick={buttonClick}>x</button>
        </Styled.Row>
        <Styled.Row>
            <button onClick={buttonClick}>7</button>
            <button onClick={buttonClick}>8</button>
            <button onClick={buttonClick}>9</button>
            <button onClick={buttonClick}>/</button>
        </Styled.Row>
        <Styled.Row>
            <button onClick={buttonClick}>5</button>
            <button onClick={buttonClick}>6</button>
            <button onClick={buttonClick}>7</button>
            <button onClick={buttonClick}>+</button>
        </Styled.Row>
        <Styled.Row>
            <button onClick={buttonClick}>1</button>
            <button onClick={buttonClick}>2</button>
            <button onClick={buttonClick}>3</button>
            <button onClick={buttonClick}>-</button>
        </Styled.Row>
        <Styled.Row>
            <button className='triple' onClick={buttonClick}>0</button>
            <button onClick={buttonClick}>=</button>
        </Styled.Row>

    </Styled.Calculator>
  );
}

export default App;
