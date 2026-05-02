"use client";

import { useState } from "react";
import { Brasao } from "./Brasao";
import { TabContent } from "./TabContent";
import {
  LayoutDashboard, Activity, ShieldCheck, Brain, Calendar,
  Bookmark, Database, TrendingUp, Package, GraduationCap,
  Building, Network, Award, MessageSquare, FileSpreadsheet,
  History, Search, Bell, Sun, Moon, RefreshCw, LogOut,
} from "lucide-react";

const TABS = [
  { id: "visao",         label: "Visão Geral",        group: "op",  icon: LayoutDashboard },
  { id: "volume",        label: "Volume",             group: "op",  icon: Activity },
  { id: "qualidade",     label: "Qualidade",          group: "op",  icon: ShieldCheck },
  { id: "padroes",       label: "Padrões",            group: "op",  icon: Brain },
  { id: "prazos",        label: "Prazos",             group: "op",  icon: Calendar },
  { id: "memorias",      label: "Memórias Diferidas", group: "op",  icon: Bookmark },
  { id: "crm",           label: "CRM",                group: "op",  icon: Database },
  { id: "calibracao",    label: "Calibração",         group: "ev",  icon: TrendingUp },
  { id: "patches",       label: "Patches",            group: "ev",  icon: Package },
  { id: "aprendizado",   label: "Aprendizado",        group: "ev",  icon: GraduationCap },
  { id: "mudancas",      label: "Mudanças Inst.",     group: "ev",  icon: Building },
  { id: "ecossistema",   label: "Ecossistema",        group: "ev",  icon: Network },
  { id: "conformidade",  label: "Conformidade",       group: "ev",  icon: Award },
  { id: "conversar",     label: "Conversar",          group: "int", icon: MessageSquare },
  { id: "exportar",      label: "Exportar",           group: "int", icon: FileSpreadsheet },
  { id: "historico",     label: "Histórico",          group: "au",  icon: History },
] as const;

const GROUPS = {
  op:  { label: "Operação",   color: "text-burgundy-700" },
  ev:  { label: "Evolução",   color: "text-gold-700" },
  int: { label: "Interativo", color: "text-gold-600" },
  au:  { label: "Auditoria",  color: "text-travertino-700" },
} as const;

export function DashboardShell({
  userName,
  userImage,
  signOutAction,
}: {
  userName: string;
  userImage?: string;
  signOutAction: () => void;
}) {
  const [activeTab, setActiveTab] = useState<string>("visao");
  const [dark, setDark] = useState(false);

  const groupedTabs = (group: keyof typeof GROUPS) =>
    TABS.filter((t) => t.group === group);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-travertino-100 text-burgundy-900 flex">
        {/* SIDEBAR */}
        <aside className="w-64 bg-travertino-50 border-r border-travertino-300 flex flex-col">
          <div className="p-6 border-b border-travertino-300">
            <div className="flex items-center gap-3">
              <Brasao size={44} />
              <div>
                <h1 className="heading-serif text-base text-burgundy-700 leading-tight">
                  Integração
                </h1>
                <h1 className="heading-serif text-base text-burgundy-700 leading-tight italic">
                  AJPDB
                </h1>
              </div>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            {(Object.keys(GROUPS) as Array<keyof typeof GROUPS>).map((g) => (
              <div key={g} className="mb-6">
                <div className={`px-6 mb-2 text-[10px] uppercase tracking-widest font-medium ${GROUPS[g].color}`}>
                  {GROUPS[g].label}
                </div>
                {groupedTabs(g).map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full px-6 py-2 flex items-center gap-3 text-sm transition-colors
                        ${isActive
                          ? "bg-burgundy-700 text-gold-100 border-l-4 border-gold-500"
                          : "text-burgundy-900 hover:bg-travertino-200 border-l-4 border-transparent"}`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </nav>
        </aside>

        {/* MAIN */}
        <div className="flex-1 flex flex-col">
          {/* TOP BAR */}
          <header className="bg-burgundy-900 text-gold-100 px-8 py-4 flex items-center justify-between border-b-4 border-gold-500">
            <div className="flex items-center gap-6">
              <button
                title="Atualizar"
                className="px-3 py-1.5 border border-gold-500/60 text-xs uppercase tracking-widest hover:bg-burgundy-800 flex items-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Atualizar
              </button>
              <button title="Buscar"><Search className="w-4 h-4" /></button>
              <button title="Notificações"><Bell className="w-4 h-4" /></button>
              <button onClick={() => setDark(!dark)} title="Tema">
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <div className="text-xs tracking-widest text-gold-300/70 uppercase">Dashboard</div>
              <div className="heading-serif text-sm tracking-widest text-gold-200">Operacional</div>
              <div className="text-[10px] italic text-gold-400/60 mt-1">Audentes Fortuna Iuvat</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm">{userName}</div>
                <div className="text-[10px] text-gold-400/70">10/338.772-7</div>
              </div>
              {userImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={userImage} alt={userName} className="w-10 h-10 rounded-full" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500" />
              )}
              <form action={signOutAction}>
                <button title="Sair" className="hover:text-gold-300">
                  <LogOut className="w-4 h-4" />
                </button>
              </form>
            </div>
          </header>

          {/* CONTENT */}
          <main className="flex-1 overflow-y-auto p-8">
            <TabContent tabId={activeTab} />
          </main>

          {/* STATUS BAR */}
          <footer className="bg-travertino-50 border-t border-travertino-300 px-8 py-2 text-[10px] text-travertino-700 font-mono flex justify-between">
            <div className="flex gap-6">
              <span>● Drive: conectado</span>
              <span>● Calendar: conectado</span>
              <span>● Sheets: AJPDB CRM</span>
            </div>
            <div className="flex gap-6">
              <span>Polling: 5 min</span>
              <span>Fase: V1 calibração</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
