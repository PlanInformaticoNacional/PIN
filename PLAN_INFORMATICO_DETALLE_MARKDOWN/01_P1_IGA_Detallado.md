
PLAN INFORMÁTICO NACIONAL

**Versión 4.0 — Septiembre 2026**

# **PROGRAMA 1**

**INTELIGENCIA GENERATIVA ARTIFICIAL (IGA)**

*Soberanía Informativa, Familia MoE y Ejecución Local*

**Documento Detallado de Programa**  
República Argentina

| FICHA TÉCNICA |  |
| :---- | :---- |
| **Inversión Total** | USD 920.000.000 |
| **Plazo de Ejecución** | 5 años |
| **Empleo Directo** | 4.800 puestos de trabajo |
| **Organismos Ejecutores** | CONICET, Instituto Balseiro, INVAP S.E., Universidades Nacionales, empresas privadas habilitadas* |

*\*Empresas privadas habilitadas: con participación estatal o capital accionario mayoritariamente nacional (≥51%) certificado durante toda la duración del Plan.*
| **Entregable Principal** | Familia IGA-E/S/M/L/F con razonamiento, visión, voz y agentes; IGA-F como MoE de frontera (no un denso de 200B) |

> Este documento está bajo CC0 1.0 (Dominio Público). No se requiere atribución del autor original.
> https://creativecommons.org/publicdomain/zero/1.0/deed.es

# **1\. FUNDAMENTACIÓN Y MARCO DOCTRINARIO**

## **1.1 Contexto Estratégico**

Los Grandes Modelos de Lenguaje (LLMs) constituyen la infraestructura cognitiva del siglo XXI. Quien controla los modelos de IA controla la producción de conocimiento, la automatización del trabajo intelectual y, en última instancia, la soberanía informativa de una nación.

Al 3 de septiembre de 2026, las APIs dominantes —Claude Fable 5.1, GPT-5.6 Sol/Terra/Luna, Gemini 3.8 Flash / 3.1 Pro— operan con contexto de un millón de tokens, razonamiento persistente y agentes de largo horizonte. Esas capacidades no están en territorio argentino. Cada consulta gubernamental o educativa a esas APIs exporta datos, criterio y renta.

Los pesos abiertos cerraron la brecha a unos seis a nueve meses: Qwen 3.5/3.8, DeepSeek V4, Gemma 4, Mistral Large 3 y, con licencia más restrictiva, Llama 4 Scout/Maverick. Un Estado que ignore esa oferta y persiga un denso de 200B “desde cero” malgasta presupuesto y tiempo.

Esta dependencia replica formas históricas de subordinación. Los modelos extranjeros desconocen el español rioplatense, las lenguas originarias y el derecho público argentino. El Programa IGA v4.0 responde con una familia nacional, dos vías de entrenamiento y destilación sistemática hacia dispositivos del Programa 3.

## **1.2 Principios Doctrinarios**

* **Soberanía Informativa:** Control nacional sobre datos, algoritmos e infraestructura. Rechazo a APIs extranjeras para funciones cognitivas críticas.  
* **Equidad Epistémica:** Representación del conocimiento argentino y latinoamericano.  
* **Trabajo Genuino:** La IA potencia al trabajador; no lo reemplaza como objetivo de política.  
* **Organización Nacional:** CONICET, universidades, INVAP y Balseiro articulados por objetivos nacionales.  
* **Descentralización Cognitiva:** Los modelos deben ejecutarse en el dispositivo del ciudadano, sin nube ni censura corporativa.  
* **Licencia soberana:** Los pesos nacionales se publican bajo licencia abierta compatible con Apache 2.0 / MIT. No se adopta la Llama Community License como base del modelo de Estado (umbral de usuarios y restricciones jurisdiccionales).

## **1.3 Diagnóstico de Situación (septiembre 2026)**

