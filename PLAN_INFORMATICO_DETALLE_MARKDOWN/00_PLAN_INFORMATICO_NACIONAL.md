
# **PLAN INFORMÁTICO NACIONAL**

**Versión 4.0 — Septiembre 2026**

República Argentina

**Modelo de Desarrollo Permanente y Sustentable**  
Soberanía Tecnológica para el Desarrollo Nacional

> Este documento está bajo CC0 1.0 (Dominio Público). No se requiere atribución del autor original.
> https://creativecommons.org/publicdomain/zero/1.0/deed.es

# **1\. RESUMEN EJECUTIVO**

El Plan Informático Nacional constituye una estrategia integral de desarrollo tecnológico soberano. Fundamentado en los principios de soberanía nacional, desarrollo con equidad y pleno empleo, este Plan articula cuatro Programas estratégicos orientados a posicionar a la Argentina como potencia informática regional.

La Versión 4.0 actualiza el Plan al estado del arte vigente en **septiembre de 2026**. No altera la doctrina ni la arquitectura de cuatro Programas. Corrige supuestos técnicos de 2025 que han quedado obsoletos: el entrenamiento denso de 200 mil millones de parámetros como bandera, el clúster exclusivo de GPU H100, el razonamiento como entregable de quinto año, y el dispositivo de 4–8 GB de RAM como unidad de soberanía individual.

## **Estructura del Plan**

* **Programa 1:** Inteligencia Generativa Artificial (IGA)  
* **Programa 2:** Blockchain Nacional: Criptomoneda y Financiamiento Soberano  
* **Programa 3:** Dispositivos Portátiles de IA  
* **Programa 4:** Universidad Hacker Nacional

## **Síntesis de Inversión y Empleo**

| Programa | Inversión Total | Empleo Directo | Plazo |
| ----- | ----- | ----- | :---: |
| P1: IGA | USD 920 M | 4.800 | 5 años |
| P2: Blockchain | USD 185 M | 1.250 | 5 años |
| P3: Dispositivos IA | USD 1.680 M | 17.800 | 5 años |
| P4: Universidad Hacker Nacional | USD 335 M | 2.950 | 5 años |
| **TOTAL PLAN** | **USD 3.120 M** | **26.800** | **5 años** |

*Nota: El empleo incluye puestos directos. El reflejo social (empleo indirecto) multiplica por 2.5x estos valores.*

## **Comparación v3.0 - v4.0**

| Dimensión | v3.0 (archivo) | v4.0 (septiembre 2026) |
| ----- | ----- | ----- |
| Inversión total | USD 2.910 M | USD 3.120 M |
| Empleo directo | 25.800 | 26.800 |
| Familia IGA | Denso 7B - 30B - 70B - 200B | IGA-E / S / M / L / F (MoE + destilación) |
| Método de entrenamiento | Pre-entrenamiento desde cero como eje | Vía A: CPT+SFT+RL (años 1–2). Vía B: arquitectura nativa (años 3–5) |
| Capacidades nativas | Razonamiento y visión en años 4–5 | Razonamiento, visión, voz y agentes desde el año 1 |
| Cómputo | Solo H100 | Mixto H100/H200 + B200/GB200 + AMD y aceleradores no estadounidenses |
| Dispositivo | 4–8 GB RAM, 7B a 10–15 tok/s | 16 GB + NPU ≥40 TOPS; IGA-E ≥25 tok/s, IGA-S ≥12 tok/s |
| Consenso P2 | PoUW de entrenamiento en cadena | Liquidación en cadena; trabajo útil fuera de cadena (entrenamiento, inferencia, evaluación, curación) |
| Referentes abiertos | Llama, Mistral, Qwen, DeepSeek-R1 | Qwen 3.5/3.8, DeepSeek V4, Gemma 4, Mistral Large 3; Llama 4 solo como referencia de investigación |
| Frontera cerrada (contexto) | GPT-4 / Claude 3 / Gemini 1.5 | Claude Fable 5.1, GPT-5.6 Sol/Terra/Luna, Gemini 3.8 Flash / 3.1 Pro |
| Pares regionales | Ausentes | Latam-GPT (CENIA, 70B CPT), Soberano 1 (Brasil, 30B), ALIA (España) |

