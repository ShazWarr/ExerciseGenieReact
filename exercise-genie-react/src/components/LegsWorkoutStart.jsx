import React from 'react';
import { useNavigate } from 'react-router-dom';

function LegsWorkoutStart() {
    const navigate = useNavigate();

    const startWorkout = () => {
        navigate('/legs/legs1'); // Adjust the route as needed based on how you've set up your routing
    };

    return (
        <div className="container text-center mt-5">
            <h1>Begin Legs and Arms Workout</h1>
            <button className="btn btn-success mt-3" onClick={startWorkout}>Start Workout</button>
        </div>
    );
}

export default LegsWorkoutStart;
