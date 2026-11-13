import React, { useEffect, useState } from 'react';
import { UserAnswer, Question } from '../types';
import {
  Trophy,
  Share2,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Mountain,
  HeartHandshake,
} from 'lucide-react';
import { triggerVictoryConfetti } from '../utils/confetti';
import { playVictoryFanfare, playClickSound } from '../utils/audio';

interface ResultScreenProps {
  studentName: string;
  userAnswers: UserAnswer[];
  questions: Question[];
  onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  studentName,
  userAnswers,
  questions,
  onRestart,
}) => {
  const [showReview, setShowReview] = useState(false);
  const [copied, setCopied] = useState(false);

  const score = userAnswers.filter((a) => a.isCorrect).length;
  const total = questions.length;
  const percentage = Math.round((score / total) * 100);

  useEffect(() => {
    triggerVictoryConfetti();
    playVictoryFanfare();
  }, []);

  const getTier = () => {
    if (score === 10) {
      return {
        title: '¡Puntaje Perfecto! Guardián/a de El Trapiche',
        desc: `¡Extraordinario, ${studentName}! Demostraste un conocimiento total sobre la historia, el funcionamiento y el cuidado solidario del agua en nuestras sierras.`,
        badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
        iconColor: 'text-amber-500',
      };
    } else if (score >= 8) {
      return {
        title: '¡Excelente! Gran Cooperativista Puntano/a',
        desc: `¡Muy bien hecho, ${studentName}! Tenés muy claros los valores cooperativos y el compromiso que mantiene vivo al Río Trapiche.`,
        badgeColor: 'bg-teal-100 text-teal-900 border-teal-300',
        iconColor: 'text-teal-600',
      };
    } else if (score >= 6) {
      return {
        title: '¡Muy Buen Trabajo! Amigo/a de las Sierras',
        desc: `¡Buen puntaje, ${studentName}! Conocés los pilares de la cooperativa y sabés que cada gota cuenta para toda la comunidad.`,
        badgeColor: 'bg-sky-100 text-sky-900 border-sky-300',
        iconColor: 'text-sky-500',
      };
    } else {
      return {
        title: '¡Buen Intento! Seguí Descubriendo',
        desc: `¡Gracias por participar, ${studentName}! El cooperativismo se construye día a día aprendiendo y sumando esfuerzos en comunidad.`,
        badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
        iconColor: 'text-blue-500',
      };
    }
  };

  const tier = getTier();

  const getShareText = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://trivia-el-trapiche.vercel.app';
    return `💧⛰️ ¡Completé la Trivia del Cooperativismo y el Agua de El Trapiche!

🎓 Puntaje: ${score}/${total} aciertos (${percentage}%)

¿Te animás a superarme? Descubrí la historia de nuestra cooperativa acá:
👉 ${currentUrl}`;
  };

  const handleShareWhatsApp = () => {
    playClickSound();
    const text = encodeURIComponent(getShareText());
    const whatsappUrl = `https://api.whatsapp.com/send?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleNativeShare = async () => {
    playClickSound();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Trivia del Cooperativismo y el Agua - El Trapiche',
          text: getShareText(),
          url: window.location.href,
        });
      } catch {
        // User cancelled
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = () => {
    playClickSound();
    navigator.clipboard.writeText(getShareText()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-65px)] p-4 max-w-md mx-auto animate-pop pb-8">
      {/* Institutional Header Logo */}
      <div className="w-full flex justify-center mb-3">
        <img
          src="/logo-coop.svg"
          alt="Cooperativa de Provisión de Agua Potable El Trapiche San Luis Ltda."
          className="h-16 w-auto object-contain"
        />
      </div>

      {/* Main Score Card */}
      <div className="w-full bg-white rounded-3xl p-6 shadow-md border border-slate-200/80 text-center relative overflow-hidden mb-4">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-60 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-sky-100 rounded-full blur-2xl opacity-60 pointer-events-none" />

        {/* Trophy Icon */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-linear-to-tr from-amber-400 to-amber-200 text-amber-900 flex items-center justify-center shadow-md mb-3 animate-float">
          <Trophy className="w-9 h-9" />
        </div>

        {/* Score Numbers */}
        <div className="flex items-baseline justify-center gap-1.5 mb-1">
          <span className="text-4xl font-black text-slate-900">{score}</span>
          <span className="text-xl font-bold text-slate-400">/ {total}</span>
        </div>

        <div className="inline-block px-3 py-0.5 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 mb-3">
          {percentage}% de Respuestas Correctas
        </div>

        {/* Tier Title & Description */}
        <h2 className="text-lg font-extrabold text-slate-900 mb-1 leading-snug">
          {tier.title}
        </h2>
        <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
          {tier.desc}
        </p>
      </div>

      {/* Share Section */}
      <div className="w-full bg-linear-to-br from-emerald-50 via-teal-50 to-sky-50 border border-emerald-200 rounded-2xl p-4 shadow-xs mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950">
            ¡Compartí y desafiá a tus conocidos!
          </h3>
        </div>
        <p className="text-xs text-emerald-900 mb-3">
          Compartí tu resultado por WhatsApp para difundir los valores cooperativos y el cuidado del agua en El Trapiche.
        </p>

        <div className="grid grid-cols-1 gap-2">
          <button
            onClick={handleShareWhatsApp}
            className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold rounded-xl shadow-xs flex items-center justify-center gap-2 text-sm transition-all cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.18-.076.353.101.173.45 1.045 1.026 1.558.742.662 1.368.867 1.56.962.192.095.303.08.416-.051.113-.13.483-.563.612-.756.13-.192.26-.16.434-.095.174.065 1.103.52 1.293.615.19.095.317.142.363.221.046.079.046.458-.098.863z" />
            </svg>
            <span>Compartir por WhatsApp</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleNativeShare}
              className="py-2.5 px-3 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold rounded-xl border border-slate-200 text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-emerald-600" />
              <span>Otras Redes</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="py-2.5 px-3 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 font-bold rounded-xl border border-slate-200 text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Copiar Enlace</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Review Answers Toggle */}
      <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden mb-4">
        <button
          onClick={() => {
            playClickSound();
            setShowReview(!showReview);
          }}
          className="w-full p-4 flex items-center justify-between font-bold text-sm text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <span>Revisar las 10 Preguntas</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              {score} correctas • {total - score} incorrectas
            </span>
          </div>
          {showReview ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </button>

        {showReview && (
          <div className="p-4 pt-0 space-y-4 border-t border-slate-100 animate-pop">
            {questions.map((q, idx) => {
              const answer = userAnswers.find((a) => a.questionId === q.id);
              const isCorrect = answer?.isCorrect ?? false;
              const correctOption = q.options.find((o) => o.id === q.correctOptionId);
              const chosenOption = q.options.find((o) => o.id === answer?.selectedOptionId);

              return (
                <div
                  key={q.id}
                  className={`p-3 rounded-xl border text-left text-xs ${
                    isCorrect ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/50 border-rose-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-700">Pregunta {idx + 1}</span>
                    <span
                      className={`inline-flex items-center gap-1 font-bold text-[11px] px-2 py-0.5 rounded-full ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Correcto
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5 text-rose-600" /> Incorrecto
                        </>
                      )}
                    </span>
                  </div>

                  <p className="font-semibold text-slate-900 mb-2 leading-snug">{q.question}</p>

                  {!isCorrect && chosenOption && (
                    <p className="text-rose-900 mb-1">
                      <span className="font-bold">Elegiste:</span> {chosenOption.text}
                    </p>
                  )}

                  <p className="text-emerald-900 mb-2">
                    <span className="font-bold">Respuesta correcta:</span> {correctOption?.text}
                  </p>

                  <div className="p-2 bg-white/80 rounded-lg border border-slate-200 text-slate-600 text-[11px] leading-relaxed">
                    💡 <span className="font-medium">{q.explanation}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Restart Button */}
      <button
        onClick={() => {
          playClickSound();
          onRestart();
        }}
        className="w-full py-3.5 px-6 bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white font-bold rounded-xl shadow-xs flex items-center justify-center gap-2 text-sm transition-all cursor-pointer mb-4"
      >
        <RotateCcw className="w-4 h-4" />
        <span>Jugar de Nuevo</span>
      </button>

      {/* Institutional Footer */}
      <div className="w-full p-4 rounded-2xl bg-white border border-slate-200/90 text-center shadow-2xs">
        <div className="flex items-center justify-center gap-1.5 mb-1 text-emerald-800 font-bold text-xs uppercase tracking-wide">
          <HeartHandshake className="w-4 h-4 text-emerald-600" />
          <span>Cooperativa de Provisión de Agua Potable El Trapiche Ltda.</span>
        </div>
        <p className="text-[11px] text-slate-500 italic">
          "Uniendo voluntades para que el agua llegue a cada rincón de nuestra comunidad"
        </p>
        <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-center gap-1 text-[10px] text-slate-400">
          <Mountain className="w-3 h-3 text-emerald-500" />
          <span>El Trapiche, San Luis • Diplomatura UNViMe 2026</span>
        </div>
      </div>
    </div>
  );
};
