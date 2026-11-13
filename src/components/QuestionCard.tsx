import React, { useState, useMemo } from 'react';
import { Question } from '../types';
import { CheckCircle2, XCircle, ArrowRight, Lightbulb, Info } from 'lucide-react';
import { playClickSound, playCorrectSound, playIncorrectSound } from '../utils/audio';
import { triggerMiniConfetti } from '../utils/confetti';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedOptionId: 'A' | 'B' | 'C', isCorrect: boolean) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}) => {
  const [selectedId, setSelectedId] = useState<'A' | 'B' | 'C' | null>(null);
  const isAnswered = selectedId !== null;

  const shuffledOptions = useMemo(() => {
    const list = [...question.options];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }, [question.id]);

  const handleSelectOption = (optionId: 'A' | 'B' | 'C') => {
    if (isAnswered) return;

    setSelectedId(optionId);
    const isCorrect = optionId === question.correctOptionId;

    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      if (isCorrect) {
        navigator.vibrate(50);
      } else {
        navigator.vibrate([40, 60, 40]);
      }
    }

    if (isCorrect) {
      playCorrectSound();
      triggerMiniConfetti();
    } else {
      playIncorrectSound();
    }
  };

  const handleNext = () => {
    if (!selectedId) return;
    playClickSound();
    onAnswer(selectedId, selectedId === question.correctOptionId);
    setSelectedId(null);
  };

  const getCategoryColor = (cat: Question['category']) => {
    switch (cat) {
      case 'Cooperativismo':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Historia y Origen':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Nuestra Comunidad':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Cuidado del Agua':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      default:
        return 'bg-sky-100 text-sky-800 border-sky-200';
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-[calc(100vh-70px)] p-4 max-w-md mx-auto animate-pop">
      <div className="w-full">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${getCategoryColor(question.category)}`}>
            {question.category}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Pregunta {questionNumber} de {totalQuestions}
          </span>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xs border border-slate-200/90 mb-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {question.question}
          </h2>
        </div>

        <div className="space-y-2.5">
          {shuffledOptions.map((option, index) => {
            const displayLetter = String.fromCharCode(65 + index);
            const isSelected = selectedId === option.id;
            const isCorrect = option.id === question.correctOptionId;

            let buttonStyle = 'bg-white border-slate-200 hover:border-emerald-300 active:scale-[0.99] text-slate-800 shadow-2xs';
            let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-300';

            if (isAnswered) {
              if (isCorrect) {
                buttonStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-medium ring-2 ring-emerald-400/50 shadow-xs';
                badgeStyle = 'bg-emerald-500 text-white border-emerald-600';
              } else if (isSelected && !isCorrect) {
                buttonStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400/40 animate-shake shadow-xs';
                badgeStyle = 'bg-rose-500 text-white border-rose-600';
              } else {
                buttonStyle = 'bg-slate-50/70 border-slate-200 text-slate-400 opacity-60';
                badgeStyle = 'bg-slate-100 text-slate-400 border-slate-200';
              }
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                disabled={isAnswered}
                className={`w-full text-left p-3.5 rounded-xl border-2 transition-all flex items-start gap-3 cursor-pointer ${buttonStyle}`}
              >
                <span className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center font-bold text-xs border transition-colors ${badgeStyle}`}>
                  {isAnswered && isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  ) : isAnswered && isSelected && !isCorrect ? (
                    <XCircle className="w-4 h-4 text-white" />
                  ) : (
                    displayLetter
                  )}
                </span>
                <span className="text-sm leading-snug pt-0.5 font-medium">
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-4 p-3.5 bg-linear-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-200 rounded-xl animate-pop text-left">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-950 mb-1">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
              <span>¿Sabías que?</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {question.explanation}
            </p>
            {question.funFact && (
              <p className="text-[11px] text-emerald-800 font-semibold mt-1.5 flex items-center gap-1">
                <Info className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>{question.funFact}</span>
              </p>
            )}
          </div>
        )}
      </div>

      <div className="w-full pt-4 pb-2">
        {isAnswered ? (
          <button
            onClick={handleNext}
            className="w-full py-3.5 px-6 bg-linear-to-r from-emerald-600 via-teal-600 to-sky-700 hover:from-emerald-700 hover:to-sky-800 active:scale-[0.98] text-white font-bold rounded-xl shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 text-base transition-all cursor-pointer animate-pop"
          >
            <span>{questionNumber === totalQuestions ? 'Ver Calificación Final' : 'Siguiente Pregunta'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <div className="text-center py-2 text-xs text-slate-400 font-medium">
            Tocá una opción para responder
          </div>
        )}
      </div>
    </div>
  );
};
