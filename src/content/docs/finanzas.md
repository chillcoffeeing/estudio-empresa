---
title: 📊 Finanzas y Contabilidad
description: Leer números, decidir con datos, no quedarse sin caja.
---

## 01 · Los tres estados financieros

Son el tablero de instrumentos de la empresa. Si no los lees tú, alguien más decide por ti. Cada uno responde una pregunta distinta, y ninguno por sí solo cuenta la historia completa: hay que leerlos juntos.

- **Estado de resultados (P&L):** ingresos − costos − gastos = utilidad, en un período de tiempo (un mes, un trimestre, un año). Responde "¿ganamos dinero?".
  - Se lee de arriba hacia abajo: ventas → costo de ventas → **utilidad bruta** → gastos operativos (sueldos, arriendo, marketing) → **utilidad operativa** → intereses e impuestos → **utilidad neta**.
  - Ojo: registra las ventas cuando se facturan, no cuando se cobran. Por eso puede mostrar ganancias aunque el dinero todavía no haya entrado.
- **Balance general:** activos = pasivos + patrimonio, en un momento dado (una "foto" al cierre de un día). Responde "¿qué tenemos y qué debemos?".
  - **Activos:** lo que la empresa posee o le deben (caja, cuentas por cobrar, inventario, equipos).
  - **Pasivos:** lo que la empresa debe a terceros (proveedores, bancos, impuestos por pagar).
  - **Patrimonio:** lo que realmente pertenece a los dueños — el capital aportado más las utilidades acumuladas.
- **Flujo de caja:** entradas y salidas reales de efectivo. Responde "¿tenemos con qué pagar la nómina el viernes?".
  - Se divide en tres bloques: **operación** (el día a día del negocio), **inversión** (compra o venta de equipos, activos) y **financiamiento** (préstamos, aportes de socios, dividendos).
  - Una empresa rentable en el P&L puede quebrar por falta de caja: si vendes mucho a crédito a 90 días pero pagas a proveedores a 30, la utilidad existe en papel mientras la cuenta bancaria se vacía.

## 02 · Unit economics

Antes de escalar, hay que saber si cada unidad vendida (o cada cliente) deja plata o la quema. Si la unidad pierde dinero, crecer solo acelera la pérdida.

- **CAC** (costo de adquisición de cliente): cuánto cuesta conseguir un cliente nuevo.
  - Fórmula: (gasto total en marketing + gasto total en ventas del período) ÷ clientes nuevos del período.
  - Incluye todo lo necesario para cerrar la venta: publicidad, comisiones, sueldos del equipo comercial, herramientas. Un CAC que solo cuenta la pauta publicitaria se ve engañosamente bajo.
- **LTV** (valor de vida del cliente): cuánto ingreso neto genera un cliente durante toda su relación con la empresa.
  - Fórmula simplificada: ticket promedio × frecuencia de compra × tiempo de vida del cliente × margen bruto.
  - Se calcula sobre margen, no sobre venta: un cliente que compra mucho de un producto con margen bajo vale menos de lo que parece.
- **Regla práctica (con matiz):** un objetivo común es LTV ≥ 3x CAC (cada cliente debería dejar al menos tres veces lo que costó conseguirlo).
  - Este número nació en empresas **SaaS** (*software as a service*: software que se cobra como suscripción mensual o anual) maduras de EE.UU., no es una ley universal. Muchas SaaS hoy apuntan a 4x o más, y negocios de retail, servicios o manufactura tienen ciclos y márgenes tan distintos que el 3x puede sobrar o quedarse corto.
  - Úsalo como punto de partida y compáralo contra tu propio histórico de **cohortes**, no como meta fija. Una cohorte es un grupo de clientes que empezó en el mismo período (por ejemplo, "los que compraron por primera vez en enero"); seguir cada cohorte en el tiempo muestra cuánto duran y cuánto gastan realmente tus clientes, en vez de suponerlo.
- **Período de recuperación del CAC:** cuántos meses tarda un cliente en devolver, con el margen que genera, lo que costó conseguirlo.
  - Fórmula: CAC ÷ margen bruto mensual que deja un cliente.
  - Ejemplo: si conseguir un cliente cuesta 300 y te deja 25 de margen al mes, recuperas la inversión en 12 meses. Durante esos 12 meses, esa plata está "prestada" por la empresa: mientras más largo el período, más caja necesitas para crecer.