## **Articulación entre Programas**

Los cuatro Programas conforman un ecosistema integrado donde cada componente potencia a los demás: P2 (Blockchain) financia el entrenamiento y la inferencia de P1 (IGA) mediante Proof-of-Useful-Work (Prueba de Trabajo Útil) liquidado en cadena; P1 alimenta a P3 (Dispositivos) con modelos destilados para ejecución local y un runtime de agentes offline; P4 (Universidad Hacker Nacional) forma el capital humano para todos los programas; y P3 democratiza P1 llevando la IA soberana a cada estudiante y trabajador.

# **2\. PRINCIPIOS RECTORES**

El Plan se fundamenta en la continuidad histórica del desarrollo tecnológico nacional, desde las fábricas militares del siglo XIX, pasando por la creación de YPF e YCF, hasta los desarrollos de INVAP, CNEA y CONAE en el siglo XXI.

1. **Soberanía Tecnológica:** Control nacional sobre infraestructura crítica, datos y algoritmos.  
2. **Pleno Empleo:** Cada programa prioriza la generación de trabajo genuino sobre la eficiencia de capital.  
3. **Desarrollo con Equidad:** Distribución equitativa de los beneficios tecnológicos mediante acceso universal.  
4. **Desarrollo Productivo:** Articulación con la economía real y rechazo a modelos rentístico-especulativos.  
5. **Integración Federal:** Despliegue territorial equilibrado con énfasis en economías regionales.

# **3\. CONTEXTO TECNOLÓGICO — SEPTIEMBRE 2026**

## **3.1 Frontera cerrada**

Las APIs corporativas operan con ventanas de contexto de un millón de tokens, razonamiento persistente y evaluación en bancos agenticos (SWE-bench, Terminal-Bench, OSWorld). Al 3 de septiembre de 2026, el trío vigente es Claude Fable 5.1 (Anthropic), GPT-5.6 Sol / Terra / Luna (OpenAI) y Gemini 3.8 Flash / 3.1 Pro (Google). Estas plataformas concentran datos, cómputo y criterio de censura fuera del territorio nacional. El Plan no las imita: las toma como techo de comparación y como amenaza de dependencia.

## **3.2 Pesos abiertos**

La brecha entre modelos de pesos abiertos y la frontera cerrada se redujo a unos seis a nueve meses. Las familias relevantes para soberanía —por licencia y por calidad— son:

* **Qwen 3.5 / 3.8** (Alibaba, Apache 2.0): mejor equilibrio multilingüe y comercial.  
* **DeepSeek V4 y destilados R1** (MIT): mejor razón de razonamiento por dólar.  
* **Gemma 4** (Google, licencia permisiva de uso): MoE compacto, fuerte en borde y matemática.  
* **Mistral Large 3:** licencia europea limpia.  
* **Llama 4 Scout / Maverick** (Meta): ecosistema amplio y contexto extremo (hasta 10M tokens en Scout), pero **licencia comunitaria** con umbral de usuarios y restricciones jurisdiccionales. No se adopta como base nacional.

## **3.3 Práctica de entrenamiento**

En 2026, un Estado de ingreso medio no entrena desde cero un denso de 200B como primer entregable. La vía comprobada es **pre-entrenamiento continuado (CPT)** + **ajuste supervisado (SFT)** + **aprendizaje por refuerzo (RL / GRPO / PPO)** sobre una base permisiva, seguida —cuando hay corpus, tokenizador y clúster propios— de una arquitectura nativa Mixture-of-Experts (MoE). Latam-GPT (CENIA, febrero 2026) recorrió esa vía sobre Llama 3.1 70B con ~300 mil millones de tokens regionales. Brasil desplegó Soberano 1 (30B). España opera ALIA como infraestructura pública en español. Argentina no copia esos proyectos: los supera en **ejecución offline, destilación a dispositivo, cómputo respaldado por energía nacional y licencia soberana**.

