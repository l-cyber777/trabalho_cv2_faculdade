const dados = {
  "cv": {
    "metadata": {
      "version": "1.0",
      "language": "pt-BR",
      "lastUpdated": "2026-11-16"
    },
    "personalInformation": {
      "fullName": "Caique Lourenço",
      "professionalTitle": "CyberSecurity | Python | Linux | Redes | Web Security | Segurança da Informação",
      "profilePhoto": "foto.jpg",
      "email": "",
      "phone": "",
      "whatsapp": "",
      "location": {
        "city": "",
        "state": "SP",
        "country": "Brasil",
        "address": ""
      },
      "linkedin": "",
      "github": "",
      "portfolio": "",
      "website": ""
    },
    "professionalSummary": {
      "description": "Sou estudante de Análise e Desenvolvimento de Sistemas, no segundo semestre, com objetivo claro: construir carreira em cibersegurança. Gosto de entender como as coisas funcionam por trás e de usar tecnologia para resolver problemas reais, sempre com segurança em primeiro lugar. Busco aprender o como e o porquê de cada solução, não só executar.",
      "yearsOfExperience": 0,
      "mainSpecialization": "Cibersegurança (Blue Team)",
      "careerObjective": "Construir carreira em cibersegurança, atuando com Blue Team, resposta a incidentes, automação de segurança e defesa de redes."
    },
    "professionalExperience": [
      {
        "company": "Santos Brasil Segurança e Monitoramento",
        "position": "Assistente de Operações Tecnológicas",
        "employmentType": "Tempo integral",
        "location": "Mogi das Cruzes, SP · Presencial",
        "startDate": "2026-08",
        "endDate": "",
        "current": true,
        "description": "Suporte técnico e operacional em redes, conectividade e sistemas de monitoramento (CFTV, alarmes), garantindo a disponibilidade da central de segurança.",
        "responsibilities": [
          "Suporte técnico em redes, conectividade e sistemas de monitoramento (CFTV e alarmes)",
          "Acompanhamento de ordens de serviço e chamados técnicos via ITSM, do início ao fim",
          "Identificação de falhas de rede e de equipamentos"
        ],
        "achievements": [
          "Aplicação prática de pilares de segurança da informação: controle de acesso, redes e disponibilidade de serviço"
        ],
        "technologies": ["Redes de computadores", "CFTV", "Alarmes", "ITSM", "Suporte técnico"]
      },
      {
        "company": "",
        "position": "Analista de Mídias Sociais",
        "employmentType": "",
        "location": "",
        "startDate": "",
        "endDate": "",
        "current": false,
        "description": "Análise de métricas e criação de publicações de alto alcance. Experiência que trouxe visão de negócio e de comportamento do usuário, fortalecendo o olhar para engenharia social e para o lado humano da segurança.",
        "responsibilities": [],
        "achievements": [],
        "technologies": []
      }
    ],
    "education": [
      {
        "institution": "Piaget",
        "degree": "Tecnólogo",
        "fieldOfStudy": "Análise e Desenvolvimento de Sistemas",
        "level": "Graduação",
        "startDate": "2026-02",
        "endDate": "2028-08",
        "current": true,
        "description": "Graduação com foco em cibersegurança. Fundação técnica (redes, programação, sistemas) que sustenta a especialização em segurança da informação."
      }
    ],
    "skills": {
      "technical": [
        { "name": "Cibersegurança", "level": "Intermediário" },
        { "name": "Python", "level": "Intermediário" },
        { "name": "Linux", "level": "Intermediário" },
        { "name": "Redes de computadores", "level": "Intermediário" },
        { "name": "Shell Script", "level": "Básico" },
        { "name": "Web Security", "level": "Básico" },
        { "name": "SIEM", "level": "Básico" },
        { "name": "Resposta a incidentes", "level": "Básico" }
      ],
      "behavioral": ["Curiosidade técnica", "Resolução de problemas", "Visão de negócio", "Aprendizado contínuo", "Comunicação"],
      "tools": ["Terminal Linux", "Sistemas ITSM", "CFTV", "TryHackMe"],
      "methodologies": ["Gestão de riscos", "Controle de acesso", "Resposta a incidentes"]
    },
    "languages": [
      { "name": "Português", "proficiency": "Nativo" }
    ],
    "certifications": [
      {
        "name": "Google Cybersecurity Fundamentals",
        "issuer": "Google",
        "issueDate": "",
        "expirationDate": "",
        "credentialUrl": ""
      },
      {
        "name": "Pre Security Path",
        "issuer": "TryHackMe",
        "issueDate": "",
        "expirationDate": "",
        "credentialUrl": ""
      },
      {
        "name": "Offensive Security (em andamento)",
        "issuer": "Solyd",
        "issueDate": "",
        "expirationDate": "",
        "credentialUrl": ""
      }
    ],
    "projects": [
      {
        "name": "Scripts de automação e ferramentas de terminal",
        "description": "Desenvolvimento de automações, scripts e ferramentas de teste em terminal.",
        "role": "Desenvolvedor",
        "technologies": ["Python", "Shell Script", "Linux"],
        "url": "",
        "startDate": "",
        "endDate": ""
      }
    ],
    "courses": [
      {
        "name": "Pre Security Path: hacking ético, redes, segurança ofensiva e defensiva",
        "institution": "TryHackMe",
        "completionDate": "",
        "workloadHours": 0
      }
    ],
    "additionalInformation": {
      "availability": "Disponível para novas oportunidades",
      "workModel": "Presencial ou híbrido",
      "travelAvailability": false,
      "additionalNotes": "Construindo e criando oportunidade. Nunca é hora de parar."
    },
    "preferences": {
      "targetPositions": ["Analista de Segurança da Informação", "Analista SOC", "Blue Team"],
      "targetIndustries": ["Segurança da Informação", "Tecnologia"],
      "preferredLocations": ["São Paulo, SP"],
      "preferredWorkModel": "Presencial ou híbrido"
    }
  }
};

