"use client";

import { useState } from "react";
import { CRM_TABS } from "@/lib/crm-meta";
import { ExternalLink, Loader2 } from "lucide-react";

interface SheetData {
  headers: string[];
  rows: string[][];
}

export function CRM() {
  const [activeTab, setActiveTab] = useState<string>(CRM_TABS[0].name);
  const [data, setData] = useState<SheetData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadTab = async (tabName: string) => {
    setActiveTab(tabName);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/crm/${tabName}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(json);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-travertino-50 border border-travertino-300 p-5 flex items-center justify-between">
        <div>
          <h3 className="heading-serif text-lg text-burgundy-900">
            AJPDB CRM · Banco de dados estruturado
          </h3>
          <p className="text-xs italic text-gold-700 mt-1">
            13 abas · 188 colunas · sincronizado em tempo real com Google Sheets
          </p>
        </div>
        <a
          href="https://docs.google.com/spreadsheets/d/1TA73X1VS9hk102h3OiONChH7tUAxYHQ4kvkGoG5Iaog/edit"
          target="_blank"
          rel="noopener"
          className="text-xs uppercase tracking-widest text-burgundy-700 hover:text-burgundy-900 flex items-center gap-2 border border-burgundy-700/30 px-3 py-1.5 hover:bg-travertino-200"
        >
          Abrir no Sheets
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="bg-travertino-50 border border-travertino-300">
        <div className="border-b border-travertino-300 px-2 py-2 flex flex-wrap gap-1">
          {CRM_TABS.map((tab) => (
            <button
              key={tab.name}
              onClick={() => loadTab(tab.name)}
              className={`px-3 py-1.5 text-xs transition-colors ${
                activeTab === tab.name
                  ? "bg-burgundy-700 text-gold-100"
                  : "text-burgundy-900 hover:bg-travertino-200"
              }`}
            >
              {tab.label}
              <span className="ml-1.5 text-[9px] opacity-60">
                {tab.cols}c
              </span>
            </button>
          ))}
        </div>

        <div className="p-6 min-h-[400px]">
          {loading && (
            <div className="flex items-center gap-3 text-gold-700">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm italic">Carregando aba {activeTab}...</span>
            </div>
          )}

          {error && (
            <div className="text-burgundy-700 text-sm">
              <strong>Erro:</strong> {error}
              <p className="text-xs italic text-gold-700 mt-2">
                Verifique se você autorizou acesso ao Google Sheets durante o login.
              </p>
            </div>
          )}

          {!loading && !error && !data && (
            <div className="text-center py-12">
              <p className="text-burgundy-900 mb-2">
                Selecione uma aba acima para carregar os dados
              </p>
              <p className="text-xs italic text-gold-700">
                A planilha original AJPDB CRM está acessível diretamente no Google Sheets pelo botão acima
              </p>
            </div>
          )}

          {!loading && !error && data && (
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-travertino-200 border-b-2 border-gold-500">
                  <tr>
                    {data.headers.map((h, i) => (
                      <th key={i} className="text-left px-3 py-2 uppercase tracking-wider text-[10px] text-burgundy-700 font-medium whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.rows.length === 0 ? (
                    <tr>
                      <td colSpan={data.headers.length} className="text-center py-8 italic text-gold-700">
                        Nenhum registro nesta aba ainda. Cadastre o primeiro processo.
                      </td>
                    </tr>
                  ) : (
                    data.rows.map((row, i) => (
                      <tr key={i} className="border-b border-travertino-200 hover:bg-travertino-100">
                        {row.map((cell, j) => (
                          <td key={j} className="px-3 py-2 text-burgundy-900 whitespace-nowrap">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <div className="mt-4 text-xs italic text-gold-700">
                {data.rows.length} registro{data.rows.length !== 1 ? "s" : ""} · {data.headers.length} colunas
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
