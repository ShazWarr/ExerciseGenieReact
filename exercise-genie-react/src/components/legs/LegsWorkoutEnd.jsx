import React from "react";
import { useNavigate } from "react-router-dom";

function LegsWorkoutEnd() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <img src="/Images/tysonleg.gif" alt="Jumprope" />
      <h3>GREAT JOB!!!</h3>
      <h1>Legs and Arms Workout Complete!</h1>

      <button className="btn btn-info" onClick={() => navigate("/legs-start")}>
        Retry Legs and Arms Workout
      </button>
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}
export default LegsWorkoutEnd;