- **Margen de contribución:** precio de venta menos costos variables directos (materia prima, comisiones, envío, comisión de la pasarela de pago).
  - Define cuánto aporta cada venta para cubrir los costos fijos y, después, generar utilidad.
  - Ejemplo: vendes a 100, los costos variables son 60 → el margen de contribución es 40 (40 %).
- **Punto de equilibrio:** el volumen de ventas donde los ingresos igualan a los costos totales — ni ganas ni pierdes.
  - Fórmula en unidades: costos fijos mensuales ÷ margen de contribución por unidad.
  - Ejemplo: con costos fijos de 8.000 y margen de contribución de 40 por unidad, necesitas vender 200 unidades al mes solo para no perder.

## 03 · Métricas a vigilar cada mes

Cinco números que conviene revisar en cada cierre mensual. Lo importante no es el valor aislado, sino la **tendencia**: cómo se mueven mes a mes.

### Margen bruto

- **Qué es:** el porcentaje de cada venta que queda después de pagar lo que cuesta producir o comprar lo vendido.
- **Fórmula:** (ventas − costo de ventas) ÷ ventas × 100.
- **Cómo leerlo:** mide la salud del producto y del precio. Si baja, o subieron los costos de insumos, o estás descontando demasiado, o cambió la mezcla hacia productos menos rentables.
- **Referencia:** varía mucho por industria — software suele superar el 70 %, retail y restaurantes suelen moverse entre 25 % y 60 %. Compárate contra tu sector y contra tu propio histórico.

### Margen neto

- **Qué es:** el porcentaje de cada venta que queda como utilidad final, después de **todos** los costos, gastos, intereses e impuestos.
- **Fórmula:** utilidad neta ÷ ventas × 100.
- **Cómo leerlo:** mide la eficiencia del negocio completo, no solo del producto. Un margen bruto sano con un margen neto bajo indica que los gastos operativos (estructura, sueldos, arriendo, marketing) se están comiendo la ganancia.
- **Señal de alerta:** ventas que crecen mientras el margen neto cae — estás creciendo, pero cada venta adicional deja menos.

### Burn rate (quema mensual de caja)

- **Qué es:** cuánto efectivo pierde la empresa cada mes cuando las salidas superan a las entradas.
- **Fórmula:**
  - **Burn bruto:** total de salidas de caja del mes.
  - **Burn neto:** salidas de caja − entradas de caja del mes. Es el que más importa.
- **Cómo leerlo:** es normal en empresas que están invirtiendo para crecer, pero debe ser una decisión consciente y con fecha de término, no una sorpresa. Si el burn sube mes a mes sin que suban las ventas, hay que actuar.
- **Nota:** se mide sobre caja real (extracto bancario), no sobre el P&L.

### Runway (meses de caja restante)

- **Qué es:** cuántos meses puede sobrevivir la empresa con el efectivo que tiene hoy, si el burn se mantiene igual.
- **Fórmula:** caja disponible ÷ burn neto mensual.
- **Ejemplo:** 60.000 en el banco y un burn neto de 5.000 al mes → 12 meses de runway.
- **Cómo leerlo:** conseguir financiamiento o llegar a rentabilidad suele tomar entre 6 y 9 meses, así que con menos de 12 meses de runway ya hay que tener un plan en marcha. Con menos de 6, es urgente: recortar gastos, acelerar cobros o buscar capital.

### Working capital (capital de trabajo)

- **Qué es:** el colchón de recursos de corto plazo con el que la empresa opera el día a día.
- **Fórmula:** activo corriente (caja + cuentas por cobrar + inventario) − pasivo corriente (proveedores, deudas y obligaciones a menos de un año).
- **Cómo leerlo:** si es positivo, la empresa puede cubrir sus obligaciones inmediatas; si es negativo, depende de cobrar rápido o de financiamiento para pagar lo que vence pronto.
- **Qué lo mueve:** los **días de cobro** (cuánto tardan tus clientes en pagarte), los **días de inventario** (cuánto tiempo pasa la mercadería en bodega) y los **días de pago** (cuánto tardas tú en pagar a proveedores). Cobrar antes y rotar el inventario más rápido libera caja sin vender un peso más.

