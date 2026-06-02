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
    <div ref={offerSectionRef} className="bg-brand-beige/50 py-16 px-6 border-b-4 border-brand-blue relative scroll-mt-6">
      
      {/* Decorative school supplies banners */}
      <div className="absolute top-0 right-10 leading-none text-brand-red opacity-10 select-none hidden lg:block text-8xl">
        ✎
      </div>
      <div className="absolute bottom-5 left-8 leading-none text-brand-blue opacity-10 select-none hidden lg:block text-8xl">
        🔤
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase text-brand-blue bg-brand-yellow px-3.5 py-1 rounded-full border border-brand-blue inline-block">
            🎁 Upgrade Exclusivo
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Adicione agora ao seu pedido com uma condição especial
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-semibold max-w-2xl mx-auto">
            Esse pack foi criado para complementar seus materiais principais e te entregar ainda mais opções de atividades prontas para usar em sala.
          </p>
        </div>

        {/* Big Offer Box Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 rounded-3xl border-4 border-brand-blue bg-white overflow-hidden shadow-xl">
          
          {/* Detailed Info Column */}
          <div className="md:col-span-7 p-6 md:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                O que está incluso nesta oportunidade?
              </span>
              <p className="text-sm text-slate-800 leading-relaxed font-semibold">
                Você recebe dois temas completos: <span className="text-brand-blue underline">Copa do Mundo + São João</span>. Tudo em um único combo, com atividades visuais, coloridas e prontas para imprimir.
              </p>

              <hr className="border-t border-slate-150" />

              {/* Bulletpoints */}
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex gap-2.5 items-start">
                  <div className="p-0.5 bg-brand-green/20 text-brand-green rounded-full shrink-0">
                    <Check className="w-4 h-4 text-brand-green font-bold" />
                  </div>
                  <span className="text-slate-700">
                    <strong>18 Tipos de Exercícios</strong> didáticos ilustrados
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="p-0.5 bg-brand-green/20 text-brand-green rounded-full shrink-0">
                    <Check className="w-4 h-4 text-brand-green font-bold" />
                  </div>
                  <span className="text-slate-700">
                    <strong>Gabarito Completo</strong> incluso para poupar tempo de correção
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="p-0.5 bg-brand-green/20 text-brand-green rounded-full shrink-0">
                    <Check className="w-4 h-4 text-brand-green font-bold" />
                  </div>
                  <span className="text-slate-700">
                    <strong>Versões Coloridas e P&B</strong> ideais para cópias econômicas
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="p-0.5 bg-brand-green/20 text-brand-green rounded-full shrink-0">
                    <Check className="w-4 h-4 text-brand-green font-bold" />
                  </div>
                  <span className="text-slate-700">
                    <strong>Arquivos em PDF</strong> organizados para download imediato
                  </span>
                </li>
              </ul>
            </div>

            {/* Satisfaction / Secure indicators */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-500">
              <ShieldCheck className="w-8 h-8 text-brand-green shrink-0" />
              <div>
                <p className="font-extrabold text-slate-700">Segurança Total</p>
                <p>Ambiente seguro com criptografia de ponta e liberação imediata via e-mail.</p>
              </div>
            </div>
          </div>

          {/* Pricing Column */}
          <div className="md:col-span-5 bg-brand-beige/50 p-6 md:p-10 border-t-4 md:border-t-0 md:border-l-4 border-brand-blue flex flex-col justify-between text-center space-y-6">
            
            <div className="space-y-4">
              <div className="bg-brand-red text-white py-1.5 px-3 rounded-full text-xs font-black uppercase inline-block mx-auto tracking-wider shadow-xs animate-pulse">
                Oferta especial somente nesta página
              </div>

              {/* Price layout */}
              <div className="space-y-1">
                <span className="text-xs text-slate-500 font-extrabold block">De: {pricing.currency} {pricing.originalPrice.toFixed(2).replace('.', ',')}</span>
                <span className="text-xs text-slate-400 block font-medium">Por apenas</span>
                <div className="space-y-0.5">
                  <span className="text-4xl sm:text-5xl font-black text-brand-blue">
                    {pricing.currency} {pricing.promoPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <span className="text-[10px] text-brand-green font-extrabold block uppercase tracking-wide">
                  Economia Real de R$ {(pricing.originalPrice - pricing.promoPrice).toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* CTA action or success display */}
            <div className="space-y-3">
              {!orderAdded ? (
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full py-4 bg-brand-green hover:bg-brand-green/95 text-white font-black text-sm uppercase rounded-2xl shadow-lg transition-transform duration-200 transform hover:-translate-y-0.5 active:translate-y-0 tracking-wider cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-brand-yellow fill-brand-yellow animate-spin" />
                  SIM, QUERO ADICIONAR ESSE PACK
                </button>
              ) : (
                <div className="w-full p-4 bg-neutral-800 text-brand-yellow font-extrabold text-xs sm:text-sm rounded-2xl flex flex-col items-center gap-1">
                  <span>✓ PACK ADICIONADO AO SEU FLUXO!</span>
                  <span className="text-[10px] text-slate-400 font-normal">Sua compra foi liberada! Baixe no final da página.</span>
                </div>
              )}

              <span className="text-[11px] text-slate-500 block font-semibold">
                Acesso imediato após a compra.
              </span>
            </div>

            {/* Mini Trust Badges */}
            <div className="pt-4 border-t border-slate-200/50 flex justify-center gap-4 text-[10px] uppercase text-slate-400 font-bold">
              <span>🔒 SSL Seguro</span>
              <span>⚡ Entrega Vapt-Vupt</span>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Mock Checkout Drawer / Overlay */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white border-4 border-brand-blue rounded-3xl max-w-md w-full p-6 md:p-8 space-y-6 shadow-2xl relative"
          >
            <button 
              onClick={() => setShowCheckout(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 cursor-pointer text-sm font-bold"
            >
              ✕
            </button>

            {/* Logo */}
            <div className="text-center space-y-1">
              <span className="text-[10px] uppercase font-black text-brand-blue bg-brand-yellow border border-brand-blue px-2.5 py-0.5 rounded-full inline-block">
                Provador de Compra
              </span>
              <h3 className="text-lg font-black text-brand-blue">Finalizar Compra Simulado</h3>
              <p className="text-xs text-slate-500">
                Qualquer dado preenchido é válido. Ao comprar, você simula o download dos PDFs prontos na página.
              </p>
            </div>

            {!isSuccess ? (
              <form onSubmit={handleSimulatedCheckout} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-black text-slate-700 block uppercase">Nome Completo do Professor(a):</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria das Dores"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full p-2.5 border-2 border-slate-200 rounded-xl text-xs text-slate-800 font-semibold focus:outline-brand-blue"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black text-slate-700 block uppercase">E-mail para Receber os PDFs:</label>
                  <input
                    type="email"
                    required
                    placeholder="Ex: professora@escola.com"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="w-full p-2.5 border-2 border-slate-200 rounded-xl text-xs text-slate-800 font-semibold focus:outline-brand-blue"
                  />
                </div>

                {/* Simulated Pricing recap */}
                <div className="bg-brand-beige/50 p-3 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-slate-700 block">Pack Copa + São João</span>
                    <span className="text-[10px] text-brand-green font-bold">🏷️ Cupom de 65% Ativado</span>
                  </div>
                  <span className="text-base font-extrabold text-brand-blue">
                    R$ {pricing.promoPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-brand-green hover:bg-brand-green/95 text-white font-black text-xs uppercase rounded-xl shadow-md transition-all cursor-pointer flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Send className="w-4 h-4 animate-bounce" /> Processando Pagamento...
                    </>
                  ) : (
                    <>
                      Confirmar Compra Simulado (R$ {pricing.promoPrice.toFixed(2).replace('.', ',')})
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-4 animate-pulse">
                <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-10 h-10 text-brand-green" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-extrabold text-brand-blue">Parabéns, Professor(a) {buyerName}!</h4>
                  <p className="text-xs text-slate-600">
                    O pagamento simulado foi confirmado! Um e-mail com o recibo de compra foi preparado para <span className="font-bold">{buyerEmail}</span>.
                  </p>
                </div>
                
                <div className="bg-brand-green/15 text-brand-green p-3 rounded-lg border border-brand-green/30 text-xs">
                  🎉 O Pack foi adicionado com sucesso no fluxo! Agora você pode descer até o rodapé ou usar os botões de download rápido.
                </div>

                <button
                  onClick={() => setShowCheckout(false)}
                  className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg text-xs cursor-pointer"
                >
                  Voltar à Página Principal
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}

    </div>
  );
}
