// Metadados das 13 abas do CRM (importável de cliente e servidor)

export const CRM_TABS = [
  { name: "Processos",                cols: 19, label: "Processos" },
  { name: "Despachos",                cols: 19, label: "Despachos" },
  { name: "Memorias",                 cols: 14, label: "Memórias" },
  { name: "Prazos",                   cols: 14, label: "Prazos" },
  { name: "Patches",                  cols: 15, label: "Patches" },
  { name: "Interacoes",               cols: 15, label: "Interações" },
  { name: "Auditoria",                cols: 11, label: "Auditoria" },
  { name: "Padroes",                  cols: 11, label: "Padrões" },
  { name: "Pecas",                    cols: 19, label: "Peças" },
  { name: "Eventos",                  cols: 15, label: "Eventos" },
  { name: "Manuais",                  cols: 11, label: "Manuais" },
  { name: "Mudancas_Institucionais",  cols: 13, label: "Mudanças Institucionais" },
  { name: "Mecanismos_Aprendizado",   cols: 11, label: "Mecanismos de Aprendizado" },
] as const;

export const AJPDB_DRIVE_IDS = {
  raiz_projeto:        "1sOTrmCcarOcltkbbyX701UdsGszgjiJN",
  doc_mestre_pasta:    "1b8PdvwuTFSsAiC9JhXcUghSF_-oCWFGb",
  patches_pasta:       "1Z3H8ujBjNaGmzdjUjySzWhivDoV0yWT6",
  catalogos_pasta:     "1TUaiPSBah8IT80XEOj6NFsgklw-E0hpM",
  backups_pasta:       "1qQutk8Fhlz0LrdhIO50O_IzTaYzPieZJ",
  crm_spreadsheet:     "1TA73X1VS9hk102h3OiONChH7tUAxYHQ4kvkGoG5Iaog",
  calendar_prazos:     "05s3rof2hai9gm96nli0a7k5j8@group.calendar.google.com",
};
