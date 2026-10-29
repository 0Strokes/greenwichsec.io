// English / Spanish switch. The HTML is written in English; this swaps each
// text node for its Spanish version, keyed by the English text with
// whitespace collapsed. If you change English copy in index.html, update the
// matching key here, or that string will stay in English.
// The Spanish is written for a professional Latin American audience and uses "usted".
(function () {
  var ES = {
    // nav
    'Services': 'Servicios',
    'Method': 'Metodología',
    'Research': 'Investigación',
    'About': 'Equipo',
    'Contact': 'Contacto',
    'Start an engagement': 'Solicitar propuesta',

    // hero
    'Offensive security laboratory': 'Laboratorio de seguridad ofensiva',
    'Every system keeps time.': 'Todo sistema tiene un margen de error.',
    'We find the drift.': 'Nosotros lo encontramos.',
    'Greenwich Security Labs is a research-led team of offensive engineers. We test applications, cloud, identity and infrastructure the way capable adversaries do, and we stay until the gaps are closed.':
      'Greenwich Security Labs es un equipo de ingenieros especializados en seguridad ofensiva, con un enfoque basado en la investigación. Evaluamos aplicaciones, entornos cloud, sistemas de identidad e infraestructura tal como lo haría un adversario sofisticado, y acompañamos a cada cliente hasta que las brechas quedan cerradas.',
    'Book a scoping call': 'Agendar una reunión',
    'View services': 'Ver servicios',
    'Approach': 'Enfoque',
    'Manual, adversary-led testing. Tools assist, people decide.': 'Pruebas manuales desde la perspectiva del atacante. Las herramientas asisten; el criterio es humano.',
    'Coverage': 'Cobertura',
    'Web, API, mobile, cloud, Kubernetes, identity, CI/CD.': 'Web, APIs, aplicaciones móviles, cloud, Kubernetes, identidad y CI/CD.',
    'Deliverable': 'Entregable',
    'Proof of impact, ranked fixes and a free retest.': 'Evidencia del impacto, correcciones priorizadas y un retest sin costo adicional.',
    'Reach': 'Modalidad',
    'Remote worldwide, on site by arrangement.': 'Remota a nivel global y presencial según requerimiento.',

    // premise
    '00 / Premise': '00 / Premisa',
    'Greenwich is where the world agreed what time it is. We bring the same discipline to security:': 'Greenwich es la referencia con la que el mundo mide el tiempo. Aplicamos ese mismo rigor a la seguridad:',
    'one precise reference': 'una medición precisa',
    'for how exposed you really are.': 'de su nivel real de exposición.',

    // services
    '01 / Services': '01 / Servicios',
    'Eight disciplines.': 'Ocho especialidades.',
    'One standard.': 'Un mismo nivel de exigencia.',
    'Commission a single assessment or build a continuous programme. Each engagement is scoped to your risk, not to a template.':
      'Contrate una evaluación puntual o un programa continuo. Cada servicio se define en función de su nivel de riesgo, no de una plantilla.',
    'Penetration testing': 'Pruebas de penetración',
    'Web applications, APIs, mobile and networks, tested by hand. We chain small findings into the paths a real attacker would take.':
      'Aplicaciones web, APIs, aplicaciones móviles y redes, evaluadas de forma manual. Encadenamos hallazgos aparentemente menores para reproducir las rutas que seguiría un atacante real.',
    'Security reviews': 'Revisiones de seguridad',
    'Architecture, design and source code review with threat modelling. Catch the flaw in the diagram, before it ships.':
      'Revisión de arquitectura, diseño y código fuente, con modelado de amenazas. Identificamos las fallas desde el diseño, antes de que lleguen a producción.',
    'Security strategy and secure development': 'Estrategia de seguridad y desarrollo seguro',
    'Security programmes designed around your risks and maturity, including a Secure SDLC with processes, owners, metrics and a roadmap to put it in place.':
      'Diseñamos programas de seguridad adaptados a los riesgos y al nivel de madurez de cada organización, incluido un ciclo de desarrollo seguro (Secure SDLC) con procesos, responsables, métricas y una hoja de ruta para su implementación.',
    'Cloud and Kubernetes': 'Cloud y Kubernetes',
    'AWS, GCP and Azure configuration and IAM, plus cluster, workload and container boundary testing down to the node.':
      'Configuración e IAM en AWS, GCP y Azure, y pruebas sobre clústeres, workloads y aislamiento de contenedores hasta el nivel del nodo.',
    'Red team operations': 'Operaciones de red team',
    'Objective-driven campaigns against people, process and detection. Find out what your defenders see, and when.':
      'Campañas orientadas a objetivos sobre personas, procesos y capacidades de detección, para conocer qué identifica su equipo de defensa y en qué momento.',
    'Identity and access': 'Identidad y accesos',
    'SSO, OAuth and OIDC flows, LDAP and directory services, and the trust relationships quietly connecting them.':
      'Flujos de SSO, OAuth y OIDC, LDAP y servicios de directorio, y las relaciones de confianza que los vinculan.',
    'CI/CD and supply chain': 'CI/CD y cadena de suministro',
    "Pipelines, runners, secrets and dependencies. Every route from a developer's commit to your production systems.":
      'Pipelines, runners, secretos y dependencias: cada ruta entre el commit de un desarrollador y sus sistemas productivos.',
    'Workshops and training': 'Workshops y capacitación',
    'Hands-on courses for engineering and security teams, taught by the consultants who run our engagements. Real techniques in prepared labs, not slides.':
      'Programas prácticos para equipos de desarrollo y seguridad, impartidos por los mismos consultores que ejecutan nuestros servicios. Técnicas reales en entornos de laboratorio, no presentaciones teóricas.',

    // workshop
    'Featured workshop': 'Workshop destacado',
    'with AI.': 'con inteligencia artificial.',
    'A practical, eight-hour workshop on applying AI tools and techniques to find security vulnerabilities. It is taught by the consultants who lead our penetration tests, using worked examples and lab environments built for the course.':
      'Workshop práctico de ocho horas sobre el uso de herramientas y técnicas de inteligencia artificial aplicadas a la identificación de vulnerabilidades. Lo imparten los consultores responsables de nuestras pruebas de penetración, con ejemplos y entornos de laboratorio preparados específicamente para la capacitación.',
    'Book it on its own, or add it to an engagement so your team keeps the method after we leave. We also build custom training around your stack.':
      'Puede contratarse de forma independiente o como complemento de un servicio, para que su equipo incorpore la metodología. También desarrollamos capacitaciones a medida de su stack tecnológico.',
    '8 hours · hands-on': '8 horas · modalidad práctica',
    'Foundations of AI-assisted vulnerability hunting': 'Fundamentos de vulnerability hunting asistido por IA',
    'Setting up and using AI tools for security analysis': 'Configuración y uso de herramientas de IA para análisis de seguridad',
    'Source code analysis and spotting likely vulnerabilities': 'Análisis de código fuente e identificación de posibles vulnerabilidades',
    'Scripts and automation to support security testing': 'Desarrollo de scripts y automatizaciones para pruebas de seguridad',
    'Lab exercises: find and validate real vulnerabilities': 'Ejercicios prácticos de identificación y validación de vulnerabilidades',
    'Format': 'Formato',
    'Lab-based, practical': 'Práctico, en laboratorio',
    'Audience': 'Dirigido a',
    'Developers, security teams': 'Equipos de desarrollo y seguridad',
    'Instructors': 'Instructores',
    'Our pentest leads': 'Consultores responsables del pentest',

    // method
    '02 / Method': '02 / Metodología',
    'A clear clock,': 'Un proceso claro,',
    'from first call to proof of fix.': 'de la primera reunión a la verificación final.',
    'Scope': 'Alcance',
    'We agree targets, rules of engagement and timing on one call. You receive a fixed proposal before any work begins.':
      'En una reunión inicial definimos objetivos, reglas de intervención y plazos. Antes de comenzar, recibe una propuesta con alcance y costo cerrados.',
    'Operate': 'Ejecución',
    'Senior engineers test by hand with our own tooling. Critical issues are raised the same day through a shared channel.':
      'Ingenieros senior realizan las pruebas de forma manual, con herramientas propias. Los hallazgos críticos se notifican el mismo día a través de un canal dedicado.',
    'Report': 'Informe',
    'An executive narrative plus technical findings with reproduction steps and fixes ranked by effort and risk.':
      'Un resumen ejecutivo y el detalle técnico de cada hallazgo, con pasos de reproducción y recomendaciones priorizadas según esfuerzo y riesgo.',
    'Verify': 'Verificación',
    'We retest every fix and reissue the report, so you hold evidence of closure for auditors, customers and your board.':
      'Validamos cada corrección y emitimos una versión actualizada del informe, como evidencia de cierre ante auditores, clientes y la alta dirección.',
    'What you receive': 'Entregables',
    'Findings written for the people who fix them.': 'Hallazgos pensados para quienes deben corregirlos.',
    'Each issue carries its business impact, a reproducible proof, and a remediation your engineers can merge. No scanner noise, no padding.':
      'Cada hallazgo documenta su impacto en el negocio, una prueba de concepto reproducible y una recomendación de remediación aplicable. Sin ruido de herramientas automáticas ni contenido de relleno.',
    'Illustrative finding': 'Hallazgo ilustrativo',
    'Critical': 'Crítico',
    'CI runner token reachable from pull requests': 'Token del runner de CI accesible desde pull requests',
    'Impact': 'Impacto',
    'Production deploy': 'Despliegue en producción',
    'Path': 'Ruta',
    'Fix effort': 'Esfuerzo',
    'Low': 'Bajo',
    'step 1 open PR from fork with modified workflow': 'paso 1  PR desde un fork con un workflow modificado',
    'step 2 read mounted runner credentials': 'paso 2  lectura de credenciales montadas en el runner',
    'step 3 push signed image to release registry': 'paso 3  publicación de una imagen firmada en el registry',

    // research
    '03 / From the lab': '03 / Laboratorio',
    'we pursue.': 'aplicada.',
    'The questions we work on between engagements. What we learn here ends up in your report and in our workshops.':
      'Las líneas de investigación que desarrollamos de forma continua. Lo que aprendemos se refleja en nuestros informes y en nuestras capacitaciones.',
    'AI-assisted hunting': 'Inteligencia artificial',
    'Teaching models to read code like an attacker': 'Modelos de lenguaje que analizan código como un atacante',
    'Where language models speed up vulnerability discovery, where they hallucinate, and how to keep a human deciding.':
      'Dónde la IA acelera el descubrimiento de vulnerabilidades, dónde genera resultados erróneos y cómo mantener el criterio humano en cada decisión.',
    'Microarchitecture': 'Microarquitectura',
    'When the hardware keeps its own time': 'Cuando el hardware revela más de lo que debe',
    'Timing and transient-execution side channels in shared and multi-tenant infrastructure.':
      'Canales laterales de temporización y de ejecución transitoria en infraestructura compartida y multi-tenant.',
    'Containers': 'Contenedores',
    'Breaking the boundary you trust': 'Los límites reales del aislamiento',
    'Escape paths from misconfigured workloads, runtimes and admission controls to the node and beyond.':
      'Rutas de escape desde workloads, runtimes y controles de admisión mal configurados hacia el nodo y el resto del clúster.',
    'Identity': 'Identidad',
    'Trust nobody remembers granting': 'Relaciones de confianza olvidadas',
    'OAuth, OIDC and directory trust chains that quietly turn one compromised account into many.':
      'Cadenas de confianza en OAuth, OIDC y servicios de directorio que permiten que una sola cuenta comprometida se convierta en muchas.',

    // team
    '04 / The team': '04 / Equipo',
    'Quiet. Precise.': 'Discretos. Precisos.',
    'Patient.': 'Metódicos.',
    'Research-led': 'Enfoque en investigación',
    'We study how systems fail at a low level and build our own tooling, so we reach what scanners cannot.':
      'Estudiamos cómo fallan los sistemas a bajo nivel y desarrollamos herramientas propias para llegar a donde las soluciones automatizadas no llegan.',
    'Senior hands only': 'Exclusivamente perfiles senior',
    'The two consultants on your scoping call run the engagement themselves. Nothing is handed to junior staff.':
      'Los dos consultores que participan en la reunión inicial son quienes ejecutan el servicio. Ninguna tarea se delega a personal junior.',
    'Discreet by default': 'Confidencialidad',
    'NDAs as standard, encrypted evidence handling, data destroyed at close.':
      'Acuerdos de confidencialidad como estándar, manejo cifrado de la evidencia y eliminación de los datos al cierre del servicio.',
    'Knowledge transfer': 'Transferencia de conocimiento',
    'Every engagement closes with a walkthrough for your engineers. Your team keeps the method, not just the report.':
      'Cada servicio concluye con una sesión técnica con su equipo, para que la organización conserve la metodología y no solo el informe.',
    'Who you work with': 'Con quién trabajará',
    'Two senior consultants.': 'Dos consultores senior.',
    'No hand-offs.': 'Sin intermediarios.',
    'International experience assessing applications, APIs and distributed services that handle very high traffic and terabyte-scale data.':
      'Trayectoria internacional en la evaluación de aplicaciones, APIs y servicios distribuidos que procesan grandes volúmenes de tráfico y datos a escala de terabytes.',
    'Years combined': 'Años de experiencia combinada',
    'CVEs published': 'CVEs publicados',
    'Exploit certifications: OSED, GXPN': 'Certificaciones en explotación: OSED, GXPN',
    'Banking engagements': 'Proyectos en banca',
    'Consultant 01': 'Consultor 01',
    'Consultant 02': 'Consultor 02',
    '12+ years': '12+ años',
    '7+ years': '7+ años',
    'Former penetration testing engineer at a major cloud provider, now leading offensive security and detection at a global trading platform across cloud, Kubernetes and identity. Has tested major Latin American banks and published research on low-level vulnerabilities, identity systems and container security.':
      'Fue Penetration Testing Engineer en un proveedor cloud de primer nivel y actualmente lidera iniciativas de seguridad ofensiva y detección en una plataforma global de trading, que abarcan seguridad cloud, Kubernetes y sistemas de identidad. Ha ejecutado pruebas de penetración para importantes instituciones bancarias de Latinoamérica y desarrollado investigación técnica sobre vulnerabilidades de bajo nivel, identidad y seguridad de contenedores.',
    'Leads security assessments of distributed services, APIs and cloud infrastructure at a major cloud provider, finding complex authorisation and business-logic flaws. Author or co-author of 39 CVEs.':
      'Lidera evaluaciones de seguridad de servicios distribuidos, APIs e infraestructura cloud en un proveedor cloud de primer nivel, con foco en vulnerabilidades complejas de autorización y lógica de negocio. Autor y coautor de 39 CVEs.',
    'Detection': 'Detección',
    'Exploit development': 'Desarrollo de exploits',

    // contact
    '05 / Contact': '05 / Contacto',
    'Set your': 'Hablemos de',
    'reference point.': 'su seguridad.',
    'Tell us what you need tested or taught. We reply within one business day with questions and a proposed scope.':
      'Cuéntenos qué necesita evaluar o en qué área desea capacitar a su equipo. Respondemos en un día hábil con preguntas y una propuesta de alcance.',
    'Based in Latin America. Working in English and Spanish across the Americas and Europe.':
      'Con base en Latinoamérica. Trabajamos en inglés y español en toda América y Europa.',
    'Name': 'Nombre',
    'Company': 'Empresa',
    'Work email': 'Correo corporativo',
    'Service': 'Servicio',
    'Security review': 'Revisión de seguridad',
    'Red team operation': 'Operación de red team',
    'Not sure yet': 'Aún no lo tengo definido',
    'What should we know': '¿Qué deberíamos saber?',
    'Opens a pre-filled email to our team. Never shared.': 'Se abrirá un correo con esta información dirigido a nuestro equipo. Sus datos no se comparten con terceros.',
    'Send request': 'Enviar solicitud',
    'Responsible disclosure': 'Divulgación responsable'
  };

  var META_ES = {
    title: 'Greenwich Security Labs | Laboratorio de seguridad ofensiva',
    description: 'Equipo de seguridad ofensiva con enfoque en investigación: pruebas de penetración, revisiones de seguridad, estrategia y desarrollo seguro, cloud y Kubernetes, red team, identidad, CI/CD, workshops y capacitación.',
    alt: {
      'Greenwich Security Labs astronomical clock mark': 'Reloj astronómico, logotipo de Greenwich Security Labs',
      'Greenwich panther mark': 'Pantera, logotipo de Greenwich Security Labs'
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
