import React from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "../../hooks/useTimer";

function BackWorkout2() {
    const navigate = useNavigate();
    const { duration, formatTime, startTimer } = useTimer(120, () => navigate('/back/back3'));

    return (
        <div className="container text-center mt-5">
            <h1>Exercise 2: Bent-Over Row</h1>
            <img src="/Images/bentoverrow.gif" alt="Bent-Over Row Exercise" />
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {formatTime()}
            </div>
            <button className="btn btn-success mt-3" onClick={startTimer}>Start Timer</button>
            <button className="btn btn-warning mt-3" onClick={() => navigate('/back/back3')}>Skip Exercise</button>
        </div>
    );
}
export default BackWorkout2;
