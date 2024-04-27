import { useState, useEffect } from 'react';

export function useTimer(initialDuration, onCompletion) {
    const [duration, setDuration] = useState(initialDuration);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timerInterval;
        if (isActive) {
            timerInterval = setInterval(() => {
                setDuration((duration) => {
                    if (duration <= 1) {
                        clearInterval(timerInterval);
                        onCompletion();
                    }
                    return duration - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timerInterval);
    }, [isActive, onCompletion]);

    const startTimer = () => {
        setIsActive(true);
    };

    const stopTimer = () => {
        setIsActive(false);
    };

    const formatTime = () => {
        let minutes = Math.floor(duration / 60);
        let remainingSeconds = duration % 60;
        return `${pad(minutes)}:${pad(remainingSeconds)}`;
    };

    const pad = (number) => {
        return number < 10 ? '0' + number : number;
    };

    return { duration, formatTime, startTimer, stopTimer };
}
