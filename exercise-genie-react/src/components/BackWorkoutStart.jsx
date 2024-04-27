import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackWorkoutStart() {
    const navigate = useNavigate();

    const startWorkout = () => {
        navigate('/back/back1'); // Adjust the route as needed based on how you've set up your routing
    };

    return (
        <div className="container text-center mt-5">
            <h1>Begin Back Workout</h1>
            <button className="btn btn-success mt-3" onClick={startWorkout}>Start Workout</button>
        </div>
    );
}

export default BackWorkoutStart;
