import React from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "../../hooks/useTimer";

function LegsWorkout1() {
    const navigate = useNavigate();
    const { duration, formatTime, startTimer } = useTimer(120, () => navigate('/legs/legs2'));

    return (
        <div className="container text-center mt-5">
            <h1>Exercise 1: Barbell Squats</h1>
            <img src="/images/barbellsquats.gif" alt="Barbell Squats Exercise" />
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {formatTime()}
            </div>
            <button className="btn btn-success mt-3" onClick={startTimer}>Start Timer</button>
            <button className="btn btn-warning mt-3" onClick={() => navigate('/legs/legs2')}>Skip Exercise</button>
        </div>
    );
}
export default LegsWorkout1;
