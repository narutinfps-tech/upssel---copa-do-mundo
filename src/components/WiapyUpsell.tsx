import React, { useEffect } from 'react';

export default function WiapyUpsell() {
  useEffect(() => {
    // Safe lookup for the globally registered initWiapyUpsell function
    let attempts = 0;
    const maxAttempts = 15;

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
        setTimeout(findAndInit, 250);
      }
    };

    findAndInit();
  }, []);

  return (
    <div className="w-full flex justify-center py-6 px-4">
      <div id="wiapy_upsell" className="w-full max-w-xl min-h-[60px] flex justify-center items-center">
        {/* Fallback button when standard script is not executing */}
        <noscript>
          <div className="text-center">
            <a 
              href="https://pay.wiapy.com/checkout/6a1e2e9f1e852dffa3a9eb95"
              className="inline-block px-8 py-3.5 bg-[#00d769] hover:bg-[#00b85a] text-white font-extrabold text-[17px] rounded-[10px] shadow-sm transition-all text-center no-underline uppercase tracking-wide"
            >
              SIM, EU ACEITO ESSA OFERTA
            </a>
          </div>
        </noscript>
      </div>
    </div>
  );
}
