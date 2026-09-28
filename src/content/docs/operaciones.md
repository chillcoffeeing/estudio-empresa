---
title: ⚙️ Operaciones
description: Entregar lo prometido, de forma consistente y escalable.
---

**Operaciones** es todo lo que ocurre entre que el cliente compra y que recibe lo que pagó: producir, comprar insumos, almacenar, preparar, entregar, atender. Si marketing y ventas hacen una promesa, operaciones es quien la cumple. Una buena operación entrega lo mismo, con la misma calidad, cada vez, y puede hacerlo con el doble de clientes sin colapsar.

## 01 · Procesos documentados

Si un proceso solo existe en la cabeza del fundador (o de un empleado clave), la empresa no puede crecer ni sobrevivir a que esa persona se ausente, se enferme o renuncie.

- **SOPs** (*Standard Operating Procedures*, procedimientos operativos estándar): instrucciones escritas paso a paso de cómo se hace una tarea.
  - Prioriza las tareas recurrentes que impactan al cliente: cómo se prepara un pedido, cómo se atiende un reclamo, cómo se emite una factura.
  - Un buen SOP es corto, concreto y verificable: alguien nuevo debería poder seguirlo y obtener el mismo resultado. Checklists, fotos y videos cortos funcionan mejor que documentos largos.
  - Deben actualizarse cuando el proceso cambia; un SOP desactualizado es peor que no tener ninguno.
- **Cadena de valor:** el recorrido completo desde que llega el insumo hasta que el cliente recibe el producto.
  - Dibújalo paso a paso (recepción → almacenaje → producción → control → empaque → despacho) y pregunta en cada paso: ¿esto agrega algo que el cliente valora y pagaría?
  - Los pasos que no agregan valor (esperas, traslados innecesarios, doble revisión de lo mismo, papeleo repetido) son **fricción**: cuestan tiempo y dinero sin mejorar el resultado. Son los primeros candidatos a eliminar o simplificar.
- **Cuellos de botella:** la etapa más lenta de un proceso, que limita la capacidad de todo el sistema.
  - Ejemplo: si tu cocina puede preparar 60 platos por hora pero tu único cajero atiende 30 personas por hora, el restaurante sirve 30 por hora, no 60. Contratar otro cocinero no cambia nada; poner otra caja sí.
  - Regla práctica: antes de invertir en mejorar un área, identifica cuál es el cuello de botella actual. Mejorar cualquier otra etapa no aumenta la producción total.

## 02 · Cadena de suministro y proveedores

La **cadena de suministro** es la red de proveedores, transporte y almacenaje que te permite tener los insumos a tiempo. Una falla ahí se traduce directamente en ventas perdidas o clientes molestos.

- **Diversificación de proveedores:** depender de un solo proveedor crítico es un riesgo operativo, no una conveniencia.
  - Si ese proveedor sube precios, se atrasa o cierra, tu negocio se detiene y no tienes poder de negociación.
  - Para insumos críticos, ten al menos un proveedor alternativo identificado y probado (aunque le compres poco), para poder cambiar rápido si es necesario.
- **Inventario:** encontrar el equilibrio entre dos riesgos opuestos.
  - **Exceso de stock (capital inmovilizado):** dinero convertido en mercadería que está parada en bodega en vez de estar en el banco. Además ocupa espacio, puede vencer, dañarse o pasar de moda.
  - **Quiebre de stock:** quedarse sin producto cuando el cliente lo quiere. Se pierde la venta y a veces el cliente, que se va a la competencia.
  - Herramientas como el **punto de reorden** y la **cantidad económica de pedido** ayudan a calcular cuándo y cuánto comprar (ver [Matemáticas Aplicadas](/matematicas-empresariales/)).
- **SLAs** (*Service Level Agreements*, acuerdos de nivel de servicio): compromisos medibles sobre cómo y cuándo se entrega algo.
  - **Con proveedores:** "entrega en máximo 5 días hábiles", "máximo 2 % de producto defectuoso". Te permite exigir y comparar.
  - **Con clientes:** "respuesta a reclamos en 24 horas", "despacho en 48 horas". Define expectativas claras y evita discusiones.
  - Un SLA sirve solo si se mide y tiene consecuencias (descuentos, penalidades o revisión del contrato) cuando no se cumple.

