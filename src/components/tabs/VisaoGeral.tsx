"use client";

export function VisaoGeral() {
  return (
    <div className="space-y-6">
      <div className="bg-travertino-50 border border-gold-500/40 border-l-4 border-l-gold-500 p-5 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-gold-700 font-medium">
            Sistema em Fase V1 · Calibração inicial
          </div>
          <p className="mt-1 text-sm text-burgundy-900">
            Os dados operacionais serão alimentados automaticamente pelos agentes
            do ecossistema (Estratégia 1.5).{" "}
            <strong>Configure o CRM para começar.</strong>
          </p>
        </div>
        <button className="bg-burgundy-700 text-gold-100 px-4 py-2 text-xs uppercase tracking-widest hover:bg-burgundy-800">
          Configurar CRM
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <Stat label="Acervo Total" value="—" sub="aguardando primeiro registro" />
        <Stat label="Hoje"         value="—" sub="sem operações registradas" />
        <Stat label="Pendentes"    value="—" sub="sem dados" />
        <Stat label="Despachados"  value="—" sub="sem operações" />
      </div>

      <Card title="Produção do Dia" subtitle="peças processuais geradas pelo ecossistema">
        <div className="grid grid-cols-4 gap-6">
          <Stat label="Peças Geradas"  value="—" sub="no dia" />
          <Stat label="Recursos"       value="—" sub="apelações, agravos" />
          <Stat label="Contestações"   value="—" sub="iniciais" />
          <Stat label="Outras"         value="—" sub="embargos, manifestações" />
        </div>
      </Card>

      <Card title="Tratamento de Processos" subtitle="distribuição entre ecossistema e atuação manual">
        <div className="grid grid-cols-4 gap-6">
          <Stat label="Via Ecossistema" value="—" sub="orquestrador + agentes" />
          <Stat label="Em Bloco"        value="—" sub="lote/batch" />
          <Stat label="Específicos"     value="—" sub="individuais" />
          <Stat label="Manuais"         value="—" sub="fora do ecossistema" />
        </div>
      </Card>

      <Card title="Fluxo de Processos" subtitle="destinos após despacho">
        <div className="grid grid-cols-3 gap-6">
          <Stat label="Remetidos AV"   value="—" sub="armário virtual imediato" />
          <Stat label="Arquivados"     value="—" sub="com autorização Camada 3" />
          <Stat label="Aguardando"     value="—" sub="despacho do Procurador-Chefe" />
        </div>
      </Card>

      <Card title="Eventos do Mês" subtitle="julgamentos, audiências, sustentações, reuniões">
        <div className="grid grid-cols-4 gap-6">
          <Stat label="Julgamentos"   value="—" sub="no mês" />
          <Stat label="Audiências"    value="—" sub="presenciais/virtuais" />
          <Stat label="Sustentações"  value="—" sub="orais" />
          <Stat label="Reuniões"      value="—" sub="institucionais" />
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-6">
        <Card title="Convergência" subtitle="aderência das sugestões à decisão final" decorated>
          <div className="text-sm italic text-gold-700">
            Aguardando primeiras operações registradas
          </div>
        </Card>
        <Card title="Acuidade Operacional" subtitle="medida em uso real">
          <div className="text-sm italic text-gold-700">
            Aguarda o Modo Aprendizado Guiado
          </div>
        </Card>
        <Card title="Acuidade de Desenho" subtitle="completude arquitetural" decorated>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-6xl text-gold-600">96</span>
            <span className="text-2xl text-gold-700">%</span>
          </div>
          <div className="text-xs italic text-gold-700 mt-2">
            quarenta e três diretrizes · vinte e sete despachos canônicos
          </div>
        </Card>
      </div>
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="border-l-2 border-gold-500 pl-4 py-1">
      <div className="text-[10px] uppercase tracking-widest font-medium text-gold-700">
        {label}
      </div>
      <div className="font-serif text-3xl font-light text-burgundy-900 mt-1 tabular-nums">
        {value}
      </div>
      <div className="text-xs italic text-gold-700 mt-1">{sub}</div>
    </div>
  );
}

function Card({
  title,
  subtitle,
  children,
  decorated = false,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  decorated?: boolean;
}) {
  return (
    <div className="bg-travertino-50 border border-travertino-300 relative">
      {decorated && (
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{
            background:
              "linear-gradient(90deg, transparent, #b89968, transparent)",
          }}
        />
      )}
      <div className="px-6 py-3 border-b border-travertino-300">
        <h3 className="heading-serif text-sm text-burgundy-900">{title}</h3>
        {subtitle && (
          <p className="text-xs italic text-gold-700 mt-0.5">{subtitle}</p>
        )}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
