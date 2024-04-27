import React from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "../../hooks/useTimer";

function AbsWorkout1() {
    const navigate = useNavigate();
    const { duration, formatTime, startTimer } = useTimer(120, () => navigate('/abs/abs2'));

    return (
        <div className="container text-center mt-5">
            <h1>Exercise 1: Sit-Ups</h1>
            <img src="/images/situp gif.gif" alt="Sit-Ups Exercise" />
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {formatTime()}
            </div>
            <button className="btn btn-success mt-3" onClick={startTimer}>Start Timer</button>
            <button className="btn btn-warning mt-3" onClick={() => navigate('/abs/abs2')}>Skip Exercise</button>
        </div>
    );
}
export default AbsWorkout1;
