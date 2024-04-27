import React from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "../../hooks/useTimer";

function ChestWorkout2() {
    const navigate = useNavigate();
    const { duration, formatTime, startTimer } = useTimer(120, () => navigate('/chest/chest3'));

    return (
        <div className="container text-center mt-5">
            <h1>Exercise 2: Push Ups</h1>
            <img src="/images/pushups.gif" alt="Push ups Exercise" />
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {formatTime()}
            </div>
            <button className="btn btn-success mt-3" onClick={startTimer}>Start Timer</button>
            <button className="btn btn-warning mt-3" onClick={() => navigate('/chest/chest3')}>Skip Exercise</button>
        </div>
    );
}
export default ChestWorkout2;
