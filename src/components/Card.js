import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import Confetti from 'react-confetti'
import heart from '../images/heart.png'
import '../App.css'

export default function Cards({titles}) {
    const [state, setState] = useState({ checked: {12: true} });    
    
    const isWon = (checked) => {
        const range = [0, 1, 2, 3, 4];
        return (
        undefined !==
            range.find((row) =>
            range.every((column) => checked[row * 5 + column])
            ) ||
            undefined !==
                range.find((column) =>
                range.every((row) => checked[row * 5 + column])
                ) ||
            range.every((index) => checked[index * 5 + index]) ||
            range.every((index) => checked[index * 5 + 4 - index])
            )}

    
            const toggle = (id) =>
            setState((state) => {
            const checked = { ...state.checked, [id]: !state.checked[id] };
            const won = isWon(checked);
            return {
                ...state,
                checked,
                won
            };
            });

        return (
            <div className="card">
                {titles.map((title, index) => <Card className={`title ${!!state.checked[index] ? "titleChecked" : ""}`} key={index} onClick={() => toggle(index)}> <div>{index === 12 ? <img className="heart"src={heart} alt="heart-icon"/> : title}</div></Card>)} 
                {state.won ? <Confetti /> : null}
            </div>
        )
    }