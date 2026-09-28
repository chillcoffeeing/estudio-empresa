---
title: 🧮 Matemáticas Aplicadas a la Gestión
description: Las fórmulas que necesitas para proyectar, producir eficiente y medir pérdidas con números, no con intuición.
---

Esta sección es la caja de herramientas numérica: lo mínimo indispensable para proyectar ventas, aprovechar la materia prima disponible y cuantificar pérdidas en vez de sentirlas. No hace falta ser matemático — hace falta aplicar estas fórmulas cada mes con datos reales.

Cada fórmula viene con un **ejemplo**: una situación concreta de negocio donde sirve, el cálculo paso a paso y la decisión que ayuda a tomar. Los montos están en unidades monetarias genéricas; reemplázalos por tu moneda.

:::caution[Antes de usar cualquier fórmula]
Todas estas herramientas asumen que tienes datos limpios y consistentes (ventas, consumo de materia prima, defectos registrados). Sin ese mínimo de orden — aunque sea una hoja de cálculo simple — cualquier fórmula produce una precisión falsa: números exactos calculados sobre datos malos. El primer paso real no es la fórmula, es el hábito de registrar.
:::

## 01 · Proyecciones de crecimiento

Proyectar no es adivinar el futuro, es extender un patrón conocido con supuestos explícitos.

- **Tasa de crecimiento simple:**
  ```
  Crecimiento % = (Valor final − Valor inicial) / Valor inicial × 100
  ```
  **Ejemplo:** una panadería quiere saber si le fue mejor esta Navidad que la anterior. En diciembre del año pasado vendió 10.000 y este diciembre 12.000.
  - Crecimiento = (12.000 − 10.000) / 10.000 × 100 = **20 %**.
  - Comparar el mismo mes de años distintos evita confundirse con la temporada: comparar diciembre con noviembre mostraría un "crecimiento" que en realidad es solo la Navidad.
  - Sirve para responder preguntas como "¿funcionó la campaña?" o "¿qué producto está creciendo más?".

- **Proyección lineal** (cuando el crecimiento es aproximadamente constante en cantidad):
  ```
  Ventas futuras = Ventas actuales + (Incremento promedio mensual × N meses)
  ```
  **Ejemplo:** una tienda de ropa online vendió 5.000, 5.400, 5.800 y 6.200 en los últimos cuatro meses. Cada mes vende unos 400 más que el anterior. Necesita saber cuánto venderá en 6 meses para decidir si contratar a otra persona en bodega.
  - Incremento promedio = (6.200 − 5.000) / 3 meses = 400 por mes.
  - Ventas en 6 meses = 6.200 + (400 × 6) = **8.600**.
  - Si el volumen de pedidos que una persona puede preparar equivale a unas 7.500 en ventas, la contratación será necesaria en unos 4 meses, y conviene empezar a buscar ya.

- **Tasa de crecimiento compuesta (CAGR)** — la correcta cuando el crecimiento es en porcentaje, no en monto fijo:
  ```
  CAGR = (Valor final / Valor inicial)^(1 / N períodos) − 1
  ```
  **Ejemplo:** una empresa de servicios vendió 100.000 en 2022 y 172.800 en 2025 (3 años de crecimiento). Va a pedir un crédito y el banco pregunta: "¿A qué ritmo crecen al año?".
  - CAGR = (172.800 / 100.000)^(1/3) − 1 = 1,728^(1/3) − 1 = 1,20 − 1 = **20 % anual**.
  - Si se hubiera calculado "a lo simple" (72,8 % de crecimiento total ÷ 3 años = 24,3 % anual), se habría sobreestimado el ritmo, porque cada año el 20 % se aplica sobre una base más grande.
  - Sirve también para comparar sucursales o productos que llevan distinta cantidad de años funcionando.
  - En una hoja de cálculo: `=(172800/100000)^(1/3)-1`.

- **Proyección exponencial** usando el CAGR:
  ```
  Ventas mes N = Ventas actuales × (1 + CAGR)^N
  ```
  **Ejemplo:** un gimnasio tiene ingresos por membresías de 10.000 al mes y en el último año ha crecido de forma bastante estable un 5 % mensual. Quiere saber si en un año necesitará un local más grande.
  - Ventas en 12 meses = 10.000 × (1,05)^12 = 10.000 × 1,796 = **17.960**.
  - Una proyección lineal (sumar 500 cada mes) daría solo 16.000. Cuando el crecimiento es porcentual, la diferencia se agranda con el tiempo, y usar la fórmula equivocada lleva a quedarse corto de capacidad.
  - Ojo: ningún negocio crece al mismo porcentaje para siempre. Úsala para horizontes cortos (6-18 meses) y revísala cada mes.