* **Fortalezas:** Tradición en matemática y computación; Balseiro, FAMAF, CONICET; comunidad de IA; doctrina ya escrita en v3.0.  
* **Debilidades:** Fragmentación; fuga de cerebros; cómputo GPU insuficiente; corpus es-AR aún no industrializado; ausencia de banco de evaluación nacional.  
* **Oportunidades:** CPT + RL sobre bases permisivas; destilación de razonamiento a 2–12B; NPU de borde; pares regionales (Latam-GPT, Soberano 1, ALIA) con los que articular corpus y metodología, no dependencia.  
* **Amenazas:** Monopolios de API; controles de exportación de GPU; lodo sintético en el corpus web; captura de la “IA soberana” por un único proveedor extranjero de pesos.

## **1.4 Posicionamiento frente a pares**

| Iniciativa | País / sede | Método 2026 | Límite que v4.0 no copia |
| ----- | ----- | ----- | ----- |
| Latam-GPT | CENIA (Chile) + 15 países | Llama 3.1 70B + CPT (~300B tokens regionales) + SFT | Base Llama y nube de entrenamiento |
| Soberano 1 | Brasil | LLM 30B para sector público | Escala y ausencia de dispositivo offline de masas |
| ALIA | España / BSC | Infraestructura pública en español y lenguas cooficiales | No es un stack offline + energía + hardware nacional |
| **IGA v4.0** | **Argentina** | **Vía A permisiva + Vía B nativa + destilación a P3 + PoUW energético** | **No persigue un comunicado de 200B densos** |

# **2\. OBJETIVOS DEL PROGRAMA**

## **2.1 Objetivo General**

Desarrollar y desplegar una familia nacional de modelos (texto, visión, voz, agentes), entrenada con corpus argentino y latinoamericano, destilada para ejecución local en dispositivos del Programa 3, y financiada parcialmente mediante la red del Programa 2.

## **2.2 Objetivos Específicos**

1. **Corpus Nacional:** Curar ≥1 billón de tokens (texto, voz, imagen de archivo, código, trazas de razonamiento sintéticas filtradas).  
2. **Vía A (Año 1–2):** Publicar IGA-E, IGA-S e IGA-M por CPT+SFT+RL sobre bases Apache/MIT.  
3. **Vía B (Año 3–5):** Tokenizador nativo y MoE propio hasta IGA-L e IGA-F.  
4. **Destilación:** Transferir capacidades de IGA-F/L hacia IGA-E/S para el Programa 3.  
5. **Agentes locales:** Runtime de herramientas (archivos, cálculo, RAG, credenciales P2) 100% offline.  
6. **Lenguas originarias:** Quechua, guaraní y mapudungun con fine-tuning y evaluación propia, en coordinación con comunidades.  
7. **Capital humano:** Capacitar 600+ investigadores y técnicos en CPT, RL, evaluación e inferencia.  
8. **Evaluación soberana:** Banco argentino de razonamiento, derecho, historia, código y tareas agenticas — no solo MMLU-ES.

# **3\. ARQUITECTURA TÉCNICA**

## **3.1 Familia de Modelos**

| Modelo | Forma indicativa | Contexto | Capacidades nativas | Uso principal |
| ----- | :---: | :---: | ----- | ----- |
| **IGA-E** | 2–4B denso o MoE mínimo | ≥128K | Texto, voz, OCR liviano, agente básico | SKU Estudiante (P3) |
| **IGA-S** | 8–12B o MoE ~3–8B activos | ≥128K | Texto, razonamiento, voz, visión, agente + RAG | SKU Trabajador (P3) / PC |
| **IGA-M** | ~27–32B o MoE clase Gemma 4 | ≥256K | Razonamiento + visión + código | GPU hogareña / municipio |
| **IGA-L** | 70–120B o MoE ~10–20B activos | ≥256K–1M | Multimodal + agentes institucionales | Estado, hospitales, universidades |
| **IGA-F** | MoE 200–400B+, ~17–37B activos | ≥1M | Frontera de razonamiento y destilación | Balseiro / infraestructura crítica |
| **IGA-E-Q / IGA-S-Q** | Mismos, GGUF Q4 / FP4 / ONNX | igual | Inferencia de borde | Dispositivos y NPU |

