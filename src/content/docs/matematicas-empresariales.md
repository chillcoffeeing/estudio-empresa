---
title: 🧮 Matemáticas Aplicadas a la Gestión
description: Las fórmulas que necesitas para proyectar, producir eficiente y medir pérdidas con números, no con intuición.
---

Esta sección es la caja de herramientas numérica: lo mínimo indispensable para proyectar ventas, aprovechar la materia prima disponible y cuantificar pérdidas en vez de sentirlas. No hace falta ser matemático — hace falta aplicar estas fórmulas cada mes con datos reales.

:::caution[Antes de usar cualquier fórmula]
Todas estas herramientas asumen que tienes datos limpios y consistentes (ventas, consumo de materia prima, defectos registrados). Sin ese mínimo de orden — aunque sea una hoja de cálculo simple — cualquier fórmula produce una precisión falsa: números exactos calculados sobre datos malos. El primer paso real no es la fórmula, es el hábito de registrar.
:::

## 01 · Proyecciones de crecimiento

Proyectar no es adivinar el futuro, es extender un patrón conocido con supuestos explícitos.

- **Tasa de crecimiento simple:**
  ```
  Crecimiento % = (Valor final − Valor inicial) / Valor inicial × 100
  ```
- **Proyección lineal** (cuando el crecimiento es aprox. constante en cantidad):
  ```
  Ventas futuras = Ventas actuales + (Incremento promedio mensual × N meses)
  ```
- **Tasa de crecimiento compuesta (CAGR)** — la correcta cuando el crecimiento es en porcentaje, no en monto fijo:
  ```
  CAGR = (Valor final / Valor inicial)^(1 / N períodos) − 1
  ```
- **Proyección exponencial** usando el CAGR:
  ```
  Ventas mes N = Ventas actuales × (1 + CAGR)^N
  ```
- **Media móvil (3 meses)** para suavizar estacionalidad antes de proyectar:
  ```
  Media móvil = (Ventas mes 1 + mes 2 + mes 3) / 3
  ```
- **Regresión lineal simple** (y = a + bx), útil cuando tienes 6+ períodos de datos y Excel/Sheets puede calcular la pendiente por ti con `=PENDIENTE()` y `=INTERSECCION.EJE()`. La pendiente (b) es tu tasa de cambio por período; proyectas sustituyendo x por el período futuro.

:::tip[Regla práctica]
Con menos de 6 datos históricos, no proyectes con regresión — usa el promedio simple o el CAGR. Un modelo sofisticado sobre pocos datos da una falsa sensación de precisión.
:::

:::caution[Qué tan confiable es esto en realidad]
La precisión de forecast típica en la industria va de ~75-85% en productos estables y de alto volumen, hasta 50-70% en productos de rotación lenta o alta variabilidad — y para SKUs muy volátiles o promocionales el error puede ser 20-40 puntos porcentuales peor que en productos estables. Ninguna fórmula de esta sección "predice" con exactitud: proyecta un escenario base bajo el supuesto de que las condiciones no cambian drásticamente. Trátalas como una hipótesis a corregir cada mes con datos reales, no como una promesa.
:::

## 02 · Eficiencia de materia prima y producción

Saber cuánto puedes producir con lo que tienes disponible, y a qué costo real.

- **Rendimiento o "yield"** — cuánta materia prima se convierte efectivamente en producto vendible:
  ```
  Rendimiento % = Unidades buenas producidas / Unidades de materia prima consumida × 100
  ```
- **Merma o desperdicio** (el complemento del rendimiento):
  ```
  Merma % = (Materia prima comprada − Materia prima aprovechada) / Materia prima comprada × 100
  ```
- **Capacidad máxima de producción** dado el inventario disponible:
  ```
  Unidades posibles = Materia prima disponible / Materia prima requerida por unidad
  ```
- **Costo unitario real** (incorporando la merma, no el costo teórico de laboratorio):
  ```
  Costo unitario real = Costo de materia prima comprada / Unidades buenas producidas
  ```
- **Punto de reorden** — cuándo volver a comprar antes de quedarte sin stock:
  ```
  Punto de reorden = (Consumo diario promedio × Tiempo de entrega del proveedor en días) + Stock de seguridad
  ```
- **Cantidad económica de pedido (EOQ)** — cuánto comprar cada vez para minimizar costo total (compra + almacenaje):
  ```
  EOQ = √( (2 × Demanda anual × Costo por pedido) / Costo de almacenaje por unidad )
  ```
  ⚠️ El EOQ asume demanda constante, costo de pedido fijo y sin descuentos por volumen — supuestos que casi nunca se cumplen exactamente en una pyme con demanda estacional o irregular. Úsalo como número de referencia inicial, no como regla rígida, y ajústalo a mano cuando haya temporada alta, productos perecederos o descuentos por comprar más cantidad.
- **Productividad por hora/persona/máquina:**
  ```
  Productividad = Unidades producidas / Horas (u operarios, o máquinas) empleadas
  ```

:::tip[Indicador clave a vigilar cada semana]
Rendimiento % de materia prima. Un rendimiento que cae 3-5 puntos porcentuales suele ser la primera señal de un problema de proceso, proveedor o desgaste de maquinaria — antes de que se note en la caja.
:::

## 03 · Estadística de pérdidas y control de calidad

Cuantificar el riesgo en vez de reaccionar cuando ya ocurrió.

- **Tasa de defectos / rechazo:**
  ```
  Tasa de defectos % = Unidades defectuosas / Unidades totales producidas × 100
  ```
