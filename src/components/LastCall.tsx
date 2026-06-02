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
          {!orderAdded ? (
            <button
              onClick={onScrollToOffer}
              className="w-full py-4 bg-brand-green hover:bg-brand-green/95 text-white font-black text-sm sm:text-base uppercase rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 tracking-widest cursor-pointer"
            >
              ADICIONAR AO MEU PEDIDO AGORA
            </button>
          ) : (
            <div className="bg-white/10 p-4 border border-white/20 rounded-2xl space-y-2 animate-down">
              <span className="text-[10px] bg-brand-green text-white py-0.5 px-2.5 rounded-full font-bold uppercase inline-block">
                ★ Pedido Adicionado Com Sucesso!
              </span>
              <h4 className="text-xs sm:text-sm font-extrabold text-brand-yellow">
                Sua Central de Downloads do Professor está Ativa:
              </h4>

              {/* Download Buttons Simulators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                
                {/* Download Copa */}
                <button
                  onClick={startCopaDownload}
                  disabled={downloadingCopa}
                  className={`p-3 rounded-xl border border-white/10 text-left transition-all ${
                    downloadedCopa 
                      ? 'bg-brand-green/20 border-brand-green text-white' 
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white cursor-pointer'
                  }`}
                >
                  <p className="text-[10px] uppercase font-semibold text-slate-400">Apostila PDF #A4</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-[11px] font-bold">1. Copa do Mundo (8 Ativs)</span>
                    <Download className={`w-4 h-4 ${downloadingCopa ? 'animate-bounce' : ''}`} />
                  </div>
                  {downloadedCopa && <p className="text-[9px] text-brand-yellow block mt-1">✓ Baixado! pdf_copa_ingles.pdf</p>}
                </button>

                {/* Download São João */}
                <button
                  onClick={startSaoJoaoDownload}
                  disabled={downloadingSaoJoao}
                  className={`p-3 rounded-xl border border-white/10 text-left transition-all ${
                    downloadedSaoJoao 
                      ? 'bg-brand-green/20 border-brand-green text-white' 
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white cursor-pointer'
                  }`}
                >
                  <p className="text-[10px] uppercase font-semibold text-slate-400">Apostila PDF #A4</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-[11px] font-bold">2. São João (10 Ativs)</span>
                    <Download className={`w-4 h-4 ${downloadingSaoJoao ? 'animate-bounce' : ''}`} />
                  </div>
                  {downloadedSaoJoao && <p className="text-[9px] text-brand-yellow block mt-1">✓ Baixado! pdf_saojoao_ingles.pdf</p>}
                </button>

              </div>
            </div>
          )}

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