Un denso de 200B no es el entregable insignia. IGA-F es MoE: el costo de inferencia se acerca al de un modelo mediano.

## **3.2 Capacidades por Tipo (nativas desde el Año 1)**

### **3.2.1 Texto y razonamiento**

* Español argentino (lunfardo, variantes regionales) y portugués de frontera.  
* Quechua, guaraní y mapudungun (fine-tuning y evaluación con comunidades).  
* Historia, geografía, instituciones y normativa argentina.  
* Código (Python, JavaScript, SQL, C) con comentarios en español.  
* Cadena de pensamiento y esfuerzo configurable (bajo / medio / alto), al modo de los modelos de 2026.  
* Inspiración metodológica —no dependencia—: DeepSeek V4 / destilados R1, Qwen 3.5 thinking, Gemma 4.

### **3.2.2 Visión y voz**

* OCR de documentos, manuscritos y formularios en español.  
* Análisis de gráficos, tablas y documentación técnica escaneada.  
* Reconocimiento y síntesis de voz en español rioplatense (Año 1 en IGA-E/S).  
* Integración con cámaras y micrófonos del Programa 3.

### **3.2.3 Agentes locales**

* Uso de herramientas en el dispositivo: sistema de archivos, calculadora, buscador local, RAG sobre documentos del usuario.  
* Verificación offline de credenciales firmadas del Programa 2.  
* Sin telemetría. Sin cuenta. Sin nube.

## **3.3 Optimización para Ejecución Local**

**Niveles de despliegue:**
* **P3 Estudiante:** IGA-E-Q, 16 GB + NPU, ≥25 tok/s.  
* **P3 Trabajador / PC:** IGA-S-Q, 16–32 GB, ≥12 tok/s.  
* **Hogar / municipio:** IGA-M en GPU de 16–24 GB o NPU de estación.  
* **Nodos estatales y de la sociedad civil:** IGA-L / IGA-F en servidores locales.

**Técnicas:**
* Cuantización GGUF Q4_K_M / Q5, FP4/NVFP4 en B200, INT4 en NPU.  
* Destilación de razonamiento (profesor IGA-F/L - alumno IGA-E/S).  
* MoE para costo de inferencia de modelo chico con capacidad de modelo grande.  
* Decodificación especulativa (draft IGA-E, verify IGA-S/M).  
* Formatos: GGUF (llama.cpp), ONNX (NPU), safetensors (entrenamiento).

# **4\. CORPUS NACIONAL DE ENTRENAMIENTO**

## **4.1 Composición del Corpus**

| Categoría | Tokens (MM) | % del Total | Fuentes Principales |
| ----- | ----- | ----- | ----- |
| Literatura argentina | 40.000 | 4% | BN, editoriales, dominio público |
| Producción académica | 120.000 | 12% | CONICET, tesis, revistas |
| Normativa y legislación | 60.000 | 6% | InfoLEG, boletines oficiales |
| Medios periodísticos | 140.000 | 14% | Diarios, revistas, agencias |
| Web argentina (.ar) | 200.000 | 20% | CommonCrawl filtrado + volcados .ar |
| Documentación técnica | 70.000 | 7% | INTI, INTA, manuales |
| Lenguas originarias | 15.000 | 1,5% | Archivos, traducciones, oral |
| Código fuente | 80.000 | 8% | GitHub Argentina, SIU, software público |
| Voz y transcripciones | 50.000 | 5% | Radio, parlamentos, archivos orales |
| Archivo escaneado (visión) | 80.000 | 8% | Archivos nacionales, expedientes liberados |
| Trazas de razonamiento sintéticas | 145.000 | 14,5% | Generadas por IGA-M/L y filtradas |
| **TOTAL** | **1.000.000** | **100%** |  |

El total de v3.0 (500.000 M tokens) se duplica. La categoría nueva crítica es el **filtro de lodo sintético**: clasificadores para expulsar texto generado por IA de baja calidad antes de que contamine el CPT.

## **4.2 Proceso de Curación**