:::tip[Hábito recomendado]
Arma una hoja de una sola página con estas cinco métricas, mes a mes, en columnas. Revisarla cada cierre toma 15 minutos y te avisa de los problemas meses antes de que se vuelvan urgentes.
:::

## 04 · Presupuesto y proyecciones

Presupuestar no es adivinar: es fijar un plan y medir la desviación real contra él. El valor no está en acertar, sino en detectar rápido cuándo la realidad se aleja del plan y entender por qué.

- **Presupuesto anual** desglosado por mes, revisado trimestralmente contra lo real (análisis de varianza).
  - Para cada línea compara presupuesto vs. real y explica las diferencias relevantes: ¿fue volumen, precio, un gasto no planificado o un simple desfase de fechas?
  - Si las condiciones cambian mucho, actualiza la proyección del resto del año (*forecast*), pero conserva el presupuesto original como referencia.
- **Proyección de flujo de caja a 13 semanas:** el horizonte mínimo para anticipar problemas de liquidez con tiempo de reacción.
  - Semana a semana: saldo inicial + cobros esperados − pagos comprometidos = saldo final.
  - Se actualiza cada semana con lo real. Trece semanas (un trimestre) dan tiempo suficiente para negociar con proveedores, pedir un crédito o acelerar cobranzas antes de que falte el dinero.
- **Escenarios:** caso base, optimista y pesimista — nunca planificar con un solo número.
  - Define qué supuestos cambian en cada uno (ventas, precios, plazos de cobro, costos clave).
  - El escenario pesimista es el más útil: te dice cuánto aguanta la empresa si las cosas salen mal y qué decisiones tomarías en ese caso.

## 05 · Estructura de capital y fiscalidad

Cómo se financia la empresa y qué le debe al Estado no es un detalle administrativo, es una decisión estratégica: define quién es dueño de la empresa, cuánta presión tiene la caja cada mes y cuánto de la utilidad termina realmente en manos de los socios.

### ¿Qué es la "estructura de capital"?

Toda empresa necesita dinero para operar y crecer, y ese dinero solo puede venir de dos fuentes:

- **Capital ajeno (deuda):** dinero que alguien te **presta** y que hay que devolver con intereses. El prestamista no se vuelve dueño de nada.
- **Capital propio (equity o patrimonio):** dinero que alguien **aporta a cambio de ser dueño** de una parte de la empresa. No se devuelve en cuotas; el aportante gana si la empresa gana (vía dividendos o vendiendo su parte más cara en el futuro).

La "estructura de capital" es simplemente la mezcla entre ambas: qué parte de la empresa se financia con deuda y qué parte con aportes de dueños. En el balance general se ve directamente: la deuda está en los **pasivos** y el equity en el **patrimonio**.

### Deuda: cómo funciona y cuándo conviene

- **Formas comunes:**
  - **Crédito bancario:** un monto que se devuelve en cuotas fijas durante un plazo (por ejemplo, 36 meses).
  - **Línea de crédito:** un cupo disponible que usas solo cuando lo necesitas, pagando intereses solo por lo usado. Útil para cubrir desfases de caja puntuales.
  - **Leasing:** arriendas un equipo o vehículo con opción de comprarlo al final; en la práctica funciona como un crédito asociado a ese bien.
  - **Crédito de proveedores:** cuando un proveedor te deja pagar a 30, 60 o 90 días, también te está financiando (a menudo sin cobrar intereses explícitos).
- **Ventajas:**
  - Conservas el 100 % de la propiedad y del control de la empresa.
  - Es más barata que el equity: el banco solo espera recibir su interés, no una parte de todas las ganancias futuras.
  - Los intereses normalmente se registran como gasto y **reducen la utilidad sobre la que se pagan impuestos**.
- **Desventajas:**
  - Las cuotas se pagan **vendas o no vendas**. En un mes malo, la deuda sigue ahí.
  - Suele exigir garantías (bienes de la empresa o incluso un aval personal de los socios).
  - Demasiada deuda deja a la empresa frágil ante cualquier caída de ventas.
