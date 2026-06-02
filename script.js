// ==========================================
// 1. DICIONÁRIO DE TRADUÇÃO (i18n)
// ==========================================
const translations = {
    pt: {
        "nav-about": "Sobre mim",
        "nav-skills": "Competências",
        "nav-path": "Percurso",
        "nav-projects": "Projetos",
        "nav-interesses": "Interesses",
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
        "about-text-p4": "Considero-me uma pessoa proativa, creative e com uma forte capacidade de aprendizagem. Gosto de enfrentar novos desafios e de adquirir constantemente novos conhecimentos, tanto a nível académico como pessoal. Procuro sempre realizar o meu trabalho com dedicação e responsabilidade, mantendo uma atitude positiva e colaborativa em qualquer contexto.",
        "about-text-p5": "Nos meus tempos livres, gosto de gaming, jogos de tabuleiro e construção com LEGO, atividades que estimulam o raciocínio lógico, a criatividade e a capacidade de resolução de problemas. Tenho também interesse pelo desporto, valorizando a prática de atividades físicas como forma de bem-estar e desenvolvimento pessoal.",
        "about-text-p6": "Estou sempre disponível para aprender, crescer e abraçar novas experiências que contribuam para o meu desenvolvimento pessoal e profissional.",
        "about-cv": "Descarregar CV (PDF)",
        "cv-file": "CV Português.pdf",
        "video-src": "https://youtube.com/embed/UmHi-4WTIXk",
        "skills-title": "Competências",
        "skills-backend": "Backend",
        "skills-frontend": "Frontend & Dados",
        "path-title": "Percurso Académico & Profissional",
        "title-academic-col": "Educação Académica",
        "title-professional-col": "Experiência Profissional",
        
        "time-leia": "Setembro 2024 - Presente",
        "leia": "Licenciatura em Engenharia Informática Aplicada",
        "academic-inst": "Escola Superior de Tecnologia e Gestão de Águeda",
        "estga1": "Atualmente frequento a Licenciatura em Engenharia Informática Aplicada, onde tenho vindo a construir uma base sólida em informática e desenvolvimento de software. Ao longo do curso, tenho desenvolvido competências em programação, bases de dados, sistemas operativos e redes de computadores através de trabalhos académicos e projetos práticos.",
        "time-ctesp": "Setembro 2019 - Setembro 2021",
        "ctesp": "Técnico Superior Profissional em Instalações Elétricas e Automação",
        "ctesp-desc": "Frequentei uma formação na área de redes elétricas e automação industrial, onde desenvolvi conhecimentos em instalação, manutenção e análise de redes de energia, comunicação e sistemas de segurança.",
        "time-it": "Setembro 2016 - Julho 2019",
        "it-title": "Técnico de Gestão e Programação de Sistemas Informáticos",
        "it-inst": "Escola Secundária Adolfo Portela",
        "it-desc": "Frequentei o curso de Técnico de Gestão e Programação de Sistemas Informáticos, onde adquiri conhecimentos em instalação, configuração e manutenção de hardware e software.",
        "learn-more": "Saber mais",

        "part-time": "Part-time",
        "full-time": "Full-time",
        "time-brico-pt": "Setembro 2023 - Presente",
        "brico-pt-title": "Vendedor - Bricomarché Águeda",
        "brico-pt-desc": "Desempenho funções de atendimento e aconselhamento ao cliente em loja, reposição e organização de stock.",
        "time-brico-file": "Abril 2023 - Agosto 2023",
        "brico-file-title": "Responsável de Ficheiro - Bricomarché Águeda",
        "brico-file-desc": "Fui responsável pela gestão de stock e controlo de inventário da loja, assegurando a comunicação com fornecedores.",
        "time-brico-ft": "Outubro 2022 - Abril 2023",
        "brico-ft-title": "Vendedor - Bricomarché Águeda",
        "brico-ft-desc": "Realizei atendimento e apoio ao cliente, reposição e organização de produtos em loja.",
        "time-worten": "Novembro 2021 - Maio 2022",
        "worten-title": "Vendedor/Resolve - Worten Águeda",
        "worten-desc": "Prestei atendimento especializado ao cliente, realizando reparação e diagnóstico de avarias em telemóveis.",
        "time-matecnic": "Setembro de 2020 - Dezembro de 2020",
        "matecnic-title": "Técnico de Informática - Matecnic",
        "matecnic-desc": "Fui responsável por prestar suporte técnico a clientes, incluindo a instalação e configuração de hardware e software.",
        "time-cma": "Junho de 2018 - Julho de 2018 / Abril de 2019 - Junho de 2019",
        "cma-title": "Técnico de Informática - Câmara Municipal de Águeda",
        "cma-desc": "Prestei suporte técnico direto aos utilizadores, sendo responsável pela instalação e configuração de hardware e software.",

        "projects-title": "Projetos em Destaque",
        "proj1-title": "Plataforma de Visualização Meteorológica",
        "proj1-desc": "Aplicação web interativa que mapeia dados geográficos e meteorológicos por distritos através de camadas de mapas.",
        "proj2-title": "Plataforma de Gestão Desportiva",
        "proj2-desc": "Aplicação web para gestão desportiva, permitindo a organização de equipas, atletas e atividades ao nível amador.",
        "proj3-title": "Sistema de Gestão de Eventos",
        "proj3-desc": "Aplicação desenvolvida em Java para apoiar a gestão de eventos de espaços culturais, utilizando estruturas de dados.",
        "view-code": "Ver Código",
        
        "interesses-title": "Interesses",
        "interesses-prompt": "Navega pelas pastas à esquerda para abrir as galerias de imagens na área de trabalho e ficares a saber mais sobre mim.",
        "footer-text": "&copy; 2026 Filipe. Desenvolvido com foco em Usabilidade & Performance.",
        "video-section-title": "Apresentação em Vídeo"
    },
    en: {
        "nav-about": "About me",
        "nav-skills": "Skills",
        "nav-path": "Journey",
        "nav-projects": "Projects",
        "nav-interesses": "Interests",
        "header": "Hello, I am <span class=\"highlight\" data-key=\"filipe\">Filipe</span>",
        "filipe": "Filipe",
        "hero-subtitle": "Applied Informatics Engineering Student",
        "hero-description": "Focused on creating logical solutions, clean code, and robust architectures.",
        "hero-btn-projects": "View Projects",
        "hero-btn-path": "View Journey",
        "about-title": "About Me",
        "about-text-p1": "Hello! My name is Filipe Candeias.",
        "about-text-p2": "I am currently studying Applied Informatics Engineering at the Higher School of Technology and Management of Águeda, part of the University of Aveiro.",
        "about-text-p3": "I was born and raised in Águeda, where I still live today. From an early age, I developed a strong interest in technology and computing, always seeking to understand how digital tools work and explore new solutions to different challenges.",
        "about-text-p4": "I consider myself a proactive, creative person with a strong ability to learn. I enjoy taking on new challenges and continuously acquiring new knowledge, both academically and personally. I always strive to carry out my work with dedication and responsibility, maintaining a positive and collaborative attitude in any environment.",
        "about-text-p5": "In my free time, I enjoy gaming, board games, and building with LEGO, activities that stimulate logical thinking, creativity, and problem-solving skills. I am also interested in sports and value physical activity as a way to promote well-being and personal development.",
        "about-text-p6": "I am always eager to learn, grow, and embrace new experiences that contribute to my personal and professional development.",
        "about-cv": "Download CV (PDF)",
        "cv-file": "CV Inglês.pdf",
        "video-src": "https://youtube.com/embed/mvprc_IAmPo",
        "skills-title": "Skills",
        "skills-backend": "Backend",
        "skills-frontend": "Frontend & Data",
        "path-title": "Academic & Professional Journey",
        "title-academic-col": "Academic Education",
        "title-professional-col": "Professional Experience",
        
        "time-leia": "September 2024 - Present",
        "leia": "Degree in Applied Informatics Engineering",
        "academic-inst": "Higher School of Technology and Management of Águeda",
        "estga1": "I am currently pursuing a degree in Applied Informatics Engineering, building a solid foundation in computer science and software development.",
        "time-ctesp": "September 2019 - September 2021",
        "ctesp": "Higher Technical Professional in Electrical Installations and Automation",
        "ctesp-desc": "Trained in the field of electrical networks and industrial automation, developing knowledge in power networks and PLC programming.",
        "time-it": "September 2016 - July 2019",
        "it-title": "IT Systems Management and Programming Technician",
        "it-inst": "Adolfo Portela Secondary School",
        "it-desc": "Attended the IT Systems Management and Programming course, acquiring knowledge in hardware and software installation.",
        "learn-more": "Learn more",

        "part-time": "Part-time",
        "full-time": "Full-time",
        "time-brico-pt": "September 2023 - Present",
        "brico-pt-title": "Sales Associate - Bricomarché Águeda",
        "brico-pt-desc": "Responsible for customer service and advisory in-store, replenishment and organization of stock.",
        "time-brico-file": "April 2023 - August 2023",
        "brico-file-title": "File & Inventory Manager - Bricomarché Águeda",
        "brico-file-desc": "Responsible for stock management and store inventory control, ensuring communication with suppliers.",
        "time-brico-ft": "October 2022 - April 2023",
        "brico-ft-title": "Sales Associate - Bricomarché Águeda",
        "brico-ft-desc": "Performed customer service and support, restocking and organizing products in-store.",
        "time-worten": "November 2021 - May 2022",
        "worten-title": "Sales & Tech Support (Resolve) - Worten Águeda",
        "worten-desc": "Provided specialized customer service, performing repairs and troubleshooting diagnostics on mobile phones.",
        "time-matecnic": "September 2020 - December 2020",
        "matecnic-title": "IT Technician - Matecnic",
        "matecnic-desc": "Responsible for providing technical support to clients, including installing and configuring hardware and software.",
        "time-cma": "June 2018 - July 2018 / April 2019 - June 2019",
        "cma-title": "IT Technician - Águeda Town Hall",
        "cma-desc": "Provided direct technical support to users, managing the installation and configuration of hardware and software.",
        
        "projects-title": "Featured Projects",
        "proj1-title": "Weather Visualization Platform",
        "proj1-desc": "Interactive web application mapping geographic and weather data by districts through dynamic map layers.",
        "proj2-title": "Sports Management Platform",
        "proj2-desc": "Web application for sports management, allowing the organization of teams, athletes, and activities.",
        "proj3-title": "Events Management System",
        "proj3-desc": "Application developed in Java to support event management in cultural spaces, utilizing data structures.",
        "view-code": "View Code",
        
        "interesses-title": "Interests",
        "interesses-prompt": "Navigate through the folders on the left to open image galleries in the workspace and learn more about me.",
        "footer-text": "&copy; 2026 Filipe. Developed with a focus on Usability & Performance.",
        "video-section-title": "Video Presentation"
    }
};

