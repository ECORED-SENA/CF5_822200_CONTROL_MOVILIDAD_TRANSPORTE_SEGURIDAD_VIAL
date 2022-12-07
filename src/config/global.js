export default {
  global: {
    componenteFormativo: 'Monitoreo y reportes de operación de transporte',
    descripcionCurso:
      'El desarrollo de técnicas en control y monitoreo, basado en ruteo, seguimiento y logística, permiten minimizar las fallas y pérdidas, así como generar mejores prácticas, ajustadas a la normatividad, pues la coordinación en transporte es el eje fundamental de la logística de transporte.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/deco_01.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/deco_02.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/deco_03.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/deco_04.png'),
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
        titulo: 'Técnicas de seguimiento y control',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de consulta de mapas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Conceptos para ubicación geoestacionaria de las rutas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Alistamiento de equipos y medios de transporte para la movilización de la carga',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Pasajeros',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo:
          'Características del sistema de gestión, normas de seguridad y salud en el trabajo. OHSAS 18001 / ISO 31000',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Técnicas de inspección y alistamiento de medios de transporte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo:
          'Normativa para transporte terrestre de pasajeros y carga y tránsito',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo:
          'Conceptos de mantenimiento: preventivo, correctivo, predictivo y mejorativo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo:
          'Características de la documentación de operación del medio de transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '10.1',
            titulo: 'Verificación de la documentación',
            hash: 't_10_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.2',
            titulo: 'Evaluación y gestión del riesgo',
            hash: 't_10_2',
          },
        ],
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
        'Normativa para transporte terrestre de pasajeros y carga y tránsito',
      referencia:
        'Congreso de Colombia. (2002). Ley 769 de 2002. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones.',
      tipo: 'PDF',
      descarga:
        '/downloads/ley-769-de-2002-codigo-nacional-de-transito_3704_0.pdf',
    },
    {
      tema:
        'Normativa para transporte terrestre de pasajeros y carga y tránsito',
      referencia:
        'Congreso de Colombia. (1993). Ley 105 de 1993. Por la cual se dictan disposiciones básicas sobre el transporte, se redistribuyen competencias y recursos entre la Nación y las Entidades Territoriales, se reglamenta la planeación en el sector transporte y se dictan otras disposiciones.',
      tipo: 'PDF',
      descarga: '/downloads/ley_105.pdf',
    },
    {
      tema:
        'Normativa para transporte terrestre de pasajeros y carga y tránsito',
      referencia:
        'Congreso de Colombia. (2022). Ley 336 de 1996. Por la cual se adopta el estatuto nacional de transporte.',
      tipo: 'PDF',
      descarga: '/downloads/Ley_336_de_1996.pdf',
    },
    {
      tema:
        'Normativa para transporte terrestre de pasajeros y carga y tránsito',
      referencia:
        'Presidencia de Colombia. (2001). Decreto 173 de 2001. Por el cual se reglamenta el Servicio Público de Transporte Terrestre  Automotor de Carga.',
      tipo: 'PDF',
      link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4308',
    },
  ],
  glosario: [
    {
      termino: 'Buseta',
      significado:
        'vehículo destinado al transporte de personas con capacidad de 20 a 30 pasajeros y distancia entre ejes inferior a cuatro metros.',
    },
    {
      termino: 'Camión',
      significado:
        'vehículo automotor que por su tamaño y destinación se usa para transportar carga.',
    },
    {
      termino: 'Chatarrización',
      significado: 'desintegración total de un vehículo automotor.',
    },
    {
      termino: 'Equipo de prevención y seguridad',
      significado:
        'conjunto de elementos necesarios para la atención inicial de emergencia que debe poseer un vehículo.',
    },
    {
      termino: 'Licencia de conducción',
      significado:
        'documento público de carácter personal e intransferible expedido por autoridad competente, el cual autoriza a una persona para la conducción de vehículos con validez en todo el territorio nacional. ',
    },
    {
      termino: 'Licencia de tránsito',
      significado:
        'documento público que identifica un vehículo automotor, acredita su propiedad e identifica a su propietario y autoriza a dicho vehículo para circular por las vías públicas y por las privadas abiertas al público. ',
    },
    {
      termino: 'Pasajero',
      significado:
        'persona distinta del conductor que se transporta en un vehículo público.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (1996). Ley 336 de 1996. Por la cual se adopta el Estatuto Nacional de Transporte',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=346',
    },
    {
      referencia:
        'Congreso de Colombia. (2002). Ley 769 de 2002. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Código Nacional de Tránsito Terrestre. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0769_2002.html',
    },
    {
      referencia:
        'Ministerio de Transporte. (2020). Resolución 4100 de 2004. Por la cual se adoptan los límites de pesos y dimensiones en los vehículos de transporte terrestre automotor de carga por carretera, para su operación normal en la red vial a nivel nacional.',
      link:
        'https://www.invias.gov.co/index.php/normativa/resoluciones-circulares-otros/10387-resolucion-4100-del-28-de-diciembre-de-2004',
    },
    {
      referencia: 'Piarc. (s. f.). Operaciones del transporte de pasajeros. ',
      link:
        'https://rno-its.piarc.org/es/servicios-al-usuario-transporte-de-pasajeros/operaciones-del-transporte-de-pasajeros',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2001, 5 febrero). Decreto 173 de 2001. Por el cual se reglamenta el Servicio Público de Transporte Terrestre Automotor de Carga. ',
      link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4308',
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
        cargo: 'Responsable equipo de desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Juan Carlos García Vargas',
        cargo: 'Experto temático',
        centro:
          'Centro de Gestión de Mercados, Logística y Tecnología de la Información - Regional Distrito Capital',
      },
      {
        nombre: 'Diego E. Acevedo Guevara',
        cargo: 'Diseñador instruccional ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
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
        nombre: 'Sofía Suárez Suárez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Validación ilustración',
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
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mary Jeans Palacio Camacho',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
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
