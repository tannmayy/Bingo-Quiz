import React, { useEffect, useState, ReactElement } from 'react';
import { QUESTIONS, NO_OF_CELLS, questionsInterface, dataPropsInterface } from '../constants/questionsData';
import Timer from './timer';

const Data = (props: dataPropsInterface) => {

    const handleQuestionClick = () => {
        props.onQuestionClick();
    }

    return (

        <div>
            <div className='question'>
                <div style={{ color: "red" }}>Question: &nbsp;&nbsp;</div>
                <div>{props.question}</div>
            </div>
            <div onClick={handleQuestionClick}>
                <button className='button-action'>Get Answer</button>
                <div className='answer'>{props.answer}</div>
            </div>
        </div>
    );
}

export default Data;
