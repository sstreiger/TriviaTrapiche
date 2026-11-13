import React, { useState } from 'react';
import { Play, Droplets, Users, Award, Mountain, Sparkles } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface StartScreenProps {
  onStart: (studentName: string) => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    onStart(name.trim() || 'Vecino/a de El Trapiche');
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-65px)] p-4 max-w-md mx-auto animate-pop">
      {/* Top Section / Branding */}
      <div className="w-full flex flex-col items-center text-center pt-2">
        {/* Institutional Logo Card */}
        <div className="bg-white p-4 rounded-2xl shadow-md border border-emerald-100 mb-4 w-full flex items-center justify-center">
          <img
            src="/logo-coop.svg"
            alt="Cooperativa de Provisión de Agua Potable El Trapiche San Luis Ltda."
            className="h-28 w-auto object-contain"
          />
        </div>

        {/* Community / Educational Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold border border-emerald-200 mb-3 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Trivia Comunitaria y Educativa</span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Trivia del <span className="text-emerald-600">Cooperativismo</span> y el{' '}
          <span className="text-sky-700">Agua</span>
        </h1>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
          El Trapiche • San Luis
        </p>

        <p className="mt-2 text-sm text-slate-600 max-w-xs leading-relaxed">
          Descubrí la historia de nuestra cooperativa, el valor del Río Trapiche, las obras que nos unen y el cuidado solidario de nuestras sierras.
        </p>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-3 gap-2 w-full mt-4 mb-4 text-center">
          <div className="bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-100 flex flex-col items-center">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-1 shadow-xs">
              <Users className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold text-slate-800 leading-tight">Solidaridad</span>
            <span className="text-[10px] text-slate-500">1 socio = 1 voto</span>
          </div>

          <div className="bg-sky-50/80 p-2.5 rounded-xl border border-sky-100 flex flex-col items-center">
            <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center mb-1 shadow-xs">
              <Droplets className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold text-slate-800 leading-tight">Río Trapiche</span>
            <span className="text-[10px] text-slate-500">Cada gota cuenta</span>
          </div>

          <div className="bg-amber-50/80 p-2.5 rounded-xl border border-amber-100 flex flex-col items-center">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center mb-1 shadow-xs">
              <Award className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold text-slate-800 leading-tight">10 Preguntas</span>
            <span className="text-[10px] text-slate-500">¡Sumá puntaje!</span>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="w-full bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs mb-3">
          <label htmlFor="student-name" className="block text-left text-xs font-semibold text-slate-700 mb-1.5">
            ¿Cómo te llamás? <span className="text-slate-400 font-normal">(Opcional para tu medalla final)</span>
          </label>
          <input
            id="student-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresá tu nombre o apodo..."
            maxLength={30}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
          />

          <button
            type="submit"
            className="mt-4 w-full py-3.5 px-6 bg-linear-to-r from-emerald-600 via-teal-600 to-sky-700 hover:from-emerald-700 hover:to-sky-800 active:scale-[0.98] text-white font-bold rounded-xl shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 text-base transition-all cursor-pointer"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>¡Comenzar la Trivia!</span>
          </button>
        </form>
      </div>

      {/* Footer Motto */}
      <footer className="w-full py-2 text-center">
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
          <Mountain className="w-3.5 h-3.5 text-emerald-600" />
          <span>Cooperativa de Provisión de Agua Potable El Trapiche Ltda.</span>
        </div>
        <p className="text-[10px] text-slate-400 mt-0.5">
          Fundada en 1971 • Gestión comunitaria ad honorem y cuidado del recurso
        </p>
      </footer>
    </div>
  );
};
