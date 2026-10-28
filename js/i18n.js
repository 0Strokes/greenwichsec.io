// English / Spanish switch. The HTML is written in English; this swaps each
// text node for its Spanish version, keyed by the English text with
// whitespace collapsed. If you change English copy in index.html, update the
// matching key here, or that string will stay in English.
// The Spanish is written for a Latin American audience and uses "tú".
(function () {
  var ES = {
    // nav
    'Services': 'Servicios',
    'Method': 'Metodología',
    'Research': 'Investigación',
    'About': 'Equipo',
    'Contact': 'Contacto',
    'Start an engagement': 'Hablemos',

    // hero
    'Offensive security laboratory': 'Laboratorio de seguridad ofensiva',
    'Every system keeps time.': 'Todo sistema marca la hora.',
    'We find the drift.': 'Encontramos el desfase.',
    'Greenwich Security Labs is a research-led team of offensive engineers. We test applications, cloud, identity and infrastructure the way capable adversaries do, and we stay until the gaps are closed.':
      'Somos un equipo de ingenieros de seguridad ofensiva que trabaja desde la investigación. Atacamos aplicaciones, nube, identidad e infraestructura como lo haría un adversario de verdad, y no nos vamos hasta que las brechas queden cerradas.',
    'Book a scoping call': 'Agenda una llamada',
    'View services': 'Ver servicios',
    'Approach': 'Enfoque',
    'Manual, adversary-led testing. Tools assist, people decide.': 'Pruebas manuales, con mentalidad de atacante. Las herramientas ayudan; deciden las personas.',
    'Coverage': 'Cobertura',
    'Web, API, mobile, cloud, Kubernetes, identity, CI/CD.': 'Web, APIs, mobile, cloud, Kubernetes, identidad y CI/CD.',
    'Deliverable': 'Entregable',
    'Proof of impact, ranked fixes and a free retest.': 'Impacto demostrado, correcciones priorizadas y retest incluido.',
    'Reach': 'Modalidad',
    'Remote worldwide, on site by arrangement.': 'Remoto desde cualquier lugar, presencial cuando haga falta.',

    // premise
    '00 / Premise': '00 / Premisa',
    'Greenwich is where the world agreed what time it is. We bring the same discipline to security:': 'En Greenwich el mundo se puso de acuerdo sobre qué hora es. Llevamos esa misma precisión a la seguridad:',
    'one precise reference': 'una referencia exacta',
    'for how exposed you really are.': 'de qué tan expuesto estás de verdad.',

    // services
    '01 / Services': '01 / Servicios',
    'Seven disciplines.': 'Siete disciplinas.',
    'One standard.': 'Un mismo estándar.',
    'Commission a single assessment or build a continuous programme. Each engagement is scoped to your risk, not to a template.':
      'Contrata una evaluación puntual o arma un programa continuo. Cada proyecto se diseña según tu riesgo, no a partir de una plantilla.',
    'Penetration testing': 'Pruebas de penetración',
    'Web applications, APIs, mobile and networks, tested by hand. We chain small findings into the paths a real attacker would take.':
      'Aplicaciones web, APIs, apps móviles y redes, probadas a mano. Encadenamos hallazgos pequeños hasta armar el camino que seguiría un atacante real.',
    'Security reviews': 'Revisiones de seguridad',
    'Architecture, design and source code review with threat modelling. Catch the flaw in the diagram, before it ships.':
      'Revisamos arquitectura, diseño y código fuente con modelado de amenazas, para encontrar la falla en el diagrama antes de que llegue a producción.',
    'Cloud and Kubernetes': 'Cloud y Kubernetes',
    'AWS, GCP and Azure configuration and IAM, plus cluster, workload and container boundary testing down to the node.':
      'Configuración e IAM en AWS, GCP y Azure, además de pruebas sobre clústeres, workloads y aislamiento de contenedores, hasta llegar al nodo.',
    'Red team operations': 'Red teaming',
    'Objective-driven campaigns against people, process and detection. Find out what your defenders see, and when.':
      'Campañas con objetivos concretos contra personas, procesos y capacidades de detección. Descubre qué ve tu equipo de defensa, y en qué momento.',
    'Identity and access': 'Identidad y accesos',
    'SSO, OAuth and OIDC flows, LDAP and directory services, and the trust relationships quietly connecting them.':
      'Flujos de SSO, OAuth y OIDC, LDAP y servicios de directorio, y las relaciones de confianza que los conectan sin que nadie lo note.',
    'CI/CD and supply chain': 'CI/CD y cadena de suministro',
    "Pipelines, runners, secrets and dependencies. Every route from a developer's commit to your production systems.":
      'Pipelines, runners, secretos y dependencias: cada camino entre el commit de un desarrollador y tus sistemas en producción.',
    'Workshops and training': 'Workshops y capacitaciones',
    'Hands-on courses for engineering and security teams, taught by the consultants who run our engagements. Real techniques in prepared labs, not slides.':
      'Cursos prácticos para equipos de desarrollo y seguridad, dictados por los mismos consultores que ejecutan nuestros proyectos. Técnicas reales en laboratorios preparados, nada de diapositivas.',

    // workshop
    'Featured workshop': 'Workshop destacado',
    'with AI.': 'con IA.',
    'A practical, eight-hour workshop on applying AI tools and techniques to find security vulnerabilities. It is taught by the consultants who lead our penetration tests, using worked examples and lab environments built for the course.':
      'Un workshop práctico de ocho horas para aprender a usar herramientas y técnicas de IA en la búsqueda de vulnerabilidades. Lo dictan los mismos consultores que lideran nuestros pentests, con ejemplos reales y laboratorios armados para el curso.',
    'Book it on its own, or add it to an engagement so your team keeps the method after we leave. We also build custom training around your stack.':
      'Puedes contratarlo por separado o sumarlo a un proyecto, para que tu equipo se quede con el método cuando terminemos. También armamos capacitaciones a la medida de tu stack.',
    '8 hours · hands-on': '8 horas · 100% práctico',
    'Foundations of AI-assisted vulnerability hunting': 'Fundamentos del vulnerability hunting asistido por IA',
    'Setting up and using AI tools for security analysis': 'Cómo configurar y usar herramientas de IA para análisis de seguridad',
    'Source code analysis and spotting likely vulnerabilities': 'Análisis de código fuente para detectar posibles vulnerabilidades',
    'Scripts and automation to support security testing': 'Scripts y automatizaciones para apoyar las pruebas',
    'Lab exercises: find and validate real vulnerabilities': 'Laboratorio: encontrar y validar vulnerabilidades reales',
    'Format': 'Formato',
    'Lab-based, practical': 'Práctico, en laboratorio',
    'Audience': 'Para quién',
    'Developers, security teams': 'Desarrolladores y equipos de seguridad',
    'Instructors': 'Instructores',
    'Our pentest leads': 'Quienes lideran nuestros pentests',

    // method
    '02 / Method': '02 / Metodología',
    'A clear clock,': 'Un reloj claro,',
    'from first call to proof of fix.': 'de la primera llamada a la corrección verificada.',
    'Scope': 'Alcance',
    'We agree targets, rules of engagement and timing on one call. You receive a fixed proposal before any work begins.':
      'En una sola llamada definimos objetivos, reglas y tiempos. Antes de empezar recibes una propuesta con precio cerrado.',
    'Operate': 'Ejecución',
    'Senior engineers test by hand with our own tooling. Critical issues are raised the same day through a shared channel.':
      'Ingenieros senior prueban a mano, con herramientas propias. Si aparece algo crítico, te avisamos ese mismo día por un canal compartido.',
    'Report': 'Informe',
    'An executive narrative plus technical findings with reproduction steps and fixes ranked by effort and risk.':
      'Un resumen ejecutivo y los hallazgos técnicos, con pasos para reproducirlos y correcciones ordenadas por esfuerzo y riesgo.',
    'Verify': 'Verificación',
    'We retest every fix and reissue the report, so you hold evidence of closure for auditors, customers and your board.':
      'Volvemos a probar cada corrección y actualizamos el informe, para que tengas evidencia del cierre frente a auditores, clientes y directorio.',
    'What you receive': 'Lo que recibes',
    'Findings written for the people who fix them.': 'Hallazgos escritos para quienes los van a corregir.',
    'Each issue carries its business impact, a reproducible proof, and a remediation your engineers can merge. No scanner noise, no padding.':
      'Cada hallazgo trae su impacto en el negocio, una prueba reproducible y una corrección que tu equipo puede aplicar directamente. Sin ruido de scanners ni relleno.',
    'Illustrative finding': 'Hallazgo de ejemplo',
    'Critical': 'Crítico',
    'CI runner token reachable from pull requests': 'Token del runner de CI expuesto a pull requests',
    'Impact': 'Impacto',
    'Production deploy': 'Deploy a producción',
    'Path': 'Ruta',
    'Fix effort': 'Esfuerzo',
    'Low': 'Bajo',
    'step 1 open PR from fork with modified workflow': 'paso 1  abrir un PR desde un fork con el workflow modificado',
    'step 2 read mounted runner credentials': 'paso 2  leer las credenciales montadas en el runner',
    'step 3 push signed image to release registry': 'paso 3  publicar una imagen firmada en el registry de release',

    // research
    '03 / From the lab': '03 / Desde el laboratorio',
    'we pursue.': 'propia.',
    'The questions we work on between engagements. What we learn here ends up in your report and in our workshops.':
      'Lo que investigamos entre un proyecto y otro. Lo que aprendemos aquí termina en tus informes y en nuestros workshops.',
    'AI-assisted hunting': 'Hunting asistido por IA',
    'Teaching models to read code like an attacker': 'Enseñarle a un modelo a leer código como un atacante',
    'Where language models speed up vulnerability discovery, where they hallucinate, and how to keep a human deciding.':
      'Dónde los modelos de lenguaje aceleran la búsqueda de vulnerabilidades, dónde alucinan y cómo mantener a una persona tomando las decisiones.',
    'Microarchitecture': 'Microarquitectura',
    'When the hardware keeps its own time': 'Cuando el hardware lleva su propia hora',
    'Timing and transient-execution side channels in shared and multi-tenant infrastructure.':
      'Canales laterales de timing y de ejecución transitoria en infraestructura compartida y multi-tenant.',
    'Containers': 'Contenedores',
    'Breaking the boundary you trust': 'Romper el límite en el que confías',
    'Escape paths from misconfigured workloads, runtimes and admission controls to the node and beyond.':
      'Cómo escapar desde workloads, runtimes y controles de admisión mal configurados hasta el nodo, y más allá.',
    'Identity': 'Identidad',
    'Trust nobody remembers granting': 'Permisos que nadie recuerda haber dado',
    'OAuth, OIDC and directory trust chains that quietly turn one compromised account into many.':
      'Cadenas de confianza en OAuth, OIDC y directorios que, sin hacer ruido, convierten una cuenta comprometida en muchas.',

    // team
    '04 / The team': '04 / El equipo',
    'Quiet. Precise.': 'Discretos. Precisos.',
    'Patient.': 'Pacientes.',
    'Research-led': 'Investigación primero',
    'We study how systems fail at a low level and build our own tooling, so we reach what scanners cannot.':
      'Estudiamos cómo fallan los sistemas a bajo nivel y desarrollamos nuestras propias herramientas, para llegar a donde un scanner no llega.',
    'Senior hands only': 'Solo perfiles senior',
    'The two consultants on your scoping call run the engagement themselves. Nothing is handed to junior staff.':
      'Los dos consultores con los que hablas en la primera llamada son los que hacen el trabajo. Nada se delega a perfiles junior.',
    'Discreet by default': 'Discreción ante todo',
    'NDAs as standard, encrypted evidence handling, data destroyed at close.':
      'NDA desde el primer día, evidencias cifradas y eliminación de datos al cerrar el proyecto.',
    'Knowledge transfer': 'Transferencia de conocimiento',
    'Every engagement closes with a walkthrough for your engineers. Your team keeps the method, not just the report.':
      'Cada proyecto cierra con una sesión para tu equipo técnico. Te quedas con el método, no solo con el informe.',
    'Who you work with': 'Con quién vas a trabajar',
    'Two senior consultants.': 'Dos consultores senior.',
    'No hand-offs.': 'Sin intermediarios.',
    'International experience assessing applications, APIs and distributed services that handle very high traffic and terabyte-scale data.':
      'Experiencia internacional evaluando aplicaciones, APIs y servicios distribuidos con muchísimo tráfico y datos a escala de terabytes.',
    'Years combined': 'Años de experiencia combinada',
    'CVEs published': 'CVEs publicados',
    'Exploit certifications: OSED, GXPN': 'Certificaciones en exploits: OSED, GXPN',
    'Banking engagements': 'Proyectos con bancos',
    'Consultant 01': 'Consultor 01',
    'Consultant 02': 'Consultor 02',
    '12+ years': '12+ años',
    '7+ years': '7+ años',
    'Former penetration testing engineer at a major cloud provider, now leading offensive security and detection at a global trading platform across cloud, Kubernetes and identity. Has tested major Latin American banks and published research on low-level vulnerabilities, identity systems and container security.':
      'Antes fue penetration testing engineer en uno de los grandes proveedores cloud; hoy lidera seguridad ofensiva y detección en una plataforma global de trading, con foco en cloud, Kubernetes e identidad. Ha hecho pentests para grandes bancos de Latinoamérica e investigado vulnerabilidades de bajo nivel, sistemas de identidad y seguridad de contenedores.',
    'Leads security assessments of distributed services, APIs and cloud infrastructure at a major cloud provider, finding complex authorisation and business-logic flaws. Author or co-author of 39 CVEs.':
      'Lidera evaluaciones de seguridad de servicios distribuidos, APIs e infraestructura cloud en uno de los grandes proveedores cloud, donde encuentra fallas complejas de autorización y de lógica de negocio. Autor o coautor de 39 CVEs.',
    'Detection': 'Detección',
    'Exploit development': 'Desarrollo de exploits',

    // contact
    '05 / Contact': '05 / Contacto',
    'Set your': 'Fija tu',
    'reference point.': 'punto de referencia.',
    'Tell us what you need tested or taught. We reply within one business day with questions and a proposed scope.':
      'Cuéntanos qué necesitas evaluar o aprender. Te respondemos en un día hábil con algunas preguntas y una propuesta de alcance.',
    'Name': 'Nombre',
    'Company': 'Empresa',
    'Work email': 'Email de trabajo',
    'Service': 'Servicio',
    'Security review': 'Revisión de seguridad',
    'Red team operation': 'Red teaming',
    'Not sure yet': 'Todavía no lo sé',
    'What should we know': '¿Qué deberíamos saber?',
    'Opens a pre-filled email to our team. Never shared.': 'Se abre un email ya completo para nuestro equipo. No compartimos tus datos.',
    'Send request': 'Enviar solicitud',
    'Responsible disclosure': 'Reporte de vulnerabilidades'
  };

  var META_ES = {
    title: 'Greenwich Security Labs | Laboratorio de seguridad ofensiva',
    description: 'Equipo de seguridad ofensiva que trabaja desde la investigación: pruebas de penetración, revisiones de seguridad, cloud y Kubernetes, red teaming, identidad, CI/CD, workshops y capacitaciones.',
    alt: {
      'Greenwich Security Labs astronomical clock mark': 'Reloj astronómico, logo de Greenwich Security Labs',
      'Greenwich panther mark': 'Pantera, logo de Greenwich Security Labs'
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