1. **Recolección:** Convenios, digitalización, scraping respetuoso de fuentes públicas.  
2. **Deduplicación:** MinHash, SimHash y similitud semántica.  
3. **Filtrado de calidad y de lodo sintético.**  
4. **Detección de PII:** Anonimización de DNI, domicilios, salud.  
5. **Clasificación temática** para balanceo.  
6. **Validación humana** por lingüistas y expertos de dominio.  
7. **Consentimiento de comunidades** para lenguas originarias.

## **4.3 Lenguas Originarias**

Coordinación con comunidades indígenas y lingüistas:

* **Quechua:** Variante santiagueña y del noroeste.  
* **Guaraní:** Variante correntina; MERCOSUR.  
* **Mapudungun:** Comunidades mapuche, material educativo.

El objetivo no es solo traducción: es comprensión cultural.

# **5\. INFRAESTRUCTURA DE CÓMPUTO**

## **5.1 Requerimientos (mixto 2026)**

El Plan no compra solo H100. Mezcla Hopper (H100/H200) para CPT de Vía A, Blackwell (B200/GB200) para MoE e inferencia FP4, y un piso de AMD MI300/MI350 más aceleradores no estadounidenses contra controles de exportación.

| Trabajo | Hardware de referencia | Tiempo indicativo | Notas |
| ----- | :---: | :---: | ----- |
| CPT IGA-E / IGA-S (Vía A) | 64–128 H100 o 32–64 H200 | 14–30 días | Sobre base abierta |
| CPT IGA-M | 128 H200 o 64 B200 | 21–40 días | |
| Mid-training IGA-L (Vía B) | 256 B200 o 512 H200 | 45–70 días | Tokenizador nativo |
| IGA-F MoE (Vía B) | 256–512 B200 / GB200 | 60–90 días | No es un denso 200B |
| SFT + RL (por SKU) | 16–64 GPU | 7–21 días | GRPO/PPO, preferencias |
| Destilación a borde | 8–32 GPU | 7–14 días | Profesor - alumno |

Las GPU-horas de un denso 200B desde cero se eliminan como línea insignia. El presupuesto se desplaza a post-entrenamiento, evaluación y datos de voz/visión.

## **5.2 Centros de Cómputo**

### **5.2.1 Centro Principal — Instituto Balseiro (Bariloche)**

* **Capacidad:** 128 B200 / GB200 (o equivalente H200) expandible.  
* **Función:** Mid-training IGA-L/F, destilación, FP4.  
* **Ventaja:** Clima frío, Centro Atómico.  
* **Inversión estimada:** USD 300 M (hardware mixto + adecuación, incluye líquido para Blackwell).

### **5.2.2 Centro de Desarrollo — CONICET (Buenos Aires)**

* **Capacidad:** 128 H100/H200.  
* **Función:** Vía A, SFT, RL, evaluación, IGA-E/S/M.  
* **Inversión estimada:** USD 140 M.

### **5.2.3 Centro de Inferencia y Agentes — INVAP (Neuquén)**

* **Capacidad:** 64 H200 + serving + NPU de referencia P3.  
* **Función:** APIs soberanas on-prem, testing de cuantización, puente con Programa 2.  
* **Ventaja:** Vaca Muerta, sistemas críticos.  
* **Inversión estimada:** USD 80 M.

### **5.2.4 Contingencia de proveedores**

* AMD MI300/MI350 para entrenamiento e inferencia.  
* Aceleradores no estadounidenses si hay bloqueo de exportación.  
* Ningún centro depende de un único vendor.

## **5.3 Integración con Programa 2**

Los nodos PoUW ejecutan **fuera de cadena** tareas publicadas: pasos de entrenamiento, lotes de inferencia, corridas de evaluación y curación. La cadena liquida y atestigua. El excedente energético (pozos y renovables) alimenta esos nodos. Los mineros privados sostienen cómputo más allá del presupuesto anual.

# **6\. CRONOGRAMA DETALLADO**

## **6.1 Fase Fundacional — Vía A (Años 1-2)**

