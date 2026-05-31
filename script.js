// ==========================================
// 1. DICIONÁRIO DE TRADUÇÃO (i18n)
// ==========================================
const translations = {
    pt: {
        "nav-about": "Sobre mim",
        "nav-skills": "Competências",
        "nav-path": "Percurso",
        "nav-projects": "Projetos",
        "nav-terminal": "Terminal",
        "header": "Olá, eu sou o <span class=\"highlight\" data-key=\"filipe\">Filipe</span>",
        "filipe": "Filipe",
        "hero-subtitle": "Estudante de Engenharia Informática Aplicada",
        "hero-description": "Focado em criar soluções lógicas, código limpo e arquiteturas robustas.",
        "hero-btn-projects": "Ver Projetos",
        "hero-btn-path": "Ver Percurso",
        "about-title": "Sobre Mim",
        "about-text-p1": "Olá! O meu nome é Filipe Candeias.",
        "about-text-p2": "Sou estudante da Licenciatura em Engenharia Informática Aplicada na Escola Superior de Tecnologia e Gestão de Águeda (ESTGA), da Universidade de Aveiro.",
        "about-text-p3": "Sou natural e residente de Águeda. Desde cedo desenvolvi um grande interesse pela tecnologia e pela informática, procurando compreender o funcionamento das ferramentas digitais e explorar novas soluções para diferentes desafios.",
        "about-text-p4": "Considero-me uma pessoa proativa, criativa e com uma forte capacidade de aprendizagem. Gosto de enfrentar novos desafios e de adquirir constantemente novos conhecimentos, tanto a nível académico como pessoal. Procuro sempre realizar o meu trabalho com dedicação e responsabilidade, mantendo uma atitude positiva e colaborativa em qualquer contexto.",
        "about-text-p5": "Nos meus tempos livres, gosto de gaming, jogos de tabuleiro e construção com LEGO, atividades que estimulam o raciocínio lógico, a criatividade e a capacidade de resolução de problemas. Tenho também interesse pelo desporto, valorizando a prática de atividades físicas como forma de bem-estar e desenvolvimento pessoal.",
        "about-text-p6": "Estou sempre disponível para aprender, crescer e abraçar novas experiências que contribuam para o meu desenvolvimento pessoal e profissional.",
        "about-cv": "Descarregar CV (PDF)",
        "skills-title": "Competências",
        "skills-backend": "Backend",
        "skills-frontend": "Frontend & Dados",
        "path-title": "Percurso Académico & Profissional",
        "title-academic-col": "Educação Académica",
        "title-professional-col": "Experiência Profissional",
        
        // Linha do tempo - Académica
        "time-leia": "Setembro 2024 - Presente",
        "leia": "Licenciatura em Engenharia Informática Aplicada",
        "academic-inst": "Escola Superior de Tecnologia e Gestão de Águeda",
        "estga1": "Atualmente frequento a Licenciatura em Engenharia Informática Aplicada, onde tenho vindo a construir uma base sólida em informática e desenvolvimento de software. Ao longo do curso, tenho desenvolvido competências em programação, bases de dados, sistemas operativos e redes de computadores através de trabalhos académicos e projetos práticos. Estas experiências têm fortalecido as minhas capacidades de resolução de problemas, trabalho em equipa e comunicação, ao mesmo tempo que aumentam o meu interesse pela tecnologia e pela aprendizagem contínua.",
        "time-ctesp": "Setembro 2019 - Setembro 2021",
        "ctesp": "Técnico Superior Profissional em Instalações Elétricas e Automação",
        "ctesp-desc": "Frequentei uma formação na área de redes elétricas e automação industrial, onde desenvolvi conhecimentos em instalação, manutenção e análise de redes de energia, comunicação e sistemas de segurança. Ao longo da formação, tive também contacto com automação industrial, incluindo programação de autómatos e utilização de ferramentas de simulação e programação de robôs como o RoboDK. Estas experiências permitiram-me reforçar competências técnicas e desenvolver capacidades de resolução de problemas e adaptação a diferentes contextos técnicos.",
        "time-it": "Setembro 2016 - Julho 2019",
        "it-title": "Técnico de Gestão e Programação de Sistemas Informáticos",
        "it-inst": "Escola Secundária Adolfo Portela",
        "it-desc": "Frequentei o curso de Técnico de Gestão e Programação de Sistemas Informáticos, onde adquiri conhecimentos em instalação, configuration e manutenção de hardware e software, bem como em redes e segurança de sistemas. Desenvolvi também competências em programação, bases de dados, desenvolvimento de aplicações e criação de sistemas web, incluindo a gestão de websites e servidores, o que reforçou o meu interesse pela área da informática.",
        "learn-more": "Saber mais",

        // Linha do tempo - Profissional
        "part-time": "Part-time",
        "full-time": "Full-time",
        "time-brico-pt": "Setembro 2023 - Presente",
        "brico-pt-title": "Vendedor - Bricomarché Águeda",
        "brico-pt-desc": "Desempenho funções de atendimento e aconselhamento ao cliente em loja, reposição e organização de stock, bem como gestão e etiquetagem de produtos, garantindo o bom funcionamento do espaço comercial.",
        "time-brico-file": "Abril 2023 - Agosto 2023",
        "brico-file-title": "Responsável de Ficheiro - Bricomarché Águeda",
        "brico-file-desc": "Fui responsável pela gestão de stock e controlo de inventário da loja, assegurando a comunicação com fornecedores e apoiando a supervisão e coordenação das operações diárias.",
        "time-brico-ft": "Outubro 2022 - Abril 2023",
        "brico-ft-title": "Vendedor - Bricomarché Águeda",
        "brico-ft-desc": "Realizei atendimento e apoio ao cliente, reposição e organização de produtos em loja, bem como tarefas de gestão e etiquetagem de artigos.",
        "time-worten": "Novembro 2021 - Maio 2022",
        "worten-title": "Vendedor/Resolve - Worten Águeda",
        "worten-desc": "Prestei atendimento especializado ao cliente, realizando reparação e diagnóstico de avarias em telemóveis, bem como a gestão de garantias e processos de assistência técnica.",
        
        // Projetos
        "projects-title": "Projetos em Destaque",
        "proj1-title": "Plataforma de Visualização Meteorológica",
        "proj1-desc": "Aplicação web interativa que mapeia dados geográficos e meteorológicos por distritos e freguesias através de camadas de mapas dinâmicas.",
        "proj2-title": "Plataforma de Gestão Desportiva",
        "proj2-desc": "Aplicação web para gestão desportiva, permitindo a organização de equipas, atletas e atividades, de forma a garantir uma gestão mais eficiente e estruturada das rotinas associadas ao nível amador.",
        "proj3-title": "Sistema de Gestão de Eventos",
        "proj3-desc": "Aplicação desenvolvida em Java para apoiar a gestão de eventos de espaços culturais, utilizando estruturas de dados e persistência em ficheiros para organizar salas, eventos e recursos.",
        "view-code": "Ver Código",
        
        // Terminal & Footer
        "terminal-title": "Consola Interativa",
        "terminal-prompt-info": "Digita comandos e fica a saber mais sobre mim.",
        "terminal-welcome-msg": "Bem-vindo ao meu terminal. Digita <span class=\"highlight-term\">help</span> para ver os comandos disponíveis.",
        "footer-text": "&copy; 2026 Filipe. Desenvolvido com foco em Usabilidade & Performance.",
        "video-section-title": "Apresentação em Vídeo"
    },
    en: {
        "nav-about": "About me",
        "nav-skills": "Skills",
        "nav-path": "Journey",
        "nav-projects": "Projects",
        "nav-terminal": "Terminal",
        "header": "Hello, I am <span class=\"highlight\" data-key=\"filipe\">Filipe</span>",
        "filipe": "Filipe",
        "hero-subtitle": "Applied Informatics Engineering Student",
        "hero-description": "Focused on creating logical solutions, clean code, and robust architectures.",
        "hero-btn-projects": "View Projects",
        "hero-btn-path": "View Journey",
        "about-title": "About Me",
        "about-text-p1": "Hello! My name is Filipe Candeias.",
        "about-text-p2": "I am a student pursuing a Degree in Applied Informatics Engineering at the Higher School of Technology and Management of Águeda (ESTGA), University of Aveiro.",
        "about-text-p3": "I was born and currently live in Águeda. From an early age, I developed a strong interest in technology and computer science, seeking to understand how digital tools work and exploring new solutions to different challenges.",
        "about-text-p4": "I consider myself a proactive, creative person with a strong ability to learn. I enjoy facing new challenges and continuously acquiring new knowledge, both academically and personally. I always strive to carry out my work with dedication and responsibility while maintaining a positive and collaborative attitude in any environment.",
        "about-text-p5": "In my free time, I enjoy gaming, board games, and building with LEGO, activities that stimulate logical thinking, creativity, and problem-solving skills. I am also interested in sports, valuing physical activity as a way to promote well-being and personal growth.",
        "about-text-p6": "I am always eager to learn, grow, and embrace new experiences that contribute to my personal and professional development.",
        "about-cv": "Download CV (PDF)",
        "skills-title": "Skills",
        "skills-backend": "Backend",
        "skills-frontend": "Frontend & Data",
        "path-title": "Academic & Professional Journey",
        "title-academic-col": "Academic Education",
        "title-professional-col": "Professional Experience",
        
        // Timeline - Academic
        "time-leia": "September 2024 - Present",
        "leia": "Degree in Applied Informatics Engineering",
        "academic-inst": "Higher School of Technology and Management of Águeda",
        "estga1": "I am currently pursuing a degree in Applied Informatics Engineering, building a solid foundation in computer science and software development. Throughout the course, I have developed skills in programming, databases, operating systems, and computer networks through academic work and practical projects. These experiences have strengthened my problem-solving, teamwork, and communication skills while further increasing my interest in technology and continuous learning.",
        "time-ctesp": "September 2019 - September 2021",
        "ctesp": "Higher Technical Professional in Electrical Installations and Automation",
        "ctesp-desc": "Trained in the field of electrical networks and industrial automation, where I developed knowledge in installation, maintenance, and analysis of power networks, communication, and security systems. Throughout the training, I also worked with industrial automation, including PLC programming and using simulation and robot programming tools like RoboDK.",
        "time-it": "September 2016 - July 2019",
        "it-title": "IT Systems Management and Programming Technician",
        "it-inst": "Adolfo Portela Secondary School",
        "it-desc": "Attended the IT Systems Management and Programming course, acquiring knowledge in hardware and software installation, configuration, and maintenance, as well as networks and systems security. I also developed skills in programming, databases, application development, and web systems creation.",
        "learn-more": "Learn more",

        // Timeline - Professional
        "part-time": "Part-time",
        "full-time": "Full-time",
        "time-brico-pt": "September 2023 - Present",
        "brico-pt-title": "Sales Associate - Bricomarché Águeda",
        "brico-pt-desc": "Responsible for customer service and advisory in-store, replenishment and organization of stock, as well as product management and labeling, ensuring the proper functioning of the commercial space.",
        "time-brico-file": "April 2023 - August 2023",
        "brico-file-title": "File & Inventory Manager - Bricomarché Águeda",
        "brico-file-desc": "Responsible for stock management and store inventory control, ensuring communication with suppliers and supporting the supervision and coordination of daily operations.",
        "time-brico-ft": "October 2022 - April 2023",
        "brico-ft-title": "Sales Associate - Bricomarché Águeda",
        "brico-ft-desc": "Performed customer service and support, restocking and organizing products in-store, alongside article management and labeling tasks.",
        "time-worten": "November 2021 - May 2022",
        "worten-title": "Sales & Tech Support (Resolve) - Worten Águeda",
        "worten-desc": "Provided specialized customer service, performing repairs and troubleshooting diagnostics on mobile phones, as well as managing warranties and technical assistance processes.",
        
        // Projects
        "projects-title": "Featured Projects",
        "proj1-title": "Weather Visualization Platform",
        "proj1-desc": "Interactive web application mapping geographic and weather data by districts and parishes through dynamic map layers.",
        "proj2-title": "Sports Management Platform",
        "proj2-desc": "Web application for sports management, allowing the organization of teams, athletes, and activities, ensuring efficient and structured management of amateur-level routines.",
        "proj3-title": "Events Management System",
        "proj3-desc": "Application developed in Java to support event management in cultural spaces, utilizing data structures and file persistence to organize rooms, events, and resources.",
        "view-code": "View Code",
        
        // Terminal & Footer
        "terminal-title": "Interactive Console",
        "terminal-prompt-info": "Type commands and get to know more about me.",
        "terminal-welcome-msg": "Welcome to my terminal. Type <span class=\"highlight-term\">help</span> to see available commands.",
        "footer-text": "&copy; 2026 Filipe. Developed with a focus on Usability & Performance.",
        "video-section-title": "Video Presentation"
    }
};