// ==========================================
// 0. FORÇAR INÍCIO NO TOPO DA PÁGINA
// ==========================================
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => { window.scrollTo(0, 0); });
window.addEventListener('load', () => {
    setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, 10);
});

let currentLang = 'pt';
const langToggle = document.getElementById('lang-toggle');

function atualizarIdioma() {
    // 1. Atualiza o texto do botão de alternância (mostra o idioma oposto ao atual)
    if (langToggle) {
        langToggle.innerText = currentLang === 'pt' ? 'EN' : 'PT';
    }
    
    // 2. Atualiza o link de download do CV correspondente ao idioma
    const cvBtn = document.getElementById('cv-btn');
    if (cvBtn && translations[currentLang]["cv-file"]) {
        cvBtn.setAttribute('href', translations[currentLang]["cv-file"]);
    }

    // 3. Atualiza o iframe do vídeo (Português ou Inglês)
    const videoIframe = document.getElementById('portfolio-video');
    if (videoIframe && translations[currentLang]["video-src"]) {
        videoIframe.setAttribute('src', translations[currentLang]["video-src"]);
    }

    // 4. Traduz todos os elementos HTML que contêm o atributo [data-key]
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            const icon = element.querySelector('i');
            if (icon) {
                // Se o elemento tiver um ícone do FontAwesome, preserva o ícone e altera apenas o texto
                element.innerHTML = '';
                element.appendChild(icon);
                element.innerHTML += ' ' + translations[currentLang][key];
            } else {
                // Caso contrário, substitui diretamente o conteúdo de texto/HTML
                element.innerHTML = translations[currentLang][key];
            }
        }
    });

    // 5. Atualiza o texto de introdução do explorador de interesses (Workspace)
    const workspaceIntroEl = document.getElementById('workspace-intro');
    if (workspaceIntroEl && typeof currentFolderKey !== 'undefined' && folderIntros[currentLang]) {
        const targetKey = folderIntros[currentLang][currentFolderKey] ? currentFolderKey : 'about';
        workspaceIntroEl.innerHTML = folderIntros[currentLang][targetKey] || "";
    }
}