**Inversión: USD 230.000.000**

### **Año 1**

* **Q1:** Equipos, convenios, elección de bases Apache/MIT, diseño del banco de evaluación.  
* **Q1-Q2:** Licitación e instalación del clúster CONICET (H100/H200).  
* **Q2-Q3:** Corpus inicial 400B tokens; tokenizador de trabajo; filtro de lodo sintético.  
* **Q3-Q4:** CPT+SFT+RL de IGA-E e IGA-S; runtime de agente local; cuantización GGUF/ONNX.  
* **Q4:** Release IGA-E e IGA-S; piloto en dispositivos P3.

### **Año 2**

* **Q1-Q2:** Ampliación Balseiro (H200 y primeras B200). CPT de IGA-M.  
* **Q2-Q3:** Visión y voz nativas en IGA-S/M. Banco de evaluación v1.  
* **Q3-Q4:** Fine-tuning lenguas originarias (piloto). Release IGA-M.  
* **Q4:** Despliegue en dispositivos piloto del Programa 3.

**Entregable:** IGA-E, IGA-S, IGA-M con agentes; corpus 500B+ curado; evals v1.

## **6.2 Fase de Expansión (Años 2-4)**

**Inversión: USD 370.000.000**

### **Año 3**

* **Q1-Q2:** Tokenizador nativo es-AR + originarias. Inicio Vía B.  
* **Q2-Q3:** Mid-training IGA-L. Corpus 800B+.  
* **Q3-Q4:** Encoder de visión y stack de voz de producción.

### **Año 4**

* **Q1-Q2:** SFT+RL multimodal de IGA-L.  
* **Q2-Q3:** Destilación IGA-L - IGA-E/S de segunda generación.  
* **Q3-Q4:** Release IGA-L. Integración profunda con mercado de tareas P2.

**Entregable:** IGA-L nativo, destilados de borde, lenguas originarias ampliadas.

## **6.3 Fase de Madurez — Vía B (Años 4-5)**

**Inversión: USD 320.000.000**

### **Año 5**

* **Q1-Q2:** Clúster B200/GB200 a régimen. Arquitectura IGA-F MoE.  
* **Q2-Q3:** Mid-training IGA-F sobre 1+ billón de tokens.  
* **Q3-Q4:** RL de frontera, destilación final a P3, documentación, pesos abiertos.

**Entregable:** Familia completa IGA-E/S/M/L/F, destilados de borde, licencia soberana, documentación.

# **7\. PRESUPUESTO DETALLADO**

## **7.1 Distribución por Categoría**

| Categoría | Monto (USD) | % del Total | Años |
| ----- | ----- | ----- | :---: |
| Hardware GPU mixto (H100/H200/B200 + AMD) | 360.000.000 | 39,1% | 1-5 |
| Infraestructura y adecuación (incluye líquido Blackwell) | 120.000.000 | 13,0% | 1-3 |
| Energía eléctrica (operación) | 100.000.000 | 10,9% | 1-5 |
| Personal (investigación, post-entrenamiento, ops) | 180.000.000 | 19,6% | 1-5 |
| Corpus (texto, voz, visión, licencias, digitalización) | 70.000.000 | 7,6% | 1-5 |
| Post-entrenamiento, evaluación y destilación | 50.000.000 | 5,4% | 1-5 |
| Capacitación y becas | 25.000.000 | 2,7% | 1-5 |
| Contingencias | 15.000.000 | 1,6% | 1-5 |
| **TOTAL** | **920.000.000** | **100%** | **5** |

Respecto de v3.0 (USD 850 M), se reasigna presupuesto desde “solo H100 para un denso 200B” hacia datos de voz/visión, RL, evaluación y hardware mixto.

## **7.2 Flujo Anual de Inversión**

| Año 1 | Año 2 | Año 3 | Año 4 | Año 5 |
| :---: | :---: | :---: | :---: | :---: |
| $130M | $160M | $220M | $200M | $210M |

# **8\. INDICADORES DE ÉXITO**

