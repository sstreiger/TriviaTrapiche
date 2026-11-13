/**
 * =======================================================================
 * PREGUNTAS Y RESPUESTAS: TRIVIA COOPERATIVA DE AGUA POTABLE DE EL TRAPICHE
 * =======================================================================
 * Basado en el estudio de caso:
 * "Una mirada integral sobre una experiencia cooperativa: funcionamiento,
 * sostenibilidad y desarrollo territorial" (UNViMe - Cohorte 2026).
 * =======================================================================
 */

import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'Historia y Origen',
    question: '¿En qué año nació la Cooperativa de Agua Potable de El Trapiche?',
    options: [
      {
        id: 'A',
        text: 'En 1971, fundada por los propios vecinos ante la falta de redes públicas.',
      },
      {
        id: 'B',
        text: 'En 1995, como una empresa privada concesionaria del servicio.',
      },
      {
        id: 'C',
        text: 'En 1983, con el regreso de la democracia.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'La Cooperativa nació en marzo de 1971 cuando la comunidad de vecinos se unió para financiar y construir colectivamente las primeras obras de captación desde el Río Trapiche.',
    funFact:
      'Las redes de agua fueron formalmente habilitadas e inauguradas en octubre de 1973 por el entonces Gobernador Elías Adre.',
  },
  {
    id: 2,
    category: 'Cooperativismo',
    question: 'En la Cooperativa de El Trapiche, ¿quiénes son los dueños y cómo se toman las decisiones?',
    options: [
      {
        id: 'A',
        text: 'Los propios vecinos y vecinas asociados: en la asamblea cada persona tiene un voto.',
      },
      {
        id: 'B',
        text: 'Un grupo de inversores donde quien tiene más dinero toma las decisiones.',
      },
      {
        id: 'C',
        text: 'Exclusivamente el intendente y los secretarios del municipio.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'En la cooperativa no existen meros "clientes" o "usuarios": todos son asociados con plenos derechos democráticos bajo el principio "Un asociado = Un voto".',
    funFact:
      'La cuota social que une formalmente a todos los asociados tiene históricamente un valor puramente simbólico de $1.',
  },
  {
    id: 3,
    category: 'Nuestra Comunidad',
    question: '¿Qué característica tiene el trabajo de los miembros del Consejo de Administración que gestionan la cooperativa?',
    options: [
      {
        id: 'A',
        text: 'Cobran un alto sueldo mensual financiado por los impuestos.',
      },
      {
        id: 'B',
        text: 'Desempeñan sus cargos de manera voluntaria y estrictamente "ad honorem" (sin cobrar sueldo).',
      },
      {
        id: 'C',
        text: 'Son contratados por sorteo entre turistas que visitan la villa.',
      },
    ],
    correctOptionId: 'B',
    explanation:
      'Los integrantes del Consejo de Administración trabajan ad honorem: dedican su tiempo, esfuerzo y vocación social para cuidar el agua de toda la comunidad sin percibir remuneración.',
    funFact:
      'Actualmente el Consejo está presidido por Sandra Rivas y cuenta con un equipo paritario y de fuerte compromiso territorial.',
  },
  {
    id: 4,
    category: 'Historia y Origen',
    question: '¿De dónde se capta históricamente el agua cruda que la cooperativa potabiliza para abastecer a El Trapiche?',
    options: [
      {
        id: 'A',
        text: 'Directamente del Río Trapiche, que baja de nuestras queridas sierras puntanas.',
      },
      {
        id: 'B',
        text: 'De un pozo subterráneo traído en camiones cisterna desde Buenos Aires.',
      },
      {
        id: 'C',
        text: 'Exclusivamente de camiones aguateros que cargan en la capital.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'La fuente natural y vital es el Río Trapiche. Los operarios de la planta potabilizadora conocen al detalle sus crecidas y bajantes estacionales para garantizar la calidad del agua.',
    funFact:
      'El saber sobre el comportamiento del río se fue transmitiendo oralmente de operario a operario a lo largo de décadas.',
  },
  {
    id: 5,
    category: 'Nuestra Comunidad',
    question: '¿Quién llevó adelante el valioso trabajo docente de relevamiento cartográfico de la red de agua de El Trapiche?',
    options: [
      {
        id: 'A',
        text: 'Una empresa extranjera con satélites espaciales.',
      },
      {
        id: 'B',
        text: 'La docente Elina Lucrecia Leonhart, plasmando la memoria y saber de los operarios locales.',
      },
      {
        id: 'C',
        text: 'Un grupo de turistas que visitaban el Dique La Florida.',
      },
    ],
    correctOptionId: 'B',
    explanation:
      'La docente Elina Lucrecia Leonhart (del Centro Educativo N° 5 Senador Alfredo Bertín) coordinó el rescate de la memoria técnica oral de los operarios, volcándola en un mapa físico de la red subterránea.',
    funFact:
      'Ese mapa manual permitió registrar dónde pasan los caños bajo las calles y senderos serranos de nuestro pueblo.',
  },
  {
    id: 6,
    category: 'Cooperativismo',
    question: 'Tras el cese de la cooperativa vecina de Río Grande, ¿qué actitud solidaria adoptó la Cooperativa de El Trapiche?',
    options: [
      {
        id: 'A',
        text: 'Comenzó a abastecer de agua por turnos a parajes vecinos por cuenta propia y sin subsidio.',
      },
      {
        id: 'B',
        text: 'Cortó el paso de las mangueras para que nadie de afuera use agua.',
      },
      {
        id: 'C',
        text: 'Decidió privatizar el río y cobrar peaje a los parajes vecinos.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'Fiel a los principios de solidaridad de la economía social, la Cooperativa de El Trapiche extendió su ayuda a zonas que habían quedado desamparadas, asumiendo los costos operativos.',
    funFact:
      'Los vecinos también demuestran esa solidaridad prestando terrenos para acopiar caños o autos particulares para trasladar insumos durante las obras.',
  },
  {
    id: 7,
    category: 'Nuestra Comunidad',
    question: '¿Cuáles son algunos de los proyectos de renovación y recambio de cañerías llevados adelante por la Cooperativa?',
    options: [
      {
        id: 'A',
        text: 'Proyectos clave como "Las Lomitas", "Ruta 9 - Río Grande" y "Los Sauces".',
      },
      {
        id: 'B',
        text: 'La construcción de una autopista submarina de seis carriles.',
      },
      {
        id: 'C',
        text: 'La compra de un teleférico para transportar botellones de agua.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'Con fondos propios y aportes de infraestructura, la cooperativa llevó a cabo obras de renovación como el cambio de caño maestro en "Las Lomitas" y 700 metros de cañería en Ruta 9.',
    funFact:
      'Estas obras son indispensables para que el agua llegue con buena presión a los hogares y cabañas antes de la temporada de verano.',
  },
  {
    id: 8,
    category: 'Cooperativismo',
    question: '¿A qué espacio provincial decidió unirse la Cooperativa por votación unánime en su asamblea?',
    options: [
      {
        id: 'A',
        text: 'A la nueva Federación de Cooperativas de Servicios Públicos de San Luis.',
      },
      {
        id: 'B',
        text: 'A una corporación transnacional de refrescos envasados.',
      },
      {
        id: 'C',
        text: 'A la bolsa de valores internacional de Wall Street.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'La integración federativa fortalece el cooperativismo puntano: permite compartir asistencia técnica, defender el acceso al agua cruda y ganar poder de gestión en conjunto.',
    funFact:
      'El 6° principio cooperativo es "Cooperación entre cooperativas": la unión hace la fuerza frente a los grandes desafíos de infraestructura.',
  },
  {
    id: 9,
    category: 'Nuestra Comunidad',
    question: '¿Qué nuevo servicio comunitario muy pedido por la comunidad proyecta incorporar la Cooperativa en su estatuto?',
    options: [
      {
        id: 'A',
        text: 'Servicios fúnebres y sala velatoria comunitaria en la localidad.',
      },
      {
        id: 'B',
        text: 'Una pista de aterrizaje para vuelos comerciales internacionales.',
      },
      {
        id: 'C',
        text: 'Un casino y sala de juegos de azar.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'Actualmente el pueblo no cuenta con sala velatoria y las familias deben viajar a otras localidades en momentos difíciles. Por eso la cooperativa busca ampliar su objeto social para brindar este servicio con sentido solidario.',
    funFact:
      'Hasta 1997 el estatuto contemplaba "otros servicios públicos", demostrando la capacidad de la cooperativa de dar respuesta a las necesidades reales del pueblo.',
  },
  {
    id: 10,
    category: 'Cuidado del Agua',
    question: 'Siendo El Trapiche una villa turística serrana con miles de visitantes en verano, ¿por qué es vital cuidar el agua?',
    options: [
      {
        id: 'A',
        text: 'Porque el caudal del río es un recurso natural vulnerable y el uso solidario evita que falte presión en las zonas altas.',
      },
      {
        id: 'B',
        text: 'Porque el agua dulce de las sierras nunca se termina y no hace falta cuidarla.',
      },
      {
        id: 'C',
        text: 'Porque solo los turistas tienen derecho a usar el agua en temporada.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'El consumo masivo estacional exige la máxima responsabilidad de residentes y turistas. Cuidar cada gota y no derrochar en regados excesivos asegura agua potable para todos.',
    funFact:
      'La cooperativa aplica una tarifa plana con bloque base de 30.000 litros para alentar el consumo responsable y sustentable.',
  },
];
