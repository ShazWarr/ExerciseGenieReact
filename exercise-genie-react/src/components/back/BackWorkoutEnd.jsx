import React from "react";
import { useNavigate } from "react-router-dom";

function BackWorkoutEnd() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <img src="/images/tysonback.gif" alt="BenchPress Exercise" />
      <h3>MY BACK IS BROKEN...SPINAL! -Mike Tyson</h3>
      <h1>Back Workout Complete!</h1>
      <button className="btn btn-info" onClick={() => navigate("/back-start")}>
        Retry Back Workout
      </button>
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}
export default BackWorkoutEnd;
