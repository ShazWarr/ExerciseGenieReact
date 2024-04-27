import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
//start components for each section
import AbsWorkoutStart from './components/AbsWorkoutStart';
import BackWorkoutStart from './components/BackWorkoutStart';
import ChestWorkoutStart from './components/ChestWorkoutStart';
import LegsWorkoutStart from './components/LegsWorkoutStart';
//Abs exercises
import AbsWorkout1 from './components/abs/AbsWorkout1';
import AbsWorkout2 from './components/abs/AbsWorkout2';
import AbsWorkout3 from './components/abs/AbsWorkout3';
//Back exercises
import BackWorkout1 from './components/back/BackWorkout1';
import BackWorkout2 from './components/back/BackWorkout2';
import BackWorkout3 from './components/back/BackWorkout3';
//Chest exercises
import ChestWorkout1 from './components/chest/ChestWorkout1';
import ChestWorkout2 from './components/chest/ChestWorkout2';
import ChestWorkout3 from './components/chest/ChestWorkout3';
//Legs and Arms exercises
import LegsWorkout1 from './components/legs/LegsWorkout1';
import LegsWorkout2 from './components/legs/LegsWorkout2';
import LegsWorkout3 from './components/legs/LegsWorkout3';



//end components for each section
import AbsWorkoutEnd from './components/abs/AbsWorkoutEnd';
import BackWorkoutEnd from './components/back/BackWorkoutEnd';
import ChestWorkoutEnd from './components/chest/ChestWorkoutEnd';
import LegsWorkoutEnd from './components/legs/LegsWorkoutEnd';



function App() {
    return (
        <Router>
            <Routes>
               {/* This is the route or path for the "HomePage" Component */}
                <Route path="/" element={<HomePage />} />
                {/*!!!ABS SECTION!!!*/}
                <Route path="/abs-start" element={<AbsWorkoutStart/>} />
                <Route path="/abs/abs1" element={<AbsWorkout1/>} />
                <Route path="/abs/abs2" element={<AbsWorkout2/>} />
                <Route path="/abs/abs3" element={<AbsWorkout3/>} />
                <Route path="/abs/absEnd" element={<AbsWorkoutEnd/>} />
                 {/*!!!BACK SECTION!!!*/}
                 <Route path="/back-start" element={<BackWorkoutStart/>} />
                 <Route path="/back/back1" element={<BackWorkout1/>} />
                 <Route path="/back/back2" element={<BackWorkout2/>} />
                 <Route path="/back/back3" element={<BackWorkout3/>} />
                 <Route path="/back/backEnd" element={<BackWorkoutEnd/>} />
                 {/*!!!CHEST SECTION!!!*/}
                 <Route path="/chest-start" element={<ChestWorkoutStart/>} />
                 <Route path="/chest/chest1" element={<ChestWorkout1/>} />
                 <Route path="/chest/chest2" element={<ChestWorkout2/>} />
                 <Route path="/chest/chest3" element={<ChestWorkout3/>} />
                 <Route path="/chest/chestEnd" element={<ChestWorkoutEnd/>} />
                 {/*!!!:Legs and Arms SECTION!!!*/}
                 <Route path="/legs-start" element={<LegsWorkoutStart/>} />
                 <Route path="/legs/legs1" element={<LegsWorkout1/>} />
                 <Route path="/legs/legs2" element={<LegsWorkout2/>} />
                 <Route path="/legs/legs3" element={<LegsWorkout3/>} />
                 <Route path="/legs/legsEnd" element={<LegsWorkoutEnd/>} />

        
            </Routes>
        </Router>
    );
}

export default App;
