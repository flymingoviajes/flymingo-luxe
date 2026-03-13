'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Users, 
  MapPin, 
  Sparkles, 
  Heart,
  ArrowRight,
  MessageSquare,
  Loader2,
  Gift,
  Zap,
  CheckCircle2,
  Palmtree,
  Phone,
  Check,
  Calendar
} from 'lucide-react';
import { HOTELS_DATA, DESTINATIONS, WEDDING_STYLES } from '@/data/WeddingData';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { GoogleGenAI } from "@google/genai";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Step = 'welcome' | 'vision' | 'destination' | 'guests' | 'results' | 'comparison' | 'summary';

interface AIConcept {
  name: string;
  narrative: string;
  keyElements: string[];
  suggestedVibe: string;
}

export default function Wizard() {
  const [step, setStep] = useState<Step>('welcome');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const [isGenerating, setIsGenerating] = useState(false);
  const [aiConcept, setAiConcept] = useState<AIConcept | null>(null);
  const [comparisonIds, setComparisonIds] = useState<string[]>([]);
  const [selections, setSelections] = useState({
    vision: '',
    destination: '',
    guests: 50,
    vibe: '',
  });

  const toggleComparison = (id: string) => {
    setComparisonIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : prev.length < 2 ? [...prev, id] : [prev[1], id]
    );
  };

  const generateConcept = async (styleName: string) => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Eres un diseñador de bodas de lujo para Flymingo Weddings. 
        El usuario ha seleccionado el estilo: "${styleName}".
        Genera un concepto de boda innovador y específico basado en este estilo en formato JSON con:
        - name: Un nombre creativo y elegante para el concepto.
        - narrative: Una descripción corta y evocadora (máximo 3 líneas).
        - keyElements: 3 elementos clave de diseño.
        - suggestedVibe: El estilo seleccionado (${styleName}).`,
        config: { responseMimeType: "application/json" }
      });
      
      const result = JSON.parse(response.text);
      setAiConcept(result);
      setSelections(prev => ({ ...prev, vibe: result.suggestedVibe }));
      nextStep('destination');
    } catch (error) {
      console.error("AI Error:", error);
      nextStep('destination');
    } finally {
      setIsGenerating(false);
    }
  };

  const filteredHotels = useMemo(() => {
    const matched = HOTELS_DATA.filter(hotel => {
      const matchDest = !selections.destination || hotel.location === selections.destination;
      const matchVibe = !selections.vibe || hotel.style === selections.vibe;
      return matchDest && matchVibe;
    });

    // If we only have one match, or no matches, we should show more options
    // to satisfy the user's request of "siempre mostrar más de una opción"
    if (matched.length < 2) {
      const others = HOTELS_DATA.filter(hotel => {
        const matchDest = !selections.destination || hotel.location === selections.destination;
        return matchDest && !matched.find(m => m.id === hotel.id);
      });
      return [...matched, ...others].slice(0, 4); // Show up to 4 options
    }

    return matched;
  }, [selections.destination, selections.vibe]);

  const comparedHotels = useMemo(() => {
    return HOTELS_DATA.filter(h => comparisonIds.includes(h.id));
  }, [comparisonIds]);

  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  const getSelectionSummary = () => {
    const perks = [
      { min: 10, label: "Ceremonia Complementaria" },
      { min: 25, label: "Habitaciones de Cortesía" },
      { min: 50, label: "Evento Privado Flymingo" },
      { min: 100, label: "Upgrades VIP & Suite" },
    ].filter(p => selections.guests >= p.min).map(p => p.label).join(', ');

    return `*Resumen de Diseño Flymingo*%0A%0A` +
           `• *Visión:* ${selections.vision}%0A` +
           `• *Destino:* ${selections.destination}%0A` +
           `• *Invitados:* ${selections.guests} PAX%0A` +
           `• *Beneficios Desbloqueados:* ${perks || 'Ninguno aún'}%0A` +
           (selectedPackage ? `• *Hotel Seleccionado:* ${selectedPackage.hotel.name}%0A` : '');
  };

  const calendlyUrl = `https://calendly.com/flymingo/flymingo-weddings?a1=${encodeURIComponent(getSelectionSummary().replace(/%0A/g, '\n'))}`;

  const nextStep = (next: Step) => {
    setStep(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const prevStep = (prev: Step) => {
    setStep(prev);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stepsOrder: Step[] = ['vision', 'destination', 'guests', 'results'];
  const currentStepIndex = stepsOrder.indexOf(step as any);
  const progress = currentStepIndex >= 0 ? ((currentStepIndex + 1) / stepsOrder.length) * 100 : 0;

  const renderStep = () => {
    switch (step) {
      case 'welcome':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center min-h-[80vh] md:min-h-[85vh] text-center space-y-12 md:space-y-16 px-4 py-12"
          >
            <div className="space-y-6 md:space-y-8 max-w-4xl">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h2 className="text-brand-gold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-xs font-bold mb-4 md:mb-6">The Future of Destination Weddings</h2>
                <h1 className="text-7xl md:text-[10rem] font-serif leading-[0.8] tracking-tighter">
                  FLY<span className="italic text-brand-gold">MINGO</span><br />
                  <span className="text-5xl md:text-8xl tracking-normal opacity-90">DESIGNER</span>
                </h1>
              </motion.div>
              <p className="text-lg md:text-2xl text-brand-dark/50 font-light max-w-2xl mx-auto leading-relaxed px-4">
                No solo cotizamos bodas. Diseñamos legados. <br className="hidden md:block" />
                <span className="text-brand-gold font-medium border-b border-brand-gold/30 pb-1">Pioneros en innovación nupcial.</span>
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-8 w-full max-w-md mx-auto">
              <div className="w-full space-y-4">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Tu Nombre" 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-10 py-6 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-brand-dark/5 text-center text-xl focus:ring-4 focus:ring-brand-gold/10 transition-all luxury-shadow placeholder:text-brand-dark/20"
                  />
                  <div className="absolute inset-0 rounded-[2rem] ring-1 ring-brand-dark/5 group-hover:ring-brand-gold/20 transition-all pointer-events-none" />
                </div>
                <button 
                  onClick={() => nextStep('vision')}
                  className="group relative w-full px-8 md:px-16 py-6 md:py-7 bg-brand-dark text-white rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-98 shadow-2xl shadow-brand-dark/30"
                >
                  <span className="relative z-10 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">Iniciar Experiencia AI</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
              
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-brand-dark/40 font-bold">
                  <div className="flex -space-x-3">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-brand-paper overflow-hidden shadow-md">
                        <img src={`https://i.pravatar.cc/100?u=couple${i}`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <span>10 parejas felices</span>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'vision':
        return (
          <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 py-6 md:py-12 px-4">
            <div className="space-y-4 md:space-y-6 text-center">
              <h2 className="text-5xl md:text-7xl font-serif leading-tight">
                {userName ? `Hola ${userName},` : 'Hola,'} <br />
                <span className="text-brand-gold italic">define tu Estilo</span>
              </h2>
              <p className="text-brand-dark/50 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Selecciona la esencia que mejor represente su historia de amor. 
                Nuestra IA diseñará un concepto a medida.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
              {WEDDING_STYLES.map((style) => {
                const Icon = style.id === 'Luxury' ? Sparkles : 
                             style.id === 'Modern' ? Zap : 
                             style.id === 'Classic' ? Heart : Palmtree;
                
                const isSelected = selections.vision === style.name;
                
                return (
                  <button
                    key={style.id}
                    disabled={isGenerating}
                    onClick={() => {
                      setSelections({ ...selections, vision: style.name, vibe: style.id });
                      generateConcept(style.name);
                    }}
                    className={cn(
                      "group relative h-[400px] md:h-[550px] rounded-[3rem] overflow-hidden transition-all duration-700 disabled:opacity-50",
                      isSelected ? "ring-4 ring-brand-gold scale-[0.98]" : "hover:scale-[1.02] luxury-shadow"
                    )}
                  >
                    <img 
                      src={style.image} 
                      alt={style.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-center text-center space-y-4 md:space-y-6">
                      <motion.div 
                        whileHover={{ rotate: 15 }}
                        className="w-14 h-14 md:w-16 md:h-16 bg-brand-gold rounded-[1.5rem] flex items-center justify-center text-brand-dark mb-2 shadow-xl"
                      >
                        <Icon className="w-7 h-7 md:w-8 md:h-8" />
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl text-white font-serif">{style.name}</h3>
                      <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        {style.description}
                      </p>
                      
                      {isGenerating && selections.vibe === style.id && (
                        <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 z-50">
                          <Loader2 className="w-12 h-12 text-brand-gold animate-spin" />
                          <div className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-gold block">Diseñando Legado</span>
                            <span className="text-[10px] text-white/40 uppercase tracking-widest">Consultando con Flymingo AI...</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 'destination':
        return (
          <div className="space-y-16 md:space-y-24 px-4 py-6">
            {aiConcept && (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 md:p-16 bg-white/80 backdrop-blur-2xl rounded-[3rem] md:rounded-[5rem] luxury-shadow max-w-5xl mx-auto relative overflow-hidden group border border-white/40"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] -mr-48 -mt-48 animate-pulse" />
                <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-16 items-center">
                  <div className="w-24 h-24 md:w-40 md:h-40 bg-brand-dark rounded-[2rem] md:rounded-[3rem] flex items-center justify-center text-brand-gold flex-shrink-0 rotate-6 group-hover:rotate-0 transition-transform duration-1000 shadow-2xl">
                    <Sparkles className="w-12 h-12 md:w-20 md:h-20" />
                  </div>
                  <div className="space-y-6 md:space-y-8 text-center md:text-left">
                    <div className="space-y-2">
                      <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-brand-gold">
                        {userName ? `${userName}'s Flymingo AI Concept` : 'Flymingo AI Concept'}
                      </h3>
                      <h4 className="text-4xl md:text-7xl font-serif italic leading-none tracking-tighter">"{aiConcept.name}"</h4>
                    </div>
                    <p className="text-lg md:text-2xl text-brand-dark/70 font-light leading-relaxed italic">
                      {aiConcept.narrative}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      {aiConcept.keyElements.map((el, i) => (
                        <span key={i} className="px-5 py-2 bg-brand-dark text-white/90 rounded-full text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg">
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div className="text-center space-y-6">
              <h2 className="text-5xl md:text-8xl font-serif leading-none tracking-tighter">¿Dónde sucederá <br /><span className="text-brand-gold italic">la magia?</span></h2>
              <p className="text-brand-dark/40 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">Selecciona el escenario perfecto</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 max-w-7xl mx-auto">
              {DESTINATIONS.map((dest) => (
                <button
                  key={dest}
                  onClick={() => {
                    setSelections({ ...selections, destination: dest });
                    nextStep('guests');
                  }}
                  className={cn(
                    "relative h-[400px] md:h-[650px] rounded-[3rem] md:rounded-[5rem] overflow-hidden group transition-all duration-1000",
                    selections.destination === dest ? "ring-8 ring-brand-gold/30 scale-[0.98]" : "hover:scale-[1.02] luxury-shadow"
                  )}
                >
                  <img 
                    src={`https://picsum.photos/seed/${dest}/800/1200`} 
                    alt={dest}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 text-left space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-[1px] bg-brand-gold" />
                      <span className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.5em]">Destino</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl text-white font-serif tracking-tighter leading-none">{dest}</h3>
                    <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      Explorar Locaciones <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 'guests':
        return (
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-20 py-6 md:py-12 px-4">
            <div className="space-y-6 md:space-y-8 text-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-gold/10 rounded-full text-brand-gold text-[10px] font-bold uppercase tracking-widest">
                <Users className="w-3 h-3" /> Logística de Grupo
              </div>
              <h2 className="text-5xl md:text-8xl font-serif leading-none tracking-tighter">
                ¿Cuántos <br /><span className="text-brand-gold italic">acompañantes?</span>
              </h2>
              <p className="text-brand-dark/40 text-lg md:text-xl font-light max-w-xl mx-auto">
                El tamaño de tu grupo desbloquea beneficios exclusivos en nuestra selección de hoteles.
              </p>
            </div>

            <div className="space-y-16 md:space-y-24">
              <div className="relative py-12 md:py-20">
                <div className="text-center mb-12 md:mb-16">
                  <motion.span 
                    key={selections.guests}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-8xl md:text-[12rem] font-serif text-brand-dark leading-none tracking-tighter"
                  >
                    {selections.guests}
                  </motion.span>
                  <span className="text-brand-gold text-2xl md:text-4xl font-serif italic ml-4">Invitados</span>
                </div>
                
                <div className="relative h-4 md:h-6 bg-brand-dark/5 rounded-full">
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-brand-gold rounded-full"
                    style={{ width: `${(selections.guests / 300) * 100}%` }}
                  />
                  <input 
                    type="range" 
                    min="10" 
                    max="300" 
                    step="5"
                    value={selections.guests}
                    onChange={(e) => setSelections({ ...selections, guests: parseInt(e.target.value) })}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                  {/* Visual Handle */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white border-[6px] border-brand-dark rounded-full shadow-2xl pointer-events-none transition-all duration-300 flex items-center justify-center"
                    style={{ left: `calc(${(selections.guests / 300) * 100}% - 20px)` }}
                  >
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-gold rounded-full animate-ping" />
                  </div>
                </div>
                
                <div className="flex justify-between mt-6 text-[10px] font-bold uppercase tracking-widest text-brand-dark/20">
                  <span>10 PAX</span>
                  <span>150 PAX</span>
                  <span>300 PAX</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div className="bg-brand-dark text-white p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] space-y-8 md:space-y-12 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                  <div className="space-y-2 relative z-10">
                    <h3 className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em]">Flymingo Unlocker</h3>
                    <p className="text-2xl md:text-3xl font-serif">Beneficios por Volumen</p>
                  </div>
                  
                  <div className="space-y-6 md:space-y-8 relative z-10">
                    {[
                      { min: 10, label: "Ceremonia Complementaria", icon: Heart, desc: "Tu unión, nuestro regalo." },
                      { min: 25, label: "Habitaciones de Cortesía", icon: Gift, desc: "Estancia premium para los novios." },
                      { min: 50, label: "Evento Privado Flymingo", icon: Sparkles, desc: "Coctel de bienvenida exclusivo." },
                      { min: 100, label: "Upgrades VIP & Suite", icon: Zap, desc: "Lujo máximo para tu grupo." },
                    ].map((benefit, i) => {
                      const isUnlocked = selections.guests >= benefit.min;
                      return (
                        <motion.div 
                          key={i} 
                          animate={{ 
                            scale: isUnlocked ? 1.05 : 1,
                            x: isUnlocked ? 10 : 0
                          }}
                          className={cn(
                            "flex items-center gap-6 transition-all duration-500 p-4 rounded-2xl",
                            isUnlocked ? "bg-white/5 opacity-100" : "opacity-20"
                          )}
                        >
                          <div className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shrink-0",
                            isUnlocked ? "bg-brand-gold text-brand-dark" : "bg-white/5 text-white/20"
                          )}>
                            <benefit.icon className="w-6 h-6" />
                          </div>
                          <div className="space-y-1">
                            <span className="text-sm font-bold uppercase tracking-widest block">{benefit.label}</span>
                            <p className="text-[10px] text-white/40 font-light">{benefit.desc}</p>
                            <span className="text-[9px] text-brand-gold/60 font-bold uppercase tracking-tighter">Mínimo {benefit.min} PAX</span>
                          </div>
                          {isUnlocked && (
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="ml-auto w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center"
                            >
                              <Check className="w-3 h-3 text-brand-dark" />
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center p-10 md:p-16 bg-white/60 backdrop-blur-xl rounded-[3rem] md:rounded-[4rem] border border-white/40 text-center space-y-8">
                  <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold">
                    <Zap className="w-10 h-10" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-serif">¿Listo para la magia?</h3>
                    <p className="text-brand-dark/50 font-light leading-relaxed">
                      Nuestra IA está lista para presentarte la mejor selección de hoteles en {selections.destination} que se adaptan a tu estilo {selections.vision}.
                    </p>
                  </div>
                  <button 
                    onClick={() => nextStep('results')}
                    className="w-full py-6 bg-brand-dark text-white rounded-full font-bold text-xs uppercase tracking-[0.3em] hover:bg-brand-gold transition-all shadow-2xl shadow-brand-dark/20 group"
                  >
                    Ver Curaduría <ArrowRight className="inline-block ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'results':
        return (
          <div className="space-y-8 md:space-y-16 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-8 border-b border-brand-dark/10 pb-8 md:pb-16">
              <div className="space-y-4 md:space-y-6 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl font-serif leading-none">Curaduría <span className="italic text-brand-gold">Elite</span></h2>
                <p className="text-brand-dark/40 max-w-lg text-base md:text-lg font-light leading-relaxed">Selección exclusiva basada en tu visión AI y logística de grupo. Compara tus favoritos.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {comparisonIds.length > 0 && (
                  <button 
                    onClick={() => nextStep('comparison')}
                    className="px-8 md:px-10 py-3 md:py-4 bg-brand-gold text-white rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest shadow-lg animate-bounce"
                  >
                    Comparar ({comparisonIds.length})
                  </button>
                )}
                <div className="px-6 md:px-8 py-3 md:py-4 bg-white luxury-shadow rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 md:gap-4">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-brand-gold" /> {selections.destination}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 max-w-7xl mx-auto">
              {filteredHotels.map(hotel => {
                const isMatch = !selections.vibe || hotel.style === selections.vibe;
                return (
                  <motion.div 
                    key={hotel.id}
                    whileHover={{ y: -15 }}
                    className="bg-white rounded-[3rem] md:rounded-[5rem] overflow-hidden luxury-shadow group relative"
                  >
                    {isMatch && (
                      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20 px-4 md:px-6 py-2 md:py-3 bg-brand-gold text-white rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl animate-pulse">
                        Flymingo Best Match
                      </div>
                    )}
                    <div className="absolute top-6 right-6 md:top-10 md:right-10 z-20 flex flex-col gap-3">
                      <button 
                        onClick={() => toggleComparison(hotel.id)}
                        className={cn(
                          "w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all shadow-xl",
                          comparisonIds.includes(hotel.id) ? "bg-brand-gold text-white" : "bg-white/90 backdrop-blur text-brand-dark hover:bg-brand-dark hover:text-white"
                        )}
                      >
                        <Users className="w-4 h-4 md:w-6 md:h-6" />
                      </button>
                    </div>
                    <div className="relative h-[400px] md:h-[600px] overflow-hidden">
                      <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-70" />
                      <div className="absolute top-20 md:top-24 left-6 md:left-10 px-4 md:px-6 py-2 md:py-3 bg-white/90 backdrop-blur rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em]">
                        {hotel.chain}
                      </div>
                      <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 text-white space-y-4 md:space-y-6">
                        <h3 className="text-3xl md:text-5xl font-serif leading-none">{hotel.name}</h3>
                        <p className="text-white/60 font-light text-sm md:text-lg max-w-md line-clamp-2 md:line-clamp-none">{(hotel as any).description}</p>
                        <div className="flex flex-wrap gap-2 md:gap-4">
                          {(hotel as any).perks.map((p: string, i: number) => (
                            <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-widest">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-8 md:p-16 space-y-8 md:space-y-12">
                      <div className="grid grid-cols-1 gap-6 md:gap-10">
                        {hotel.packages.map(pkg => (
                          <div key={pkg.id} className="flex flex-col sm:flex-row justify-between items-center gap-6 p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] bg-brand-paper/50 border border-brand-dark/5">
                            <div className="space-y-1 md:space-y-2 text-center sm:text-left">
                              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Paquete {pkg.name}</h4>
                              <p className="text-3xl md:text-4xl font-serif">{pkg.currency} {pkg.basePrice.toLocaleString()}</p>
                              <p className="text-[8px] md:text-[10px] text-brand-dark/30 uppercase tracking-widest">Base {pkg.minGuests} PAX</p>
                            </div>
                            <button 
                              onClick={() => {
                                setSelectedPackage({ hotel, package: pkg });
                                nextStep('summary');
                              }}
                              className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-brand-dark text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold transition-all shadow-lg"
                            >
                              Diseñar Propuesta
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Why Flymingo Section */}
            <div className="py-20 md:py-32 bg-brand-dark text-white rounded-[3rem] md:rounded-[6rem] px-8 md:px-20 space-y-16">
              <div className="max-w-3xl space-y-6">
                <h3 className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold">The Flymingo Edge</h3>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">¿Por qué diseñar con <span className="italic text-brand-gold">Flymingo</span>?</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
                {[
                  { title: "Curaduría AI", desc: "Algoritmos que analizan miles de datos para encontrar tu match perfecto.", icon: Sparkles },
                  { title: "Beneficios Elite", desc: "Acceso a upgrades y cortesías que no encontrarás en ningún otro lugar.", icon: Zap },
                  { title: "Soporte 24/7", desc: "Un equipo de expertos listos para resolver cualquier duda al instante.", icon: MessageSquare }
                ].map((item, i) => (
                  <div key={i} className="space-y-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-gold">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-serif">{item.title}</h4>
                      <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'comparison':
        return (
          <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 py-6 md:py-12 px-4">
            <div className="text-center space-y-6">
              <button 
                onClick={() => prevStep('results')} 
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark/30 hover:text-brand-dark transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Volver a la Curaduría
              </button>
              <h2 className="text-5xl md:text-8xl font-serif leading-none tracking-tighter">Duelo de <br /><span className="italic text-brand-gold">Titanes</span></h2>
              <p className="text-brand-dark/40 text-lg font-light max-w-lg mx-auto">Compara los beneficios exclusivos y la inversión para tus destinos favoritos.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {comparedHotels.map(hotel => (
                <div key={hotel.id} className="bg-white rounded-[4rem] luxury-shadow overflow-hidden">
                  <div className="h-64 relative">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <h3 className="text-3xl text-white font-serif text-center px-8">{hotel.name}</h3>
                    </div>
                  </div>
                  <div className="p-12 space-y-10">
                    <div className="space-y-6">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold border-b border-brand-dark/5 pb-4">Flymingo Perks</h4>
                      <ul className="space-y-4">
                        {(hotel as any).perks.map((p: string, i: number) => (
                          <li key={i} className="flex items-center gap-4 text-sm font-medium">
                            <CheckCircle2 className="w-5 h-5 text-brand-gold" /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold border-b border-brand-dark/5 pb-4">Signature Package</h4>
                      <div className="space-y-2">
                        <p className="text-2xl font-serif">{hotel.packages[0].name}</p>
                        <p className="text-4xl font-serif text-brand-dark">{hotel.packages[0].currency} {hotel.packages[0].basePrice.toLocaleString()}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedPackage({ hotel, package: hotel.packages[0] });
                        nextStep('summary');
                      }}
                      className="w-full py-6 bg-brand-dark text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-all"
                    >
                      Elegir este Destino
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'summary':
        const totalGuests = selections.guests;
        const pkg = selectedPackage.package;
        const extraGuests = Math.max(0, totalGuests - pkg.minGuests);
        const extraCost = extraGuests * (pkg.extraPaxPrice || 0);
        const totalCost = pkg.basePrice + extraCost;

        return (
          <div className="max-w-7xl mx-auto py-6 md:py-12 px-4">
            <div className="grid lg:grid-cols-12 gap-12 md:gap-24">
              <div className="lg:col-span-7 space-y-12 md:space-y-16">
                <button onClick={() => prevStep('results')} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark/30 hover:text-brand-dark transition-colors">
                  <ChevronLeft className="w-5 h-5" /> Volver a la Curaduría
                </button>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="space-y-2 md:space-y-4">
                    <h2 className="text-brand-gold uppercase tracking-[0.6em] text-[8px] md:text-[10px] font-bold">Digital Vision Dossier</h2>
                    <h1 className="text-5xl md:text-8xl font-serif leading-[0.85] tracking-tighter">{selectedPackage.hotel.name}</h1>
                  </div>
                  {aiConcept && (
                    <div className="relative p-8 md:p-12 bg-white rounded-[2rem] md:rounded-[4rem] luxury-shadow overflow-hidden group">
                      <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold" />
                      <MessageSquare className="absolute top-6 right-6 md:top-10 md:right-10 w-8 h-8 md:w-12 md:h-12 text-brand-gold/10" />
                      <p className="italic font-serif text-xl md:text-3xl text-brand-dark/70 leading-relaxed relative z-10">
                        "{aiConcept.narrative}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                  <div className="space-y-6 md:space-y-8">
                    <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] border-b border-brand-dark/10 pb-4 md:pb-6">Inclusiones Signature</h3>
                    <div className="space-y-4 md:space-y-5">
                      {pkg.inclusions.map((inc: string, i: number) => (
                        <div key={i} className="flex items-start gap-4 md:gap-5 text-sm text-brand-dark/60 font-medium">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                          {inc}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6 md:space-y-8">
                    <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] border-b border-brand-dark/10 pb-4 md:pb-6">Flymingo Perks Unlocked</h3>
                    <div className="space-y-4 md:space-y-6">
                      {pkg.flymingoPerks.map((perk: string, i: number) => (
                        <div key={i} className="flex items-center gap-4 md:gap-5 p-5 md:p-6 bg-brand-dark text-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl">
                          <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-brand-gold flex-shrink-0" />
                          <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest leading-tight">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white p-8 md:p-16 rounded-[3rem] md:rounded-[5rem] luxury-shadow sticky top-12 space-y-8 md:space-y-12 border border-brand-dark/5">
                  <div className="text-center space-y-2 md:space-y-3">
                    <h3 className="text-3xl md:text-4xl font-serif">Tu Inversión</h3>
                    <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark/20">Cotización Flymingo Premium</p>
                  </div>
                  
                  <div className="space-y-6 md:space-y-8 border-y border-brand-dark/5 py-8 md:py-10">
                    <div className="flex justify-between items-center">
                      <span className="text-brand-dark/30 font-bold uppercase tracking-widest text-[8px] md:text-[10px]">Paquete Base</span>
                      <span className="font-serif text-xl md:text-2xl">{pkg.currency} {pkg.basePrice.toLocaleString()}</span>
                    </div>
                    {extraGuests > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-brand-dark/30 font-bold uppercase tracking-widest text-[8px] md:text-[10px]">Invitados Extra ({extraGuests})</span>
                        <span className="font-serif text-xl md:text-2xl">{pkg.currency} {extraCost.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="pt-4 md:pt-6 flex flex-col items-center gap-1 md:gap-2">
                      <span className="text-brand-dark font-bold uppercase tracking-[0.5em] text-[8px] md:text-[9px]">Total Estimado</span>
                      <span className="text-5xl md:text-7xl font-serif text-brand-gold leading-none tracking-tighter">{pkg.currency} {totalCost.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div className="space-y-3 md:space-y-4">
                      <input 
                        type="text" 
                        placeholder="Nombre de la Pareja" 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full px-8 md:px-10 py-5 md:py-6 bg-brand-paper rounded-full border-none text-sm focus:ring-2 focus:ring-brand-gold/20 transition-all" 
                      />
                      <input 
                        type="email" 
                        placeholder="Email de Contacto" 
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full px-8 md:px-10 py-5 md:py-6 bg-brand-paper rounded-full border-none text-sm focus:ring-2 focus:ring-brand-gold/20 transition-all" 
                      />
                    </div>
                    
                    <div className="flex flex-col gap-4">
                      <button className="w-full py-6 md:py-7 bg-brand-dark text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] hover:bg-brand-gold transition-all shadow-2xl shadow-brand-dark/20 group">
                        Descargar Dossier Digital <ArrowRight className="inline-block ml-2 md:ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </button>

                      <a 
                        href={calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-6 md:py-7 bg-white border-2 border-brand-dark text-brand-dark rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] hover:bg-brand-dark hover:text-white transition-all shadow-xl flex items-center justify-center gap-3 group"
                      >
                        <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" /> Agendar Videollamada 1:1
                      </a>
                      
                      <a 
                        href={`https://wa.me/5218715816903?text=${getSelectionSummary()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-6 md:py-7 bg-[#25D366] text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] hover:opacity-90 transition-all shadow-xl flex items-center justify-center gap-3"
                      >
                        <Phone className="w-4 h-4 fill-current" /> Hablar con un Experto
                      </a>
                    </div>

                    <p className="text-[8px] md:text-[9px] text-center text-brand-dark/30 uppercase tracking-widest leading-relaxed">
                      Al solicitar el dossier, un especialista de Flymingo <br className="hidden md:block" />se pondrá en contacto para una sesión de diseño 1:1.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-gold/30">
      {/* Mobile Header / Progress */}
      <div className="fixed top-0 left-0 w-full z-[100] px-6 py-4 flex justify-between items-center bg-brand-paper/80 backdrop-blur-lg border-b border-brand-dark/5 lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:relative lg:p-10">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setStep('welcome')}>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-dark rounded-xl md:rounded-2xl flex items-center justify-center text-white transition-transform group-hover:rotate-12">
            <Heart className="w-5 h-5 md:w-6 md:h-6 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl tracking-tighter leading-none">Flymingo</span>
            <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.5em] text-brand-gold">Weddings</span>
          </div>
        </div>

        {/* Desktop Nav Rail */}
        <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark/30">
          {['vision', 'destination', 'guests', 'results'].map((s, i) => (
            <div key={s} className="flex items-center gap-4">
              <span className={cn(
                "transition-colors",
                step === s ? "text-brand-gold" : ""
              )}>0{i+1} {s}</span>
              {i < 3 && <div className="w-8 h-[1px] bg-brand-dark/10" />}
            </div>
          ))}
        </div>

        <button className="hidden md:block px-6 py-3 border border-brand-dark/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all">
          Contacto Directo
        </button>

        {/* Mobile Progress Bar (Inside Header) */}
        <div className="lg:hidden absolute bottom-0 left-0 w-full h-[2px] bg-brand-dark/5">
          <motion.div 
            className="h-full bg-brand-gold"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <main className="flex-grow flex flex-col relative z-10 pt-20 lg:pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-grow flex flex-col"
          >
            <div className="flex-grow container mx-auto px-4 md:px-10 py-6 md:py-12">
              {renderStep()}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <AnimatePresence>
        {step !== 'welcome' && step !== 'summary' && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="lg:hidden fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-2xl border-t border-brand-dark/5 z-[100] flex items-center justify-between gap-4"
          >
            <button 
              onClick={() => {
                if (step === 'vision') setStep('welcome');
                else if (step === 'destination') setStep('vision');
                else if (step === 'guests') setStep('destination');
                else if (step === 'results') setStep('guests');
                else if (step === 'comparison') setStep('results');
              }}
              className="flex-1 py-4 bg-brand-paper rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-dark/40 flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" /> Atrás
            </button>
            
            {step !== 'results' && (
              <button 
                onClick={() => {
                  if (step === 'vision' && selections.vision) nextStep('destination');
                  else if (step === 'destination' && selections.destination) nextStep('guests');
                  else if (step === 'guests') nextStep('results');
                }}
                disabled={ (step === 'vision' && !selections.vision) || (step === 'destination' && !selections.destination) }
                className="flex-[2] py-4 bg-brand-dark text-white rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl disabled:opacity-30"
              >
                Continuar <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky CTA for Summary */}
      <AnimatePresence>
        {step === 'summary' && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="lg:hidden fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-2xl border-t border-brand-dark/5 z-[100] flex flex-col gap-3"
          >
            <div className="flex gap-3">
              <a 
                href={`https://wa.me/5218715816903?text=${getSelectionSummary()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-[#25D366] text-white rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4 fill-current" /> WhatsApp
              </a>
              <a 
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-brand-dark text-white rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" /> Video Call
              </a>
            </div>
            <button 
              onClick={() => {
                const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
                if (emailInput) emailInput.focus();
              }}
              className="w-full py-3 bg-brand-paper text-brand-dark/60 rounded-full text-[8px] font-bold uppercase tracking-widest"
            >
              Descargar Dossier Digital <ArrowRight className="inline-block ml-1 w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="hidden md:flex p-10 border-t border-brand-dark/5 justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-brand-dark/20 font-bold">
        <div className="flex items-center gap-4">
          <Zap className="w-4 h-4 text-brand-gold" />
          <span>Powered by Flymingo AI Intelligence</span>
        </div>
        <div className="flex gap-12">
          <a href="#" className="hover:text-brand-gold transition-colors">Curaduría</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Legales</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Privacidad</a>
        </div>
      </footer>
    </div>
  );
}
