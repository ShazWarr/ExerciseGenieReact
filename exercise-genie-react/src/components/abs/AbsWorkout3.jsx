import React from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "../../hooks/useTimer";

function AbsWorkout3() {
    const navigate = useNavigate();
    const { duration, formatTime, startTimer } = useTimer(120, () => navigate('/abs/abs3'));

    return (
        <div className="container text-center mt-5">
            <h1>Exercise 3: Planks</h1>
            <img src="/images/planks.gif" alt="Twists Exercise" />
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {formatTime()}
            </div>
            <button className="btn btn-success mt-3" onClick={startTimer}>Start Timer</button>
            <button className="btn btn-warning mt-3" onClick={() => navigate('/abs/absEnd')}>Skip Exercise</button>
        </div>
    );
}
export default AbsWorkout3;
