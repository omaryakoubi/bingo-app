import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Confetti from 'react-confetti';
import heart from '../images/heart.png';
import '../App.css';

export default function Cards({ numbers }) {
    const [state, setState] = useState({ checkedNumber: { 12: true } });

    const Won = (checkedNumber) => {
        const range = [0, 1, 2, 3, 4];
        return (
            undefined !==
                range.find((row) =>
                    range.every((column) => checkedNumber[row * 5 + column])
                ) ||
            undefined !==
                range.find((column) =>
                    range.every((row) => checkedNumber[row * 5 + column])
                ) ||
            range.every((index) => checkedNumber[index * 5 + index]) ||
            range.every((index) => checkedNumber[index * 5 + 4 - index])
        );
    };

    const toggle = (id) =>
        setState((state) => {
            const checkedNumber = {
                ...state.checkedNumber,
                [id]: !state.checkedNumber[id]
            };
            const won = Won(checkedNumber);
            return {
                ...state,
                checkedNumber,
                won
            };
        });

    return (
        <div className="card">
            {numbers.map((number, index) => (
                <Card
                    className={`number ${
                        !!state.checkedNumber[index] ? 'checkedNumber' : ''
                    }`}
                    key={index}
                    onClick={() => toggle(index)}
                >
                    {' '}
                    <div>
                        {index === 12 ? (
                            <img
                                className="heart"
                                src={heart}
                                alt="heart-icon"
                            />
                        ) : (
                            number
                        )}
                    </div>
                </Card>
            ))}
            {state.won ? <Confetti /> : null}
        </div>
    );
}