let currentLang = 'pt';

// Lógica de Alternância de Idioma
const langToggle = document.getElementById('lang-toggle');
const terminalWelcome = document.getElementById('terminal-welcome');
const terminalPromptText = document.getElementById('terminal-prompt-text');

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    langToggle.innerText = currentLang.toUpperCase();
    
    // Atualiza todos os elementos com data-key
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            // Se o elemento contiver ícones filhos (como o botão do CV), preserva-os
            const icon = element.querySelector('i');
            if (icon) {
                element.innerHTML = '';
                element.appendChild(icon);
                element.innerHTML += ' ' + translations[currentLang][key];
            } else {
                element.innerText = translations[currentLang][key];
            }
        }
    });

    // Atualizações específicas do terminal dinâmico
    terminalWelcome.innerHTML = translations[currentLang]["terminal-welcome-msg"];
    terminalPromptText.innerText = translations[currentLang]["terminal-prompt-info"];
});

// ==========================================
// 2. ALTERNADOR DE TEMA (Dark/Light Mode)
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-moon';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
    }
});

// ==========================================
// 3. ACORDEÃO INTERATIVO (Linha de Tempo)
// ==========================================
const accordions = document.querySelectorAll('.accordion-btn');
accordions.forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        const iconChevron = this.querySelector('i');
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            iconChevron.className = 'fas fa-chevron-down';
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            iconChevron.className = 'fas fa-chevron-up';
        }
    });
});

