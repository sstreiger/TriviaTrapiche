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
    question: '¿En qué año nació la Cooperativa de Agua Potable de El Trapiche y qué motivó su fundación?',
    options: [
      {
        id: 'A',
        text: 'En 1971, cuando los vecinos se organizaron colectivamente ante la falta de redes públicas de saneamiento.',
      },
      {
        id: 'B',
        text: 'En 1973, creada como ente autárquico tras la inauguración de la primera red troncal por el gobierno provincial.',
      },
      {
        id: 'C',
        text: 'En 1997, a partir de la escisión de la cooperativa de servicios múltiples para enfocarse únicamente en el agua potable.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'La Cooperativa nació en marzo de 1971 cuando los vecinos se unieron bajo el modelo asociativo para construir las primeras obras de captación del Río Trapiche. En 1973 se inauguraron formalmente las redes y en 1997 se reformó el estatuto.',
    funFact:
      'Las obras originales fueron habilitadas en octubre de 1973 por el entonces Gobernador Elías Adre, felicitando el esfuerzo colectivo de la comunidad.',
  },
  {
    id: 2,
    category: 'Cooperativismo',
    question: 'En la Cooperativa de El Trapiche, ¿quiénes integran la entidad y cómo se toman las decisiones en las asambleas?',
    options: [
      {
        id: 'A',
        text: 'Todos los vecinos con servicio son considerados asociados plenos, rigiendo el principio democrático de un asociado, un voto.',
      },
      {
        id: 'B',
        text: 'Los vecinos residentes con servicio, donde los votos en asamblea se ponderan según la cantidad de conexiones y consumo del lote.',
      },
      {
        id: 'C',
        text: 'Es una sociedad de economía mixta administrada conjuntamente entre los asociados empadronados y representantes del municipio.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'Por estatuto no existe la figura del mero "cliente" o "usuario", sino que todos son asociados con iguales derechos democráticos: "Un asociado = Un voto", sin importar el tamaño de su propiedad.',
    funFact:
      'La cuota social que une formalmente a todos los asociados tiene históricamente un valor puramente simbólico de $1.',
  },
  {
    id: 3,
    category: 'Nuestra Comunidad',
    question: '¿Qué particularidad estatutaria y de retribución tienen los cargos del Consejo de Administración de la Cooperativa?',
    options: [
      {
        id: 'A',
        text: 'Sus funciones se ejercen estrictamente ad honorem (sin cobrar sueldo) y el estatuto local permite su reelección indefinida.',
      },
      {
        id: 'B',
        text: 'Perciben una dieta de representación aprobada en asamblea solo durante los meses de mayor demanda turística en verano.',
      },
      {
        id: 'C',
        text: 'El presidente y el tesorero tienen sueldo ejecutivo de gestión, mientras que los vocales y la síndica actúan en forma honoraria.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'Los integrantes del Consejo de Administración trabajan voluntariamente ad honorem, dedicando horas desinteresadas a la gestión comunitaria. Además, el estatuto local habilita la reelección indefinida para dar continuidad a las líneas de trabajo.',
    funFact:
      'Actualmente la presidencia está a cargo de Sandra Rivas, en un esquema renovado con fuerte paridad y compromiso vecinal.',
  },
  {
    id: 4,
    category: 'Historia y Origen',
    question: '¿De dónde proviene el agua cruda que la cooperativa potabiliza y cómo se preservó el conocimiento operativo de la planta?',
    options: [
      {
        id: 'A',
        text: 'Se capta del Río Trapiche, apoyándose en la transmisión oral y empírica de operario a operario sobre las crecidas y bajantes.',
      },
      {
        id: 'B',
        text: 'Proviene de una toma directa en el Dique La Florida, regulada por compuertas automáticas operadas por San Luis Agua.',
      },
      {
        id: 'C',
        text: 'Se extrae de pozos profundos de la cuenca subterránea de Río Grande, monitoreados por sensores telemétricos provinciales.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'La fuente natural histórica es el Río Trapiche. Durante décadas, el "saber hacer" sobre las crecidas, turbidez y filtrado no estuvo en manuales, sino que se transmitió de forma oral y práctica entre los propios trabajadores de la planta.',
    funFact:
      'Conocer el comportamiento del río serrano es fundamental para anticipar maniobras de potabilización antes de que bajen las crecientes con sedimentos.',
  },
  {
    id: 5,
    category: 'Nuestra Comunidad',
    question: '¿Cómo se resolvió la falta de planos formales de ingeniería sobre las redes subterráneas más antiguas de El Trapiche?',
    options: [
      {
        id: 'A',
        text: 'Mediante un trabajo docente de Elina Lucrecia Leonhart, relevando la memoria oral de operarios sobre un mapa físico.',
      },
      {
        id: 'B',
        text: 'A través de un convenio de relevamiento georreferenciado con drones realizado por la Dirección de Catastro Provincial.',
      },
      {
        id: 'C',
        text: 'A partir de la digitalización de planos históricos archivados en Obras Sanitarias de la Nación desde 1973.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'Ante el vacío de documentación de ingeniería subterránea, la docente Elina Lucrecia Leonhart (del Centro Educativo N° 5 Senador Alfredo Bertín) coordinó un valioso relevamiento para volcar el conocimiento empírico de los operarios en un mapa físico de redes.',
    funFact:
      '¡Ese rescate pedagógico y comunitario evitó que se perdiera la memoria de por dónde circulan los caños bajo las calles del pueblo!',
  },
  {
    id: 6,
    category: 'Cooperativismo',
    question: 'Tras la desaparición de la cooperativa vecina de Río Grande, ¿qué medida de resiliencia solidaria adoptó la Cooperativa de El Trapiche?',
    options: [
      {
        id: 'A',
        text: 'Asumió la provisión por horarios a parajes vecinos, absorbiendo los costos operativos sin subsidios específicos.',
      },
      {
        id: 'B',
        text: 'Firmó un convenio de concesión arancelada con San Luis Agua para facturar una tarifa diferencial de emergencia en la zona.',
      },
      {
        id: 'C',
        text: 'Acordó transferir temporalmente sus cisternas de reserva a la Municipalidad para que suministre agua mediante camiones.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'Con profunda vocación social, la Cooperativa de El Trapiche asumió el abastecimiento intermitente a parajes que habían quedado desamparados, afrontando los gastos operativos por cuenta propia y demostrando la solidaridad de la economía social.',
    funFact:
      'La solidaridad también se evidencia en los vecinos que ceden gratuitamente terrenos para acopiar caños o ponen sus autos particulares para trasladar materiales.',
  },
  {
    id: 7,
    category: 'Nuestra Comunidad',
    question: '¿Cuáles son algunos de los proyectos recientes de recambio y mejora de cañerías llevados adelante por la Cooperativa?',
    options: [
      {
        id: 'A',
        text: 'Proyectos de renovación de cañerías troncales como "Las Lomitas", "Ruta 9 - Río Grande" y "Los Sauces".',
      },
      {
        id: 'B',
        text: 'La instalación de módulos de filtrado por ósmosis inversa en las tomas marginales del Dique La Florida.',
      },
      {
        id: 'C',
        text: 'El dragado integral y revestimiento en hormigón de los canales de riego en 7 Cajones y Riocito.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'La Cooperativa ejecutó obras clave como el recambio de caño maestro en "Las Lomitas" y 700 metros de cañería en Ruta 9, además de presentar el proyecto "Los Sauces" para cañerías de 160mm 10K.',
    funFact:
      'Estas inversiones de infraestructura son esenciales para mantener la presión de agua en los sectores más altos ante la alta demanda del verano.',
  },
  {
    id: 8,
    category: 'Cooperativismo',
    question: '¿A qué espacio de articulación provincial decidió unirse formalmente la Cooperativa de El Trapiche por voto de su asamblea?',
    options: [
      {
        id: 'A',
        text: 'A la nueva Federación de Cooperativas de Servicios Públicos a nivel provincial, para sumar escala y defensa técnica conjunta.',
      },
      {
        id: 'B',
        text: 'Al Consorcio Regional de Entes Hídricos Municipales de los departamentos Coronel Pringles y Junín.',
      },
      {
        id: 'C',
        text: 'A la Cámara Provincial de Empresas Prestadoras de Saneamiento y Servicios Ambientales de San Luis.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'La adhesión a la Federación Provincial de Cooperativas de Servicios Públicos busca crear un bloque común frente a problemáticas compartidas en San Luis, ganar escala, respaldo técnico y mayor poder de diálogo institucional.',
    funFact:
      'El 6° principio cooperativo es la "Cooperación entre cooperativas": la unión horizontal protege la autonomía de las organizaciones comunitarias.',
  },
  {
    id: 9,
    category: 'Nuestra Comunidad',
    question: 'Frente a las necesidades de la comunidad, ¿qué nuevo servicio solidario proyecta incorporar la Cooperativa ampliando su estatuto?',
    options: [
      {
        id: 'A',
        text: 'Servicios fúnebres y sala velatoria comunitaria, ya que hoy los vecinos deben trasladarse fuera de la localidad.',
      },
      {
        id: 'B',
        text: 'Red de distribución de gas envasado y garrafas sociales para parajes rurales alejados de la red troncal.',
      },
      {
        id: 'C',
        text: 'Un sistema integral de recolección diferenciada y reciclaje de residuos para complejos de cabañas y hosterías.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'El Trapiche no cuenta hoy con sala velatoria propia y los servicios deben brindarse en otras localidades o en salones no acondicionados. Por ello, la asamblea impulsa la ampliación del objeto social para brindar este servicio vital con sentido comunitario.',
    funFact:
      'En sus orígenes (1971 a 1997), el estatuto ya contemplaba "otros servicios públicos", lo que demuestra la vocación histórica de responder a lo que el pueblo necesita.',
  },
  {
    id: 10,
    category: 'Cuidado del Agua',
    question: '¿Por qué la Cooperativa promueve un consumo solidario mediante una tarifa plana de hasta 30.000 litros con cobro por excedente?',
    options: [
      {
        id: 'A',
        text: 'Porque la población se multiplica por el turismo estival y el uso desmedido despresuriza los barrios altos y la cuenca serrana.',
      },
      {
        id: 'B',
        text: 'Porque el Código de Aguas provincial impone cupos obligatorios a las propiedades que no son de residencia permanente.',
      },
      {
        id: 'C',
        text: 'Porque la planta potabilizadora debe detener el bombeo en horarios nocturnos para el reposo de los filtros de arena.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'En una villa turística como El Trapiche, donde cerca del 50% de las propiedades corresponden a casas de fin de semana o alquiler turístico, cuidar el agua es indispensable. La tarifa plana de hasta 30.000 litros incentiva el uso consciente para que a ningún vecino le falte presión.',
    funFact:
      '¡Pequeñas acciones cotidianas, como evitar el riego diurno con manguera o controlar pérdidas en canillas, salvan miles de litros diarios!',
  },
];
