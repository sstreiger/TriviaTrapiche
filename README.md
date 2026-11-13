# 💧⛰️ Trivia del Cooperativismo y el Agua: El Trapiche, San Luis

Aplicación web interactiva y gamificada sobre la **Cooperativa de Provisión de Agua Potable de El Trapiche San Luis Limitada**, basada en el estudio de caso integrador de la **Universidad Nacional de Villa Mercedes (UNViMe - Cohorte 2026)**: *"Una mirada integral sobre una experiencia cooperativa: funcionamiento, sostenibilidad y desarrollo territorial"*.

Diseñada especialmente **mobile-first** para realizarse desde teléfonos celulares y lista para despliegue continuo en **Vercel**.

---

## 🌟 Características Principales

- **Identidad Oficial**: Integra el escudo institucional, silueta de las sierras, los dos pinos cooperativos y las aguas del Río Trapiche.
- **10 Preguntas Pedagógicas**: Cada pregunta cuenta con 3 opciones (solo 1 correcta) y aborda:
  1. *Historia y Fundación*: Nacimiento en marzo de 1971 e inauguración oficial de redes en octubre de 1973 por el Gobernador Elías Adre.
  2. *Democracia Cooperativa*: Asamblea soberana y principio "un asociado = un voto" (sin meros "usuarios").
  3. *Gestión Solidaria*: Consejo de Administración ad honorem presidido por Sandra Rivas.
  4. *Río Trapiche*: Captación de agua serrana y conocimiento del comportamiento del río transmitido oralmente entre operarios.
  5. *Memoria Técnica*: Relevamiento cartográfico a cargo de la docente Elina Lucrecia Leonhart (Centro Educativo N° 5 Senador Alfredo Bertín).
  6. *Solidaridad Territorial*: Abastecimiento solidario a parajes de Río Grande y colaboración comunitaria en obras (acopio de caños y transporte).
  7. *Obras y Proyectos*: Proyectos de recambio y mejora como "Las Lomitas", "Ruta 9 - Río Grande" y "Los Sauces".
  8. *Integración Provincial*: Adhesión a la nueva Federación de Cooperativas de Servicios Públicos de San Luis.
  9. *Proyección de Futuro*: Incorporación de servicios esenciales comunitarios (servicios fúnebres / sala velatoria).
  10. *Cuidado del Agua*: Consumo responsable en una villa turística serrana y uso solidario del bloque base.
- **Experiencia de Usuario en Celulares**:
  - Diseño táctil mobile-first con botones grandes y amigables.
  - Respuesta háptica (vibración en teléfonos celulares).
  - Efectos de sonido sintetizados nativos con **Web Audio API** (sin dependencias externas y con botón de silenciar 🔊/🔇).
  - Animaciones de confeti con `canvas-confetti`.
  - Explicación pedagógica y dato curioso en cada respuesta.
- **Pantalla Final y Difusión**:
  - Calificación y porcentaje obtenido con títulos de guardián/a serrano.
  - Botón directo para **Compartir por WhatsApp** con mensaje prediseñado desafiando a vecinos y amigos.
  - Integración con Web Share API y botón de copiar enlace.
  - Desplegable para revisar todas las respuestas y aprender de aciertos y errores.

---

## 🚀 Despliegue en Vercel

```bash
git init
git add .
git commit -m "feat: Trivia Cooperativa de Agua Potable El Trapiche"
git branch -M main
git remote add origin <TU_REPOSITORIO>
git push -u origin main
```

---

## 💻 Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar
npm run preview
```