- **Media móvil (3 meses)** para suavizar picos y caídas puntuales antes de proyectar:
  ```
  Media móvil = (Ventas mes 1 + mes 2 + mes 3) / 3
  ```
  **Ejemplo:** una ferretería vendió 10.000 en enero, 14.000 en febrero (porque una constructora hizo un pedido grande único) y 9.000 en marzo. Tiene que decidir cuánto inventario comprar para abril.
  - Si compra pensando en febrero (14.000), se llenará de stock que no va a vender.
  - Media móvil = (10.000 + 14.000 + 9.000) / 3 = **11.000**. En abril, se recalcula con febrero, marzo y abril, y así sucesivamente ("móvil" porque la ventana avanza cada mes).
  - El resultado es una cifra más estable para planificar compras y producción, que no reacciona de más ante un mes excepcional.

- **Regresión lineal simple** (y = a + bx), útil cuando tienes 6+ períodos de datos y Excel/Sheets puede calcular la pendiente por ti con `=PENDIENTE()` y `=INTERSECCION.EJE()`. La pendiente (b) es tu tasa de cambio por período; proyectas sustituyendo x por el período futuro.

  **Ejemplo:** una distribuidora tiene 8 meses de ventas que suben pero con altibajos (4.500, 4.700, 5.300, 5.200, 5.900, 6.100, 6.300, 6.900). Quiere proyectar el mes 12 para negociar un contrato anual con su proveedor.
  - Con los meses (1 a 8) en la columna A y las ventas en la B: `=PENDIENTE(B1:B8; A1:A8)` da b ≈ **332** (las ventas suben unos 332 por mes) y `=INTERSECCION.EJE(B1:B8; A1:A8)` da a ≈ **4.120**.
  - Ventas mes 12 = 4.120 + 332 × 12 ≈ **8.100**.
  - A diferencia de la proyección lineal (que solo mira el primer y el último dato), la regresión usa **todos** los puntos, así que un mes raro pesa menos en el resultado.

:::tip[Regla práctica]
Con menos de 6 datos históricos, no proyectes con regresión — usa el promedio simple o el CAGR. Un modelo sofisticado sobre pocos datos da una falsa sensación de precisión.
:::

:::caution[Qué tan confiable es esto en realidad]
La precisión de *forecast* (pronóstico de ventas) típica en la industria va de ~75-85% en productos estables y de alto volumen, hasta 50-70% en productos de rotación lenta o alta variabilidad — y para SKUs (cada variante específica de producto que manejas en inventario, por ejemplo "polera azul talla M") muy volátiles o promocionales el error puede ser 20-40 puntos porcentuales peor que en productos estables. Ninguna fórmula de esta sección "predice" con exactitud: proyecta un escenario base bajo el supuesto de que las condiciones no cambian drásticamente. Trátalas como una hipótesis a corregir cada mes con datos reales, no como una promesa.
:::

## 02 · Eficiencia de materia prima y producción

Saber cuánto puedes producir con lo que tienes disponible, y a qué costo real.

- **Rendimiento o "yield"** — cuánta materia prima se convierte efectivamente en producto vendible:
  ```
  Rendimiento % = Unidades buenas producidas / Unidades que se esperaban de la materia prima consumida × 100
  ```
  **Ejemplo:** un taller de confección usa 50 metros de tela, con los que en teoría deberían salir 100 poleras. Al final del día hay 88 poleras en condiciones de venderse (el resto tiene cortes mal hechos o fallas de costura).
  - Rendimiento = 88 / 100 × 100 = **88 %**.
  - Si la semana anterior el rendimiento era 94 %, algo cambió: un rollo de tela de mala calidad, una máquina desajustada o una persona nueva sin capacitar. Medirlo cada semana permite detectarlo antes de que se note en la caja.