## **3.4 Cómputo e inferencia**

La GPU de referencia ya no es solo la H100 (80 GB). La H200 (141 GB) y la B200 / GB200 (192 GB HBM3e, FP4 nativo) cambian el costo por token de los MoE grandes. AMD MI300 / MI350 y aceleradores no estadounidenses cubren el riesgo de control de exportaciones. En el borde, 16 GB de RAM y una NPU de ≥40 TOPS permiten modelos 4–8B (o MoE pequeños) a 20–40 tokens/segundo en GGUF Q4 / ONNX.

## **3.5 Trabajo útil y cadenas**

Las redes de trabajo útil maduras (Bittensor dTAO y subredes, Psyche de Nous Research, Prime Intellect) ejecutan el entrenamiento **fuera de la cadena** y usan la cadena para **liquidación, oráculos y atestaciones**. El PoUW de gradientes puramente on-chain sigue inmaduro. El Programa 2 se alinea con esa arquitectura.

# **4\. PROGRAMA 1: INTELIGENCIA GENERATIVA ARTIFICIAL (IGA)**

## **4.1 Objetivo Estratégico**

Desarrollar y desplegar una familia nacional de modelos —texto, visión, voz y agentes— con foco en español latinoamericano, lenguas originarias (quechua, guaraní, mapudungun) y conocimiento científico-cultural argentino. El programa elimina sesgos anglosajones, publica pesos bajo licencia soberana abierta y garantiza ejecución local sin API extranjera.

## **4.2 Familia de Modelos (septiembre 2026)**

| SKU | Rol | Forma indicativa | Contexto | Dónde corre |
| ----- | ----- | ----- | :---: | ----- |
| **IGA-E** | Borde / P3 | 2–4B denso o MoE mínimo | ≥128K | Dispositivos Estudiante |
| **IGA-S** | Personal | 8–12B o MoE ~3–8B activos | ≥128K | Dispositivos Trabajador / PCs |
| **IGA-M** | Estación de trabajo | ~27–32B o MoE clase Gemma 4 | ≥256K | GPU hogareña / municipio |
| **IGA-L** | Institucional | 70–120B o MoE ~10–20B activos | ≥256K–1M | Estado, hospitales, universidades |
| **IGA-F** | Frontera | MoE 200–400B+, ~17–37B activos | ≥1M | Balseiro / infraestructura crítica |

El denso de 200B deja de ser el entregable insignia. La frontera nacional es un **MoE con pocos parámetros activos**, destilado hacia IGA-E e IGA-S para el Programa 3.

## **4.3 Doctrina de Entrenamiento en Dos Vías**

* **Vía A (Años 1–2, soberanía rápida):** CPT + SFT + RL sobre bases **permisivas** (Apache 2.0 / MIT): Qwen, DeepSeek, Gemma, Mistral. Llama 4 queda como referencia de investigación, no como base del modelo nacional.  
* **Vía B (Años 3–5, IGA nativa):** tokenizador propio (es-AR + lenguas originarias), arquitectura MoE, mid-training sobre corpus nacional de 1+ billón de tokens, destilación IGA-F - IGA-E/S.

Razonamiento, visión, voz y uso de herramientas son nativos desde el Año 1.

## **4.4 Presupuesto y Cronograma**

| Fase | Período | Inversión | Entregable |
| ----- | ----- | ----- | ----- |
| Fundacional (Vía A) | Años 1-2 | USD 230 M | IGA-E, IGA-S, IGA-M + agentes locales |
| Expansión | Años 3-4 | USD 370 M | IGA-L nativo + visión/voz + corpus 800B+ |
| Madurez (Vía B) | Años 4-5 | USD 320 M | IGA-F MoE + destilación a P3 |

