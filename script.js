const STORAGE_KEY = "pei_alunos_v1";
const LOGO_KEY = "pei_logo_v1";

const habilidades = {
  "Cognitivas - Linguagem": [
    "Reconhece letras",
    "Lê palavras simples",
    "Lê frases",
    "Produz frases simples",
    "Produz textos curtos",
    "Necessita apoio visual",
    "Reconhece letras do próprio nome"
  ],
  "Cognitivas - Matemática": [
    "Reconhece números",
    "Realiza contagem simples",
    "Resolve adição",
    "Resolve subtração",
    "Resolve problemas simples",
    "Necessita material concreto"
  ],
  "Nível de escrita": [
    "Pré-silábico: utiliza rabiscos, desenhos ou letras aleatórias, sem relação entre sons e letras",
    "Silábico: atribui uma letra para cada sílaba",
    "Silábico sem valor sonoro",
    "Silábico com valor sonoro",
    "Silábico-alfabético",
    "Alfabético",
    "Ortográfico"
  ],
  "Nível de leitura": [
    "Nível 1 - Pré-leitor: não lê convencionalmente; reconhece letras ou palavras isoladas",
    "Nível 2 - Leitor iniciante: reconhece palavras, mas lê com dificuldade e baixa compreensão",
    "Nível 3 - Leitor fluente: lê com fluência, entonação e boa compreensão"
  ],
  "Reconhecimento de letras, sílabas e palavras": [
    "Diferencia letras de números e outros símbolos",
    "Identifica o nome e o som das letras",
    "Tem consciência fonológica (rimas, sílabas e fonemas)",
    "Troca ou omite letras na fala, escrita ou leitura",
    "Troca ou omite sílabas na fala, escrita ou leitura",
    "Possui dificuldades para ler",
    "Compreende com facilidade o que está escrito",
    "Escreve as palavras corretamente",
    "Escreve espelhado",
    "Sabe ver horas",
    "Sabe os dias da semana",
    "Sabe identificar o valor do dinheiro",
    "Sabe identificar os numerais",
    "Sabe fazer as quatro operações",
    "Tem facilidade de decorar sequência numérica",
    "Tem facilidade de decorar sequência alfabética",
    "Costuma esquecer coisas frequentemente",
    "Esquece o que fala",
    "Esquece o que fez",
    "Tem dificuldade para iniciar atividades"
  ],
  "Noção de número, contagem e resolução de problemas": [
    "Conta objetos e associa ao numeral correspondente",
    "Entende que um número representa uma quantidade",
    "Entende que um número representa uma ordem dos elementos",
    "Compreende que o número contado representa o total",
    "Interpreta situações",
    "Formula estratégias e encontra soluções para desafios"
  ],
  "Atenção, memória e raciocínio lógico": [
    "Percorre um caminho seguindo instruções alternadas",
    "Conhece e reconhece as figuras geométricas",
    "Reproduz ou reconhece figuras geométricas após um tempo",
    "Conhece sequência de números ou letras e a repete na ordem direta ou inversa",
    "Lembra a localização de imagens específicas em um quadro de opções",
    "Memoriza pequenas frases ou citações"
  ],
  "Capacidade de compreender comandos": [
    "Obedece e compreende ordens simples",
    "Obedece e compreende comandos complexos de múltiplas etapas",
    "Diferencia instruções faladas das lidas"
  ],
  "Psicomotoras - Coordenação motora fina": [
    "Recorta linhas retas desenhadas em papel",
    "Recorta linhas em zig-zag desenhadas em papel",
    "Recorta linhas curvas desenhadas em papel",
    "Corta círculos, quadrados e triângulos para montar quebra-cabeças",
    "Faz cortes curtos na borda de um papel",
    "Rasga jornal ou papel crepom e faz bolinhas com as pontas dos dedos",
    "Recorta figuras de revistas"
  ],
  "Psicomotoras - Pintura": [
    "Usa os dedos para espalhar tinta",
    "Usa cotonetes para pintar dentro de contornos ou criar letras",
    "Utiliza esponjas ou outros objetos de diferentes tamanhos para pintar",
    "Realiza trabalhos e/ou atividades em pé",
    "Passa barbante por furos em papelão ou formas",
    "Segue pontilhados com dedo, lápis ou canetinhas",
    "Desenha letras e formas usando o dedo"
  ],
  "Psicomotoras - Coordenação motora ampla": [
    "Mantém postura estática",
    "Mantém postura dinâmica",
    "Anda em linhas",
    "Anda em um pé só",
    "Pula amarelinha, pula corda ou salta dentro de bambolês",
    "Caminha sobre uma fita no chão",
    "Imita uma estátua",
    "Brinca de pega-pega",
    "Brinca de esconde-esconde",
    "Pratica movimentos de dança",
    "Passa por baixo de mesas",
    "Anda em zig-zag entre cadeiras e/ou em cima de barbante"
  ],
  "Organização espacial no caderno": [
    "Evita escrever fora dos limites laterais, superior e inferior da página",
    "Evita que as letras 'voem' ou flutuem no papel",
    "Usa o dedo como medida para separar palavras",
    "Alinha números em colunas para operações",
    "Realiza atividades de grafismo e utiliza linhas como referência espacial"
  ],
  "Postura e controle corporal": [
    "Mantém os pés totalmente apoiados no chão",
    "Fica com os pés balançando enquanto está sentado",
    "Mantém a região lombar encostada na cadeira",
    "Mantém coxas paralelas ao solo e joelhos dobrados a 90 graus",
    "Mantém o caderno na altura do campo de visão",
    "Mantém antebraços apoiados",
    "Senta-se sobre os ísquios",
    "Senta-se de lado"
  ],
  "Interpessoais - Interação com colegas": [
    "Colabora, divide tarefas, compartilha ideias e respeita opiniões divergentes",
    "Demonstra empatia, resolução de conflitos e comportamento solidário",
    "Se isola ou não participa ativamente das interações sociais e atividades",
    "Utiliza momentos de fala para identificar afinidades e interesses comuns",
    "Respeita quando os colegas estão falando",
    "Faz perguntas relativas ao processo de aprendizagem",
    "Faz perguntas sobre o assunto trabalhado em sala de aula"
  ],
  "Participação em atividades coletivas": [
    "Demonstra empatia, respeito, cooperação, comunicação e capacidade de trabalhar em equipe",
    "Escuta, reflete e contribui com qualidade",
    "Se retrai e não participa de atividades coletivas e/ou em grupo"
  ],
  "Respeito às regras": [
    "Respeita a pontualidade",
    "Respeita a todos",
    "Levanta a mão para falar",
    "Mantém o ambiente organizado",
    "Trata professores, colegas e funcionários com educação",
    "Conversa e brinca apenas nos momentos apropriados",
    "Faz interrupções durante as explicações",
    "Emite barulhos desnecessários e contínuos durante as aulas",
    "Entrega atividades e lições de casa no tempo estipulado",
    "Ajuda a manter a sala limpa",
    "Cuida dos materiais escolares",
    "Risca as mesas"
  ],
  "Controle emocional": [
    "Busca soluções diante de dificuldades em vez de desistir ou reagir agressivamente",
    "Consegue reconhecer e nomear seus sentimentos",
    "Compreende e respeita as emoções dos colegas",
    "Consegue reagir a sentimentos negativos",
    "Mantém a calma e se mostra acessível para dialogar"
  ],
  "Comunicacionais": [
    "Tem comunicação verbal clara e de fácil compreensão",
    "Utiliza comunicação não verbal",
    "Compreende explicações orais sem necessidade de maiores explicações",
    "Expressa necessidades de forma clara e objetiva"
  ],
  "Potencialidades": [
    "Boa memória visual",
    "Boa memória auditiva",
    "Interesse por números",
    "Interesse por leitura",
    "Interesse por tecnologia",
    "Boa interação social",
    "Comunicação funcional",
    "Autonomia em atividades diárias"
  ]
};

