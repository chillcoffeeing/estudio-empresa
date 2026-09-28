---
title: 💻 Tecnología
description: Hacer las preguntas correctas, aunque no programes tú.
---

Hoy casi todas las empresas dependen de la tecnología, vendan software o empanadas: sitio web, sistema de ventas, facturación, redes sociales, correo, datos de clientes. El CEO no necesita programar, pero sí entender lo suficiente para tomar buenas decisiones, evaluar lo que le propone su equipo o proveedor y no quedar a ciegas cuando algo falla.

## 01 · Alfabetización técnica del CEO

No necesitas programar, pero sí entender lo suficiente para no depender ciegamente de lo que te dicen.

- **Vocabulario básico** para poder seguir una conversación técnica sin perderte:
  - **Frontend:** la parte que ve y usa el cliente (pantallas, botones, formularios de un sitio web o una app).
  - **Backend:** la parte que funciona "por detrás" y el usuario no ve: la lógica que procesa pedidos, calcula precios, guarda información y se conecta con otros sistemas.
  - **Base de datos:** donde se guarda la información de forma ordenada (clientes, productos, pedidos, pagos).
  - **Servidor:** el computador (físico o virtual) donde funciona el sistema y que responde cuando alguien lo usa.
  - **Nube (*cloud*):** usar servidores, almacenamiento o programas de un proveedor externo a través de internet, pagando por uso, en vez de tener equipos propios en la oficina.
  - **API:** un "enchufe" estándar que permite que dos sistemas se comuniquen de forma automática. Ejemplo: tu tienda online usa la API de la pasarela de pagos para cobrar, y la del courier para generar la etiqueta de envío.
  - **MVP (*Minimum Viable Product*, producto mínimo viable):** la versión más simple de un producto que permite probar con clientes reales si la idea funciona, antes de invertir en la versión completa.
- **Preguntas correctas** a tu equipo o proveedor tecnológico:
  - "¿Qué pasa si esto falla? ¿Cuánto tiempo estaríamos sin operar y qué perderíamos?"
  - "¿Qué tan difícil es cambiarlo después?" — algunas decisiones técnicas son fáciles de revertir y otras quedan amarradas por años.
  - "¿Qué tan dependientes estamos de este proveedor? ¿Podemos sacar nuestros datos si nos queremos ir?"
  - "¿Cuánto costará esto cuando tengamos 10 veces más clientes?"
- **Deuda técnica:** atajos que se toman para avanzar más rápido y que se "pagan" después con más lentitud y más errores.
  - Funciona como una deuda financiera: a veces vale la pena endeudarse para llegar antes al mercado, pero si nunca se paga, los "intereses" crecen. Cada cambio nuevo cuesta más, aparecen fallas inesperadas y el equipo avanza cada vez más lento.
  - Cuando el equipo técnico dice "necesitamos tiempo para ordenar el código", muchas veces se refiere a pagar esta deuda. Es una inversión legítima, no un capricho.

## 02 · Decisiones de *build vs. buy* (construir o comprar)

Cada vez que la empresa necesita una solución tecnológica, hay que decidir si **desarrollarla a medida** (build) o **usar una herramienta existente** (buy), normalmente pagando una suscripción.

- **Construir a medida** tiene sentido cuando esa tecnología es el **diferenciador central** del negocio: lo que te hace distinto de la competencia y que no podrías conseguir comprando algo estándar.
  - Ventajas: control total, se adapta exactamente a tu forma de trabajar, puede ser una ventaja difícil de copiar.
  - Desventajas: es caro, lento, y el costo no termina al lanzarlo — hay que mantenerlo, corregir errores y actualizarlo para siempre. Suele costar bastante más y tardar más de lo estimado inicialmente.
- **Comprar o usar herramientas existentes** tiene sentido para todo lo que **no** es tu ventaja competitiva: contabilidad, CRM, correo, comunicación interna, facturación, planillas.
  - Ventajas: disponible de inmediato, costo predecible, el proveedor se encarga del mantenimiento y la seguridad.
  - Desventajas: tienes que adaptarte a cómo funciona la herramienta, y dependes del proveedor (precios, cambios, continuidad).
  - Regla práctica: ningún cliente te elige porque tu sistema de contabilidad sea hecho a medida. Ahí conviene comprar.