# **5\. PROGRAMA 2: BLOCKCHAIN NACIONAL: CRIPTOMONEDA Y FINANCIAMIENTO SOBERANO**

## **5.1 Objetivo Estratégico**

Implementar una Moneda Digital Descentralizada Argentina (MDDA) basada en Proof-of-Useful-Work que: (a) financie entrenamiento, inferencia, evaluación y curación de IGA, (b) aproveche excedentes energéticos (gas quemado en pozos petroleros y renovables), y (c) provea estabilidad financiera mediante tasas dinámicas tipo Reflexer RAI.

**Modelo de Despliegue Descentralizado:** La red será desplegada por privados particulares, organizaciones de la sociedad civil, universidades nacionales y otras entidades autárquicas vinculadas al Estado. El gobierno central solo interviene en investigación, desarrollo y en funciones de referencia: medición del costo del KiloWatt y fijación de tasas de equilibrio.

**Arquitectura 2026:** la cadena liquida incentivos, oráculos, emisión y atestaciones. El trabajo útil (entrenamiento, inferencia, evaluación, curación de datos) corre **fuera de la cadena**. El PoUW de gradientes puramente on-chain no se adopta como diseño principal.

## **5.2 Arquitectura Técnica**

* **Proof-of-Useful-Work (Prueba de Trabajo Útil):** El minero ejecuta tareas publicadas (pasos de entrenamiento, lotes de inferencia, corridas de evaluación o curación). Publica un compromiso criptográfico. Los verificadores comprueban por muestreo. Referencias —no proveedores a adoptar a ciegas—: Bittensor dTAO, Psyche (Nous), Prime Intellect, pruebas de logits.  
* **Control de Emisión:** Sistema híbrido. Variables de mercado (precio del cómputo, dificultad, comisiones) las determina el protocolo. Tasas estratégicas (ganancia objetivo de mineros, techos de emisión) las fija el Plan de Gobierno.  
* **Estabilidad de Precio:** Banco Central Algorítmico tipo Reflexer RAI, oráculos descentralizados, volatilidad objetivo inferior al 3% mensual.  
* **Nodos Nacionales:** IP argentina, mínimo 4 por provincia (≥100 nodos federales), protección anti-proxy.

## **5.3 Integración con Excedente Energético**

El programa aprovecha gas ventilado, eólica, geotérmica, mareomotriz, undimotriz y otras renovables descentralizadas. Ese excedente alimenta generadores locales para minería/entrenamiento/inferencia. Hace más eficiente al sistema energético y viabiliza gasoductos y líneas que de otro modo no se construirían.

## **5.4 Presupuesto**

* **Desarrollo de protocolo y red (Años 1-2):** USD 62 M  
* **Infraestructura de nodos y oráculos (Años 3-4):** USD 82 M  
* **Integración energética y escalado (Años 3-5):** USD 41 M

El aporte de ≥USD 5.000 M en *valor de cómputo* al Programa 1 en 5 años se mantiene como **aspiración**, condicionada a la calidad de la verificación.

# **6\. PROGRAMA 3: DISPOSITIVOS PORTÁTILES DE IA**

## **6.1 Objetivo Estratégico**

Manufacturar dispositivos portátiles nacionales con IA embebida para estudiantes y trabajadores, garantizando soberanía individual sobre datos y procesamiento. Operación 100% offline, sin dependencia de servidores internacionales. Dos SKU: **Estudiante** (IGA-E) y **Trabajador** (IGA-S + RAG local).

## **6.2 Especificaciones Técnicas**

* **Hardware:** Pantalla táctil 8-10", teclado integrado, **16 GB LPDDR**, 256–512 GB almacenamiento, **NPU ≥40 TOPS**, autonomía 12-16 horas.  
* **Software:** Distribución Linux argentina; pila **llama.cpp / GGUF + ONNX-NPU**; agente local (archivos, calculadora, RAG offline, verificación de credenciales P2); reconocimiento de voz y OCR desde el día uno.  
* **Metas de inferencia:** IGA-E ≥25 tok/s; IGA-S ≥12 tok/s.  
* **Privacidad:** Borrado automático de sesiones, persistencia solo explícita, preámbulo configurable, encriptación AES-256.

