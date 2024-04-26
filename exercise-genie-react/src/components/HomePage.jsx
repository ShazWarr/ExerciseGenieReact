import React from "react";

function HomePage(){
return (
    <div>
        <img src="/Images/Exercise Genie Logo.webp" alt="Exercise Genie Logo" className="logo-top-right" />
        <div className="container text-center mt-5">
            <h1>Welcome to Our Fitness Programs</h1>
            <div className="row mt-4">
                <div className="col-md-3">
                    <img src="/Images/Abs Workout.webp" alt="Abs Workout" className="workout-image" />
                    <button className="btn btn-primary btn-block" onClick={() => alert("Navigate to Abs Workout")}>Abs Workout</button>
                </div>
                <div className="col-md-3">
                    <img src="/Images/Back Workout.webp" alt="Back Workout" className="workout-image" />
                    <button className="btn btn-primary btn-block" onClick={() => alert("Navigate to Back Workout")}>Back Workout</button>
                </div>
                <div className="col-md-3">
                    <img src="/Images/Chest workout.webp" alt="Chest Workout" className="workout-image" />
                    <button className="btn btn-primary btn-block" onClick={() => alert("Navigate to Chest Workout")}>Chest Workout</button>
                </div>
                <div className="col-md-3">
                    <img src="/Images/Leg and Arm Workout.webp" alt="Legs & Arms Workout" className="workout-image" />
                    <button className="btn btn-primary btn-block" onClick={() => alert("Navigate to Legs & Arms Workout")}>Legs & Arms Workout</button>
                </div>
            </div>
        </div>
    </div>
);
}

export default HomePage;