const dificuldades = {
  "Cognitivas": [
    "Apresenta dificuldade de concentração",
    "Dificuldade em reter e manipular informações",
    "Curto tempo de foco",
    "Distração rápida com estímulos irrelevantes",
    "Lentidão na compreensão e resposta a estímulos",
    "Demora para concluir atividades",
    "Dificuldade em seguir instruções com várias etapas",
    "Esquecimento rápido do conteúdo ensinado",
    "Grande frustração ou desinteresse por atividades acadêmicas",
    "Desempenho acadêmico inconsistente com o potencial intelectual aparente",
    "Problemas de coordenação motora fina",
    "Demonstra sono/cansaço durante as aulas",
    "Apresenta sinais de alimentação desequilibrada",
    "Apresenta sinais de ansiedade",
    "Apresenta sinais de estresse",
    "Apresenta sinais de falta de motivação",
    "Sente-se incomodado com ruídos externos",
    "Perturba-se com excesso de informações visuais",
    "Faz troca de letras",
    "Não consolida conteúdos",
    "Não cria resumos com suas próprias palavras",
    "Nos trabalhos em grupo, não discute ideias e não busca resolver problemas em conjunto",
    "Não faz uso de materiais concretos",
    "Dificuldade em interpretar comandos longos",
    "Não escuta bem ou demonstra sinais de dificuldade auditiva"
  ],
  "Psicomotoras": [
    "Letra ilegível",
    "Cansaço ao escrever",
    "Dificuldade em recortar",
    "Movimentos pouco harmoniosos",
    "Apresenta postura inadequada",
    "Apresenta dificuldade de locomoção",
    "Dificuldade para abotoar roupas, amarrar cadarços, usar talheres e manusear o lápis",
    "Dificuldade em relaxar, parar quieto ou focar na tarefa",
    "Escrita desorganizada e com baixa qualidade",
    "Dificuldade em definir o lado dominante",
    "Dificuldade em lateralidade cruzada",
    "Movimentos limitados por medo ou insegurança",
    "Problemas de coordenação ocular",
    "Problemas de coordenação motora fina",
    "Problemas de motricidade ampla"
  ],
  "Interpessoais - Isolamento": [
    "Demonstra ser reservado",
    "Fala pouco",
    "Evita contato visual",
    "Evita interações sociais",
    "Prefere sentar-se sozinho no fundo da sala",
    "Afasta-se dos colegas durante intervalos e atividades",
    "Demonstrou queda nos rendimentos e nas notas",
    "Demonstra falta de atenção constante",
    "Demonstra dificuldades em seguir instruções simples",
    "Demonstra falta de engajamento",
    "Aparenta tristeza",
    "Demonstra sinais de ansiedade",
    "Demonstra medo de ir à escola",
    "Apresenta irritabilidade extrema"
  ],
  "Conflitos frequentes": [
    "Briga por materiais",
    "Faz bullying com colegas",
    "Sofre bullying dos colegas",
    "Apresenta ou instiga disputas de amizade",
    "Apresenta sinais de diferenças culturais",
    "Pratica agressões verbais",
    "Pratica agressões físicas",
    "Conversa excessivamente durante as explicações",
    "Recusa-se a realizar atividades",
    "Desrespeita as normas",
    "Confronta o professor",
    "Apresenta desinteresse generalizado"
  ],
  "Impulsividade": [
    "Fala em momentos inadequados",
    "Interrompe a fala do professor ou colegas",
    "Se intromete em atividades alheias",
    "Não consegue esperar sua vez em filas, jogos ou atividades de grupo",
    "Responde perguntas antes que sejam concluídas",
    "Pula, corre ou escala em locais inadequados",
    "Age movido por desejos momentâneos",
    "Reage com agressividade verbal ou comportamental quando contrariado",
    "Frequentemente perde materiais e/ou esquece pertences",
    "Tem dificuldade em seguir instruções complexas"
  ],
  "Comunicacionais": [
    "Uso de frases muito curtas e vocabulário limitado",
    "Dificuldade em entender instruções complexas",
    "Hesitações, repetições de sílabas e troca de fonemas",
    "Insegurança ou recusa em se expressar verbalmente",
    "Dificuldade em manter a conversa ou narrar fatos simples",
    "Não compreende instruções complexas",
    "Mantém contato visual",
    "Interage com colegas",
    "Participa de atividades em grupo",
    "Tolera frustração",
    "Aceita mediação do professor",
    "Necessita apoio para autorregulação"
  ]
};

