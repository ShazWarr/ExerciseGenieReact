import React from "react";
import { useNavigate } from "react-router-dom";
import { useTimer } from "../../hooks/useTimer";

function ChestWorkout3() {
    const navigate = useNavigate();
    const { duration, formatTime, startTimer } = useTimer(120, () => navigate('/chest/chestEnd'));

    return (
        <div className="container text-center mt-5">
            <h1>Exercise 3: Dumbbell Press</h1>
            <img src="/images/dumbbell press.gif" alt="Dumbbell Press Exercise" />
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {formatTime()}
            </div>
            <button className="btn btn-success mt-3" onClick={startTimer}>Start Timer</button>
            <button className="btn btn-warning mt-3" onClick={() => navigate('/chest/chestEnd')}>Skip Exercise</button>
        </div>
    );
}
export default ChestWorkout3;