const cv = dados.cv;
const pessoa = cv.personalInformation;

// Transforma "2026-08" em "ago 2026"
function formatarData(data){
  if (!data) return "";
  const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  const [ano, mes] = data.split("-");
  return mes ? `${meses[Number(mes) - 1]} ${ano}` : ano;
}

// Monta o período "ago 2026 – Atual"
function periodo(inicio, fim, atual){
  if (!inicio) return "-";
  const final = atual ? "Atual" : formatarData(fim);
  return `${formatarData(inicio)} – ${final}`;
}

/* ---------- Cabeçalho ---------- */
document.getElementById("foto").src = pessoa.profilePhoto;
document.getElementById("nome").textContent = pessoa.fullName;
document.getElementById("titulo").textContent = pessoa.professionalTitle;
document.getElementById("resumo").textContent = cv.professionalSummary.description;
document.title = `${pessoa.fullName} | Currículo`;

/* ---------- Informações pessoais ---------- */
const local = [pessoa.location.city, pessoa.location.state, pessoa.location.country].filter(Boolean).join(", ");

const informacoes = [
  { campo: "Nome", valor: pessoa.fullName },
  { campo: "E-mail", valor: pessoa.email },
  { campo: "Telefone", valor: pessoa.phone },
  { campo: "Localização", valor: local },
  { campo: "LinkedIn", valor: pessoa.linkedin },
  { campo: "GitHub", valor: pessoa.github },
  { campo: "Disponibilidade", valor: cv.additionalInformation.availability },
  { campo: "Modelo de trabalho", valor: cv.additionalInformation.workModel },
  { campo: "Objetivo", valor: cv.professionalSummary.careerObjective }
];

const corpoInformacoes = document.getElementById("corpoInformacoes");

for (let info of informacoes){
  if (!info.valor) continue; // pula campos vazios

  const linha = document.createElement("tr");

  linha.innerHTML = `
      <td class="destaque">${info.campo}</td>
      <td>${info.valor}</td>
  `;

  corpoInformacoes.appendChild(linha);
}

/* ---------- Experiência profissional ---------- */
const corpoExperiencias = document.getElementById("corpoExperiencias");

for (let experiencia of cv.professionalExperience){
  const linha = document.createElement("tr");

  linha.innerHTML = `
      <td class="destaque">${experiencia.position}</td>
      <td>${experiencia.company || "-"}</td>
      <td>${periodo(experiencia.startDate, experiencia.endDate, experiencia.current)}</td>
      <td>${experiencia.description}</td>
  `;

  corpoExperiencias.appendChild(linha);
}

/* ---------- Formação acadêmica ---------- */
const corpoFormacao = document.getElementById("corpoFormacao");

for (let formacao of cv.education){
  const linha = document.createElement("tr");

  linha.innerHTML = `
      <td class="destaque">${formacao.fieldOfStudy}</td>
      <td>${formacao.institution}</td>
      <td>${formacao.level} (${formacao.degree})</td>
      <td>${periodo(formacao.startDate, formacao.endDate, false)}</td>
  `;

  corpoFormacao.appendChild(linha);
}

/* ---------- Habilidades técnicas ---------- */
const corpoHabilidades = document.getElementById("corpoHabilidades");

for (let habilidade of cv.skills.technical){
  const linha = document.createElement("tr");

  linha.innerHTML = `
      <td class="destaque">${habilidade.name}</td>
      <td>${habilidade.level}</td>
  `;

  corpoHabilidades.appendChild(linha);
}

/* ---------- Certificações ---------- */
const corpoCertificacoes = document.getElementById("corpoCertificacoes");

for (let certificacao of cv.certifications){
  const linha = document.createElement("tr");

  linha.innerHTML = `
      <td class="destaque">${certificacao.name}</td>
      <td>${certificacao.issuer}</td>
  `;

  corpoCertificacoes.appendChild(linha);
}

/* ---------- Cursos ---------- */
const corpoCursos = document.getElementById("corpoCursos");

for (let curso of cv.courses){
  const linha = document.createElement("tr");

  linha.innerHTML = `
      <td class="destaque">${curso.name}</td>
      <td>${curso.institution}</td>
  `;

  corpoCursos.appendChild(linha);
}

/* ---------- Projetos ---------- */
const corpoProjetos = document.getElementById("corpoProjetos");

for (let projeto of cv.projects){
  const linha = document.createElement("tr");

  linha.innerHTML = `
      <td class="destaque">${projeto.name}</td>
      <td>${projeto.description}</td>
      <td>${projeto.technologies.join(", ")}</td>
  `;

  corpoProjetos.appendChild(linha);
}

/* ---------- Idiomas ---------- */
const corpoIdiomas = document.getElementById("corpoIdiomas");

for (let idioma of cv.languages){
  const linha = document.createElement("tr");

  linha.innerHTML = `
      <td class="destaque">${idioma.name}</td>
      <td>${idioma.proficiency}</td>
  `;

  corpoIdiomas.appendChild(linha);
}