const adaptacoes = {
  "Uso de material concreto - Matemática": [
    "Material dourado",
    "Ábaco",
    "Blocos lógicos",
    "Figuras geométricas",
    "Dinheiro de brinquedo",
    "Cubos de encaixe",
    "Calculadora",
    "Materiais recicláveis (tampinhas, palitos)",
    "Atividades impressas"
  ],
  "Alfabetização / Letramento": [
    "Letras móveis (madeira, EVA)",
    "Caixa silábica",
    "Roleta silábica",
    "Letras com lixa para textura",
    "Alfabeto móvel",
    "Textos impressos"
  ],
  "Ciências / Geografia": [
    "Mapa-múndi interativo",
    "Tabela periódica magnética",
    "Maquetes",
    "Elementos da natureza (folhas, pedras, conchas)"
  ],
  "Sensoriais": [
    "Areia cinética",
    "Massinha",
    "Tecidos com diferentes texturas",
    "Caixas de som",
    "EVA"
  ],
  "Atividades lúdicas": [
    "Objetos com texturas variadas",
    "Respeitar o tempo de resposta e a individualidade de cada criança"
  ],
  "Apoio visual": [
    "Uso de cartões ilustrados",
    "Uso de instruções claras para apoiar a comunicação",
    "Uso de instruções curtas e objetivas"
  ],
  "Organizativas": [
    "Reduzir objetos desnecessários na área de trabalho",
    "Reordenar as carteiras para garantir a circulação",
    "Posicionar o aluno mais próximo do professor e longe de distrações",
    "Criar cantos silenciosos para autorregulação",
    "Adaptar lápis com engrossadores",
    "Usar pranchas de comunicação",
    "Letras móveis",
    "Materiais ampliados",
    "Tesouras adaptadas",
    "Texturas diferentes para manipulação",
    "Flexibilizar o tempo para realização de atividades",
    "Antecipar mudanças de atividade com rotina visual",
    "Incluir pausas ativas para movimentação",
    "Alternar trabalhos individuais, em duplas ou grupos menores"
  ],
  "Estratégias diferenciadas": [
    "Jogos pedagógicos",
    "Recursos visuais",
    "Uso de tecnologias"
  ],
  "Mediação individual": [
    "Uso de diagramas, analogias, jogos e materiais manipuláveis",
    "Frequência de apoio individual",
    "Intervenção com explicação individual e reforço",
    "Focar nos conceitos essenciais",
    "Reduzir a quantidade de texto ou questões em avaliações",
    "Dar tempo extra para atividades e pausas para autorregulação",
    "Dividir atividades longas em etapas menores"
  ],
  "Rotinas estruturadas": [
    "Utilização de rotina diária e estruturada",
    "Tempo ampliado",
    "Redução de estímulos",
    "Fonte ampliada",
    "Material adaptado",
    "Agenda visual",
    "Atividades reduzidas",
    "Divisão em etapas",
    "Instruções objetivas",
    "Reforço positivo",
    "Ensino estruturado"
  ],
  "Adaptações curriculares - Conteúdos, atividades e avaliações": [
    "Permitir demonstração do conhecimento por desenhos, oralidade, esquemas ou tecnologias quando a escrita for obstáculo",
    "Permitir demonstração do conhecimento pela oralidade",
    "Permitir demonstração do conhecimento pelo uso de tecnologias",
    "Utilizar jogos educativos e materiais manipulativos",
    "Dar mais tempo para realização de atividades e avaliações",
    "Mudar o aluno de lugar na sala",
    "Trabalhar em pequenos grupos ou rodas para melhorar foco e interação",
    "Simplificar enunciados",
    "Reduzir a quantidade de questões",
    "Priorizar conteúdos essenciais",
    "Utilizar computadores, tablets, vídeos, imagens e audiolivros",
    "Traçar objetivos a médio prazo"
  ],
  "Na avaliação": [
    "Avaliação oral",
    "Com apoio de leitura",
    "Com tempo ampliado",
    "Com redução de itens",
    "Com material concreto",
    "Explicar como será a avaliação, evitando apenas marcar opções"
  ]
};

