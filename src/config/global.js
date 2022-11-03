export default {
  global: {
    componenteFormativo: 'Búsqueda y recolección de información bibliográfica',
    descripcionCurso:
      'Este componente formativo aborda aspectos clave del proceso de búsqueda, clasificación y acceso a la información de valor. Mediante la asimilación de los contenidos, el aprendiz podrá interpretar su rol y nivel de participación dentro del flujo de proceso establecido, o establecer, para acceder a la información, clasificarla, reportarla y ofrecerla, dentro del marco del servicio bibliotecario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Acceso a la información',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de uso de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Evidencias del servicio de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Directrices internacionales para bibliotecas y servicios de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Reportes de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Redacción y presentación de derechos de autor',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Tendencias en la elaboración de reportes',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Referencias y herramientas',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Elaboración de informes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Directrices internacionales para bibliotecas y servicios de información',
      referencia:
        'Guy, S. (19871).  Directrices sobre bibliotecas nacionales. Unesdoc. ',
      tipo: 'Página web',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000076173_spa',
    },
    {
      tema: 'Evidencias del servicio de información',
      referencia:
        'Biblioteca Nacional del Perú (2008). Indicadores de gestión para bibliotecas universitarias. Issuu. ',
      tipo: 'Página web',
      link:
        'https://issuu.com/aldoarango/docs/cobun_indicadoresgestionbibliotecasuniversitarias',
    },
    {
      tema:
        'Directrices internacionales para bibliotecas y servicios de información',
      referencia:
        'Nieves, Y. (2019). Identificación de normas y directrices para bibliotecas: las unidades de información. Scielo. ',
      tipo: 'Página web',
      link:
        'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0187-358X2019000100081',
    },
    {
      tema: 'Redacción y presentación de derechos de autor',
      referencia:
        'Pabón, J. (s.f.). Guía de derecho de autor para bibliotecas. ',
      tipo: 'Documento pdf',
      link:
        'https://bibliotecanacional.gov.co/es-co/formacion/caja-de-herramientas/Documents/guia%20de%20derechos%20de%20autor%20para%20bibliotecas.pdf',
    },
    {
      tema: 'Referencias y herramientas',
      referencia:
        'Bibliotecas UNED (2020). Principales herramientas para la gestión de referencias bibliográficas. [Video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4CaVpuyFeB4',
    },
    {
      tema: 'Referencias y herramientas',
      referencia:
        'Desde la percepción de Lu (2022). Herramientas para citas y referencias bibliográficas. Modo automático. [Video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=v1TuBknavkI',
    },
    {
      tema: 'Tipos de uso de la información',
      referencia:
        'Concepto (s.f.). ¿Qué es la información? [Web log post]. Concepto. ',
      tipo: 'Blog',
      link: 'https://concepto.de/informacion/#ixzz7fZtUQLQ9',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de información',
      significado:
        'Etapa inicial de ‘transformación de información documental’ y no documental, que consiste, fundamentalmente, en el estudio de las fuentes de información documentales y en la extracción de los datos más esenciales de los mismos.',
    },
    {
      termino: 'Biblioteca',
      significado:
        'Institución que está a disposición de todos los miembros de la comunidad sin distinción de raza, nacionalidad, edad, sexo, religión, idioma, discapacidad, nivel de escolaridad, condición económica y laboral; allí se puede leer, buscar información, llevar libros a casa, participar en actividades intelectuales, recreación y ocio, talleres de lectura y escritura, ver películas, interactuar, socializar y dialogar.',
    },
    {
      termino: 'Biblioteca virtual',
      significado:
        'Incorpora los avances de la realidad virtual y sus equipos deberán incorporar tecnología de punta para administrar estas colecciones y colocarlas al servicio de sus usuarios de manera presencial o remota.',
    },
    {
      termino: 'Bibliografía',
      significado:
        'Ciencia y/o metodología para identificar, describir, localizar e indexar libros y documentos impresos en general.  Conjunto ordenado de registros bibliográficos de una temática o una colección concreta de documentos. El criterio utilizado para la ordenación debe ser lógico para que la búsqueda resulte sencilla: por autor, título, materia, etc.',
    },
    {
      termino: 'Circulación',
      significado:
        'Movimiento de los materiales dentro y fuera de la biblioteca cuando son consultados o llevados en préstamo. Área de Biblioteca en donde se hace la transacción de préstamo para sacar un libro de la biblioteca.',
    },
    {
      termino: 'Competencias para el acceso y uso de la información',
      significado:
        'Conjunto de conocimientos y habilidades que se requieren para reconocer de forma clara qué tipo de información o recurso se requiere, cuándo, dónde y cómo localizarla, evaluarla y utilizarla de manera ética.',
    },
    {
      termino: 'Derechos de autor',
      significado:
        'Los que la ley le reconoce al autor de una obra para efectos de participar en los beneficios que produzca su publicación, ejecución o reproducción, y que alcanza, en algunos casos, a los ejecutantes e intérpretes.',
    },
    {
      termino: 'Fuente de información',
      significado:
        'Toda materia que genere, contenga, suministre o transfiera información / En la rama bibliotecológica: objeto o sujeto del cual un individuo obtiene la información que satisfaga sus necesidades.',
    },
    {
      termino: 'Gestión de información',
      significado:
        'Es todo lo relacionado con la obtención de la información adecuada, en la forma correcta, para la persona indicada, al costo adecuado, en el tiempo oportuno, en el lugar apropiado, para tomar la acción correcta.',
    },
    {
      termino: 'Índices',
      significado:
        'Existen dos tipos de índices: 1: Lista de obras sobre algún tema que se utiliza para encontrar materia de investigación. 2: Al final de un libro, el índice es una lista alfabética de términos clave con la página donde se encuentre.',
    },
    {
      termino: 'Referencia',
      significado:
        'Atender y orientar a los usuarios en sus necesidades de información. Estas pueden relacionarse con el funcionamiento de la biblioteca, sus servicios y recursos o temas de investigación específicos.',
    },
    {
      termino: 'Gestión de recursos de información',
      significado:
        'Proceso dentro del segmento de la gestión de información que sirve al interés corporativo. La GRI persigue asociar la información para beneficio de la organización en su totalidad mediante la explotación, desarrollo y optimización de los recursos de información.',
    },
    {
      termino: 'Referencia bibliográfica',
      significado:
        'Es el conjunto de datos que sirven para identificar y describir un documento u otro tipo de obra intelectual.',
    },
  ],
  referencias: [
    {
      referencia:
        'Díaz del Campo, S. (2003). Propuesta de términos para la indización en Ciencias de la Información. ',
      link: 'http://eprints.rclis.org/5106/1/propuesta.pdf',
    },
    {
      referencia:
        'Eldredge, J. (2006). Evidence-based librarianship: an overview. Publimedcentral. ',
      link: 'https://pubmed.ncbi.nlm.nih.gov/11055296/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Bleidy Joaquín Ardila Pinzón',
        cargo: 'Bibliotecólogo',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Huila.',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander ',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edison Eduardo Mantilla Cuadros',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yeimmy Bibiana Barrera Maldonado',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yeny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