## **8.1 Indicadores Técnicos**

1. **Razonamiento en español:** IGA-M ≥ umbral Latam (CHOCLO/Trueque-class); IGA-L/F competitivos con destilados DeepSeek/Qwen de igual cómputo activo.  
2. **Conocimiento argentino:** ≥90% en banco propio de historia, geografía, derecho e instituciones.  
3. **Código:** LiveCodeBench / SWE-bench (subconjunto soberano) reportado por SKU.  
4. **Agentes:** Tareas ofimáticas offline (archivos + RAG + cálculo) con tasa de éxito publicada.  
5. **Borde:** IGA-E-Q ≥25 tok/s y IGA-S-Q ≥12 tok/s en hardware P3.  
6. **Lenguas originarias:** ≥85% en traducción quechua/guaraní  /  español en sets acordados con comunidades.  
7. **Perplexity / bits-per-byte** en held-out es-AR: mejora monótona por generación (se publica; no se usa MMLU-ES como único número).

## **8.2 Indicadores de Impacto**

8. **Empleo:** 4.800 puestos directos.  
9. **Formación:** 600+ profesionales en CPT, RL, eval e inferencia.  
10. **Publicaciones:** ≥60 papers (NeurIPS, ACL, EMNLP, ICLR) y reportes técnicos abiertos.  
11. **Adopción:** IGA-E/S en 100% de dispositivos P3.  
12. **Soberanía:** Reducción del 80% en APIs extranjeras para aplicaciones gubernamentales.

# **9\. ANÁLISIS DE RIESGOS**

| Riesgo | Probabilidad | Impacto | Mitigación |
| ----- | :---: | :---: | ----- |
| Fuga de talento | Alta | Alto | Salarios, proyectos, estabilidad |
| Restricciones de exportación de GPU | Media | Alto | AMD + aceleradores no US; Vía A sobre bases ya entrenadas |
| Lodo sintético en el corpus | Alta | Alto | Filtros, validación humana, datos permisados |
| Licencia restrictiva de una base | Media | Alto | Solo Apache/MIT como base nacional |
| Obsolescencia de arquitectura | Alta | Medio | Familia versionada; destilación continua |
| Discontinuidad política | Media | Alto | Entregables tempranos (Año 1), CC0, consenso |
| Calidad insuficiente de PoUW | Media | Medio | Tareas de inferencia/eval primero; pretrain distribuido después |

# **10\. ARTICULACIÓN CON OTROS PROGRAMAS**

## **10.1 Con Programa 2 (Blockchain)**

* Mercado de tareas: entrenamiento, inferencia, evaluación, curación.  
* Liquidación y atestaciones en cadena.  
* Emisión MDDA como financiamiento parcial de cómputo.

## **10.2 Con Programa 3 (Dispositivos)**

* Destilación y cuantización a IGA-E/S.  
* Hardware P3 dimensionado para 16 GB + NPU.  
* Runtime de agente y voz/OCR embebidos.  
* Sin telemetría de uso hacia P1.

## **10.3 Con Programa 4 (Universidad Hacker Nacional)**

* Formación en CPT, RL, eval, agentes e inferencia.  
* Prácticas de curación y red-teaming de modelos (defensivo).  
* Tesis articuladas con el banco de evaluación nacional.

# **11\. CONCLUSIÓN**

El Programa IGA v4.0 es el núcleo cognitivo del Plan. Con USD 920 millones en 5 años, Argentina publica una familia soberana que corre en la mano del ciudadano, no en una API de California o Shenzhen.

No se persigue un denso de 200B para un titular. Se persigue Vía A en 24 meses, Vía B nativa después, destilación a borde, evaluación propia y licencia abierta. Esa es la soberanía informativa que el país requiere en septiembre de 2026.

*Programa 1: Inteligencia Generativa Artificial*

*Plan Informático Nacional v4.0 — República Argentina*

> Este documento está bajo CC0 1.0 (Dominio Público). No se requiere atribución del autor original.
> https://creativecommons.org/publicdomain/zero/1.0/deed.es