const recursos = {
  "Recursos e suporte": [
    "Frequenta a Sala de Apoio da SRM",
    "Recomposição de aprendizagem",
    "Material adaptado",
    "Professor auxiliar",
    "Apoio da família",
    "Recursos visuais, tecnológicos ou pedagógicos"
  ]
};

const perfil = {
  "Participação e aprendizagem": [
    "Participa de atividades pedagógicas sistematizadas e de atividades livres",
    "Participa de outros componentes curriculares da Unidade Escolar",
    "Consegue manter a atenção nas atividades pedagógicas sistematizadas de média e maior concentração",
    "Consegue manter a atenção nas atividades dinâmicas, com maior liberdade e movimentação",
    "Participa somente de atividades de interesse próprio",
    "Faz leitura de imagens e se expressa por meio de desenho; lê símbolos e ícones, mas não lê palavras",
    "Faz leitura de imagens, interpreta e compreende apoiando-se nos desenhos; reconhece letras e escreve algumas palavras",
    "Faz leitura de imagens, interpreta e compreende apoiando-se nos desenhos; reconhece letras e escreve palavras em diversos contextos",
    "Faz leitura de imagens, interpreta e compreende apoiando-se nos desenhos e na leitura de palavras; reconhece todas as letras e lê frases completas",
    "Faz leitura de imagens, interpreta e compreende apoiando-se nos desenhos e na leitura de frases; lê texto e produz gêneros textuais",
    "Não se expressa de forma oral e/ou escrita e está em trabalho de Comunicação Alternativa e Ampliada (CAA)"
  ]
};

function slug(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .toLowerCase();
}

function renderGrupos(containerId, prefixo, dados) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  Object.entries(dados).forEach(([titulo, opcoes]) => {
    const bloco = document.createElement("div");
    bloco.className = "subcard";

    const h3 = document.createElement("h3");
    h3.textContent = titulo;
    bloco.appendChild(h3);

    const wrap = document.createElement("div");
    wrap.className = "opcoes";

    opcoes.forEach((texto, i) => {
      const id = `${prefixo}_${slug(titulo)}_${i}`;
      const label = document.createElement("label");
      label.className = "opcao";
      label.innerHTML = `
        <input type="checkbox" id="${id}" name="${prefixo}" data-grupo="${titulo}" value="${escapeAttr(texto)}">
        <span>${texto}</span>
      `;
      wrap.appendChild(label);
    });

    bloco.appendChild(wrap);
    container.appendChild(bloco);
  });
}

