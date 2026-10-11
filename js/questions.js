/* ==========================================================================
   LULA OU FLAVIO — Banco de 100 perguntas
   Baseado nos Planos de Governo registrados no TSE (Eleições 2026)

   Estrutura de cada pergunta:
   - id:        número único (1-100)
   - category:  tema da pergunta
   - candidate: quem DEFENDE a posição descrita ('lula' | 'flavio')
   - text:      pergunta exibida (responda SIM = concorda / NAO = discorda)
   - source:    fonte genérica — NÃO revela o candidato no jogo

   Pontuação (spec §5.1):
   - SIM  → ponto para quem defende a posição descrita
   - NAO  → ponto para o adversário
   ========================================================================== */

const QUESTIONS = [
  /* ========================================================================
     1 · SEGURANÇA PÚBLICA — 10 perguntas (5 Lula + 5 Flávio)
     ======================================================================== */
  { id: 1,  category: 'Segurança Pública', candidate: 'lula',   text: 'Manter o controle e a restrição do porte de armas de fogo no país?', source: 'Diretrizes de segurança pública' },
  { id: 2,  category: 'Segurança Pública', candidate: 'lula',   text: 'Criar uma política nacional de redução da letalidade policial e de enfrentamento ao racismo institucional?', source: 'Diretrizes de segurança pública' },
  { id: 3,  category: 'Segurança Pública', candidate: 'lula',   text: 'Priorizar a inteligência, a investigação e a prevenção em vez de ampliar o encarceramento?', source: 'Diretrizes de segurança pública' },
  { id: 4,  category: 'Segurança Pública', candidate: 'lula',   text: 'Integrar as polícias estaduais e federais no combate ao crime organizado?', source: 'Diretrizes de segurança pública' },
  { id: 5,  category: 'Segurança Pública', candidate: 'lula',   text: 'Criar programas de prevenção à violência e de inclusão social em territórios vulneráveis?', source: 'Diretrizes de segurança pública' },
  { id: 6,  category: 'Segurança Pública', candidate: 'flavio', text: 'Reduzir a maioridade penal de 18 para 16 anos?', source: 'Diretrizes de segurança pública' },
  { id: 7,  category: 'Segurança Pública', candidate: 'flavio', text: 'Construir mais presídios e restringir a progressão de pena para crimes violentos?', source: 'Diretrizes de segurança pública' },
  { id: 8,  category: 'Segurança Pública', candidate: 'flavio', text: 'Ampliar o porte de armas para a população civil?', source: 'Diretrizes de segurança pública' , featured: true },
  { id: 9,  category: 'Segurança Pública', candidate: 'flavio', text: 'Criar tropas de elite nas fronteiras para combater o narcotráfico?', source: 'Diretrizes de segurança pública' },
  { id: 10, category: 'Segurança Pública', candidate: 'flavio', text: 'Responsabilizar adolescentes que cometem crimes graves como adultos?', source: 'Diretrizes de segurança pública' },

  /* ========================================================================
     2 · EDUCAÇÃO — 10 perguntas (5 Lula + 5 Flávio)
     ======================================================================== */
  { id: 11, category: 'Educação', candidate: 'lula',   text: 'Ampliar a oferta de creches e pré-escolas públicas gratuitas?', source: 'Diretrizes de educação' },
  { id: 12, category: 'Educação', candidate: 'lula',   text: 'Aumentar o investimento em universidades públicas e em bolsas de pesquisa?', source: 'Diretrizes de educação' },
  { id: 13, category: 'Educação', candidate: 'lula',   text: 'Manter e ampliar os programas de alfabetização na idade certa?', source: 'Diretrizes de educação' },
  { id: 14, category: 'Educação', candidate: 'lula',   text: 'Garantir recursos para a formação continuada dos professores da rede pública?', source: 'Diretrizes de educação' },
  { id: 15, category: 'Educação', candidate: 'lula',   text: 'Ampliar a educação em tempo integral nas escolas públicas?', source: 'Diretrizes de educação' },
  { id: 16, category: 'Educação', candidate: 'flavio', text: 'Criar escolas cívico-militares (escolas públicas com disciplina e gestão de militares) em todo o país?', source: 'Diretrizes de educação' },
  { id: 17, category: 'Educação', candidate: 'flavio', text: 'Adotar o método fônico na alfabetização das crianças (ensinar a ler pelo som de cada letra)?', source: 'Diretrizes de educação' },
  { id: 18, category: 'Educação', candidate: 'flavio', text: 'Combater a doutrinação ideológica nas escolas públicas (evitar que professores imponham opiniões políticas em sala de aula)?', source: 'Diretrizes de educação' },
  { id: 19, category: 'Educação', candidate: 'flavio', text: 'Criar vouchers educacionais para famílias sem vaga na rede pública?', source: 'Diretrizes de educação' },
  { id: 20, category: 'Educação', candidate: 'flavio', text: 'Ampliar o ensino técnico profissionalizante voltado ao mercado de trabalho?', source: 'Diretrizes de educação' },

  /* ========================================================================
     3 · SAÚDE — 10 perguntas (5 Lula + 5 Flávio)
     ======================================================================== */
  { id: 21, category: 'Saúde', candidate: 'lula',   text: 'Fortalecer o SUS (Sistema Único de Saúde, o atendimento público de saúde do Brasil)?', source: 'Diretrizes de saúde' },
  { id: 22, category: 'Saúde', candidate: 'lula',   text: 'Aumentar o financiamento federal da saúde pública?', source: 'Diretrizes de saúde' },
  { id: 23, category: 'Saúde', candidate: 'lula',   text: 'Ampliar a produção nacional de vacinas e medicamentos?', source: 'Diretrizes de saúde' },
  { id: 24, category: 'Saúde', candidate: 'lula',   text: 'Garantir atendimento odontológico e de saúde mental pelo SUS (Sistema Único de Saúde)?', source: 'Diretrizes de saúde' },
  { id: 25, category: 'Saúde', candidate: 'lula',   text: 'Ampliar a atenção básica e o atendimento de saúde nas comunidades?', source: 'Diretrizes de saúde' },
  { id: 26, category: 'Saúde', candidate: 'flavio', text: 'Criar um prontuário eletrônico único nacional (histórico de saúde do paciente acessível em qualquer hospital do país)?', source: 'Diretrizes de saúde' },
  { id: 27, category: 'Saúde', candidate: 'flavio', text: 'Usar inteligência artificial no atendimento da saúde pública?', source: 'Diretrizes de saúde' },
  { id: 28, category: 'Saúde', candidate: 'flavio', text: 'Digitalizar e zerar as filas do INSS (órgão que paga aposentadorias e benefícios) com tecnologia?', source: 'Diretrizes de saúde' },
  { id: 29, category: 'Saúde', candidate: 'flavio', text: 'Priorizar a saúde preventiva em vez do tratamento curativo?', source: 'Diretrizes de saúde' },
  { id: 30, category: 'Saúde', candidate: 'flavio', text: 'Criar programas de atendimento domiciliar para idosos dependentes?', source: 'Diretrizes de saúde' },

  /* ========================================================================
     4 · ECONOMIA & TRIBUTOS — 15 perguntas (7 Lula + 8 Flávio)
     ======================================================================== */
  { id: 31, category: 'Economia & Tributos', candidate: 'lula',   text: 'Aumentar a tributação sobre a renda dos super-ricos e grandes fortunas?', source: 'Diretrizes econômicas' },
  { id: 32, category: 'Economia & Tributos', candidate: 'lula',   text: 'Taxar o dinheiro de brasileiros guardado em paraísos fiscais no exterior?', source: 'Diretrizes econômicas' },
  { id: 33, category: 'Economia & Tributos', candidate: 'lula',   text: 'Manter e fortalecer a CLT (carteira de trabalho assinada) e os direitos trabalhistas?', source: 'Diretrizes econômicas' },
  { id: 34, category: 'Economia & Tributos', candidate: 'lula',   text: 'Manter o salário mínimo com reajuste acima da inflação?', source: 'Diretrizes econômicas' },
  { id: 35, category: 'Economia & Tributos', candidate: 'lula',   text: 'Fortalecer os sindicatos e a negociação coletiva dos trabalhadores?', source: 'Diretrizes econômicas' },
  { id: 36, category: 'Economia & Tributos', candidate: 'lula',   text: 'Manter as contas do governo em dia (gastar só o que arrecada) sem cortar os investimentos em saúde, educação e programas sociais?', source: 'Diretrizes econômicas' },
  { id: 37, category: 'Economia & Tributos', candidate: 'lula',   text: 'Manter e ampliar programas de transferência de renda como o Bolsa Família?', source: 'Diretrizes econômicas' , featured: true },
  { id: 38, category: 'Economia & Tributos', candidate: 'flavio', text: 'Reduzir os impostos sobre o consumo para baixar os preços?', source: 'Diretrizes econômicas' },
  { id: 39, category: 'Economia & Tributos', candidate: 'flavio', text: 'Simplificar a conta de luz, eliminando taxas e encargos ocultos?', source: 'Diretrizes econômicas' },
  { id: 40, category: 'Economia & Tributos', candidate: 'flavio', text: 'Reduzir o custo do trabalho para as empresas contratarem mais?', source: 'Diretrizes econômicas' },
  { id: 41, category: 'Economia & Tributos', candidate: 'flavio', text: 'Priorizar o trabalhador individual em relação aos sindicatos?', source: 'Diretrizes econômicas' },
  { id: 42, category: 'Economia & Tributos', candidate: 'flavio', text: 'Reduzir o tamanho da máquina pública com uma reforma administrativa?', source: 'Diretrizes econômicas' },
  { id: 43, category: 'Economia & Tributos', candidate: 'flavio', text: 'Zerar o déficit público para reduzir juros e inflação?', source: 'Diretrizes econômicas' },
  { id: 44, category: 'Economia & Tributos', candidate: 'flavio', text: 'Facilitar o crédito para pequenos empreendedores com juros menores?', source: 'Diretrizes econômicas' },
  { id: 45, category: 'Economia & Tributos', candidate: 'flavio', text: 'Combater fraudes no INSS (órgão que paga aposentadorias) e nos auxílios sociais com auditoria rigorosa?', source: 'Diretrizes econômicas' },

  /* ========================================================================
     5 · MEIO AMBIENTE & ENERGIA — 10 perguntas (5 Lula + 5 Flávio)
     ======================================================================== */
  { id: 46, category: 'Meio Ambiente & Energia', candidate: 'lula',   text: 'Combater o desmatamento ilegal na Amazônia com fiscalização reforçada?', source: 'Diretrizes ambientais' , featured: true },
  { id: 47, category: 'Meio Ambiente & Energia', candidate: 'lula',   text: 'Expandir as energias solar e eólica no país?', source: 'Diretrizes ambientais' },
  { id: 48, category: 'Meio Ambiente & Energia', candidate: 'lula',   text: 'Fortalecer a agricultura familiar e a agroecologia?', source: 'Diretrizes ambientais' },
  { id: 49, category: 'Meio Ambiente & Energia', candidate: 'lula',   text: 'Proteger terras indígenas e quilombolas contra invasões e garimpo ilegal?', source: 'Diretrizes ambientais' },
  { id: 50, category: 'Meio Ambiente & Energia', candidate: 'lula',   text: 'Criar um fundo nacional para reparação de danos ambientais?', source: 'Diretrizes ambientais' },
  { id: 51, category: 'Meio Ambiente & Energia', candidate: 'flavio', text: 'Regulamentar a exploração mineral em novas áreas, incluindo terras indígenas?', source: 'Diretrizes ambientais' },
  { id: 52, category: 'Meio Ambiente & Energia', candidate: 'flavio', text: 'Reduzir a burocracia do licenciamento ambiental para obras de infraestrutura?', source: 'Diretrizes ambientais' },
  { id: 53, category: 'Meio Ambiente & Energia', candidate: 'flavio', text: 'Explorar gás de xisto para aumentar a produção de energia do país?', source: 'Diretrizes ambientais' },
  { id: 54, category: 'Meio Ambiente & Energia', candidate: 'flavio', text: 'Tratar o meio ambiente como ativo econômico para gerar riqueza?', source: 'Diretrizes ambientais' },
  { id: 55, category: 'Meio Ambiente & Energia', candidate: 'flavio', text: 'Reduzir encargos e taxas da energia para baratear a conta de luz?', source: 'Diretrizes ambientais' },

  /* ========================================================================
     6 · DIREITOS SOCIAIS — 10 perguntas (5 Lula + 5 Flávio)
     ======================================================================== */
  { id: 56, category: 'Direitos Sociais', candidate: 'lula',   text: 'Ampliar as cotas raciais e sociais nas universidades públicas?', source: 'Diretrizes sociais' },
  { id: 57, category: 'Direitos Sociais', candidate: 'lula',   text: 'Criar políticas públicas específicas para a população LGBTQIA+ (lésbicas, gays, bissexuais, trans e outras minorias)?', source: 'Diretrizes sociais' , featured: true },
  { id: 58, category: 'Direitos Sociais', candidate: 'lula',   text: 'Fortalecer a igualdade salarial entre homens e mulheres?', source: 'Diretrizes sociais' },
  { id: 59, category: 'Direitos Sociais', candidate: 'lula',   text: 'Ampliar o acesso à moradia popular e à regularização fundiária?', source: 'Diretrizes sociais' , featured: true },
  { id: 60, category: 'Direitos Sociais', candidate: 'lula',   text: 'Criar um plano nacional de enfrentamento à fome e à pobreza extrema?', source: 'Diretrizes sociais' , featured: true },
  { id: 61, category: 'Direitos Sociais', candidate: 'flavio', text: 'Criar uma central de atendimento com aplicativo de denúncia para proteger mulheres?', source: 'Diretrizes sociais' },
  { id: 62, category: 'Direitos Sociais', candidate: 'flavio', text: 'Adotar tolerância zero para o feminicídio, com penas mais rigorosas?', source: 'Diretrizes sociais' },
  { id: 63, category: 'Direitos Sociais', candidate: 'flavio', text: 'Oferecer bônus de internet para mulheres vítimas de violência doméstica?', source: 'Diretrizes sociais' },
  { id: 64, category: 'Direitos Sociais', candidate: 'flavio', text: 'Priorizar a capacitação profissional para mulheres chefes de família?', source: 'Diretrizes sociais' },
  { id: 65, category: 'Direitos Sociais', candidate: 'flavio', text: 'Criar um programa de casa segura para mulheres em situação de risco?', source: 'Diretrizes sociais' },

  /* ========================================================================
     7 · SOBERANIA & RELAÇÕES INTERNACIONAIS — 10 perguntas (5 Lula + 5 Flávio)
     ======================================================================== */
  { id: 66, category: 'Soberania & Relações Internacionais', candidate: 'lula',   text: 'Fortalecer o BRICS (grupo de países emergentes, como China e Rússia)?', source: 'Diretrizes de política externa' },
  { id: 67, category: 'Soberania & Relações Internacionais', candidate: 'lula',   text: 'Manter uma política externa independente, sem alinhamento automático aos EUA?', source: 'Diretrizes de política externa' },
  { id: 68, category: 'Soberania & Relações Internacionais', candidate: 'lula',   text: 'Investir em cooperação técnica com países da África e da América Latina?', source: 'Diretrizes de política externa' },
  { id: 69, category: 'Soberania & Relações Internacionais', candidate: 'lula',   text: 'Defender o multilateralismo e o fortalecimento da ONU (Organização das Nações Unidas)?', source: 'Diretrizes de política externa' },
  { id: 70, category: 'Soberania & Relações Internacionais', candidate: 'lula',   text: 'Manter relações comerciais e diplomáticas com a China e a Rússia?', source: 'Diretrizes de política externa' },
  { id: 71, category: 'Soberania & Relações Internacionais', candidate: 'flavio', text: 'Aproximar o Brasil dos Estados Unidos e de alianças ocidentais?', source: 'Diretrizes de política externa' },
  { id: 72, category: 'Soberania & Relações Internacionais', candidate: 'lula', text: 'Priorizar acordos comerciais que protejam a indústria nacional?', source: 'Diretrizes de política externa' },
  { id: 73, category: 'Soberania & Relações Internacionais', candidate: 'flavio', text: 'Conduzir a política externa com foco comercial e não ideológico?', source: 'Diretrizes de política externa' },
  { id: 74, category: 'Soberania & Relações Internacionais', candidate: 'flavio', text: 'Fortalecer as Forças Armadas para garantir a soberania nas fronteiras?', source: 'Diretrizes de política externa' },
  { id: 75, category: 'Soberania & Relações Internacionais', candidate: 'flavio', text: 'Cobrar reciprocidade comercial de países que taxam produtos brasileiros?', source: 'Diretrizes de política externa' },

  /* ========================================================================
     8 · INFRAESTRUTURA & TECNOLOGIA — 10 perguntas (5 Lula + 5 Flávio)
     ======================================================================== */
  { id: 76, category: 'Infraestrutura & Tecnologia', candidate: 'lula',   text: 'Ampliar os investimentos públicos em obras de infraestrutura, como o Novo PAC (programa de obras do governo)?', source: 'Diretrizes de infraestrutura' },
  { id: 77, category: 'Infraestrutura & Tecnologia', candidate: 'lula',   text: 'Investir em tecnologia nacional e na produção de semicondutores (chips de celular e computador)?', source: 'Diretrizes de infraestrutura' },
  { id: 78, category: 'Infraestrutura & Tecnologia', candidate: 'lula',   text: 'Ampliar a conectividade e a inclusão digital nas escolas públicas?', source: 'Diretrizes de infraestrutura' },
  { id: 79, category: 'Infraestrutura & Tecnologia', candidate: 'lula',   text: 'Investir em pesquisa científica e inovação nas universidades e institutos?', source: 'Diretrizes de infraestrutura' },
  { id: 80, category: 'Infraestrutura & Tecnologia', candidate: 'lula',   text: 'Expandir o saneamento básico e o acesso à água potável?', source: 'Diretrizes de infraestrutura' },
  { id: 81, category: 'Infraestrutura & Tecnologia', candidate: 'flavio', text: 'Tratar a internet como infraestrutura essencial, como água e energia?', source: 'Diretrizes de infraestrutura' },
  { id: 82, category: 'Infraestrutura & Tecnologia', candidate: 'flavio', text: 'Digitalizar todos os serviços públicos federais?', source: 'Diretrizes de infraestrutura' },
  { id: 83, category: 'Infraestrutura & Tecnologia', candidate: 'flavio', text: 'Usar inteligência artificial para melhorar e agilizar os serviços públicos?', source: 'Diretrizes de infraestrutura' },
  { id: 84, category: 'Infraestrutura & Tecnologia', candidate: 'flavio', text: 'Reduzir a burocracia para abrir empresas e negócios?', source: 'Diretrizes de infraestrutura' },
  { id: 85, category: 'Infraestrutura & Tecnologia', candidate: 'flavio', text: 'Investir em ferrovias, hidrovias e logística para reduzir custos de transporte?', source: 'Diretrizes de infraestrutura' },

  /* ========================================================================
     9 · CULTURA, ESPORTE & LAZER — 7 perguntas (4 Lula + 3 Flávio)
     ======================================================================== */
  { id: 86, category: 'Cultura, Esporte & Lazer', candidate: 'lula',   text: 'Manter e ampliar as leis de incentivo à cultura?', source: 'Diretrizes de cultura e esporte' },
  { id: 87, category: 'Cultura, Esporte & Lazer', candidate: 'lula',   text: 'Investir no esporte de base e no lazer nas comunidades e escolas?', source: 'Diretrizes de cultura e esporte' },
  { id: 88, category: 'Cultura, Esporte & Lazer', candidate: 'lula',   text: 'Fortalecer o turismo cultural e comunitário?', source: 'Diretrizes de cultura e esporte' },
  { id: 89, category: 'Cultura, Esporte & Lazer', candidate: 'lula',   text: 'Garantir financiamento público para a cultura e os artistas?', source: 'Diretrizes de cultura e esporte' },
  { id: 90, category: 'Cultura, Esporte & Lazer', candidate: 'flavio', text: 'Ampliar a prática esportiva nas escolas, formando atletas desde cedo?', source: 'Diretrizes de cultura e esporte' },
  { id: 91, category: 'Cultura, Esporte & Lazer', candidate: 'flavio', text: 'Criar bolsas esportivas para atletas de alto rendimento?', source: 'Diretrizes de cultura e esporte' },
  { id: 92, category: 'Cultura, Esporte & Lazer', candidate: 'flavio', text: 'Valorizar e preservar os patrimônios históricos e culturais regionais?', source: 'Diretrizes de cultura e esporte' },

  /* ========================================================================
     10 · INSTITUIÇÕES & DEMOCRACIA — 8 perguntas (4 Lula + 4 Flávio)
     ======================================================================== */
  { id: 93, category: 'Instituições & Democracia', candidate: 'lula',   text: 'Fortalecer a participação social com conselhos e orçamento participativo?', source: 'Diretrizes institucionais' },
  { id: 94, category: 'Instituições & Democracia', candidate: 'lula',   text: 'Defender a democracia e as instituições contra tentativas de ruptura?', source: 'Diretrizes institucionais' },
  { id: 95, category: 'Instituições & Democracia', candidate: 'lula',   text: 'Fortalecer os órgãos de controle e transparência do governo?', source: 'Diretrizes institucionais' },
  { id: 96, category: 'Instituições & Democracia', candidate: 'lula',   text: 'Ampliar a transparência e o acesso à informação pública?', source: 'Diretrizes institucionais' },
  { id: 97, category: 'Instituições & Democracia', candidate: 'flavio', text: 'Acabar com a reeleição para presidente, governador e prefeito?', source: 'Diretrizes institucionais' },
  { id: 98, category: 'Instituições & Democracia', candidate: 'flavio', text: 'Limitar as decisões individuais de ministros do Supremo Tribunal Federal?', source: 'Diretrizes institucionais' },
  { id: 99, category: 'Instituições & Democracia', candidate: 'flavio', text: 'Garantir ampla liberdade de expressão, sem censura nas redes sociais?', source: 'Diretrizes institucionais' },
  { id: 100, category: 'Instituições & Democracia', candidate: 'flavio', text: 'Reduzir o número de ministérios do governo federal?', source: 'Diretrizes institucionais' },
  { id: 101, category: 'Polêmicas da Eleição', candidate: 'lula', text: 'Proibir as apostas online, as chamadas "bets" (casas de apostas esportivas pela internet)?', source: 'Tema de campanha — fora dos planos de governo', featured: true },
  { id: 102, category: 'Polêmicas da Eleição', candidate: 'lula', text: 'Manter e ampliar o programa Farmácia Popular (distribuição gratuita de medicamentos para doenças como diabetes e pressão alta)?', source: 'Tema de campanha — fora dos planos de governo', featured: true }
];

/* Validação simples no console (opcional): conta o balanceamento */
if (typeof console !== 'undefined') {
  const l = QUESTIONS.filter(q => q.candidate === 'lula').length;
  const f = QUESTIONS.filter(q => q.candidate === 'flavio').length;
  console.log('[questions.js] Total: ' + QUESTIONS.length + ' | Lula: ' + l + ' | Flávio: ' + f);
}