- **Merma o desperdicio** (el complemento del rendimiento):
  ```
  Merma % = (Materia prima comprada − Materia prima aprovechada) / Materia prima comprada × 100
  ```
  **Ejemplo:** un restaurante compra 50 kg de tomates a la semana. Después de descartar los golpeados, los que se pasaron y las partes que no se usan, aprovecha 42 kg.
  - Merma = (50 − 42) / 50 × 100 = **16 %**.
  - Eso significa que de cada 100 gastados en tomates, 16 se botan. Con ese dato el restaurante puede decidir: comprar dos veces por semana en menor cantidad (para que no se pasen), cambiar de proveedor o ajustar el precio de los platos para incorporar esa pérdida.

- **Capacidad máxima de producción** dado el inventario disponible:
  ```
  Unidades posibles = Materia prima disponible / Materia prima requerida por unidad
  ```
  **Ejemplo:** una pastelería recibe un pedido de 100 tortas de chocolate para un evento en 3 días. Tiene 30 kg de chocolate en bodega y cada torta usa 0,4 kg.
  - Unidades posibles = 30 / 0,4 = **75 tortas**.
  - Le faltan 25 tortas × 0,4 kg = 10 kg de chocolate. Antes de aceptar el pedido, debe confirmar que el proveedor puede entregarle esos 10 kg a tiempo; si no, mejor negociar la cantidad o la fecha que comprometerse y fallar.

- **Costo unitario real** (incorporando la merma, no el costo teórico de laboratorio):
  ```
  Costo unitario real = Costo de materia prima comprada / Unidades buenas producidas
  ```
  **Ejemplo:** siguiendo con el taller de confección, los 50 metros de tela costaron 300. En teoría salen 100 poleras, es decir, 3 de tela por polera. Pero solo salieron 88 buenas.
  - Costo unitario real = 300 / 88 = **3,41** por polera, un 14 % más que el costo teórico.
  - Si el precio de venta se calculó sobre 3, el margen real es menor de lo que se cree. Esta fórmula evita fijar precios con costos "de laboratorio" que nunca se dan en la práctica.

- **Punto de reorden** — cuándo volver a comprar antes de quedarte sin stock:
  ```
  Punto de reorden = (Consumo diario promedio × Tiempo de entrega del proveedor en días) + Stock de seguridad
  ```
  **Ejemplo:** una cafetería usa 4 kg de café al día. Su tostador tarda 5 días en entregar desde que se hace el pedido. Como a veces hay días de más venta o el proveedor se atrasa, quiere tener un colchón (stock de seguridad) de 6 kg.
  - Punto de reorden = (4 × 5) + 6 = **26 kg**.
  - Regla operativa para el equipo: "cuando en bodega queden 26 kg, se hace el pedido". Así el café nuevo llega justo cuando quedan unos 6 kg, sin quedarse nunca sin producto y sin llenar la bodega de más.

- **Cantidad económica de pedido (EOQ)** — cuánto comprar cada vez para minimizar el costo total (compra + almacenaje):
  ```
  EOQ = √( (2 × Demanda anual × Costo por pedido) / Costo de almacenaje por unidad al año )
  ```
  **Ejemplo:** una distribuidora de bebidas vende 2.400 cajas al año de manera bastante pareja. Cada pedido al proveedor le cuesta 50 (flete, tiempo administrativo, recepción) y mantener una caja guardada durante un año le cuesta 6 (espacio, seguro, capital inmovilizado).
  - Si pide poco y seguido, paga muchos fletes. Si pide mucho de una vez, paga mucho almacenaje. El EOQ busca el punto medio.
  - EOQ = √( (2 × 2.400 × 50) / 6 ) = √( 240.000 / 6 ) = √40.000 = **200 cajas por pedido**.
  - Resultado: 2.400 / 200 = 12 pedidos al año, es decir, uno al mes.

  ⚠️ El EOQ asume demanda constante, costo de pedido fijo y sin descuentos por volumen — supuestos que casi nunca se cumplen exactamente en una pyme con demanda estacional o irregular. Úsalo como número de referencia inicial, no como regla rígida, y ajústalo a mano cuando haya temporada alta, productos perecederos o descuentos por comprar más cantidad.

- **Productividad por hora/persona/máquina:**
  ```
  Productividad = Unidades producidas / Horas (u operarios, o máquinas) empleadas
  ```
  **Ejemplo:** en un taller de carpintería, dos operarios producen 320 sillas en una semana de 80 horas en total. Después de reorganizar el espacio para que las herramientas y los materiales queden más a mano, producen 360 sillas en las mismas 80 horas.
  - Antes: 320 / 80 = **4 sillas por hora**. Después: 360 / 80 = **4,5 sillas por hora** (+12,5 %).
  - La productividad permite medir si un cambio funcionó, comparar turnos o personas, y evaluar inversiones: si una máquina nueva promete llevarla a 6 sillas por hora, puedes calcular cuántas horas de trabajo ahorra y si se paga sola.