- **Apalancamiento:** es el término técnico para "usar deuda para hacer crecer el negocio". Funciona como una palanca en ambos sentidos: si la inversión rinde más que el interés que pagas, multiplica la ganancia de los dueños; si rinde menos, multiplica la pérdida.
  - Ejemplo: pides 10.000 al 12 % anual para comprar una máquina que genera 3.000 de utilidad al año. Pagas 1.200 de intereses y te quedan 1.800 extra sin haber puesto dinero propio. Si la máquina solo generara 800, estarías perdiendo 400 al año.
- **Cuándo conviene:** para necesidades con retorno predecible y medible — comprar maquinaria, financiar inventario de temporada, cubrir el desfase entre pagar a proveedores y cobrar a clientes.

### Equity: cómo funciona y qué significa "diluir"

- **Formas comunes:** aportes de los mismos fundadores, entrada de un socio nuevo, **inversionistas ángeles** (personas que invierten su propio dinero en etapas tempranas) o fondos de **capital de riesgo** (*venture capital*), que invierten en empresas con potencial de crecer muy rápido.
- **Ventajas:**
  - No hay cuotas mensuales ni intereses: **no presiona la caja**. Si a la empresa le va mal un año, el inversionista simplemente no recibe nada ese año.
  - Muchas veces el inversionista aporta, además del dinero, experiencia, contactos o reputación.
- **Desventajas:**
  - Es la forma **más cara** de financiarse a largo plazo: el inversionista no recibe un interés fijo, sino una parte de **todas** las ganancias futuras y del valor de la empresa, para siempre.
  - Cedes parte del control: los nuevos socios suelen tener voto en decisiones importantes y, según lo acordado, derecho a información, a un puesto en el directorio o a vetar ciertas decisiones.
- **Dilución — qué significa:** cuando entra un socio nuevo, la empresa emite acciones (o participaciones) nuevas para él. Como el "pastel" ahora se reparte entre más dueños, **el porcentaje de cada socio anterior se achica**. Eso es "diluirse".
  - Ejemplo: eres dueño del 100 % de la empresa. Un inversionista pone 50.000 a cambio del 20 %; ahora tú tienes el 80 %. Si más adelante entra otro inversionista por un 25 %, ese 25 % se descuenta proporcionalmente de todos: pasas a tener el 60 % (80 % × 0,75) y el primer inversionista el 15 % (20 % × 0,75).
  - Diluirse **no es necesariamente malo**: tener el 60 % de una empresa que vale 1.000.000 es mejor que tener el 100 % de una que vale 100.000. El problema es diluirse demasiado temprano, a un valor bajo, o sin que el dinero se traduzca en crecimiento real.
  - Ojo con los umbrales de control: bajar del 50 % puede significar perder la capacidad de decidir solo, dependiendo de lo que diga el acuerdo de socios.
- **Valoración:** para saber qué porcentaje entregar a cambio de un aporte, hay que acordar cuánto "vale" la empresa. Si un inversionista pone 50.000 por el 20 %, está valorando la empresa en 250.000 después de su aporte (50.000 ÷ 0,20). Mientras más alta la valoración, menos porcentaje cedes por el mismo dinero.
- **Tabla de capitalización (*cap table*):** la planilla que registra quién es dueño de qué porcentaje de la empresa y cómo ha cambiado con cada entrada de capital. Conviene mantenerla ordenada desde el primer socio.
- **Cuándo conviene:** para apuestas de crecimiento con retorno incierto o lejano (desarrollar un producto nuevo, entrar a otro mercado), donde no sería prudente comprometerse a pagar cuotas fijas.

:::tip[Resumen en una frase]
La deuda es más barata pero más peligrosa para la caja; el equity es más seguro para la caja pero más caro a largo plazo, porque entregas un pedazo de la empresa para siempre.
:::

### Fiscalidad: régimen tributario y obligaciones

Los nombres y las tasas cambian según el país, pero la lógica es muy parecida en casi todos lados. Para las tasas, organismos y particularidades de Venezuela (IVA, IGTF, ISLR, contribuyentes especiales, economía bimonetaria), ver [Operar en Venezuela](/venezuela/).

