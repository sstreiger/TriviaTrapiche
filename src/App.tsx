import React, { useState } from 'react';
import { QuizScreen, UserAnswer } from './types';
import { QUESTIONS } from './data/questions';
import { Header } from './components/Header';
import { StartScreen } from './components/StartScreen';
import { QuestionCard } from './components/QuestionCard';
import { ResultScreen } from './components/ResultScreen';

export const App: React.FC = () => {
  const [screen, setScreen] = useState<QuizScreen>('start');
  const [studentName, setStudentName] = useState<string>('Vecino/a de El Trapiche');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [soundOn, setSoundOn] = useState<boolean>(true);

  const handleStart = (name: string) => {
    setStudentName(name);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScreen('question');
  };

  const handleAnswer = (selectedOptionId: 'A' | 'B' | 'C', isCorrect: boolean) => {
    const currentQ = QUESTIONS[currentQuestionIndex];
    const newAnswer: UserAnswer = {
      questionId: currentQ.id,
      selectedOptionId,
      isCorrect,
    };

    const updatedAnswers = [...userAnswers, newAnswer];
    setUserAnswers(updatedAnswers);

    if (currentQuestionIndex + 1 < QUESTIONS.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setScreen('result');
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScreen('start');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-start">
      <Header
        currentQuestion={screen === 'question' ? currentQuestionIndex + 1 : undefined}
        totalQuestions={QUESTIONS.length}
        soundOn={soundOn}
        onToggleSound={() => setSoundOn(!soundOn)}
      />

      <main className="flex-1 w-full max-w-md mx-auto">
        {screen === 'start' && <StartScreen onStart={handleStart} />}

        {screen === 'question' && (
          <QuestionCard
            question={QUESTIONS[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        )}

        {screen === 'result' && (
          <ResultScreen
            studentName={studentName}
            userAnswers={userAnswers}
            questions={QUESTIONS}
            onRestart={handleRestart}
          />
        )}
      </main>
    </div>
  );
};

export default App;
