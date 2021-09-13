export default {
  global: {
    componenteFormativo: 'Entorno organizacional y ambiental',
    descripcionCurso:
      'En el componente se abordan temas que permiten la comprensión del entorno de la organización, según las diferentes normativas que apliquen en su interior, junto con la identificación de los aspectos e impactos ambientales que puedan afectar los procesos de la organización.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Normativa ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normas ambientales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tratados internacionales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Leyes ambientales',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Decretos ambientales',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Resoluciones ambientales',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diagramas de flujo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Componentes ambientales',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Fuentes de información o de documentación',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Universidad de Guadalajara. (s.f.). Clasificación general de las fuentes de información.',
      link:
        'http://biblioteca.udgvirtual.udg.mx/portal/clasificacion-general-de-las-fuentes-de-informacion',
    },
  ],
  glosario: [
    {
      termino: 'Aspecto ambiental',
      significado:
        'Actividades humanas que tienen influencia sobre el entorno en donde se desarrollan.',
    },
    {
      termino: 'Componente ambiental',
      significado:
        'Factores, elementos o recursos naturales que interactúan entre sí y hacen posible la vida en el planeta tierra, Es la influencia y relación del medio ambiente con todos los seres vivos.',
    },
    {
      termino: 'Ecosistema',
      significado:
        'Conjunto de seres vivos y medio físico donde se relacionan.',
    },
    {
      termino: 'Energías alternativas',
      significado:
        'Sinónimo para energía limpia, energía verde o energía renovable, es decir, que provienen de recursos naturales y de fuentes inagotables.',
    },
    {
      termino: 'Factor abiótico',
      significado:
        'Elementos del ecosistema que no tienen vida, como el agua, el oxígeno, temperatura y la luz solar, pero que son necesarias para vivir.',
    },
    {
      termino: 'Factor biótico',
      significado:
        'Organismos vivos que influyen en la forma de un ecosistema, como la flora y la fauna.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'Consecuencias de las actividades humanas que repercuten sobre el medio ambiente generando un impacto ambiental en el entorno en el cual operan ya sea positivo o negativo, el cual incluye el aire, el agua, el suelo, la flora, la fauna, los seres humanos y sus interrelaciones. ',
    },
    {
      termino: 'Normativa ambiental',
      significado:
        'Conjunto de objetivos, principios, criterios y orientaciones generales para proteger el medio ambiente.',
    },
  ],
  complementario: [
    {
      texto: 'Fuentes, C. (2016). Normatividad ambiental [Video]. YouTube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=cNUuqFM1DTQ&t=227s',
    },
    {
      texto:
        'De seguridad y salud. (2021). Normatividad ambiental en Colombia, normatividad gestión ambiental.',
      tipo: 'Sitio web',
      link: 'https://deseguridadysalud.com/normatividad-ambiental-en-colombia/',
    },
    {
      texto:
        'Fondo Rotatorio. (2019). Aspectos e impactos ambientales FORPO. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ONR7rWOVsRY',
    },
    {
      texto:
        'O. Alexander. (2017). Qué son aspectos e impactos ambientales. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rE-m9ZYs0u8',
    },
    {
      texto:
        'Cogollo, J. (2020). ¿Qué es un diagrama de flujo? ¿Cómo hacer diagramas de flujo paso a paso + ejemplos? [Video]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Kucgc6NpGwc&t=58s',
    },
    {
      texto: 'Gómez, J. (2015), Diagrama de flujo. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HwFPiwWC004',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila García Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Ana María Buitrago Toro',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Víctor Julián Ardila',
        cargo: 'Instructor',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Fernando Sarmiento Betancourth',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Regional Tolima - Centro de Comercio y Servicios',
      },
      {
        nombre: 'Lizeth Karina Manchego Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle Ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
}
