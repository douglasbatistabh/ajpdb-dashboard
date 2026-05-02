"use client";

import { Sparkles } from "lucide-react";

export function ComingSoon({ tabName }: { tabName: string }) {
  return (
    <div className="bg-travertino-50 border border-travertino-300 p-12 text-center">
      <Sparkles className="w-10 h-10 text-gold-500 mx-auto mb-4" />
      <h3 className="heading-serif text-xl text-burgundy-900 mb-2">
        {tabName}
      </h3>
      <p className="text-sm italic text-gold-700 max-w-md mx-auto">
        Esta aba está sendo construída. A estrutura visual e a paleta autoral já
        estão prontas; em breve será conectada às APIs Google e ao CRM.
      </p>
      <div className="mt-8 inline-block border-l-2 border-gold-500 pl-4 py-1 text-left">
        <div className="text-[10px] uppercase tracking-widest text-gold-700">
          Versão atual
        </div>
        <div className="text-burgundy-900 font-mono text-sm">V1 calibração inicial</div>
      </div>
    </div>
  );
}
