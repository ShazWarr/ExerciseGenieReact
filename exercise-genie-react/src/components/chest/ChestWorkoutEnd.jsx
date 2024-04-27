import React from "react";
import { useNavigate } from "react-router-dom";

function ChestWorkoutEnd() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <img src="/images/kongchest.gif" alt="BenchPress Exercise" />
      <h3>You'll be ready to fight Godzilla soon...</h3>
      <h1>Chest Workout Complete!</h1>
      
      <button className="btn btn-info" onClick={() => navigate("/chest-start")}>
        Retry Chest Workout
      </button>
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}
export default ChestWorkoutEnd;
