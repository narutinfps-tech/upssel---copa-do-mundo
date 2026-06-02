import React, { useState } from 'react';
import { ShieldCheck, Printer, FileText, Download, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { PricingState } from '../types';

interface LastCallProps {
  pricing: PricingState;
  onAddToOrder: () => void;
  orderAdded: boolean;
  onScrollToOffer: () => void;
}

export default function LastCall({
  pricing,
  onAddToOrder,
  orderAdded,
  onScrollToOffer
}: LastCallProps) {
  // Download simulation metrics
  const [downloadingCopa, setDownloadingCopa] = useState(false);
  const [downloadingSaoJoao, setDownloadingSaoJoao] = useState(false);
  const [downloadedCopa, setDownloadedCopa] = useState(false);
  const [downloadedSaoJoao, setDownloadedSaoJoao] = useState(false);

  const startCopaDownload = () => {
    setDownloadingCopa(true);
    setTimeout(() => {
      setDownloadingCopa(false);
      setDownloadedCopa(true);
    }, 1600);
  };

  const startSaoJoaoDownload = () => {
    setDownloadingSaoJoao(true);
    setTimeout(() => {
      setDownloadingSaoJoao(false);
      setDownloadedSaoJoao(true);
    }, 1600);
  };

  return (
    <section className="bg-brand-blue py-16 px-6 text-white relative overflow-hidden">
      
      {/* Decorative background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-10" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        
        {/* Star header badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-yellow font-bold text-[10px] text-brand-blue tracking-wider uppercase rounded-full border border-white/20">
          <Star className="w-3.5 h-3.5 fill-brand-blue" />
          Aproveite Enquanto Há Tempo
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3.5xl font-extrabold text-brand-yellow tracking-tight leading-tight">
            Aproveite para deixar suas aulas ainda mais completas
          </h2>
          <p className="text-sm sm:text-base text-slate-100 max-w-2xl mx-auto leading-relaxed">
            Esse é o tipo de material que o professor usa várias vezes, adapta para diferentes turmas e ainda consegue aplicar em datas especiais de forma prática.
          </p>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Adicione agora o <strong className="text-brand-yellow">Pack Atividades Temáticas de Inglês</strong> ao seu pedido e tenha mais recursos prontos para usar com os alunos.
          </p>
        </div>

        {/* Buttons and CTAs */}
        <div className="pt-4 max-w-md mx-auto space-y-4">
          <a
            href="https://pay.wiapy.com/9rccEpBlqd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-brand-green hover:bg-brand-green/95 text-white font-black text-sm sm:text-base uppercase rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 tracking-widest cursor-pointer block text-center no-underline"
          >
            ADICIONAR AO MEU PEDIDO AGORA
          </a>

          {/* Secure purchase footer text */}
          <div className="flex items-center justify-center gap-4 text-xs text-slate-300 font-bold pt-2">
            <span>🛡 Compra segura</span>
            <span>⚡ Acesso digital</span>
            <span>📄 Material em PDF</span>
          </div>
        </div>

        {/* Footer info containing nice designer tags */}
        <div className="pt-12 border-t border-white/10 mt-12 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-450 font-medium">
          <p>© 2026 Atividades Temáticas de Inglês Professional Educational Inc.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <span>Termos de Uso</span>
            <span>Diretrizes Pedagógicas</span>
          </div>
        </div>

      </div>
    </section>
  );
}
