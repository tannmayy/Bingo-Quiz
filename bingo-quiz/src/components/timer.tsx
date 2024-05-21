import { QUESTIONS, NO_OF_CELLS, questionsInterface, timerInterface } from '../constants/questionsData'
import React, { useState, useEffect, memo } from 'react';

const Timer = (props: timerInterface) => {

    const [time, setTime] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [running]);

    const handleStart = () => {
        setRunning(true);
    };

    const handlePause = () => {
        setRunning(false);
    };

    const handleReset = () => {
        setRunning(false);
        setTime(0);
    };


    useEffect(() => {
        if (props.startTimer) {
            handleStart();
        }
        else if (props.stopTimer) {
            handlePause();
            handleReset();
        }
    }, [props])

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "30px", fontFamily: "georgia" }}>
            <br />
            <br />
            <br />
            <div>Timer&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div>
                {formatTime(time)}
            </div>
        </div>
    );
};

const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
};

const padZero = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

export default memo(Timer);