## **6.3 Modelo Escuela-Fábrica**

Las plantas de ensamblado operarán en escuelas técnicas, universidades nacionales y centros de formación profesional. Fase 1 con 12 plantas piloto, escalando a 35 plantas en Fase 2.

## **6.4 Presupuesto y Producción**

| Fase | Período | Inversión/Año | Producción | Empleo |
| ----- | ----- | ----- | ----- | ----- |
| Fase 1 | Años 1-3 | USD 145 M | 105.000 uds | 8.500 |
| Fase 2 | Años 4-5 | USD 180 M | 550.000 uds | 10.400 |

*Costo BOM: USD 240–280 (Fase 1) y USD 280–330 (Fase 2), por NPU y RAM.*

**Política de Precios Diferenciados:**
* **Estudiantes y trabajadores argentinos:** Acceso universal gratuito, al costo o con subsidio estatal  
* **Socios estratégicos (instituciones públicas, cooperativas, PyMEs):** Precio con descuento  
* **Comercio internacional:** Precio retail completo (USD 449–599), generando excedente para subsidiar acceso nacional

# **7\. PROGRAMA 4: UNIVERSIDAD HACKER NACIONAL**

## **7.1 Objetivo Estratégico**

Crear una red de instituciones de formación superior especializadas en Seguridad Informática (disciplina madre), Inteligencia Generativa Artificial y Protocolos Blockchain Descentralizados. Enfoque práctico orientado a defensa nacional y soberanía digital.

**Perfil del Profesional Generalista:** La Universidad forma técnicos y profesionales generalistas. El egresado domina fundamentos que le permiten abordar seguridad, redes, desarrollo, IA, sistemas embebidos, electrónica, robótica o telecomunicaciones. En 2026, el generalista dirige **agentes** y herramientas de IA porque comprende los fundamentos; el especialista de nicho es el más sustituible.

*Nota: El término "hacker" designa a este técnico generalista comprometido con el bien común. Se distingue del cracker o blackhat. La connotación negativa difundida por los medios es errónea.*

## **7.2 Estructura Curricular**

* **Eje Seguridad:** Criptografía, análisis de vulnerabilidades, respuesta a incidentes, seguridad de infraestructura crítica, seguridad de modelos y datos (envenenamiento, inyección de instrucciones, cadena de suministro).  
* **Eje IGA:** Arquitecturas (incluido MoE), CPT/SFT/RL, evaluación, destilación, ética de IA, MLOps soberano, inferencia consciente del hardware.  
* **Eje Blockchain:** Protocolos de consenso, liquidación versus trabajo fuera de cadena, smart contracts, economía de tokens, auditoría.  
* **Eje Agentes (nuevo en v4.0):** Sistemas de herramientas locales, RAG, orquestación, evaluación agentica.  
* **Prácticas:** Laboratorios integrados con los Programas 1, 2 y 3.

El eje de seguridad se enseña a nivel de principios, laboratorios controlados y defensa de sistemas propios. Este Plan no publica procedimientos de ataque.

## **7.3 Despliegue Territorial**

* **Año 1-2:** 3 sedes piloto (Buenos Aires, Córdoba, Mendoza)  
* **Año 3-4:** Expansión a 8 sedes (incorporando NOA, NEA, Patagonia)  
* **Año 5-6:** Red consolidada de 12 sedes con especialización regional

## **7.4 Presupuesto**

* **Infraestructura física y laboratorios:** USD 157 M  
* **Cuerpo docente y becas:** USD 136 M  
* **Investigación aplicada y contingencias:** USD 42 M

*Meta de egresados: 15.000 profesionales en 5 años.*

# **8\. ARTICULACIÓN ENTRE PROGRAMAS**