## 03 · Calidad y consistencia

Escalar sin control de calidad es escalar los errores más rápido. Cada error que llega al cliente cuesta mucho más que uno detectado dentro de la empresa: reproceso, devolución, reclamo y reputación.

- **Estándares medibles** de calidad, no solo "que quede bien".
  - Define qué significa "bien hecho" en términos que cualquiera pueda verificar: peso, medidas, tiempo de entrega, temperatura, cantidad de errores permitidos.
  - Ejemplo: en vez de "el pedido debe llegar en buen estado", usar "0 productos rotos, empaque sin abolladuras, entregado en menos de 48 horas".
- **Ciclo de mejora continua:** medir → identificar causa raíz → ajustar → volver a medir.
  - **Causa raíz:** el origen real del problema, no el síntoma. Una técnica simple son los **"5 porqués"**: preguntar "¿por qué pasó?" varias veces seguidas. Ejemplo: el pedido llegó tarde → porque salió tarde → porque faltó un insumo → porque nadie revisó el stock → porque no hay un responsable asignado. La solución real es asignar un responsable, no apurar al repartidor.
  - Se repite siempre: cada mejora revela el siguiente problema a resolver.
- **Capacidad vs. demanda:** cuánto puedes producir o atender frente a cuánto te piden.
  - Planifica con margen para los picos (temporadas, fechas especiales), pero sin **sobredimensionar costos fijos** (contratar personal permanente o arrendar un local más grande para una demanda que solo existe dos meses al año).
  - Alternativas flexibles para los picos: personal temporal, turnos extra, tercerizar parte de la producción.

:::tip[Indicadores operativos clave]
- **Tiempo de ciclo:** cuánto tarda un pedido desde que entra hasta que se entrega.
- **Tasa de error o retrabajo:** qué porcentaje de lo producido hay que corregir o rehacer.
- **Costo por unidad entregada:** cuánto cuesta en total producir y entregar cada unidad.
- **Utilización de capacidad:** qué porcentaje de tu capacidad máxima estás usando. Muy bajo = recursos ociosos; cerca del 100 % = no hay margen para imprevistos.
- **Cumplimiento de SLA:** qué porcentaje de las veces cumples lo que prometiste.
:::

## 04 · Herramientas de gestión

Las herramientas no arreglan un proceso mal diseñado, pero sí hacen visible lo que está pasando y liberan tiempo del equipo.

- **Gestión de proyectos:** sistemas para organizar y dar visibilidad al trabajo en curso.
  - **Kanban:** un tablero con columnas (por ejemplo, "por hacer", "en curso", "listo") donde cada tarea es una tarjeta que avanza de izquierda a derecha. Permite ver de un vistazo qué se está haciendo, qué está atascado y quién está sobrecargado.
  - **Metodologías ágiles:** formas de trabajar en ciclos cortos (de una a cuatro semanas), entregando avances concretos al final de cada ciclo y ajustando el plan según lo aprendido, en vez de planificar todo al detalle desde el inicio.
- **Automatización** de tareas repetitivas de bajo valor agregado.
  - Ejemplos: envío automático de confirmaciones de pedido, recordatorios de pago, generación de reportes, traspaso de datos entre sistemas.
  - Regla práctica: si una tarea se repite igual todas las semanas y no requiere criterio, es candidata a automatizarse. El tiempo liberado se usa en lo que sí requiere criterio humano (atender casos difíciles, mejorar procesos).
- **Trazabilidad:** poder responder "¿dónde está esto y en qué estado?" en cualquier momento del proceso.
  - Ejemplo: saber en qué etapa está un pedido, de qué lote de materia prima salió un producto defectuoso, o quién aprobó un pago.
  - Es clave para atender reclamos rápido, retirar productos si hay un problema de calidad y detectar dónde se producen los errores.
