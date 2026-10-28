// English / Spanish switch. The HTML is written in English; this swaps each
// text node for its Spanish translation, keyed by the English text with
// whitespace collapsed. If you change English copy in index.html, update the
// matching key here, or that string will stay in English.
(function () {
  var ES = {
    // nav
    'Services': 'Servicios',
    'Method': 'Método',
    'Research': 'Investigación',
    'About': 'Nosotros',
    'Contact': 'Contacto',
    'Start an engagement': 'Iniciar un proyecto',

    // hero
    'Offensive security laboratory': 'Laboratorio de seguridad ofensiva',
    'Every system keeps time.': 'Todo sistema marca la hora.',
    'We find the drift.': 'Encontramos el desfase.',
    'Greenwich Security Labs is a research-led team of offensive engineers. We test applications, cloud, identity and infrastructure the way capable adversaries do, and we stay until the gaps are closed.':
      'Greenwich Security Labs es un equipo de ingenieros de seguridad ofensiva guiado por la investigación. Evaluamos aplicaciones, cloud, identidad e infraestructura como lo haría un adversario capaz, y nos quedamos hasta que las brechas estén cerradas.',
    'Book a scoping call': 'Agendar llamada de alcance',
    'View services': 'Ver servicios',
    'Approach': 'Enfoque',
    'Manual, adversary-led testing. Tools assist, people decide.': 'Pruebas manuales con mentalidad de adversario. Las herramientas ayudan, las personas deciden.',
    'Coverage': 'Cobertura',
    'Web, API, mobile, cloud, Kubernetes, identity, CI/CD.': 'Web, APIs, móvil, cloud, Kubernetes, identidad, CI/CD.',
    'Deliverable': 'Entregable',
    'Proof of impact, ranked fixes and a free retest.': 'Prueba de impacto, correcciones priorizadas y un retest sin costo.',
    'Reach': 'Modalidad',
    'Remote worldwide, on site by arrangement.': 'Remoto en todo el mundo, presencial según acuerdo.',

    // premise
    '00 / Premise': '00 / Premisa',
    'Greenwich is where the world agreed what time it is. We bring the same discipline to security:': 'Greenwich es donde el mundo acordó qué hora es. Llevamos esa misma disciplina a la seguridad:',
    'one precise reference': 'una referencia precisa',
    'for how exposed you really are.': 'de qué tan expuestos están realmente.',

    // services
    '01 / Services': '01 / Servicios',
    'Seven disciplines.': 'Siete disciplinas.',
    'One standard.': 'Un solo estándar.',
    'Commission a single assessment or build a continuous programme. Each engagement is scoped to your risk, not to a template.':
      'Contrate una evaluación puntual o construya un programa continuo. Cada proyecto se dimensiona según su riesgo, no según una plantilla.',
    'Penetration testing': 'Pruebas de penetración',
    'Web applications, APIs, mobile and networks, tested by hand. We chain small findings into the paths a real attacker would take.':
      'Aplicaciones web, APIs, móviles y redes, probadas a mano. Encadenamos hallazgos pequeños en las rutas que tomaría un atacante real.',
    'Security reviews': 'Revisiones de seguridad',
    'Architecture, design and source code review with threat modelling. Catch the flaw in the diagram, before it ships.':
      'Revisión de arquitectura, diseño y código fuente con modelado de amenazas. Encuentre la falla en el diagrama, antes de que llegue a producción.',
    'Cloud and Kubernetes': 'Cloud y Kubernetes',
    'AWS, GCP and Azure configuration and IAM, plus cluster, workload and container boundary testing down to the node.':
      'Configuración e IAM en AWS, GCP y Azure, además de pruebas de clústeres, workloads y aislamiento de contenedores hasta llegar al nodo.',
    'Red team operations': 'Operaciones de red team',
    'Objective-driven campaigns against people, process and detection. Find out what your defenders see, and when.':
      'Campañas orientadas a objetivos contra personas, procesos y detección. Descubra qué ven sus defensores, y cuándo.',
    'Identity and access': 'Identidad y acceso',
    'SSO, OAuth and OIDC flows, LDAP and directory services, and the trust relationships quietly connecting them.':
      'Flujos SSO, OAuth y OIDC, LDAP y servicios de directorio, y las relaciones de confianza que los conectan en silencio.',
    'CI/CD and supply chain': 'CI/CD y cadena de suministro',
    "Pipelines, runners, secrets and dependencies. Every route from a developer's commit to your production systems.":
      'Pipelines, runners, secretos y dependencias. Cada ruta desde el commit de un desarrollador hasta sus sistemas en producción.',
    'Workshops and training': 'Workshops y capacitación',
    'Hands-on courses for engineering and security teams, taught by the consultants who run our engagements. Real techniques in prepared labs, not slides.':
      'Cursos prácticos para equipos de ingeniería y seguridad, impartidos por los mismos consultores que ejecutan nuestros proyectos. Técnicas reales en laboratorios preparados, no diapositivas.',

    // workshop
    'Featured workshop': 'Workshop destacado',
    'with AI.': 'con IA.',
    'A practical, eight-hour workshop on applying AI tools and techniques to find security vulnerabilities. It is taught by the consultants who lead our penetration tests, using worked examples and lab environments built for the course.':
      'Un workshop práctico de ocho horas sobre el uso de herramientas y técnicas de IA para identificar vulnerabilidades de seguridad. Lo imparten los consultores que lideran nuestras pruebas de penetración, con ejemplos y entornos de laboratorio preparados para el curso.',
    'Book it on its own, or add it to an engagement so your team keeps the method after we leave. We also build custom training around your stack.':
      'Contrátelo por separado o súmelo a un proyecto para que su equipo conserve el método cuando terminemos. También diseñamos capacitaciones a la medida de su stack.',
    '8 hours · hands-on': '8 horas · práctico',
    'Foundations of AI-assisted vulnerability hunting': 'Fundamentos de vulnerability hunting asistido por IA',
    'Setting up and using AI tools for security analysis': 'Configuración y uso de herramientas de IA para análisis de seguridad',
    'Source code analysis and spotting likely vulnerabilities': 'Análisis de código fuente e identificación de posibles vulnerabilidades',
    'Scripts and automation to support security testing': 'Scripts y automatizaciones para apoyar las pruebas de seguridad',
    'Lab exercises: find and validate real vulnerabilities': 'Ejercicios de laboratorio: identificar y validar vulnerabilidades reales',
    'Format': 'Formato',
    'Lab-based, practical': 'Laboratorio práctico',
    'Audience': 'Audiencia',
    'Developers, security teams': 'Desarrolladores, equipos de seguridad',
    'Instructors': 'Instructores',
    'Our pentest leads': 'Nuestros líderes de pentest',

    // method
    '02 / Method': '02 / Método',
    'A clear clock,': 'Un reloj claro,',
    'from first call to proof of fix.': 'de la primera llamada a la prueba de corrección.',
    'Scope': 'Alcance',
    'We agree targets, rules of engagement and timing on one call. You receive a fixed proposal before any work begins.':
      'Acordamos objetivos, reglas de enfrentamiento y tiempos en una sola llamada. Recibe una propuesta cerrada antes de que empiece cualquier trabajo.',
    'Operate': 'Ejecución',
    'Senior engineers test by hand with our own tooling. Critical issues are raised the same day through a shared channel.':
      'Ingenieros senior prueban a mano con herramientas propias. Los hallazgos críticos se reportan el mismo día por un canal compartido.',
    'Report': 'Informe',
    'An executive narrative plus technical findings with reproduction steps and fixes ranked by effort and risk.':
      'Un resumen ejecutivo y hallazgos técnicos con pasos de reproducción y correcciones priorizadas por esfuerzo y riesgo.',
    'Verify': 'Verificación',
    'We retest every fix and reissue the report, so you hold evidence of closure for auditors, customers and your board.':
      'Volvemos a probar cada corrección y reemitimos el informe, para que tenga evidencia del cierre ante auditores, clientes y su directorio.',
    'What you receive': 'Lo que recibe',
    'Findings written for the people who fix them.': 'Hallazgos escritos para quienes los corrigen.',
    'Each issue carries its business impact, a reproducible proof, and a remediation your engineers can merge. No scanner noise, no padding.':
      'Cada hallazgo incluye su impacto en el negocio, una prueba reproducible y una corrección que sus ingenieros pueden aplicar. Sin ruido de scanners, sin relleno.',
    'Illustrative finding': 'Hallazgo ilustrativo',
    'Critical': 'Crítico',
    'CI runner token reachable from pull requests': 'Token del runner de CI accesible desde pull requests',
    'Impact': 'Impacto',
    'Production deploy': 'Despliegue a producción',
    'Path': 'Ruta',
    'Fix effort': 'Esfuerzo',
    'Low': 'Bajo',
    'step 1 open PR from fork with modified workflow': 'paso 1  abrir PR desde un fork con workflow modificado',
    'step 2 read mounted runner credentials': 'paso 2  leer credenciales montadas en el runner',
    'step 3 push signed image to release registry': 'paso 3  publicar imagen firmada en el registry de release',

    // research
    '03 / From the lab': '03 / Desde el laboratorio',
    'we pursue.': 'propia.',
    'The questions we work on between engagements. What we learn here ends up in your report and in our workshops.':
      'Las preguntas en las que trabajamos entre proyectos. Lo que aprendemos aquí termina en sus informes y en nuestros workshops.',
    'AI-assisted hunting': 'Hunting asistido por IA',
    'Teaching models to read code like an attacker': 'Enseñar a los modelos a leer código como un atacante',
    'Where language models speed up vulnerability discovery, where they hallucinate, and how to keep a human deciding.':
      'Dónde los modelos de lenguaje aceleran el descubrimiento de vulnerabilidades, dónde alucinan, y cómo mantener a una persona tomando las decisiones.',
    'Microarchitecture': 'Microarquitectura',
    'When the hardware keeps its own time': 'Cuando el hardware marca su propia hora',
    'Timing and transient-execution side channels in shared and multi-tenant infrastructure.':
      'Canales laterales de timing y ejecución transitoria en infraestructura compartida y multi-tenant.',
    'Containers': 'Contenedores',
    'Breaking the boundary you trust': 'Romper el límite en el que confía',
    'Escape paths from misconfigured workloads, runtimes and admission controls to the node and beyond.':
      'Rutas de escape desde workloads, runtimes y controles de admisión mal configurados hasta el nodo y más allá.',
    'Identity': 'Identidad',
    'Trust nobody remembers granting': 'La confianza que nadie recuerda haber otorgado',
    'OAuth, OIDC and directory trust chains that quietly turn one compromised account into many.':
      'Cadenas de confianza OAuth, OIDC y de directorio que convierten en silencio una cuenta comprometida en muchas.',

    // team
    '04 / The team': '04 / El equipo',
    'Quiet. Precise.': 'Discretos. Precisos.',
    'Patient.': 'Pacientes.',
    'Research-led': 'Guiados por la investigación',
    'We study how systems fail at a low level and build our own tooling, so we reach what scanners cannot.':
      'Estudiamos cómo fallan los sistemas a bajo nivel y desarrollamos herramientas propias, para llegar a donde los scanners no llegan.',
    'Senior hands only': 'Solo perfiles senior',
    'The two consultants on your scoping call run the engagement themselves. Nothing is handed to junior staff.':
      'Los dos consultores de la llamada de alcance ejecutan el proyecto personalmente. Nada se delega a personal junior.',
    'Discreet by default': 'Discreción por defecto',
    'NDAs as standard, encrypted evidence handling, data destroyed at close.':
      'NDA como estándar, manejo cifrado de evidencias y destrucción de datos al cierre.',
    'Knowledge transfer': 'Transferencia de conocimiento',
    'Every engagement closes with a walkthrough for your engineers. Your team keeps the method, not just the report.':
      'Cada proyecto cierra con una sesión para sus ingenieros. Su equipo se queda con el método, no solo con el informe.',
    'Who you work with': 'Con quién trabaja',
    'Two senior consultants.': 'Dos consultores senior.',
    'No hand-offs.': 'Sin intermediarios.',
    'International experience assessing applications, APIs and distributed services that handle very high traffic and terabyte-scale data.':
      'Experiencia internacional evaluando aplicaciones, APIs y servicios distribuidos que procesan grandes volúmenes de tráfico y datos a escala de terabytes.',
    'Years combined': 'Años de experiencia combinada',
    'CVEs published': 'CVEs publicados',
    'Exploit certifications: OSED, GXPN': 'Certificaciones de exploits: OSED, GXPN',
    'Banking engagements': 'Proyectos en banca',
    'Consultant 01': 'Consultor 01',
    'Consultant 02': 'Consultor 02',
    '12+ years': '12+ años',
    '7+ years': '7+ años',
    'Former penetration testing engineer at a major cloud provider, now leading offensive security and detection at a global trading platform across cloud, Kubernetes and identity. Has tested major Latin American banks and published research on low-level vulnerabilities, identity systems and container security.':
      'Fue penetration testing engineer en un importante proveedor cloud y hoy lidera seguridad ofensiva y detección en una plataforma global de trading, abarcando cloud, Kubernetes e identidad. Ha realizado pruebas de penetración para importantes bancos de Latinoamérica e investigaciones sobre vulnerabilidades de bajo nivel, sistemas de identidad y seguridad de contenedores.',
    'Leads security assessments of distributed services, APIs and cloud infrastructure at a major cloud provider, finding complex authorisation and business-logic flaws. Author or co-author of 39 CVEs.':
      'Lidera evaluaciones de seguridad de servicios distribuidos, APIs e infraestructura cloud en un importante proveedor cloud, identificando vulnerabilidades complejas de autorización y lógica de negocio. Autor y coautor de 39 CVEs.',
    'Detection': 'Detección',
    'Exploit development': 'Desarrollo de exploits',

    // contact
    '05 / Contact': '05 / Contacto',
    'Set your': 'Fije su',
    'reference point.': 'punto de referencia.',
    'Tell us what you need tested or taught. We reply within one business day with questions and a proposed scope.':
      'Cuéntenos qué necesita evaluar o aprender. Respondemos en un día hábil con preguntas y una propuesta de alcance.',
    'Name': 'Nombre',
    'Company': 'Empresa',
    'Work email': 'Email corporativo',
    'Service': 'Servicio',
    'Security review': 'Revisión de seguridad',
    'Red team operation': 'Operación de red team',
    'Not sure yet': 'Aún no lo sé',
    'What should we know': 'Qué deberíamos saber',
    'Opens a pre-filled email to our team. Never shared.': 'Abre un email prellenado para nuestro equipo. Nunca se comparte.',
    'Send request': 'Enviar solicitud',
    'Responsible disclosure': 'Divulgación responsable'
  };

  var META_ES = {
    title: 'Greenwich Security Labs | Laboratorio de seguridad ofensiva',
    description: 'Greenwich Security Labs es un equipo de seguridad ofensiva guiado por la investigación: pruebas de penetración, revisiones de seguridad, cloud y Kubernetes, red team, identidad, CI/CD, workshops y capacitación.',
    alt: {
      'Greenwich Security Labs astronomical clock mark': 'Marca del reloj astronómico de Greenwich Security Labs',
      'Greenwich panther mark': 'Marca de la pantera de Greenwich'
    }
  };

  var root = document.documentElement;
  var norm = function (t) { return t.replace(/\s+/g, ' ').trim(); };

  // Remember the original English of every translatable text node.
  var nodes = [];
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (var n; (n = walker.nextNode());) {
    if (n.parentElement.closest('script,style,[data-gmt]')) continue;
    if (ES[norm(n.nodeValue)]) nodes.push({ node: n, en: n.nodeValue });
  }
  var imgs = Array.prototype.map.call(document.querySelectorAll('img[alt]'), function (el) { return { el: el, en: el.alt }; });
  var metaDesc = document.querySelector('meta[name="description"]');
  var en = { title: document.title, description: metaDesc ? metaDesc.content : '' };
  var buttons = document.querySelectorAll('.gs-lang [data-lang]');

  function apply(lang) {
    var es = lang === 'es';
    nodes.forEach(function (item) {
      if (!es) { item.node.nodeValue = item.en; return; }
      var lead = item.en.match(/^\s*/)[0], trail = item.en.match(/\s*$/)[0];
      item.node.nodeValue = lead + ES[norm(item.en)] + trail;
    });
    imgs.forEach(function (item) { item.el.alt = es && META_ES.alt[item.en] ? META_ES.alt[item.en] : item.en; });
    document.title = es ? META_ES.title : en.title;
    if (metaDesc) metaDesc.content = es ? META_ES.description : en.description;
    root.lang = lang;
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
  }

  var saved = null;
  try { saved = localStorage.getItem('gs-lang'); } catch (e) {}
  // English by default; Spanish only once the visitor picks it.
  if (saved === 'es') apply('es');

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      apply(b.dataset.lang);
      try { localStorage.setItem('gs-lang', b.dataset.lang); } catch (e) {}
    });
  });
})();
