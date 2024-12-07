// src/components/Exams.js
import React, { useState, useEffect } from 'react';
import '../styles/Exams.css';

const Exams = () => {
  const [quizzes, setQuizzes] = useState([]);

  // Simulating fetching quizzes from a database
  useEffect(() => {
    // This would typically be an API call to fetch quizzes from a database
    const fetchQuizzes = async () => {
      const mockQuizzes = [
        { id: 1, title: 'Math Quiz', description: 'Test your math skills!' },
        { id: 2, title: 'Science Quiz', description: 'Explore the world of science.' },
        { id: 3, title: 'History Quiz', description: 'Dive into historical events.' },
      ];
      setQuizzes(mockQuizzes);
    };
    fetchQuizzes();
  }, []);

  return (
    <div className="exams-container">
      <h1 className="exams-title">Exams Portal</h1>
      <p className="exams-description">
        Access your exam schedules, results, preparation material, and quizzes here.
      </p>

      <div className="exams-section">
        <h2>Upcoming Quizzes</h2>
        <div className="quiz-list">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="quiz-card">
              <h3 className="quiz-title">{quiz.title}</h3>
              <p className="quiz-description">{quiz.description}</p>
              <button className="quiz-action-button">Start Quiz</button>
            </div>
          ))}
        </div>
      </div>

      <div className="exams-buttons">
        <button className="exams-action-button">View Schedule</button>
        <button className="exams-action-button">Results</button>
        <button className="exams-action-button">Preparation Material</button>
      </div>
    </div>
  );
};

export default Exams;
