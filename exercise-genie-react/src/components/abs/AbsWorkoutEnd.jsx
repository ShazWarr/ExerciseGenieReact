import React from "react";
import { useNavigate } from "react-router-dom";

function AbsWorkoutEnd() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h3>Again?</h3>
      <img src="/images/adam.gif" alt="BenchPress Exercise" />
      <h1>Abs Workout Complete!</h1>
      
      <button className="btn btn-info" onClick={() => navigate("/abs-start")}>
        Retry Abs Workout
      </button>
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}
export default AbsWorkoutEnd;