// Ouvinte para o botão de alternar o idioma
if (langToggle) {
    langToggle.addEventListener('click', (e) => {
        e.preventDefault(); 
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        atualizarIdioma();
    });
}

// ==========================================
// 2. ALTERNADOR DE TEMA (Dark/Light Mode)
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

if (themeToggle && themeIcon) {
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
}

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
// 4. DICIONÁRIOS E REATIVIDADE DO EXPLORADOR
// ==========================================
const commandGalleries = {
    about: ['img/v1.jpg', 'img/bg1.jpg', 'img/v3.jpg', 'img/vg2.jpg', 'img/ms1.jpg', 'img/ms2.jpg'],
    gaming: ['img/vg1.jpeg', 'img/vg2.jpg', 'img/vg3.png', 'img/vg4.jpg', 'img/vg5.png', 'img/vg6.jpg'],
    boardgames: ['img/bg1.jpg', 'img/bg2.jpg', 'img/bg3.jpg', 'img/bg4.jpg', 'img/bg5.jpeg', 'img/bg6.jpg'],
    travel: ['img/v1.jpg', 'img/v2.jpg', 'img/v3.jpg', 'img/v4.jpg', 'img/v5.jpg', 'img/v6.jpg'],
    movies: ['img/ms1.jpg', 'img/ms2.jpg', 'img/ms3.jpg', 'img/ms4.jpg', 'img/ms5.jpg', 'img/ms6.jpg']
};

