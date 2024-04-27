import React from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "../../hooks/useTimer";

function BackWorkout3() {
    const navigate = useNavigate();
    const { duration, formatTime, startTimer } = useTimer(120, () => navigate('/back/backEnd'));

    return (
        <div className="container text-center mt-5">
            <h1>Exercise 3: Wide-Grip Pullup</h1>
            <img src="/images/pullup.gif" alt="Pull up Exercise" />
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {formatTime()}
            </div>
            <button className="btn btn-success mt-3" onClick={startTimer}>Start Timer</button>
            <button className="btn btn-warning mt-3" onClick={() => navigate('/back/backEnd')}>Skip Exercise</button>
        </div>
    );
}
export default BackWorkout3;