:::tip[Indicador clave a vigilar cada semana]
Rendimiento % de materia prima. Un rendimiento que cae 3-5 puntos porcentuales suele ser la primera señal de un problema de proceso, proveedor o desgaste de maquinaria — antes de que se note en la caja.
:::

## 03 · Estadística de pérdidas y control de calidad

Cuantificar el riesgo en vez de reaccionar cuando ya ocurrió.

- **Tasa de defectos / rechazo:**
  ```
  Tasa de defectos % = Unidades defectuosas / Unidades totales producidas × 100
  ```
  **Ejemplo:** una empresa que estampa tazas produjo 1.000 en el turno de mañana con 10 defectuosas, y 1.000 en el turno de tarde con 50 defectuosas.
  - Mañana: 10 / 1.000 × 100 = **1 %**. Tarde: 50 / 1.000 × 100 = **5 %**.
  - El total (3 %) escondía el problema: el turno de la tarde falla cinco veces más. Ahora se puede investigar por qué (¿cansancio?, ¿otra máquina?, ¿falta de supervisión?) en vez de culpar a todo el proceso.
  - También sirve para comparar proveedores o fijar metas de calidad ("bajar del 3 % al 1,5 % este trimestre").

- **Pérdida esperada** dado un parámetro de riesgo (fórmula base de cualquier análisis de riesgo):
  ```
  Pérdida esperada = Probabilidad de ocurrencia × Impacto económico si ocurre
  ```
  **Ejemplo:** una empresa despacha lotes de productos de vidrio. Según su historial, el 8 % de los lotes llega con daños, y cada lote vale 5.000.
  - Pérdida esperada por lote = 0,08 × 5.000 = **400**.
  - Si un seguro de transporte cuesta 250 por lote, conviene contratarlo (pagas 250 para evitar una pérdida promedio de 400). Si costara 600, no conviene, y sería mejor invertir en un empaque más resistente.
  - Sirve también para priorizar: al calcular la pérdida esperada de varios riesgos (robo, incendio, un cliente que no paga, una máquina que se rompe), sabes cuál atender primero.

- **Media y desviación estándar** de cualquier variable que quieras controlar (tiempo de entrega, peso de producto, defectos por lote). La **media** es el promedio: el valor "típico". La **desviación estándar (σ, "sigma")** mide cuánto se alejan los valores de ese promedio: si es baja, el proceso es parejo y predecible; si es alta, los resultados varían mucho de una vez a otra.
  ```
  Media (x̄) = Suma de valores / Número de datos
  Desviación estándar (σ) = √( Σ(valor − media)² / N )
  ```
  **Ejemplo 1:** dos repartidores con un tiempo medio de 30 minutos, pero uno siempre tarda entre 28 y 32 (σ baja) y el otro entre 10 y 50 (σ alta). El promedio es el mismo, pero solo con el primero puedes prometer un horario al cliente.

  **Ejemplo 2:** una tostaduría vende bolsas de café de 250 g. Pesa 5 bolsas al azar: 248, 252, 250, 246 y 254 g.
  - Media = (248 + 252 + 250 + 246 + 254) / 5 = **250 g**. En promedio, cumple.
  - Diferencias con la media: −2, +2, 0, −4, +4. Al cuadrado: 4, 4, 0, 16, 16. Suma = 40. σ = √(40 / 5) = √8 ≈ **2,8 g**.
  - Con una σ de 2,8 g, algunas bolsas saldrán con menos de 250 g. Si la ley o el cliente exigen un mínimo de 250 g, hay que ajustar la máquina para que el promedio sea más alto o reducir la variación.