- **Escalabilidad:** la capacidad de un sistema de soportar más clientes, más datos o más transacciones sin colapsar ni volverse carísimo.
  - Lo que funciona con 10 clientes no necesariamente funciona con 10.000. Pregunta por el plan de crecimiento técnico, no solo por lo que funciona hoy.
  - Pero tampoco hay que sobre-construir: diseñar para un millón de usuarios cuando tienes cien es gastar dinero en un problema que quizás nunca llegue.

## 03 · Ciberseguridad y datos

Un incidente de seguridad no es solo un problema técnico: es un problema legal (filtración de datos personales), financiero (fraudes, pérdida de ventas, rescates) y reputacional (pérdida de confianza de los clientes) a la vez.

- **Higiene básica:** medidas simples que previenen la mayoría de los problemas.
  - **Autenticación en dos pasos (2FA):** además de la contraseña, pedir un segundo código (desde el celular o una app) para entrar. Aunque roben tu contraseña, no pueden entrar sin tu teléfono. Actívala en correo, banco, redes sociales y sistemas críticos.
  - **Gestor de contraseñas:** una aplicación que crea y guarda contraseñas largas y distintas para cada servicio. Evita reutilizar la misma contraseña en todas partes, que es la forma más común en que se roban cuentas.
  - **Control de accesos por rol:** cada persona tiene acceso solo a lo que necesita para su trabajo. No todos necesitan entrar a la cuenta bancaria o a la base completa de clientes. Y cuando alguien deja la empresa, se le quitan todos los accesos ese mismo día.
  - **Actualizaciones:** mantener al día los equipos y programas, porque muchas actualizaciones corrigen fallas de seguridad conocidas.
- **Respaldo de datos (*backups*):** copias de la información importante guardadas en un lugar separado.
  - Deben ser **automáticos**, guardarse en un lugar distinto al original (por ejemplo, en la nube si los datos están en la oficina) y **probarse**: restaurar periódicamente una copia para verificar que funciona.
  - Un backup que nunca se restauró es una suposición, no una garantía. Muchas empresas descubren que sus respaldos estaban incompletos justo cuando los necesitan.
- **Plan de respuesta a incidentes:** qué hacer en las primeras horas si hay un ataque o una filtración, decidido de antemano.
  - Quién está a cargo, a quién se llama (proveedor técnico, abogado, banco), cómo se aíslan los equipos afectados, cómo y cuándo se avisa a clientes o autoridades si la ley lo exige.
  - En una crisis no hay tiempo para improvisar; tener el plan escrito reduce el daño y los errores.

:::tip[Riesgo real]
La mayoría de los incidentes de seguridad en pymes vienen de error humano, no de ataques sofisticados. El más común es el **phishing**: correos o mensajes falsos que imitan a un banco, proveedor o jefe para que alguien entregue su contraseña, abra un archivo infectado o haga una transferencia. Capacitar al equipo para reconocerlos y verificar por otro canal cualquier pedido de pago urgente es una de las defensas más baratas y efectivas.
:::

## 04 · Uso estratégico de la tecnología

Más allá de mantener los sistemas funcionando, la tecnología puede ser una fuente de ventaja competitiva si se usa con criterio.

- **Automatización** de procesos repetitivos como ventaja de costo y velocidad frente a competidores que lo hacen a mano.
  - Ejemplos: cotizaciones generadas automáticamente, facturación conectada con las ventas, recordatorios de cobranza, conciliación bancaria, respuestas a preguntas frecuentes.
  - El beneficio no es solo ahorrar tiempo: también se reducen los errores humanos y se puede crecer sin contratar en la misma proporción.
- **Datos como activo:** la información que genera tu negocio (ventas, clientes, comportamiento, costos) tiene valor si se usa para decidir.
  - Define qué se mide, dónde se guarda (idealmente en un solo lugar confiable, no en veinte planillas distintas) y quién lo revisa.
  - Un buen reporte responde una pregunta y lleva a una acción. Si un dashboard se mira pero nunca cambia una decisión, es un reporte bonito, no una herramienta.
- **Herramientas de IA** (inteligencia artificial) aplicadas a tareas concretas, evaluadas por retorno real y no por moda.
  - Usos comunes hoy: responder consultas de clientes, redactar borradores (correos, propuestas, publicaciones), resumir documentos, analizar datos, transcribir reuniones.
  - Empieza por una tarea específica que consuma mucho tiempo, mide cuánto se ahorra y la calidad del resultado, y amplía solo si funciona.
  - Cuidado con la información confidencial: revisa qué hace cada herramienta con los datos que le entregas, y verifica siempre lo que produce antes de usarlo, porque puede cometer errores con total seguridad.