La potencia del Plan reside en la sinergia entre sus cuatro Programas:

* **P2 financia P1:** El PoUW liquida en cadena el trabajo útil fuera de cadena (entrenamiento, inferencia, evaluación, curación).  
* **P1 alimenta P3:** Destilación IGA-F/L - IGA-E/S y runtime de agentes offline.  
* **P4 forma para P1, P2, P3:** Capital humano, evaluación y auditoría.  
* **P3 democratiza P1:** Cada estudiante y trabajador ejecuta IA soberana sin nube extranjera.

# **9\. GOBERNANZA Y EJECUCIÓN**

## **9.1 Organismos Ejecutores**

* **INVAP S.E.:** Liderazgo técnico en diseño de dispositivos e integración de sistemas.  
* **CONICET:** Investigación en modelos IGA, curación de corpus, evaluación, post-entrenamiento.  
* **Instituto Balseiro:** Infraestructura de cómputo para CPT, mid-training y IGA-F.  
* **CITEDEF:** Firmware, seguridad, testing de dispositivos y de modelos.  
* **Universidades Tecnológicas Nacionales:** Red de plantas escuela-fábrica.  
* **Empresas privadas habilitadas:** Podrán participar empresas privadas que cumplan al menos uno de los siguientes requisitos durante toda la duración del Plan: (a) participación estatal en su capital, o (b) certificación de capital accionario mayoritariamente nacional (≥51% de titularidad argentina). Esta certificación deberá mantenerse vigente y verificarse anualmente.

## **9.2 Fuentes de Financiamiento**

* Presupuesto Nacional (asignación específica)  
* Fondos de Desarrollo Tecnológico (FONTAR, FONSOFT)  
* Retención de ganancias por ventas de dispositivos al sector público  
* Ganancias por exportación de dispositivos IA a socios comerciales de Argentina  
* Emisión controlada de MDDA (Programa 2)

# **10\. CONCLUSIÓN**

El Plan Informático Nacional v4.0 actualiza la apuesta estratégica por la soberanía tecnológica argentina al estado del arte de septiembre de 2026. Con una inversión de USD 3.120 millones en 5 años y la generación de 26.800 empleos directos, el Plan transforma dependencia tecnológica en desarrollo endógeno, productivo y socialmente justo.

La familia IGA (E/S/M/L/F), el PoUW con liquidación en cadena, el dispositivo de 16 GB con NPU y la Universidad Hacker Nacional configuran un ecosistema autosustentable. Argentina no persigue un denso de 200B para igualar un comunicado de prensa extranjero. Persigue modelos que corran en manos argentinas, con corpus argentino, energía argentina y profesionales argentinos.

## **Glosario de Acrónimos**

| Acrónimo | Significado | Traducción |
| :---: | ----- | ----- |
| IGA | Inteligencia Generativa Artificial | — |
| MDDA | Moneda Digital Descentralizada Argentina | — |
| PoUW | Proof-of-Useful-Work | Prueba de Trabajo Útil |
| LLM | Large Language Model | Gran Modelo de Lenguaje |
| MoE | Mixture of Experts | Mezcla de Expertos |
| CPT | Continued Pre-Training | Pre-entrenamiento continuado |
| SFT | Supervised Fine-Tuning | Ajuste fino supervisado |
| RL | Reinforcement Learning | Aprendizaje por refuerzo |
| NPU | Neural Processing Unit | Unidad de procesamiento neuronal |
| FP4 | 4-bit floating point | Punto flotante de 4 bits |
| GGUF | GPT-Generated Unified Format | Formato unificado de inferencia local |
| RAG | Retrieval-Augmented Generation | Generación aumentada por recuperación |
| BOM | Bill of Materials | Lista de materiales |

*Documento Central del Plan Informático Nacional v4.0*

*República Argentina — Septiembre 2026*

> Este documento está bajo CC0 1.0 (Dominio Público). No se requiere atribución del autor original.
> https://creativecommons.org/publicdomain/zero/1.0/deed.es
