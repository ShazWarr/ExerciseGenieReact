import React from "react";
import { useNavigate } from 'react-router-dom';


function HomePage(){
    //used to navigate between components
    const navigate = useNavigate();


return (
    <div>
        <img src="/Images/Exercise Genie Logo.webp" alt="Exercise Genie Logo" className="logo-top-right" />
        <div className="container text-center mt-5">
            <h1>Welcome to Our Fitness Programs</h1>
            <div className="row mt-4">
                <div className="col-md-3">
                    <img src="/Images/Abs Workout.webp" alt="Abs Workout" className="workout-image" />
                    {/* Whenever the buttons are clicked, it will navigate to the listed path, which is associated with a particular component*/}
                    <button className="btn btn-primary btn-block" onClick={() => navigate("/abs-start")}>Abs Workout</button>
                </div>
                <div className="col-md-3">
                    <img src="/Images/Back Workout.webp" alt="Back Workout" className="workout-image" />
                    <button className="btn btn-primary btn-block" onClick={() => navigate("/back-start")}>Back Workout</button>
                </div>
                <div className="col-md-3">
                    <img src="/Images/Chest workout.webp" alt="Chest Workout" className="workout-image" />
                    <button className="btn btn-primary btn-block" onClick={() => navigate("/chest-start")}>Chest Workout</button>
                </div>
                <div className="col-md-3">
                    <img src="/Images/Leg and Arm Workout.webp" alt="Legs & Arms Workout" className="workout-image" />
                    <button className="btn btn-primary btn-block" onClick={() => navigate("/legs-start")}>Legs & Arms Workout</button>
                </div>
            </div>
        </div>
    </div>
);
}

export default HomePage;