// ==========================================
// 4. CONSOLA INTERATIVA (Terminal CLI)
// ==========================================
const terminalInput = document.getElementById('terminal-input');
const terminalBody = document.getElementById('terminal-body');

// Comandos do Terminal traduzidos dinamicamente
const terminalCommands = {
    pt: {
        help: "Comandos disponíveis:\n- about: Breve descrição sobre mim\n- skills: Tecnologias e stacks\n- interests: Descobre os meus hobbys (ou usa /gaming, /boardgames, /movies)\n- clear: Limpa o ecrã",
        about: "Filipe - Estudante de Engenharia Informática Aplicada.\nApaixonado por estruturação lógica de código, jogos de estratégia e desenvolvimento de sistemas funcionais.",
        skills: "Backend: Java, C, Python\nFrontend: JavaScript, HTML/CSS\nBases de Dados: PostgreSQL, MySQL",
        
        // Novos comandos de interesses (com suporte a HTML para links clicáveis)
        interests: "<b>Interesses do Filipe:</b><br>- <b>gaming</b>: Conta da Steam.<br>- <b>boardgames</b>: A minha coleção no BoardGameGeek (BGG).<br>- <b>movies</b>: Filmes e séries favoritos.<br><br><i>Dica: Podes digitar diretamente <span style='color: #00aaff'>gaming</span>, <span style='color: #00aaff'>boardgames</span> ou <span style='color: #00aaff'>movies</span></i>",
        gaming: "<b>Gaming:</b> Adoro jogos que desafiam a estratégia e a lógica.<br>• <b>Steam ID:</b> <a href='https://steamcommunity.com/id/imjustacat/' target='_blank' style='color: #00aaff; text-decoration: underline;'>Just a Cat</a><br>",
        boardgames: "<b>Board Games:</b> Grande fã de jogos de tabuleiro modernos (Eurogames e estratégia).<br>• <b>BoardGameGeek (BGG):</b> <a href='https://boardgamegeek.com/profile/FilipeCandeias/' target='_blank' style='color: #00aaff; text-decoration: underline;'>FilipeCandeias</a>",
        movies: "<b>Movies & TV Shows:</b> Fascinado por comédia, mistério, ficção científica e ação.<br>• <b>Letterboxd:</b> <a href='https://boxd.it/98HRZ' target='_blank' style='color: #00aaff; text-decoration: underline;'>FilipeCandeias</a>",
        notRecognized: "Comando não reconhecido: "
    },
    en: {
        help: "Available commands:\n- about: Brief description about me\n- skills: Technologies and stacks\n- interests: Discover my hobbies (or use /gaming, /boardgames, /movies)\n- clear: Clear the screen",
        about: "Filipe - Applied Informatics Engineering Student.\nPassionate about logical code structure, strategic games, and developing functional systems.",
        skills: "Backend: Java, C, Python\nFrontend: JavaScript, HTML/CSS\nDatabase: PostgreSQL, MySQL",
        
        // New interest commands (with HTML support)
        interests: "<b>Filipe's Interests:</b><br>- <b>gaming</b>: My Steam and Epic Games accounts.<br>- <b>boardgames</b>: My collection on BoardGameGeek (BGG).<br>- <b>movies</b>: Favorite movies and shows.<br><br><i>Tip: You can type directly <span style='color: #00aaff'>gaming</span>, <span style='color: #00aaff'>boardgames</span> or <span style='color: #00aaff'>movies</span></i>",
        gaming: "<b>Gaming:</b> I love games that challenge strategy and logic.<br>• <b>Steam ID:</b> <a href='https://steamcommunity.com/id/imjustacat/' target='_blank' style='color: #00aaff; text-decoration: underline;'>Just a Cat</a><br>",
        boardgames: "<b>Board Games:</b> Big fan of modern board games (Eurogames and heavy strategy).<br>• <b>BoardGameGeek (BGG):</b> <a href='https://boardgamegeek.com/profile/FilipeCandeias/' target='_blank' style='color: #00aaff; text-decoration: underline;'>FilipeCandeias</a>",
        movies: "<b>Movies & TV Shows:</b> Fascinated by comedy, mystery, sci-fi and action.<br>• <b>Letterboxd:</b> <a href='https://boxd.it/98HRZ' target='_blank' style='color: #00aaff; text-decoration: underline;'>FilipeCandeias</a>",
        
        notRecognized: "Command not recognized: "
    }
};

terminalInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        // 1. Limpa espaços e remove a barra '/' caso o utilizador a tenha digitado
        let input = this.value.trim().toLowerCase().replace('/', '');
        
        // Atalhos inteligentes (aliases) para o utilizador não falhar o comando
        if (input === 'interests') input = 'interests';
        if (input === 'gaming') input = 'gaming';
        if (input === 'boardgame' || input === 'bgg') input = 'boardgames';
        if (input === 'filmes' || input === 'movie') input = 'movies';

        const historicLine = document.createElement('div');
        historicLine.innerHTML = `<span style="color: #00aaff">filipe@portfolio:~$</span> ${this.value}`;
        terminalBody.insertBefore(historicLine, terminalInput.parentElement);

        if (input === 'clear') {
            const lines = terminalBody.querySelectorAll('div:not(.input-line)');
            lines.forEach(line => line.remove());
        } else if (input !== '') {
            const outputLine = document.createElement('div');
            outputLine.className = 'output';
            
            if (terminalCommands[currentLang][input]) {
                // Usamos innerHTML nos comandos de interesses para renderizar os links <a> e negritos <b>
                // Para os comandos normais que usam \n, substituímos por <br> para que quebrem a linha no HTML
                const cmdOutput = terminalCommands[currentLang][input];
                outputLine.innerHTML = cmdOutput.replace(/\n/g, '<br>');
            } else {
                outputLine.innerText = `${terminalCommands[currentLang].notRecognized}"${this.value.trim()}". ${currentLang === 'pt' ? "Digita 'help'" : "Type 'help'"}`;
                outputLine.style.color = '#ff5f56';
            }
            terminalBody.insertBefore(outputLine, terminalInput.parentElement);
        }

        this.value = '';
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});