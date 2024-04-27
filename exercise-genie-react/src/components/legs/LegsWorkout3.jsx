import React from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "../../hooks/useTimer";

function LegsWorkout3() {
    const navigate = useNavigate();
    const { duration, formatTime, startTimer } = useTimer(120, () => navigate('/legs/legsEnd'));

    return (
        <div className="container text-center mt-5">
            <h1>Exercise 3: Jumprope</h1>
            <img src="/Images/jumprope.gif" alt="Jumprope" />
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {formatTime()}
            </div>
            <button className="btn btn-success mt-3" onClick={startTimer}>Start Timer</button>
            <button className="btn btn-warning mt-3" onClick={() => navigate('/legs/legsEnd')}>Skip Exercise</button>
        </div>
    );
}
export default LegsWorkout3;
