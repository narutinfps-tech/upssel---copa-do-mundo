import React, { useState } from 'react';
import { X, Printer, Check, Star, AlertCircle, RefreshCw } from 'lucide-react';
import { Activity } from '../types';

interface InteractivePreviewProps {
  activity: Activity;
  onClose: () => void;
  onAddToOrder: () => void;
  hasAdded: boolean;
}

export default function InteractivePreview({
  activity,
  onClose,
  onAddToOrder,
  hasAdded
}: InteractivePreviewProps) {
  // Mini-game state based on the selected activity
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [memoryCards, setMemoryCards] = useState<Array<{ id: number; content: string; type: string; isFlipped: boolean; isMatched: boolean }>>(() => {
    // Mini memory game preset for São João
    const items = [
      { id: 1, content: 'Bonfire', type: 'text', isFlipped: false, isMatched: false },
      { id: 2, content: '🔥', type: 'emoji', isFlipped: false, isMatched: false },
      { id: 3, content: 'Straw Hat', type: 'text', isFlipped: false, isMatched: false },
      { id: 4, content: '👒', type: 'emoji', isFlipped: false, isMatched: false },
      { id: 5, content: 'Popcorn', type: 'text', isFlipped: false, isMatched: false },
      { id: 6, content: '🍿', type: 'emoji', isFlipped: false, isMatched: false }
    ].sort(() => Math.random() - 0.5);
    return items;
  });
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [coloringGrid, setColoringGrid] = useState<{ [key: number]: string }>({
    1: '#FFFFFF', 2: '#FFFFFF', 3: '#FFFFFF', 4: '#FFFFFF', 
    5: '#FFFFFF', 6: '#FFFFFF', 7: '#FFFFFF', 8: '#FFFFFF', 9: '#FFFFFF'
  });
  const [activeColor, setActiveColor] = useState<string>('#FFC928'); // Default brand yellow or cyan etc.
  const [isPdfDownloading, setIsPdfDownloading] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);

  // Restart functions
  const restartTrueFalse = () => {
    setAnswers({});
    setQuizScore(null);
  };

  const restartMemoryGame = () => {
    const items = [
      { id: 1, content: 'Bonfire', type: 'text', isFlipped: false, isMatched: false },
      { id: 2, content: '🔥', type: 'emoji', isFlipped: false, isMatched: false },
      { id: 3, content: 'Straw Hat', type: 'text', isFlipped: false, isMatched: false },
      { id: 4, content: '👒', type: 'emoji', isFlipped: false, isMatched: false },
      { id: 5, content: 'Popcorn', type: 'text', isFlipped: false, isMatched: false },
      { id: 6, content: '🍿', type: 'emoji', isFlipped: false, isMatched: false }
    ].sort(() => Math.random() - 0.5);
    setMemoryCards(items);
    setSelectedIndices([]);
  };

  const handleTrueFalse = (qId: string, val: string) => {
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const submitTrueFalse = () => {
    let score = 0;
    if (answers['q1'] === 'false') score++; // Hand ball is not allowed
    if (answers['q2'] === 'true') score++;  // Goal starts with G
    if (answers['q3'] === 'true') score++;  // Champion means campeao
    setQuizScore(score);
  };

  // Memory card click logic
  const handleMemoryCardClick = (idx: number) => {
    if (selectedIndices.length >= 2 || memoryCards[idx].isFlipped || memoryCards[idx].isMatched) return;

    // Flip card
    const updated = [...memoryCards];
    updated[idx].isFlipped = true;
    setMemoryCards(updated);

    const newSelected = [...selectedIndices, idx];
    setSelectedIndices(newSelected);

    if (newSelected.length === 2) {
      const firstCard = memoryCards[newSelected[0]];
      const secondCard = memoryCards[newSelected[1]];

      // Check match: Let's match bonfire (id 1) with 🔥 (id 2) or cards 3 with 4, or 5 with 6
      const isMatch = 
        (firstCard.id === 1 && secondCard.id === 2) || (firstCard.id === 2 && secondCard.id === 1) ||
        (firstCard.id === 3 && secondCard.id === 4) || (firstCard.id === 4 && secondCard.id === 3) ||
        (firstCard.id === 5 && secondCard.id === 6) || (firstCard.id === 6 && secondCard.id === 5);

      setTimeout(() => {
        const nextUpdated = [...memoryCards];
        if (isMatch) {
          nextUpdated[newSelected[0]].isMatched = true;
          nextUpdated[newSelected[1]].isMatched = true;
        } else {
          nextUpdated[newSelected[0]].isFlipped = false;
          nextUpdated[newSelected[1]].isFlipped = false;
        }
        setMemoryCards(nextUpdated);
        setSelectedIndices([]);
      }, 900);
    }
  };

  const simulateDownload = () => {
    setIsPdfDownloading(true);
    setTimeout(() => {
      setIsPdfDownloading(false);
      setPdfDownloaded(true);
      setTimeout(() => setPdfDownloaded(false), 4000);
    }, 1500);
  };

  const matchedCount = memoryCards.filter(c => c.isMatched).length / 2;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
      {/* Container */}
      <div className="bg-brand-beige rounded-2xl shadow-2xl border-4 border-brand-blue max-w-4xl w-full flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
        
        {/* Left Side: Worksheet simulation */}
        <div className="flex-1 bg-white p-6 md:p-8 overflow-y-auto border-b-4 md:border-b-0 md:border-r-4 border-brand-blue">
          
          {/* Simulated Worksheet School Header */}
          <div className="border-2 border-brand-blue rounded-lg p-3 mb-6 bg-slate-50 text-xs text-slate-600 space-y-2">
            <div className="flex justify-between font-bold border-b border-brand-blue pb-2 mb-2 text-brand-blue">
              <span>SCHOOL FOR COOL KIDS</span>
              <span>DATE: ___/___/2026</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-semibold text-brand-blue">STUDENT:</span> ___________________
              </div>
              <div>
                <span className="font-semibold text-brand-blue">CLASS:</span> 3rd Grade (Inglês)
              </div>
            </div>
            <div className="flex justify-between pt-1 font-semibold text-brand-blue text-[11px]">
              <span>Topic: {activity.category} ({activity.type})</span>
              <span className="text-brand-green">★ Worksheet #{activity.id}</span>
            </div>
          </div>

          <h2 className="text-xl font-bold text-brand-blue flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-brand-yellow text-[11px] uppercase rounded-full text-brand-blue border border-brand-blue">
              Atividade Pronta
            </span>
            {activity.title}
          </h2>
          <p className="text-sm text-slate-600 mb-6 font-medium">
            {activity.description}
          </p>

          <hr className="border-t-2 border-dashed border-brand-blue/35 mb-6" />

          {/* Interactive Game Mechanics based on activity id */}
          <div className="p-4 bg-slate-50 rounded-xl border-2 border-slate-200 shadow-inner min-h-[220px]">
            
            {/* 1. True or False Sports Quiz */}
            {activity.id === 'wc-true-false' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-brand-blue text-white rounded-lg px-3 py-1.5 text-xs font-semibold">
                  <span>⚽ Quiz de Futebol Temático</span>
                  <span>Acertos: {quizScore !== null ? `${quizScore}/3` : 'Aguardando'}</span>
                </div>
                
                <div className="space-y-3 pt-2 text-sm text-slate-800">
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    <p className="font-semibold">1. Hand ball is perfectly allowed in football matches.</p>
                    <div className="flex gap-4 mt-2">
                      <button
                        onClick={() => handleTrueFalse('q1', 'true')}
                        className={`px-4 py-1 text-xs font-bold rounded-md border ${answers['q1'] === 'true' ? 'bg-brand-red text-white border-brand-red' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                      >
                        True
                      </button>
                      <button
                        onClick={() => handleTrueFalse('q1', 'false')}
                        className={`px-4 py-1 text-xs font-bold rounded-md border ${answers['q1'] === 'false' ? 'bg-brand-green text-white border-brand-green' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                      >
                        False (Correct!)
                      </button>
                    </div>
                  </div>

                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    <p className="font-semibold">2. The word "GOAL" starts with the letter G.</p>
                    <div className="flex gap-4 mt-2">
                      <button
                        onClick={() => handleTrueFalse('q2', 'true')}
                        className={`px-4 py-1 text-xs font-bold rounded-md border ${answers['q2'] === 'true' ? 'bg-brand-green text-white border-brand-green' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                      >
                        True (Correct!)
                      </button>
                      <button
                        onClick={() => handleTrueFalse('q2', 'false')}
                        className={`px-4 py-1 text-xs font-bold rounded-md border ${answers['q2'] === 'false' ? 'bg-brand-red text-white border-brand-red' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                      >
                        False
                      </button>
                    </div>
                  </div>

                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    <p className="font-semibold">3. Brazilian players always dream of becoming the "CHAMPION" (Campeão).</p>
                    <div className="flex gap-4 mt-2">
                      <button
                        onClick={() => handleTrueFalse('q3', 'true')}
                        className={`px-4 py-1 text-xs font-bold rounded-md border ${answers['q3'] === 'true' ? 'bg-brand-green text-white border-brand-green' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                      >
                        True (Correct!)
                      </button>
                      <button
                        onClick={() => handleTrueFalse('q3', 'false')}
                        className={`px-4 py-1 text-xs font-bold rounded-md border ${answers['q3'] === 'false' ? 'bg-brand-red text-white border-brand-red' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
                      >
                        False
                      </button>
                    </div>
                  </div>
                </div>

                {quizScore === null ? (
                  <button
                    onClick={submitTrueFalse}
                    disabled={Object.keys(answers).length < 3}
                    className="w-full mt-2 py-2 bg-brand-blue hover:bg-brand-blue/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl text-xs uppercase cursor-pointer"
                  >
                    Confirmar Respostas do Aluno
                  </button>
                ) : (
                  <div className="bg-brand-green/15 text-brand-green p-3 rounded-lg border border-brand-green/30 text-xs flex justify-between items-center">
                    <span>🎉 Pontuação: {quizScore} de 3 acertos! Atividade concluída com sucesso.</span>
                    <button onClick={restartTrueFalse} className="text-brand-blue font-bold flex items-center gap-1 hover:underline">
                      <RefreshCw className="w-3.5 h-3.5" /> Recomeçar
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* 2. Memory Cards São João */}
            {activity.id === 'sj-cards' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-brand-blue text-white rounded-lg px-3 py-1.5 text-xs font-semibold">
                  <span>🎊 Jogo da Memória Junino</span>
                  <span>Pares: {matchedCount}/3</span>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  {memoryCards.map((card, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleMemoryCardClick(idx)}
                      style={{ height: '70px' }}
                      className={`font-semibold rounded-lg border-2 flex items-center justify-center p-2 text-sm transition-all duration-300 transform active:scale-95 cursor-pointer select-none ${
                        card.isMatched
                          ? 'bg-brand-green/20 border-brand-green text-brand-green shadow-none'
                          : card.isFlipped
                          ? 'bg-brand-yellow/15 border-brand-yellow text-slate-800 font-bold scale-102'
                          : 'bg-gradient-to-br from-brand-blue to-blue-900 border-indigo-900 text-white shadow-md'
                      }`}
                    >
                      {card.isMatched || card.isFlipped ? (
                        <div className="text-center">
                          <p className={card.type === 'emoji' ? 'text-2xl' : 'text-xs'}>{card.content}</p>
                          {card.isMatched && <span className="text-[9px] block text-brand-green font-bold">Matched!</span>}
                        </div>
                      ) : (
                        <span className="text-lg font-bold text-brand-yellow">？</span>
                      )}
                    </button>
                  ))}
                </div>

                {matchedCount === 3 ? (
                  <div className="bg-brand-green/15 text-brand-green p-3 rounded-lg border border-brand-green/30 text-xs flex justify-between items-center">
                    <span>🏆 Espetacular! Todos os pares juninos foram combinados!</span>
                    <button onClick={restartMemoryGame} className="text-brand-blue font-bold flex items-center gap-1 hover:underline">
                      <RefreshCw className="w-3.5 h-3.5" /> Embaralhar
                    </button>
                  </div>
                ) : (
                  <p className="text-[11px] text-slate-500 text-center italic">
                    Dica: Encontre as traduções (ex: Bonfire correponde à fogueira 🔥)
                  </p>
                )}
              </div>
            )}

            {/* 3. Color by Code Soccer Ball */}
            {activity.id === 'wc-color-code' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-brand-blue text-white rounded-lg px-3 py-1.5 text-xs font-semibold">
                  <span>🎨 Color by Code (Pintar por Números)</span>
                  <span>Toque na cor, depois no quadrado</span>
                </div>

                {/* Color Palette Picker */}
                <div className="flex justify-center gap-3 py-2 border-b border-slate-200">
                  {[
                    { hex: '#FFC928', name: '1: Yellow' },
                    { hex: '#0B2E6D', name: '2: Blue' },
                    { hex: '#1E9B4B', name: '3: Green' },
                    { hex: '#E6392E', name: '4: Red' }
                  ].map((color) => (
                    <button
                      key={color.hex}
                      onClick={() => setActiveColor(color.hex)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold transition-transform cursor-pointer ${
                        activeColor === color.hex ? 'scale-110 shadow-md ring-2 ring-slate-800' : 'opacity-85 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: color.hex, color: color.hex === '#FFC928' ? '#1F1F1F' : '#FFFFFF' }}
                    >
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>

                {/* Drawing grids */}
                <div className="flex flex-col items-center justify-center py-2">
                  <div className="grid grid-cols-3 gap-2 bg-slate-200 p-2 rounded-lg border border-slate-300">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
                      // target hints
                      // lets make a pattern like: 1 (yellow) for corners, 3 (green) for cross, 2 (blue) center
                      const targetCode = num === 5 ? '2' : (num % 2 === 0 ? '3' : '1');
                      const bgStyle = coloringGrid[num];
                      return (
                        <button
                          key={num}
                          onClick={() => {
                            setColoringGrid(prev => ({ ...prev, [num]: activeColor }));
                          }}
                          className="w-12 h-12 rounded border border-slate-300 flex flex-col items-center justify-center font-bold text-slate-500 hover:brightness-95 transition-all text-xs cursor-pointer overflow-hidden shadow-xs"
                          style={{ backgroundColor: bgStyle }}
                        >
                          <span className="text-[9px] text-slate-400">Code</span>
                          <span className="text-sm text-slate-800">{targetCode}</span>
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 italic text-center">
                    Crie uma linda camisa ou padrão temático! A versão para impressão vem com ilustrações exclusivas em alta resolução.
                  </p>
                </div>
              </div>
            )}

            {/* 4. Word search & Others - Default Interactive Vocabulary */}
            {activity.id !== 'wc-true-false' && activity.id !== 'sj-cards' && activity.id !== 'wc-color-code' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-brand-blue text-white rounded-lg px-3 py-1.5 text-xs font-semibold">
                  <span>📖 Vocabulário Interativo do Exercício</span>
                  <span>Temático de {activity.category}</span>
                </div>

                <div className="text-slate-700 text-sm py-2">
                  <p className="font-semibold mb-3">Instruções: Escreva a tradução de cada palavra-chave em inglês do pack:</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {activity.category === 'Copa do Mundo' ? (
                      <>
                        <div className="flex flex-col">
                          <label className="text-xs font-bold text-slate-500 mb-1">⚽ SOCCER BALL</label>
                          <input
                            type="text"
                            placeholder="Resposta..."
                            value={answers['w1'] || ''}
                            onChange={(e) => setAnswers(prev => ({ ...prev, 'w1': e.target.value }))}
                            className="p-2 border border-slate-300 rounded bg-white text-xs text-brand-blue font-bold focus:outline-brand-blue"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="text-xs font-bold text-slate-500 mb-1">🏆 TROPHY</label>
                          <input
                            type="text"
                            placeholder="Resposta..."
                            value={answers['w2'] || ''}
                            onChange={(e) => setAnswers(prev => ({ ...prev, 'w2': e.target.value }))}
                            className="p-2 border border-slate-300 rounded bg-white text-xs text-brand-blue font-bold focus:outline-brand-blue"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col">
                          <label className="text-xs font-bold text-slate-500 mb-1">🔥 BONFIRE</label>
                          <input
                            type="text"
                            placeholder="Resposta..."
                            value={answers['w3'] || ''}
                            onChange={(e) => setAnswers(prev => ({ ...prev, 'w3': e.target.value }))}
                            className="p-2 border border-slate-300 rounded bg-white text-xs text-brand-blue font-bold focus:outline-brand-blue"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="text-xs font-bold text-slate-500 mb-1">🍿 POPCORN</label>
                          <input
                            type="text"
                            placeholder="Resposta..."
                            value={answers['w4'] || ''}
                            onChange={(e) => setAnswers(prev => ({ ...prev, 'w4': e.target.value }))}
                            className="p-2 border border-slate-300 rounded bg-white text-xs text-brand-blue font-bold focus:outline-brand-blue"
                          />
                        </div>
                      </>
                    )}
                  </div>

                  <div className="mt-4 p-3 bg-brand-yellow/10 rounded-lg border border-brand-yellow/30 text-xs flex gap-2">
                    <AlertCircle className="w-5 h-5 text-brand-blue shrink-0" />
                    <span>
                      {activity.category === 'Copa do Mundo' 
                        ? 'Dica do Professor: "Soccer ball" significa bola de futebol; "Trophy" significa troféu.' 
                        : 'Dica do Professor: "Bonfire" significa fogueira; "Popcorn" significa pipoca.'}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PDF Mock download button */}
          <div className="mt-6 flex flex-wrap gap-3 items-center justify-between bg-slate-100 p-4 rounded-xl border border-slate-200">
            <div className="text-xs text-slate-500">
              <p className="font-semibold text-slate-700">Visualizar Páginas Completas</p>
              <p>Este pack possui {activity.pageCount} páginas em formato A4 (.pdf)</p>
            </div>
            
            <button
              onClick={simulateDownload}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all transform active:scale-95 cursor-pointer ${
                pdfDownloaded 
                  ? 'bg-neutral-800 text-white' 
                  : 'bg-brand-blue hover:bg-brand-blue/90 text-white'
              }`}
              disabled={isPdfDownloading}
            >
              <Printer className="w-4 h-4" />
              {isPdfDownloading ? 'Gerando Amostra...' : pdfDownloaded ? '✓ Baixado com Sucesso!' : 'Imprimir Amostra de Teste'}
            </button>
          </div>

          {pdfDownloaded && (
            <div className="mt-2 text-[11px] text-brand-green bg-green-50 rounded p-2 text-center font-semibold border border-brand-green/20 animate-fade-in">
              📄 Download Simulado de Amostra Concluído! O arquivo PDF real com {activity.pageCount} páginas está incluso no download do Pack Completo.
            </div>
          )}

        </div>

        {/* Right Side: Upsell Sidebar Info */}
        <div className="w-full md:w-80 bg-brand-blue p-6 md:p-8 text-white flex flex-col justify-between">
          <div className="space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-yellow text-brand-blue text-xs font-bold rounded-full uppercase">
              <Star className="w-3.5 h-3.5 fill-brand-blue" />
              Oferta Especial de Upsell
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-350 font-bold">Incluso no Pack</p>
              <h3 className="text-lg font-bold leading-tight mt-1 text-brand-yellow">
                2 Temas Atividades Temáticas em Inglês
              </h3>
              <p className="text-xs text-slate-200 mt-2">
                Garanta o combo **Copa do Mundo + São João** imediatamente no mesmo pedido.
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <div className="bg-brand-green p-0.5 rounded-full text-white text-xs mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>Material em PDF pronto para imprimir</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-brand-green p-0.5 rounded-full text-white text-xs mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>Atividades com gabarito completo</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-brand-green p-0.5 rounded-full text-white text-xs mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>Licença para uso em sala de aula comercial</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-brand-green p-0.5 rounded-full text-white text-xs mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>Acesso imediato no painel de compras</span>
              </li>
            </ul>

            {/* Price indicator in sidebar */}
            <div className="bg-white/10 p-4 rounded-xl border border-white/15 text-center">
              <span className="text-[10px] text-slate-300 block uppercase font-bold">Preço de oportunidade única</span>
              <div className="flex items-baseline justify-center gap-2 mt-1">
                <span className="text-xs text-slate-300 line-through">R$ 57,00</span>
                <span className="text-xl font-extrabold text-brand-yellow">R$ 19,90</span>
              </div>
              <span className="text-[10px] text-brand-green bg-white rounded px-2 py-0.5 font-bold inline-block mt-2">
                Economize 65% Hoje
              </span>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-white/20 space-y-3">
            <a
              href="https://pay.wiapy.com/9rccEpBlqd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-brand-green hover:bg-brand-green/95 text-white text-xs font-bold rounded-xl shadow-lg hover:shadow-xl transition-all uppercase tracking-wider transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center block no-underline"
            >
              Adicionar ao meu Pedido
            </a>

            <button
              onClick={onClose}
              className="w-full text-center text-xs text-slate-300 hover:text-white transition-colors underline cursor-pointer"
            >
              Fechar prévia de teste
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