- **Límites de control** (regla de las 3 sigma, base del control estadístico de procesos): si un valor cae fuera de estos límites, el proceso está fuera de control, no es variación normal.
  ```
  Límite superior = Media + 3σ
  Límite inferior = Media − 3σ
  ```
  En la práctica: en un proceso estable, casi todos los valores (más del 99 %) caen dentro de estos límites, así que un valor que se sale indica que algo cambió (una máquina desajustada, un insumo distinto, un error de procedimiento) y vale la pena investigar.

  **Ejemplo:** siguiendo con la tostaduría (y suponiendo que la media y la σ se calcularon con suficientes datos, ver advertencia abajo):
  - Límite superior = 250 + 3 × 2,8 = **258,4 g**. Límite inferior = 250 − 3 × 2,8 = **241,6 g**.
  - Si una bolsa pesa 247 g, es variación normal: no hay que hacer nada. Si una pesa 238 g, está fuera de los límites: se detiene la máquina y se revisa antes de seguir llenando bolsas con menos producto.
  - La ventaja es no reaccionar de más ante cada pequeña variación, y sí reaccionar rápido cuando algo realmente cambió.

  ⚠️ El estándar en control de calidad (Six Sigma y SPC, *control estadístico de procesos*: metodologías para reducir la variación en la producción) pide entre 20 y 25 subgrupos de datos (mediciones tomadas en momentos distintos, por ejemplo, 5 unidades revisadas por día durante 20-25 días) para que estos límites sean estadísticamente confiables. Con menos historial (lo típico en una pyme que recién empieza a medir), los límites calculados son ruido, no señal — mejor usar el rango de valores observados como referencia informal hasta acumular suficientes datos, o usar cartas basadas en rango (no en desviación estándar) si tus muestras son de 8 unidades o menos.

- **Principio de Pareto (80/20)** aplicado a pérdidas: ordena las causas de merma/defecto de mayor a menor impacto acumulado — normalmente una minoría de las causas (alrededor del 20 %) explica la mayor parte de la pérdida total (alrededor del 80 %). Ataca esas primero.

  **Ejemplo:** un restaurante registra durante un mes cuánto pierde por cada causa:

  | Causa | Pérdida | % acumulado |
  |---|---|---|
  | Comida vencida | 1.200 | 60 % |
  | Errores en pedidos | 500 | 85 % |
  | Porciones más grandes de lo definido | 150 | 92,5 % |
  | Platos caídos o quemados | 100 | 97,5 % |
  | Otros | 50 | 100 % |
  | **Total** | **2.000** | |

  - Solo 2 de las 5 causas (vencimientos y errores en pedidos) explican el **85 %** de la pérdida.
  - En vez de repartir esfuerzos en todo, el restaurante se enfoca en mejorar el control de fechas de vencimiento y en confirmar los pedidos antes de enviarlos a cocina. Resolver esas dos causas tiene mucho más impacto que cualquier otra acción.
  - El mismo análisis sirve para clientes (qué pocos clientes generan la mayoría de las ventas) o productos (cuáles dejan la mayor parte del margen).

- **Costo de la no calidad:**
  ```
  Costo de no calidad = Costo de reproceso + Costo de devoluciones + Costo de reputación/pérdida de cliente (estimado)
  ```
  **Ejemplo:** una fábrica de muebles revisa lo que le costaron los problemas de calidad en un mes:
  - Reproceso (horas de trabajo para volver a lijar y pintar piezas con fallas): 800.
  - Devoluciones (fletes de ida y vuelta, piezas repuestas): 1.200.
  - Un cliente corporativo que dejó de comprar por entregas defectuosas; se estima una pérdida de 1.500 en margen en los próximos meses.
  - Costo de no calidad = 800 + 1.200 + 1.500 = **3.500 al mes**.
  - Con ese número, invertir 2.000 al mes en un control de calidad antes del despacho deja de parecer un gasto y se vuelve un ahorro evidente. Sin calcularlo, los problemas de calidad se sienten "normales" y nunca se priorizan.

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
  **Ejemplo:** una tienda compra un producto a 60 y quiere ganar un 40 %. El dueño le suma un 40 % al costo: 60 × 1,40 = 84.
  - Eso es un **markup** de 40 %. Pero el **margen** real es (84 − 60) / 84 × 100 = **28,6 %**, no 40 %.
  - Si el negocio necesita un margen de 40 % para cubrir arriendo, sueldos y utilidad, el precio correcto es Costo / (1 − margen) = 60 / 0,60 = **100**. Con 84, cada venta deja 16 menos de lo planificado.
  - Regla: los proveedores y vendedores suelen hablar de markup; los estados financieros y los análisis de rentabilidad hablan de margen. Confirma siempre de cuál se está hablando.