const folderIntros = {
    pt: {
        about: "<strong>Visão Geral:</strong> Uma amostra visual do meu universo de interesses. Explora a grelha abaixo para veres um resumo dos meus principais hobbies, passatempos e atividades favoritas.",
        gaming: "<strong>Jogos:</strong> Nos meus tempos livres, os videojogos são a minha fuga perfeita. Tenho uma enorme preferência por RPGs profundos, narrativas cinematográficas marcantes e mundos abertos que recompensam a exploração e o raciocínio.",
        boardgames: "<strong>Jogos de Tabuleiro:</strong> Um olhar sobre a minha mesa de jogo. Adoro explorar títulos de estratégia que desafiam o raciocínio, desde cenários altamente assimétricos e competitivos até mecânicas fluidas de gestão de recursos, cartas e planeamento tático.",
        travel: "<strong>Viagens:</strong> Fascinado por explorar novos lugares e culturas, aproveito sempre que posso para registar memórias, paisagens e novas descobertas pelo mundo.",
        movies: "<strong>Cinema & Séries:</strong> Um olhar sobre as produções que mais me marcaram. Entre filmes de culto e séries imperdíveis, gosto de acompanhar boas histórias e de manter um registo de tudo o que assisto.",
        sports: "<strong>Desporto:</strong> Adepto de um estilo de vida ativo, tanto a praticar como a acompanhar. Divido o gosto pelo futebol, basquetebol e voleibol com atividades ao ar livre."
    },
    en: {
        about: "<strong>Overview:</strong> A visual sample of my world of interests. Explore the grid below to see a summary of my main hobbies, passimes, and favorite activities.",
        gaming: "<strong>Video Games:</strong> In my free time, video games are my perfect escape. I have a strong preference for deep RPGs, powerful cinematic narratives, and open worlds that reward exploration and critical thinking.",
        boardgames: "<strong>Board Games:</strong> A look into my gaming table. I love exploring strategy titles that challenge the mind, ranging from highly asymmetric, competitive setups to fluid mechanics of resource management, card play, and tactical planning.",
        travel: "<strong>Travels:</strong> Fascinated by exploring new places and cultures, I always take the opportunity to document memories, landscapes, and new discoveries.",
        movies: "<strong>Cinema & TV Shows:</strong> A look at the productions that left a mark on me. Between cult movies and must-watch series, I love following great stories and keeping a log of everything I watch.",
        sports: "<strong>Sports:</strong> Supporter of an active lifestyle, both playing and following. I balance my love for football, basketball, and volleyball with outdoor activities."
    }
};

const mainGalleryGrid = document.getElementById('main-gallery-grid');
const activeTabTitle = document.getElementById('active-tab-title');
const workspaceIntro = document.getElementById('workspace-intro'); 
const fileItems = document.querySelectorAll('.tree-item.file');

let currentFolderKey = 'about';

function renderWorkspaceContent(folderKey, fileName) {
    currentFolderKey = folderKey; 
    const targetKey = commandGalleries[folderKey] ? folderKey : 'about'; 
    const imagesArray = commandGalleries[targetKey];
    
    if(!mainGalleryGrid) return;
    
    mainGalleryGrid.innerHTML = '';
    if(activeTabTitle) activeTabTitle.innerText = fileName;

    if (workspaceIntro && folderIntros[currentLang]) {
        workspaceIntro.innerHTML = folderIntros[currentLang][folderKey] || folderIntros[currentLang]['about'];
    }

    if (imagesArray) {
        imagesArray.forEach(imgPath => {
            const card = document.createElement('div');
            card.className = 'workspace-card';
            card.style.backgroundImage = `url('${imgPath}')`;
            card.style.opacity = '0';
            mainGalleryGrid.appendChild(card);
            
            setTimeout(() => {
                card.style.opacity = '1';
            }, 50);
        });
    }

    fileItems.forEach(item => {
        if (item.getAttribute('data-cmd') === folderKey) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Escuta os cliques nos ficheiros da árvore esquerda
fileItems.forEach(item => {
    item.addEventListener('click', function() {
        const folderKey = this.getAttribute('data-cmd');
        const fileName = this.innerText.trim();
        renderWorkspaceContent(folderKey, fileName);
    });
});

// CARREGAMENTO INICIAL DO SITE
renderWorkspaceContent('about', 'about_me.md');
atualizarIdioma();