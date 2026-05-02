"use client";

import { VisaoGeral } from "./tabs/VisaoGeral";
import { CRM } from "./tabs/CRM";
import { ComingSoon } from "./tabs/ComingSoon";

export function TabContent({ tabId }: { tabId: string }) {
  const headers: Record<string, { title: string; subtitle: string }> = {
    visao:        { title: "Visão Geral",        subtitle: "Operação · atualizado em tempo real" },
    volume:       { title: "Volume",             subtitle: "Produção semanal e mensal" },
    qualidade:    { title: "Qualidade",          subtitle: "Convergências e divergências" },
    padroes:      { title: "Padrões",            subtitle: "Detecção pelo Curador" },
    prazos:       { title: "Prazos",             subtitle: "Próximos 14 dias" },
    memorias:     { title: "Memórias Diferidas", subtitle: "Obrigações pendentes ativas" },
    crm:          { title: "CRM",                subtitle: "Banco de dados estruturado · 13 abas" },
    calibracao:   { title: "Calibração",         subtitle: "Acuidade operacional projetada" },
    patches:      { title: "Patches",            subtitle: "Histórico versionado" },
    aprendizado:  { title: "Aprendizado",        subtitle: "5 mecanismos ativos" },
    mudancas:     { title: "Mudanças Inst.",     subtitle: "Absorção via patches" },
    ecossistema:  { title: "Ecossistema",        subtitle: "Os 6 agentes" },
    conformidade: { title: "Conformidade",       subtitle: "6 princípios doutrinários" },
    conversar:    { title: "Conversar",          subtitle: "Interlocução com agentes" },
    exportar:     { title: "Exportar",           subtitle: "Relatórios e backups" },
    historico:    { title: "Histórico",          subtitle: "Auditoria de operações" },
  };
  const meta = headers[tabId] ?? { title: tabId, subtitle: "" };

  const renderContent = () => {
    switch (tabId) {
      case "visao": return <VisaoGeral />;
      case "crm":   return <CRM />;
      default:      return <ComingSoon tabName={meta.title} />;
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-baseline mb-8">
        <div>
          <h1 className="heading-serif text-3xl text-burgundy-900">{meta.title}</h1>
          <p className="text-sm italic text-gold-700 mt-1">{meta.subtitle}</p>
        </div>
        <div className="text-right text-xs text-gold-700 italic">
          <div>{new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</div>
          <div className="font-mono mt-1 text-burgundy-900 text-base">
            {new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
          </div>
        </div>
      </div>
      {renderContent()}
    </div>
  );
}
