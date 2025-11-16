import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Desenvolvedor Full Stack com sólida experiência em sistemas distribuídos e alta performance. Especialista em .NET/C# e React, com histórico comprovado em otimização de aplicações, correção de bugs críticos e implementação de arquiteturas escaláveis para sistemas de BigData e aplicações corporativas.`;

export const ABOUT_TEXT = `Desenvolvedor Full Stack com expertise em .NET e React. Minha atuação inclui a escrita, depuração e teste de código para garantir funcionalidades robustas e alta qualidade do software. Experiência em desenvolvimento de microsserviços e sistemas distribuídos utilizando Akka.NET, com foco em performance e escalabilidade. Proficiência em implementação de message brokers como RabbitMQ e Kafka. Expertise em trabalho com bancos de dados relacionais, como MySQL e PostgreSQL, onde realizo consultas complexas, modelagem de dados e otimização de performance. Experiência adicional com bancos NoSQL como Cassandra. Competente no desenvolvimento front-end com React e AngularJS, implementando interfaces responsivas e intuitivas, seguindo as melhores práticas de desenvolvimento web e padrões de design modernos. Habilidades analíticas me permitem identificar oportunidades de melhoria e entregar soluções eficazes, sempre com foco na excelência e na satisfação do cliente. Experiência em metodologias ágeis e práticas de DevOps.`;

export const EXPERIENCES = [
  {
    year: "Janeiro 2025 - Atual",
    role: "Analista de Sistemas",
    company: "IntellTech",
    description: `Implementação e correção de bugs críticos no sistema distribuído de coleta de BigData usando C#, React e Akka.NET. Manutenção e evolução do projeto principal da empresa, focando em estabilidade e performance. Automatização de processos de implantação, otimizando fluxos de integração e configuração. Desenvolvimento de soluções escaláveis para processamento de grandes volumes de dados.`,
    technologies: ["C#", "React", "Akka.NET", "BigData", "DevOps"],
  },
  {
    year: "Janeiro 2024 - Dezembro 2024",
    role: "Desenvolvedor Pleno",
    company: "Lar Cooperativa Agroindustrial",
    description: `Desenvolvimento do back-end do aplicativo LarDigital para gestão cooperativa, focando em robustez e confiabilidade. Implementação de funcionalidades críticas como sistema de gerenciamento, gestão de estoque e relatórios. Otimização de consultas SQL e integração com APIs externas de bancos e fornecedores. Arquitetura de soluções para garantir alta disponibilidade e performance consistente.`,
    technologies: ["C#", ".NET", "SQL Server", "React", "APIs"],
  },
  {
    year: "Setembro 2022 - Janeiro 2024",
    role: "Desenvolvedor Júnior",
    company: "IntellTech",
    description: `Desenvolvimento de aplicações usando C#, React e o framework Akka.NET. Integração de novos clientes ao sistema de BigData, garantindo onboarding suave e configurações personalizadas. Automatização de processos de implantação usando C# e Python, eliminando tarefas manuais repetitivas. Manutenção proativa do sistema distribuído de coleta, monitoramento e resolução de incidentes. Desenvolvimento de scripts de monitoramento para detecção precoce de problemas e alertas automáticos.`,
    technologies: ["C#", "React", "Akka.NET", "Python", "BigData"],
  },
  {
    year: "Janeiro 2022 - Agosto 2022",
    role: "Desenvolvedor Júnior",
    company: "SOFT-TI Informática",
    description: `Desenvolvimento de aplicações com C#, JavaScript e frameworks como Angular. Escrita, depuração e teste de código em C# e JavaScript. Assegurar funcionalidade e qualidade do software. Participação ativa em projetos, cumprindo prazos e entregando soluções de alta qualidade.`,
    technologies: ["C#", "JavaScript", "Angular"],
  },
  {
    year: "Novembro 2021 - Janeiro 2022",
    role: "Desenvolvedor Júnior",
    company: "Reuter Contabilidade",
    description: `Desenvolver soluções na plataforma UiPath. Levantamento de requisitos e análise de processos para identificar oportunidades e propor melhorias. Desenvolvimento e configuração de robôs de automação usando UiPath.`,
    technologies: ["UiPath", "RPA", "Automação"],
  },
  {
    year: "Setembro 2021 - Novembro 2021",
    role: "Desenvolvedor Júnior",
    company: "Viasoft Korp ERP",
    description: `Desenvolvimento e manutenção de aplicativos utilizando Delphi. Escrita, depuração e teste de código Delphi para implementar funcionalidades e corrigir problemas. Trabalho com bancos de dados relacionais (Oracle e SQL Server), incluindo consultas, criação e atualização de estruturas, e otimização de desempenho.`,
    technologies: ["Delphi", "Oracle", "SQL Server"],
  },
];

export const PROJECTS = [
  {
    title: "PDV Solution",
    image: project1,
    description:
      "Sistema de Ponto de Venda (PDV) desenvolvido com WinUI 3, incluindo gestão de vendas, controle de estoque e relatórios gerenciais.",
    technologies: ["C#", "WinUI 3", "SQL Server", "Entity Framework"],
  },
  {
    title: "LarDigital",
    image: project2,
    description:
      "Aplicativo corporativo para gestão de processos agroindustriais, com foco em performance e escalabilidade.",
    technologies: ["C#", ".NET", "React", "SQL Server"],
  },
  {
    title: "Sistema de Distribuição",
    image: project3,
    description:
      "Sistema distribuído desenvolvido com Akka.NET para processamento de dados em larga escala com alta disponibilidade.",
    technologies: ["C#", "Akka.NET", "SQL Server", "RabbitMQ"],
  },
  {
    title: "Automação de Processos",
    image: project4,
    description:
      "Soluções de automação desenvolvidas com UiPath para otimização de processos contábeis e administrativos.",
    technologies: ["UiPath", "RPA", "Automação", "SQL Server"],
  },
];

export const CONTACT = {
  address: "Foz do Iguaçu - 85862395, PR, Brasil",
  email: "victor.somavilla@aol.com",
  github: "https://github.com/Victor-cmda",
  linkedin: "https://www.linkedin.com/in/victorhugosomavilla",
};