function escapeAttr(texto) {
  return String(texto).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function valor(id) {
  return document.getElementById(id)?.value?.trim() || "";
}

function radio(nome) {
  return document.querySelector(`input[name="${nome}"]:checked`)?.value || "";
}

function checks(nome) {
  return [...document.querySelectorAll(`input[name="${nome}"]:checked`)].map(el => ({
    grupo: el.dataset.grupo || "",
    valor: el.value
  }));
}

function setChecks(nome, itens = []) {
  const set = new Set(itens.map(i => typeof i === "string" ? i : i.valor));
  document.querySelectorAll(`input[name="${nome}"]`).forEach(el => {
    el.checked = set.has(el.value);
  });
}

function setRadio(nome, v) {
  document.querySelectorAll(`input[name="${nome}"]`).forEach(el => {
    el.checked = el.value === v;
  });
}

function coletarDados() {
  return {
    id: valor("registroId") || String(Date.now()),
    atualizadoEm: new Date().toISOString(),
    identificacao: {
      estudante: valor("estudante"),
      cgm: valor("cgm"),
      dataNascimento: valor("dataNascimento"),
      idade: valor("idade"),
      matriculaSrm: valor("matriculaSrm"),
      estabelecimento: valor("estabelecimento"),
      diretor: valor("diretor"),
      pedagogo: valor("pedagogo"),
      email: valor("email"),
      anoSerie: valor("anoSerie"),
      turno: valor("turno"),
      turma: valor("turma"),
      professor: valor("professor")
    },
    diagnostico: {
      laudo: valor("diagnostico"),
      usaMedicacao: radio("usaMedicacao"),
      qualMedicacao: valor("qualMedicacao"),
      acompMedico: radio("acompMedico"),
      qualMedico: valor("qualMedico"),
      acompPsicologico: radio("acompPsicologico"),
      acompFono: radio("acompFono"),
      acompTerapeutico: radio("acompTerapeutico"),
      qualTerapeutico: valor("qualTerapeutico")
    },
    habilidades: checks("habilidades"),
    minutosAtencao: valor("minutosAtencao"),
    obsHabilidades: valor("obsHabilidades"),
    dificuldades: checks("dificuldades"),
    obsDificuldades: valor("obsDificuldades"),
    objetivosMetas: valor("objetivosMetas"),
    adaptacoes: checks("adaptacoes"),
    outrasAdaptacoes: valor("outrasAdaptacoes"),
    recursos: checks("recursos"),
    outrosRecursos: valor("outrosRecursos"),
    perfil: checks("perfil"),
    perfilObservacoes: valor("perfilObservacoes"),
    acompanhamento: {
      encaminhamentosRealizados: valor("encaminhamentosRealizados"),
      reuniaoFamilia: valor("reuniaoFamilia"),
      relatoriosEnviados: valor("relatoriosEnviados"),
      trocaProfissionais: valor("trocaProfissionais")
    },
    resultados: {
      avancosObservados: valor("avancosObservados"),
      metasAtingidas: valor("metasAtingidas"),
      metasNaoAlcancadas: valor("metasNaoAlcancadas"),
      continuidadeAjustes: valor("continuidadeAjustes"),
      novosEncaminhamentos: valor("novosEncaminhamentos")
    }
  };
}

function lerAlunos() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function salvarLista(lista) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

function salvarAluno() {
  const dados = coletarDados();

  if (!dados.identificacao.estudante) {
    alert("Informe o nome do estudante antes de salvar.");
    document.getElementById("estudante").focus();
    return;
  }

  const lista = lerAlunos();
  const index = lista.findIndex(a => a.id === dados.id);

  if (index >= 0) {
    lista[index] = dados;
  } else {
    lista.unshift(dados);
  }

  salvarLista(lista);
  document.getElementById("registroId").value = dados.id;
  document.getElementById("statusAluno").textContent = `Editando: ${dados.identificacao.estudante}`;
  document.getElementById("statusSalvamento").textContent = "Cadastro salvo com sucesso.";
  renderListaAlunos();
}

function novoAluno() {
  document.getElementById("peiForm").reset();
  document.getElementById("registroId").value = "";
  document.getElementById("relatorio").innerHTML =
    '<p class="relatorio-vazio">Preencha o PEI e clique em “Gerar relatório”.</p>';
  document.getElementById("statusAluno").textContent = "Novo cadastro";
  document.getElementById("statusSalvamento").textContent = "Os dados são salvos neste navegador.";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderListaAlunos() {
  const lista = lerAlunos();
  const box = document.getElementById("listaAlunos");

  if (!lista.length) {
    box.innerHTML = "<p>Nenhum aluno salvo até o momento.</p>";
    return;
  }

  box.innerHTML = lista.map(a => `
    <div class="aluno-item">
      <div class="aluno-info">
        <strong>${esc(a.identificacao.estudante || "Sem nome")}</strong>
        <small>${esc(a.identificacao.anoSerie || "Ano/série não informado")} • ${esc(a.identificacao.turma || "Turma não informada")} • CGM: ${esc(a.identificacao.cgm || "não informado")}</small>
      </div>
      <div class="aluno-botoes">
        <button class="editar" type="button" onclick="editarAluno('${a.id}')">Editar</button>
        <button class="excluir" type="button" onclick="excluirAluno('${a.id}')">Excluir</button>
      </div>
    </div>
  `).join("");
}

function preencherInput(id, v) {
  const el = document.getElementById(id);
  if (el) el.value = v ?? "";
}

function editarAluno(id) {
  const a = lerAlunos().find(item => item.id === id);
  if (!a) return;

  novoAluno();
  preencherInput("registroId", a.id);

  Object.entries(a.identificacao || {}).forEach(([k, v]) => {
    const mapa = {
      estudante: "estudante", cgm: "cgm", dataNascimento: "dataNascimento", idade: "idade",
      matriculaSrm: "matriculaSrm", estabelecimento: "estabelecimento", diretor: "diretor",
      pedagogo: "pedagogo", email: "email", anoSerie: "anoSerie", turno: "turno",
      turma: "turma", professor: "professor"
    };
    if (mapa[k]) preencherInput(mapa[k], v);
  });

  preencherInput("diagnostico", a.diagnostico?.laudo);
  setRadio("usaMedicacao", a.diagnostico?.usaMedicacao || "");
  preencherInput("qualMedicacao", a.diagnostico?.qualMedicacao);
  setRadio("acompMedico", a.diagnostico?.acompMedico || "");
  preencherInput("qualMedico", a.diagnostico?.qualMedico);
  setRadio("acompPsicologico", a.diagnostico?.acompPsicologico || "");
  setRadio("acompFono", a.diagnostico?.acompFono || "");
  setRadio("acompTerapeutico", a.diagnostico?.acompTerapeutico || "");
  preencherInput("qualTerapeutico", a.diagnostico?.qualTerapeutico);

  setChecks("habilidades", a.habilidades);
  preencherInput("minutosAtencao", a.minutosAtencao);
  preencherInput("obsHabilidades", a.obsHabilidades);
  setChecks("dificuldades", a.dificuldades);
  preencherInput("obsDificuldades", a.obsDificuldades);
  preencherInput("objetivosMetas", a.objetivosMetas);
  setChecks("adaptacoes", a.adaptacoes);
  preencherInput("outrasAdaptacoes", a.outrasAdaptacoes);
  setChecks("recursos", a.recursos);
  preencherInput("outrosRecursos", a.outrosRecursos);
  setChecks("perfil", a.perfil);
  preencherInput("perfilObservacoes", a.perfilObservacoes);

  preencherInput("encaminhamentosRealizados", a.acompanhamento?.encaminhamentosRealizados);
  preencherInput("reuniaoFamilia", a.acompanhamento?.reuniaoFamilia);
  preencherInput("relatoriosEnviados", a.acompanhamento?.relatoriosEnviados);
  preencherInput("trocaProfissionais", a.acompanhamento?.trocaProfissionais);

  preencherInput("avancosObservados", a.resultados?.avancosObservados);
  preencherInput("metasAtingidas", a.resultados?.metasAtingidas);
  preencherInput("metasNaoAlcancadas", a.resultados?.metasNaoAlcancadas);
  preencherInput("continuidadeAjustes", a.resultados?.continuidadeAjustes);
  preencherInput("novosEncaminhamentos", a.resultados?.novosEncaminhamentos);

  document.getElementById("statusAluno").textContent = `Editando: ${a.identificacao.estudante}`;
  document.getElementById("statusSalvamento").textContent = "Cadastro carregado.";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function excluirAluno(id) {
  const lista = lerAlunos();
  const aluno = lista.find(a => a.id === id);
  if (!aluno) return;

  if (!confirm(`Excluir o cadastro de ${aluno.identificacao.estudante}?`)) return;

  salvarLista(lista.filter(a => a.id !== id));
  renderListaAlunos();

  if (valor("registroId") === id) novoAluno();
}

function esc(txt) {
  return String(txt ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatarData(data) {
  if (!data) return "";
  const [a, m, d] = data.split("-");
  return `${d}/${m}/${a}`;
}

function fraseLista(itens) {
  const vals = itens.map(i => i.valor || i).filter(Boolean);
  if (!vals.length) return "";
  if (vals.length === 1) return vals[0];
  if (vals.length === 2) return `${vals[0]} e ${vals[1]}`;
  return `${vals.slice(0, -1).join(", ")} e ${vals.at(-1)}`;
}

function agrupar(itens) {
  return itens.reduce((acc, item) => {
    (acc[item.grupo] ||= []).push(item.valor);
    return acc;
  }, {});
}

function blocoSelecoes(titulo, itens, vazio = "Não foram registradas informações nesta seção.") {
  if (!itens?.length) return `<p><strong>${esc(titulo)}:</strong> ${esc(vazio)}</p>`;
  const grupos = agrupar(itens);
  return Object.entries(grupos).map(([grupo, valores]) =>
    `<p><strong>${esc(grupo)}:</strong> ${esc(fraseLista(valores))}.</p>`
  ).join("");
}

function textoSimNao(rotulo, resp, qual = "") {
  if (!resp) return "";
  if (resp === "Sim" && qual) return `${rotulo}: sim, ${qual}.`;
  return `${rotulo}: ${resp.toLowerCase()}.`;
}

function gerarRelatorio() {
  const d = coletarDados();
  const i = d.identificacao;
  const diag = d.diagnostico;

  const diagnosticos = [
    textoSimNao("Uso de medicação", diag.usaMedicacao, diag.qualMedicacao),
    textoSimNao("Acompanhamento médico", diag.acompMedico, diag.qualMedico),
    textoSimNao("Acompanhamento psicológico", diag.acompPsicologico),
    textoSimNao("Acompanhamento fonoaudiológico", diag.acompFono),
    textoSimNao("Acompanhamento terapêutico", diag.acompTerapeutico, diag.qualTerapeutico)
  ].filter(Boolean).join(" ");

  const html = `
    <h1>PLANO EDUCACIONAL INDIVIDUALIZADO - PEI</h1>

    <h2>1. Identificação</h2>
    <p>
      <strong>Estudante:</strong> ${esc(i.estudante || "Não informado")} |
      <strong>CGM:</strong> ${esc(i.cgm || "Não informado")} |
      <strong>Data de nascimento:</strong> ${esc(formatarData(i.dataNascimento) || "Não informada")} |
      <strong>Idade:</strong> ${esc(i.idade || "Não informada")}
    </p>
    <p>
      <strong>Matrícula em SRM:</strong> ${esc(i.matriculaSrm || "Não informada")} |
      <strong>Estabelecimento:</strong> ${esc(i.estabelecimento || "Não informado")} |
      <strong>Ano/Série:</strong> ${esc(i.anoSerie || "Não informado")} |
      <strong>Turno:</strong> ${esc(i.turno || "Não informado")} |
      <strong>Turma:</strong> ${esc(i.turma || "Não informada")}
    </p>
    <p>
      <strong>Diretor(a):</strong> ${esc(i.diretor || "Não informado")} |
      <strong>Pedagogo(a):</strong> ${esc(i.pedagogo || "Não informado")} |
      <strong>Professor(a):</strong> ${esc(i.professor || "Não informado")} |
      <strong>E-mail:</strong> ${esc(i.email || "Não informado")}
    </p>

    <h2>2. Diagnóstico</h2>
    <p><strong>Diagnóstico/Laudo:</strong> ${esc(diag.laudo || "Não informado.")}</p>
    <p>${esc(diagnosticos || "Não foram registrados acompanhamentos ou uso de medicação.")}</p>

    <h2>3. Habilidades</h2>
    ${blocoSelecoes("Habilidades", d.habilidades)}
    ${d.minutosAtencao ? `<p><strong>Atenção:</strong> mantém atenção por aproximadamente ${esc(d.minutosAtencao)} minutos em atividades dirigidas.</p>` : ""}
    ${d.obsHabilidades ? `<p><strong>Observações:</strong> ${esc(d.obsHabilidades)}</p>` : ""}

    <h2>4. Dificuldades</h2>
    ${blocoSelecoes("Dificuldades observadas", d.dificuldades, "Não foram marcadas barreiras nesta seção.")}
    ${d.obsDificuldades ? `<p><strong>Observações:</strong> ${esc(d.obsDificuldades)}</p>` : ""}

    <h2>5. Objetivos / Metas de Aprendizagem</h2>
    <p>${nl2br(d.objetivosMetas || "Não informado.")}</p>

    <h2>6. Adequações / Adaptações</h2>
    ${blocoSelecoes("Adequações e adaptações", d.adaptacoes)}
    ${d.outrasAdaptacoes ? `<p><strong>Outras adequações/adaptações:</strong> ${nl2br(d.outrasAdaptacoes)}</p>` : ""}

    <h2>7. Recursos e Suporte</h2>
    ${blocoSelecoes("Recursos e suporte", d.recursos)}
    ${d.outrosRecursos ? `<p><strong>Outros recursos:</strong> ${nl2br(d.outrosRecursos)}</p>` : ""}

    <h2>8. Perfil de Participação e Aprendizagem</h2>
    ${blocoSelecoes("Perfil", d.perfil)}
    ${d.perfilObservacoes ? `<p><strong>Observações:</strong> ${nl2br(d.perfilObservacoes)}</p>` : ""}

    <h2>9. Acompanhamento das Ações</h2>
    <p><strong>Encaminhamentos realizados:</strong> ${nl2br(d.acompanhamento.encaminhamentosRealizados || "Não informado.")}</p>
    <p><strong>Reunião com famílias:</strong> ${nl2br(d.acompanhamento.reuniaoFamilia || "Não informado.")}</p>
    <p><strong>Relatórios enviados:</strong> ${nl2br(d.acompanhamento.relatoriosEnviados || "Não informado.")}</p>
    <p><strong>Troca com profissionais externos:</strong> ${nl2br(d.acompanhamento.trocaProfissionais || "Não informado.")}</p>

    <h2>10. Resultados e Encaminhamentos</h2>
    <p><strong>Avanços observados:</strong> ${nl2br(d.resultados.avancosObservados || "Não informado.")}</p>
    <p><strong>Metas atingidas:</strong> ${nl2br(d.resultados.metasAtingidas || "Não informado.")}</p>
    <p><strong>Metas não alcançadas:</strong> ${nl2br(d.resultados.metasNaoAlcancadas || "Não informado.")}</p>
    <p><strong>Necessidade de continuidade ou ajustes:</strong> ${nl2br(d.resultados.continuidadeAjustes || "Não informado.")}</p>
    <p><strong>Novos encaminhamentos:</strong> ${nl2br(d.resultados.novosEncaminhamentos || "Não informado.")}</p>
  `;

  document.getElementById("relatorio").innerHTML = html;
  document.getElementById("relatorio").scrollIntoView({ behavior: "smooth", block: "start" });
}

function nl2br(txt) {
  return esc(txt).replace(/\n/g, "<br>");
}

async function copiarRelatorio() {
  const texto = document.getElementById("relatorio").innerText.trim();
  if (!texto || texto.includes("Preencha o PEI")) {
    alert("Gere o relatório antes de copiar.");
    return;
  }
  try {
    await navigator.clipboard.writeText(texto);
    alert("Relatório copiado.");
  } catch {
    alert("Não foi possível copiar automaticamente. Selecione o texto manualmente.");
  }
}

function configurarLogo() {
  const salvo = localStorage.getItem(LOGO_KEY);
  const img = document.getElementById("logoMunicipio");
  const placeholder = document.getElementById("logoPlaceholder");

  if (salvo) {
    img.src = salvo;
    img.style.display = "block";
    placeholder.style.display = "none";
  }

  document.getElementById("uploadLogo").addEventListener("change", e => {
    const arquivo = e.target.files?.[0];
    if (!arquivo) return;

    const leitor = new FileReader();
    leitor.onload = () => {
      localStorage.setItem(LOGO_KEY, leitor.result);
      img.src = leitor.result;
      img.style.display = "block";
      placeholder.style.display = "none";
    };
    leitor.readAsDataURL(arquivo);
  });
}

function calcularIdade() {
  const data = valor("dataNascimento");
  if (!data) return;

  const nasc = new Date(`${data}T00:00:00`);
  const hoje = new Date();
  let idade = hoje.getFullYear() - nasc.getFullYear();
  const m = hoje.getMonth() - nasc.getMonth();

  if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
  if (idade >= 0) document.getElementById("idade").value = idade;
}

document.addEventListener("DOMContentLoaded", () => {
  renderGrupos("habilidadesContainer", "habilidades", habilidades);
  renderGrupos("dificuldadesContainer", "dificuldades", dificuldades);
  renderGrupos("adaptacoesContainer", "adaptacoes", adaptacoes);
  renderGrupos("recursosContainer", "recursos", recursos);
  renderGrupos("perfilContainer", "perfil", perfil);

  configurarLogo();
  renderListaAlunos();

  document.getElementById("salvarAlunoBtn").addEventListener("click", salvarAluno);
  document.getElementById("novoAlunoBtn").addEventListener("click", novoAluno);
  document.getElementById("gerarRelatorioBtn").addEventListener("click", gerarRelatorio);
  document.getElementById("imprimirBtn").addEventListener("click", () => {
    gerarRelatorio();
    setTimeout(() => window.print(), 250);
  });
  document.getElementById("copiarRelatorioBtn").addEventListener("click", copiarRelatorio);
  document.getElementById("dataNascimento").addEventListener("change", calcularIdade);
});
