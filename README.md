# Integração AJPDB · Dashboard Operacional

> Identidade autoral · Douglas Alexander Batista · abril/2026
> OAB/RJ 249.653 · Mat. PGM-Rio 10/338.772-7

Dashboard operacional do ecossistema multi-agente Integração AJPDB.
Stack moderna: Next.js 15 + React 19 + Tailwind CSS + NextAuth v5 + Google APIs.

## Stack

- **Next.js 15** (App Router, React 19)
- **TypeScript** strict mode
- **Tailwind CSS** com paleta autoral nativa (bordeaux + ouro velho + travertino)
- **NextAuth v5** com Google OAuth restrito ao email do procurador
- **googleapis** para integração com Sheets, Drive e Calendar
- **Recharts** para visualizações
- **Lucide React** para ícones

## Setup local

```bash
git clone https://github.com/douglasbatistabh/ajpdb-dashboard
cd ajpdb-dashboard
npm install
cp .env.example .env.local
# preencha .env.local com as credenciais
npm run dev
# abre em http://localhost:3000
```

## Deploy na Vercel

1. Conecte o repositório no painel da Vercel
2. Adicione as variáveis de ambiente:
   - `AUTH_SECRET` (gerar com `openssl rand -base64 32`)
   - `AUTH_GOOGLE_ID`
   - `AUTH_GOOGLE_SECRET`
3. Em **Google Cloud Console** → OAuth Client ID, adicione o redirect URI:
   `https://ajpdb-dashboard.vercel.app/api/auth/callback/google`
4. Deploy automático em cada push para `main`

## Estrutura

```
src/
  app/
    api/auth/[...nextauth]/   # NextAuth handlers
    api/crm/[tab]/             # API para ler abas do Sheets CRM
    login/                     # Página de login
    page.tsx                   # Dashboard (com auth)
    layout.tsx                 # Layout root
    globals.css                # Tailwind + fonts
  components/
    Brasao.tsx                 # Logo SVG inline
    DashboardShell.tsx         # Sidebar + topbar + layout
    TabContent.tsx             # Roteador entre abas
    tabs/
      VisaoGeral.tsx           # Aba principal
      CRM.tsx                  # 13 abas do Sheets
      ComingSoon.tsx           # Placeholder demais abas
  lib/
    palette.ts                 # Paleta exportada
    crm-meta.ts                # Metadados das abas (cliente)
    google.ts                  # APIs Google (server-only)
  auth.ts                      # Config NextAuth
```

## Paleta autoral

Cores principais (definidas em `tailwind.config.ts`):

- **Bordeaux** `#5e1a22` — cor de marca
- **Ouro velho** `#b89968` — accent
- **Travertino** `#f0e6d2` — fundo
- **Verde-oliva** `#5a6b3e` — sucesso

## Acesso

Apenas o email autorizado pode logar (configurado em `src/auth.ts`).
Atualmente: `douglas.batista.bh@gmail.com`

## Recursos do Drive

- **Pasta raiz**: `1sOTrmCcarOcltkbbyX701UdsGszgjiJN`
- **Doc Mestre**: pasta `1b8PdvwuTFSsAiC9JhXcUghSF_-oCWFGb`
- **CRM Sheets**: `1TA73X1VS9hk102h3OiONChH7tUAxYHQ4kvkGoG5Iaog`
- **Calendar prazos**: `05s3rof2hai9gm96nli0a7k5j8@group.calendar.google.com`

## Licença

Propriedade intelectual de Douglas Alexander Batista.
Lei nº 9.610/1998 (Direitos Autorais) e Lei nº 9.609/1998 (Software).