- **Punto de equilibrio en unidades:**
  ```
  Punto de equilibrio = Costos fijos / (Precio de venta − Costo variable unitario)
  ```
  **Ejemplo:** alguien evalúa abrir una cafetería. Los costos fijos (arriendo, sueldos, servicios) serían 6.000 al mes. Cada café se vende a 3 y su costo variable (café, leche, vaso) es 1.
  - Punto de equilibrio = 6.000 / (3 − 1) = **3.000 cafés al mes**, unos 100 al día (abriendo 30 días).
  - Si el local elegido tiene un flujo de gente que hace creíble vender 150 cafés diarios, el proyecto tiene margen. Si en la zona es realista vender 60, el local no cubriría sus costos aunque el café sea excelente.
  - También sirve para evaluar cambios: si el arriendo sube 600, el punto de equilibrio sube a 3.300 cafés. ¿Es alcanzable?

- **Retorno sobre inversión (ROI):**
  ```
  ROI % = (Beneficio obtenido − Costo de la inversión) / Costo de la inversión × 100
  ```
  **Ejemplo:** una empresa de alimentos participó en una feria (costo total: 2.000) y en anuncios en redes sociales (costo: 2.000). La feria generó ventas con un margen bruto de 3.000; los anuncios, ventas con un margen bruto de 4.400.
  - ROI feria = (3.000 − 2.000) / 2.000 × 100 = **50 %**.
  - ROI anuncios = (4.400 − 2.000) / 2.000 × 100 = **120 %**.
  - Con el mismo dinero invertido, los anuncios rindieron más del doble. Para la próxima temporada, conviene mover presupuesto hacia ellos (o revisar qué se puede mejorar en la feria).
  - Importante: el "beneficio obtenido" debe medirse en **margen**, no en ventas totales; si se usan ventas, el ROI se infla.

- **Período de recuperación (payback)** — en cuánto tiempo se recupera una inversión:
  ```
  Payback (meses) = Inversión inicial / Flujo de caja neto mensual generado
  ```
  **Ejemplo:** una lavandería evalúa dos opciones: (A) una máquina nueva de 12.000 que le permitiría generar 1.000 netos adicionales al mes, o (B) remodelar el local por 6.000, lo que estima le traería 300 netos adicionales al mes.
  - Payback A = 12.000 / 1.000 = **12 meses**.
  - Payback B = 6.000 / 300 = **20 meses**.
  - Aunque B es más barata, A recupera el dinero mucho antes. Para un negocio con poca caja, recuperar rápido la inversión reduce el riesgo: mientras antes vuelve el dinero, antes está disponible para otra cosa o para un imprevisto.

- **Valor Actual Neto (VAN)** simplificado — trae flujos futuros a valor de hoy, descontando una tasa (r) que refleja el costo de oportunidad o riesgo:
  ```
  VAN = Σ [ Flujo del período t / (1 + r)^t ] − Inversión inicial
  ```
  La idea de fondo: 1.000 recibidos dentro de 3 años valen menos que 1.000 hoy, porque el dinero de hoy podrías invertirlo en otra cosa (eso es el **costo de oportunidad**) y porque el futuro es incierto. La **tasa de descuento (r)** es el rendimiento mínimo que le exiges al proyecto para que valga la pena — por ejemplo, lo que pagarías por un crédito o lo que ganarías en una inversión alternativa de riesgo parecido.

  Si VAN > 0, el proyecto crea valor por encima de la tasa exigida; si VAN < 0, destruye valor aunque "parezca" rentable en el papel.

  **Ejemplo:** una imprenta evalúa comprar una máquina de 10.000 que generará 4.000 netos al año durante 3 años (luego queda obsoleta). A simple vista: recibe 12.000 por una inversión de 10.000, "gana" 2.000. Pero la imprenta financia sus inversiones con un crédito al 10 % anual, así que usa r = 10 %.
  - Año 1: 4.000 / 1,10 = 3.636
  - Año 2: 4.000 / 1,10² = 3.306
  - Año 3: 4.000 / 1,10³ = 3.005
  - VAN = (3.636 + 3.306 + 3.005) − 10.000 = **−53**.
  - Resultado: con un costo del dinero de 10 %, la máquina apenas no alcanza a pagar lo que cuesta financiarla. Parecía rentable, pero en la práctica no crea valor. Si la imprenta consiguiera financiamiento al 8 %, el VAN sería +308 y el proyecto sí convendría. La decisión depende de cuánto le cuesta el dinero.
  - En una hoja de cálculo: `=VNA(10%; 4000; 4000; 4000) - 10000`.

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