- **Pérdida esperada** dado un parámetro de riesgo (fórmula base de cualquier análisis de riesgo):
  ```
  Pérdida esperada = Probabilidad de ocurrencia × Impacto económico si ocurre
  ```
  Ejemplo: si un lote tiene 8% de probabilidad de dañarse en tránsito y el valor del lote es $5.000 → pérdida esperada = 0,08 × $5.000 = $400. Ese número es lo que justifica (o no) pagar un seguro o mejorar el empaque.
- **Media y desviación estándar** de cualquier variable que quieras controlar (tiempo de entrega, peso de producto, defectos por lote):
  ```
  Media (x̄) = Suma de valores / Número de datos
  Desviación estándar (σ) = √( Σ(valor − media)² / N )
  ```
- **Límites de control** (regla de las 3 sigma, base del control estadístico de procesos): si un valor cae fuera de estos límites, el proceso está fuera de control, no es variación normal.
  ```
  Límite superior = Media + 3σ
  Límite inferior = Media − 3σ
  ```
  ⚠️ El estándar en control de calidad (Six Sigma / SPC) pide entre 20 y 25 subgrupos de datos para que estos límites sean estadísticamente confiables. Con menos historial (lo típico en una pyme que recién empieza a medir), los límites calculados son ruido, no señal — mejor usar el rango de valores observados como referencia informal hasta acumular suficientes datos, o usar cartas basadas en rango (no en desviación estándar) si tus muestras son de 8 unidades o menos.
- **Principio de Pareto (80/20)** aplicado a pérdidas: ordena las causas de merma/defecto de mayor a menor impacto acumulado — normalmente el 20% de las causas explica el 80% de la pérdida total. Ataca esas primero.
- **Costo de la no calidad:**
  ```
  Costo de no calidad = Costo de reproceso + Costo de devoluciones + Costo de reputación/pérdida de cliente (estimado)
  ```

:::tip[Cómo usar esto sin ser estadístico]
No necesitas calcular σ a mano: registra tus datos en una hoja de cálculo y usa `=PROMEDIO()` y `=DESVEST()`. Lo importante es el hábito de medir el mismo parámetro cada período, no la sofisticación de la fórmula.
:::

## 04 · Números básicos para decidir

Las cuentas rápidas que deberías poder hacer de memoria antes de tomar cualquier decisión grande.

- **Margen vs. Markup** (se confunden y llevan a fijar precios mal):
  ```
  Margen % = (Precio venta − Costo) / Precio venta × 100
  Markup % = (Precio venta − Costo) / Costo × 100
  ```
- **Punto de equilibrio en unidades:**
  ```
  Punto de equilibrio = Costos fijos / (Precio de venta − Costo variable unitario)
  ```
- **Retorno sobre inversión (ROI):**
  ```
  ROI % = (Beneficio obtenido − Costo de la inversión) / Costo de la inversión × 100
  ```
- **Período de recuperación (payback)** — en cuánto tiempo se recupera una inversión:
  ```
  Payback (meses) = Inversión inicial / Flujo de caja neto mensual generado
  ```
- **Valor Actual Neto (VAN)** simplificado — trae flujos futuros a valor de hoy, descontando una tasa (r) que refleja el costo de oportunidad o riesgo:
  ```
  VAN = Σ [ Flujo del período t / (1 + r)^t ] − Inversión inicial
  ```
  Si VAN > 0, el proyecto crea valor por encima de la tasa exigida; si VAN < 0, destruye valor aunque "parezca" rentable en el papel.

  En la práctica, encuestas a empresas muestran que el VAN es el método preferido en firmas grandes (usado por ~68-80% de forma frecuente), pero las empresas pequeñas tienden a inclinarse más por el payback simple porque es más rápido de calcular y de explicar. Usa el VAN para decisiones grandes e irreversibles (comprar maquinaria, abrir una sucursal); para el resto, el payback basta.

:::tip[Chuleta rápida — los 5 números que deberías revisar cada mes]
1. Rendimiento % de materia prima
2. Margen de contribución por producto
3. Punto de equilibrio en unidades
4. Pérdida esperada de tus 2-3 riesgos operativos más grandes
5. Runway de caja (ver [Finanzas y Contabilidad](/finanzas))
:::

## 05 · Qué tan lejos te lleva esto realmente

Un balance honesto, no solo teórico: no todas las fórmulas de esta página valen lo mismo para un negocio real con datos imperfectos.

**Alto impacto, bajo esfuerzo — úsalas literalmente cada mes:**
Margen vs. markup, punto de equilibrio, rendimiento % de materia prima, tasa de defectos, Pareto de clientes/productos/causas de pérdida, payback simple. Se calculan en minutos con una hoja de cálculo y cambian decisiones de inmediato. Son las que de verdad separan a un negocio que se gestiona con números de uno que se gestiona por intuición.

**Útiles pero exigen datos que la mayoría de las pymes no tiene todavía:** EOQ, límites de control 3-sigma, regresión lineal y VAN. No son fórmulas "malas" — son fórmulas diseñadas para operaciones con volumen y consistencia (fábricas grandes, empresas con años de histórico limpio). Aplicadas sobre pocos datos o demanda muy irregular, dan una precisión falsa: un número exacto que esconde un supuesto que no se cumple. Trátalas como vocabulario para entender reportes y como herramienta puntual para decisiones grandes, no como rutina semanal.

**El límite real de esta sección:** ninguna fórmula compensa la falta de un hábito de registro. El techo de utilidad de todo este material está determinado por la calidad de tus datos de entrada, no por la sofisticación de la fórmula — un negocio que anota ventas y consumo de materia prima en una hoja de cálculo simple sacará más valor de la "chuleta rápida" que uno con acceso a modelos avanzados pero datos sucios o inconsistentes. Empieza por el hábito de medir; las fórmulas complejas llegan después, cuando el volumen de datos las justifique.
