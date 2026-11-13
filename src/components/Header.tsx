import React from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { isSoundEnabled, setSoundEnabled } from '../utils/audio';

interface HeaderProps {
  currentQuestion?: number;
  totalQuestions?: number;
  soundOn: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentQuestion,
  totalQuestions,
  soundOn,
  onToggleSound,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      <div className="max-w-md mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Cooperative Brand Logo */}
        <div className="flex items-center gap-2.5">
          <img
            src="/logo-badge.svg"
            alt="Emblema Cooperativa de Agua Potable El Trapiche"
            className="w-10 h-10 object-contain rounded-full shadow-xs border border-emerald-100 bg-white p-0.5"
          />
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 leading-none">
              Cooperativa de Agua
            </span>
            <span className="text-xs font-semibold text-slate-700 leading-tight">
              El Trapiche • San Luis
            </span>
          </div>
        </div>

        {/* Right side: Sound toggle and question indicator */}
        <div className="flex items-center gap-2">
          {currentQuestion !== undefined && totalQuestions !== undefined && (
            <div className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{currentQuestion}/{totalQuestions}</span>
            </div>
          )}

          <button
            onClick={() => {
              setSoundEnabled(!soundOn);
              onToggleSound();
            }}
            aria-label={soundOn ? 'Silenciar sonidos' : 'Activar sonidos'}
            className="p-2 rounded-full text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
            title={soundOn ? 'Sonido activado' : 'Sonido silenciado'}
          >
            {soundOn ? <Volume2 className="w-5 h-5 text-emerald-600" /> : <VolumeX className="w-5 h-5 text-slate-400" />}
          </button>
        </div>
      </div>

      {/* Interactive Progress Bar if in question mode */}
      {currentQuestion !== undefined && totalQuestions !== undefined && (
        <div className="w-full bg-slate-100 h-1.5 overflow-hidden">
          <div
            className="bg-linear-to-r from-emerald-500 via-teal-600 to-sky-600 h-full transition-all duration-300 ease-out"
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          />
        </div>
      )}
    </header>
  );
};
