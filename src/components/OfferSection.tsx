import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar, Star, Milestone, Sparkles, Check, Send, Award, Download, Heart } from 'lucide-react';
import { PricingState } from '../types';

interface OfferSectionProps {
  pricing: PricingState;
  onAddToOrder: () => void;
  orderAdded: boolean;
  offerSectionRef: React.RefObject<HTMLDivElement | null>;
}

export default function OfferSection({
  pricing,
  onAddToOrder,
  orderAdded,
  offerSectionRef,
}: OfferSectionProps) {
  // Checkout simulator state
  const [showCheckout, setShowCheckout] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    let attempts = 0;
    const maxAttempts = 20;

    const findAndInit = () => {
      const globalWindow = window as any;
      if (typeof globalWindow.initWiapyUpsell === 'function') {
        try {
          globalWindow.initWiapyUpsell({
            linkUrl: "https://pay.wiapy.com/checkout/6a1e2e9f1e852dffa3a9eb95",
            linkText: "SIM, EU ACEITO ESSA OFERTA",
            styles: {
              backgroundColor: "#00d769",
              hoverBackgroundColor: "#00b85a",
              fontSize: "17px",
              borderRadius: "10px"
            },
            refusalLinkUrl: "https://wiapy.com/login",
            refusalLinkText: "Recusar está oferta",
            refusalLinkColor: "#000000"
          });
        } catch (error) {
          console.error("Error running initWiapyUpsell:", error);
        }
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(findAndInit, 200);
      }
    };

    findAndInit();
  }, []);

  const handleSimulatedCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName || !buyerEmail) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onAddToOrder();
    }, 1800);
  };

  return (
    <div ref={offerSectionRef} id="offer-section" className="bg-slate-50/70 py-20 px-6 relative scroll-mt-6">
      
      {/* Decorative clean background highlights (beautiful web-standard look) */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-emerald-50/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Header Title (Clean & Modern Typography) */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 inline-block">
            🎁 Oportunidade Especial
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Adicione o Combo Didático Completo ao seu pedido
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Desenvolvido sob medida para poupar suas noites de planejamento e encantar seus alunos com aulas dinâmicas e inesquecíveis.
          </p>
        </div>

        {/* Big Offer Box Card (Premium Minimalist Look) */}
        <div className="grid grid-cols-1 md:grid-cols-12 rounded-2xl border border-slate-150 bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
          
          {/* Detailed Info Column (Clean minimalist listing) */}
          <div className="md:col-span-7 p-8 md:p-11 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  O que você vai receber hoje:
                </span>
                <p className="text-base text-slate-800 leading-relaxed font-medium">
                  Dois blocos de arquivos digitais 100% completos do <span className="text-brand-blue font-bold">Copa do Mundo + São João em Inglês</span> em formato PDF.
                </p>
              </div>

              <hr className="border-t border-slate-100" />

              {/* Bulletpoints */}
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex gap-3 items-start">
                  <div className="p-1 bg-emerald-50 text-emerald-600 rounded-full shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block">Mais de 50 Exercícios e Atividades</strong>
                    <span className="text-slate-500 text-xs">Variedade incrível de exercícios ilustrados, jogos, vocabulário e fixação.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="p-1 bg-emerald-50 text-emerald-600 rounded-full shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block">Gabarito Completo Passo a Passo</strong>
                    <span className="text-slate-500 text-xs">Todas as resoluções inclusas para você poupar preciosas horas de correção.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="p-1 bg-emerald-50 text-emerald-600 rounded-full shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block">Versões Coloridas e P&B (Preto e Branco)</strong>
                    <span className="text-slate-500 text-xs">Otimizadas para economizar tinta na hora de tirar cópias para a turma.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="p-1 bg-emerald-50 text-emerald-600 rounded-full shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block">Arquivos em PDF de Alta Definição</strong>
                    <span className="text-slate-500 text-xs">Organizados por pastas e prontos para download imediato após a compra.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Security Indicator */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-550">
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              </div>
              <div>
                <p className="font-bold text-slate-800">Criptografia e Segurança Ponta a Ponta</p>
                <p>Liberação imediata no seu e-mail logo após confirmação de compra.</p>
              </div>
            </div>
          </div>

          {/* Pricing Column (Elegant, Clean Checkout Card look) */}
          <div className="md:col-span-5 bg-slate-50 p-8 md:p-11 border-t md:border-t-0 md:border-l border-slate-150 flex flex-col justify-between text-center space-y-8">
            
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider animate-pulse">
                🔥 Desconto por Tempo Limitado
              </span>

              {/* Price layout */}
              <div className="space-y-2">
                <span className="text-xs text-slate-400 font-semibold block line-through">De: {pricing.currency} {pricing.originalPrice.toFixed(2).replace('.', ',')}</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Por apenas</span>
                <div className="py-2">
                  <span className="text-5xl font-black text-slate-900 tracking-tight">
                    {pricing.currency} <span className="text-emerald-600">{pricing.promoPrice.toFixed(2).replace('.', ',')}</span>
                  </span>
                </div>
                <div className="bg-emerald-50 text-emerald-800 py-1.5 px-3 rounded-lg text-xs font-bold inline-block border border-emerald-100">
                  Economia Real de R$ {(pricing.originalPrice - pricing.promoPrice).toFixed(2).replace('.', ',')}
                </div>
              </div>
            </div>

            {/* Custom Wiapy Upsell Container script integration target */}
            <div className="space-y-4 py-2">
              <div id="wiapy_upsell" className="w-full min-h-[60px] flex justify-center items-center">
                <noscript>
                  <div className="text-center w-full">
                    <a 
                      href="https://pay.wiapy.com/checkout/6a1e2e9f1e852dffa3a9eb95"
                      className="inline-block w-full py-3.5 bg-[#00d769] hover:bg-[#00b85a] text-white font-extrabold text-[17px] rounded-[10px] shadow-sm transition-all text-center no-underline uppercase tracking-wide cursor-pointer"
                    >
                      SIM, EU ACEITO ESSA OFERTA
                    </a>
                  </div>
                </noscript>
              </div>
            </div>

            {/* Mini Trust Badges */}
            <div className="pt-6 border-t border-slate-150/60 flex justify-center gap-4 text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
              <span className="flex items-center gap-1">🛡️ SSL Seguro</span>
              <span className="flex items-center gap-1">⚡ download imediato</span>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Mock Checkout Drawer / Overlay (Beautiful Modern Sleek Model) */}
      {showCheckout && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-all duration-300">
          <motion.div 
            initial={{ scale: 0.98, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="bg-white rounded-2xl max-w-md w-full p-8 space-y-6 shadow-2xl relative border border-slate-100"
          >
            <button 
              onClick={() => setShowCheckout(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer text-lg p-1.5 rounded-full hover:bg-slate-50"
            >
              ✕
            </button>

            {/* Header */}
            <div className="text-center space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full inline-block border border-emerald-100">
                PAGAMENTO SEGURO
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">Finalizar Compra</h3>
              <p className="text-xs text-slate-550 max-w-xs mx-auto">
                Insira as informações de entrega abaixo para simular o recebimento do combo de PDF. No teste, nenhum valor real é cobrado.
              </p>
            </div>

            {!isSuccess ? (
              <form onSubmit={handleSimulatedCheckout} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-600 block uppercase tracking-wide">Nome Completo do Professor(a):</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ana Maria Silva"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full p-3 border border-slate-200 rounded-xl text-xs text-slate-800 font-medium focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-600 block uppercase tracking-wide">E-mail para Receber os PDFs:</label>
                  <input
                    type="email"
                    required
                    placeholder="Ex: professora@escola.com"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="w-full p-3 border border-slate-200 rounded-xl text-xs text-slate-800 font-medium focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                  />
                </div>

                {/* Simulated Pricing recap */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-slate-800 block">Pack Copa + São João</span>
                    <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">🏷️ Oferta Especial Ativada</span>
                  </div>
                  <span className="text-lg font-black text-slate-900">
                    R$ {pricing.promoPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Send className="w-4 h-4 animate-bounce" /> Liberando Material...
                    </>
                  ) : (
                    <>
                      Confirmar Compra Simulado (R$ {pricing.promoPrice.toFixed(2).replace('.', ',')})
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center space-y-5 py-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-650 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-emerald-650 animate-bounce" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-extrabold text-slate-950">Acesso Liberado!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                    O pagamento simulado foi confirmado. Enviamos o recibo e os arquivos para o e-mail <span className="font-bold text-slate-800">{buyerEmail}</span>.
                  </p>
                </div>
                
                <div className="bg-emerald-50 text-emerald-800 p-3 rounded-xl border border-emerald-100 text-xs text-left leading-relaxed font-medium">
                  🎉 O material completo de <strong>Copa do Mundo e São João</strong> foi ativado. Você já pode usar no fluxo de aulas!
                </div>

                <button
                  onClick={() => setShowCheckout(false)}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs cursor-pointer transition-colors"
                >
                  Continuar Navegando
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}

    </div>
  );
}
