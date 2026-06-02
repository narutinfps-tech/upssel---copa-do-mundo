import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Printer, Award, FileText, CheckCircle, Search, Flame, Compass, Palette, Layers, Grid } from 'lucide-react';
import { Activity } from '../types';
import { ACTIVITIES_DATA } from '../data/activities';
import InteractivePreview from './InteractivePreview';

interface VisualGalleryProps {
  onAddToOrder: () => void;
  orderAdded: boolean;
}

export default function VisualGallery({ onAddToOrder, orderAdded }: VisualGalleryProps) {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  // Helper to map string icon custom names to Lucide icons
  const renderActivityIcon = (iconName: string, category: string) => {
    const className = `w-8 h-8 ${category === 'Copa do Mundo' ? 'text-brand-blue' : 'text-brand-red'}`;
    switch (iconName) {
      case 'Award': return <Award className={className} />;
      case 'CheckCircle': return <CheckCircle className={className} />;
      case 'Palette': return <Palette className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Grid': return <Grid className={className} />;
      case 'Search': return <Search className={className} />;
      default: return <FileText className={className} />;
    }
  };

  return (
    <section className="bg-brand-beige py-16 px-6 relative">
      
      {/* Soft notebook aesthetic border on top */}
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-red" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-black uppercase text-brand-red bg-white/80 px-3.5 py-1 rounded-full border border-brand-red inline-block">
            Área de Visualização
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Veja alguns exemplos do que vem dentro
          </h2>
          <p className="text-sm text-slate-600 font-semibold">
            Atividades prontas, bonitas e organizadas para deixar sua aula mais divertida. Clique em qualquer card abaixo para ver a prévia interativa completa do arquivo!
          </p>
        </div>

        {/* 8 Activity Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTIVITIES_DATA.map((activity, idx) => {
            const isCopa = activity.category === 'Copa do Mundo';
            
            return (
              <motion.div
                key={activity.id}
                whileHover={{ scale: 1.025, y: -4 }}
                onClick={() => setSelectedActivity(activity)}
                className={`group bg-white rounded-xl border-2 cursor-pointer transition-all overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md ${
                  isCopa ? 'border-brand-blue/30 hover:border-brand-blue' : 'border-brand-red/35 hover:border-brand-red'
                }`}
              >
                {/* Visual Top Accent Card */}
                <div className={`p-4 flex items-center justify-between ${
                  isCopa ? 'bg-blue-50/50' : 'bg-red-50/50'
                }`}>
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    {renderActivityIcon(activity.iconName, activity.category)}
                  </div>
                  <span className={`text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full border ${
                    isCopa 
                      ? 'bg-brand-blue/10 text-brand-blue border-brand-blue/20' 
                      : 'bg-brand-red/10 text-brand-red border-brand-red/20'
                  }`}>
                    {activity.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-brand-blue transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-semibold uppercase mt-0.5 tracking-wider">
                      {activity.type}
                    </p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3">
                      {activity.description}
                    </p>
                  </div>

                  {/* Metadata and Hover indicator */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-bold">
                    <span>👥 {activity.ageGroup}</span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" />
                      {activity.pageCount} {activity.pageCount === 1 ? 'pág' : 'págs'}
                    </span>
                  </div>
                </div>

                {/* Footer interactive trigger hint */}
                <div className={`py-2 px-4 text-center text-xs font-bold transition-colors ${
                  isCopa 
                    ? 'bg-brand-blue text-white group-hover:bg-brand-blue/90' 
                    : 'bg-brand-red text-white group-hover:bg-brand-red/90'
                }`}>
                  <span className="flex items-center justify-center gap-1.5 font-sans">
                    <Eye className="w-3.5 h-3.5" />
                    Experimentar Atividade
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Sub-statement */}
        <div className="mt-10 text-center space-y-3">
          <p className="text-lg sm:text-xl font-extrabold text-brand-blue tracking-tight">
            Tudo pronto para imprimir e usar com seus alunos.
          </p>
          <div className="flex justify-center gap-2">
            <span className="inline-block w-4 h-1 rounded-full bg-brand-blue" />
            <span className="inline-block w-10 h-1 rounded-full bg-brand-yellow" />
            <span className="inline-block w-4 h-1 rounded-full bg-brand-red" />
          </div>
        </div>

      </div>

      {/* Pop-up Interactive Worksheet Simulator Modal */}
      {selectedActivity && (
        <InteractivePreview
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
          onAddToOrder={onAddToOrder}
          hasAdded={orderAdded}
        />
      )}

    </section>
  );
}