- **Régimen tributario:** el conjunto de reglas que define cómo y cuánto impuesto paga tu empresa. Depende del tipo de sociedad (por ejemplo, empresa individual, sociedad de responsabilidad limitada o sociedad por acciones), del nivel de ventas y, a veces, del sector.
  - Muchos países tienen **regímenes simplificados** para pymes, con menos exigencias contables o tasas más bajas, pero con límites de ventas o de tipo de actividad.
  - Elegir el régimen correcto puede cambiar significativamente cuánto pagas. Revísalo con un contador al constituir la empresa y cada vez que el negocio crezca o cambie.
- **IVA (impuesto al valor agregado):** un impuesto que pagan los consumidores y que la empresa **cobra en nombre del Estado**.
  - Cómo funciona: cuando vendes, agregas el IVA al precio (**IVA débito**); cuando compras insumos, pagas IVA a tus proveedores (**IVA crédito**). Cada mes le pagas al Estado la diferencia.
  - Ejemplo con una tasa de 19 %: vendes 1.000 + 190 de IVA; compraste insumos por 400 + 76 de IVA. Debes pagar al Estado 190 − 76 = 114.
  - Por eso **el IVA cobrado no es tuyo**: es dinero del Estado que custodias hasta declararlo. Si lo gastas como si fuera caja propia, el mes de la declaración te encontrarás sin fondos. Conviene separarlo mentalmente, o incluso en otra cuenta.
- **Impuesto a la renta (o a las utilidades):** se paga sobre la **utilidad** de la empresa (ingresos menos los gastos que la ley acepta), normalmente una vez al año, aunque en muchos países se hacen pagos provisionales mensuales a cuenta.
  - Por eso importa respaldar todos los gastos: un gasto real sin factura no reduce la utilidad tributable, y terminas pagando impuesto sobre dinero que ya gastaste.
- **Retenciones:** en ciertos pagos (sueldos, honorarios de independientes, algunos servicios) la ley obliga a la empresa a **descontar una parte del pago y entregarla directamente al Estado** a nombre de quien lo recibe. Por ejemplo, del sueldo de un trabajador se retienen impuestos y cotizaciones antes de pagarle. La empresa actúa como recaudador y es responsable si no lo hace.
- **Calendario tributario:** una lista con todas las fechas de declaración y pago del año (IVA mensual, retenciones, pagos provisionales, declaración anual de renta).
  - Las multas e intereses por atraso son un costo **completamente evitable**, y un historial de incumplimientos complica pedir créditos o venderle al Estado.
  - Inclúyelo en tu proyección de caja a 13 semanas: los impuestos son salidas de dinero tan seguras como la nómina.
- **Planificación tributaria vs. evasión:** usar los beneficios, deducciones y regímenes que la ley permite para pagar lo justo es legítimo y recomendable (planificación). Ocultar ventas o inventar gastos es evasión: un delito con consecuencias graves para la empresa y sus dueños.

### Separación estricta entre finanzas personales y de la empresa

Es el error más común y más caro en negocios pequeños.

- **Por qué importa:**
  - Si pagas gastos personales con plata de la empresa (o al revés), **todos los números de esta página dejan de ser confiables**: el margen, el burn rate y el runway se distorsionan y ya no sirven para decidir.
  - Complica la contabilidad y puede traer problemas tributarios: gastos personales registrados como de la empresa pueden ser rechazados por la autoridad fiscal, con multas.
  - En una sociedad, mezclar patrimonios puede debilitar la protección legal que separa tus bienes personales de las deudas de la empresa (ver [Legal y Cumplimiento](/legal/)).
- **Cómo hacerlo en la práctica:**
  - Cuenta bancaria y tarjeta **exclusivas** para la empresa: todo ingreso del negocio entra ahí, todo gasto del negocio sale de ahí.
  - Los dueños se pagan de forma definida: un **sueldo** fijo (si trabajan en la empresa) y/o **retiros o dividendos** periódicos según las utilidades, no sacando dinero cada vez que hace falta.
  - Si prestas dinero personal a la empresa, déjalo documentado como préstamo del socio, para que quede claro que debe devolverse.
