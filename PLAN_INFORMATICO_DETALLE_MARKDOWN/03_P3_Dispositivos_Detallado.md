
PLAN INFORMÁTICO NACIONAL

**Versión 4.0 — Septiembre 2026**

# **PROGRAMA 3**

**DISPOSITIVOS PORTÁTILES DE INTELIGENCIA ARTIFICIAL**

*Soberanía Individual, 16 GB + NPU, Agente Local Offline*

**Documento Detallado de Programa**  
República Argentina

| FICHA TÉCNICA |  |
| :---- | :---- |
| **Inversión Total** | USD 1.680.000.000 |
| **Plazo de Ejecución** | 5 años |
| **Empleo Directo** | 17.800 puestos de trabajo (industria terminal + proveedores) |
| **Reflejo Social (indirecto)** | 44.500+ puestos adicionales |
| **Producción Total** | 655.000 dispositivos en 5 años |
| **Organismos Ejecutores** | INVAP S.E., CITEDEF, UTN, Escuelas Técnicas Nacionales, empresas privadas habilitadas* |

*\*Empresas privadas habilitadas: con participación estatal o capital accionario mayoritariamente nacional (≥51%) certificado durante toda la duración del Plan.*
| **Entregable Principal** | Dos SKU nacionales (Estudiante / Trabajador) con IGA-E o IGA-S, NPU ≥40 TOPS, operación 100% offline |

> Este documento está bajo CC0 1.0 (Dominio Público). No se requiere atribución del autor original.
> https://creativecommons.org/publicdomain/zero/1.0/deed.es

# **1\. FUNDAMENTACIÓN Y MARCO DOCTRINARIO**

## **1.1 Contexto Estratégico**

Cada consulta a Claude, GPT-5.6 o Gemini envía datos a centros extranjeros. El Programa 3 propone lo contrario: el modelo corre en la mano del usuario.

v3.0 especificaba 4–8 GB de RAM y un 7B a 10–15 tok/s. En septiembre de 2026 eso es insuficiente. Los destilados de razonamiento de 2–12B, GGUF Q4 y las NPU de ≥40 TOPS permiten IGA-E a ≥25 tok/s e IGA-S a ≥12 tok/s en **16 GB**. El dispositivo v4.0 se dimensiona para ese piso, no para el de 2025.

## **1.2 Principios Doctrinarios**

1. **Soberanía Individual:** El usuario es dueño del aparato, los datos y la IA.  
2. **Privacidad por Diseño:** Sesiones efímeras; persistencia solo explícita.  
3. **Autonomía Operativa:** 100% offline. Internet es opcional.  
4. **Trabajo como Eje:** Escuela-fábrica.  
5. **Descentralización Productiva:** Plantas federales.

## **1.3 Rechazo al Modelo Centralizado**

* Sin cuenta obligatoria.  
* Sin sincronización automática.  
* Sin telemetría.  
* Sin obsolescencia programada. Diseño modular.

## **1.4 Población Objetivo**

Estudiantes técnicos y universitarios, trabajadores del Estado, investigadores CONICET, ciudadanía general.

# **2\. OBJETIVOS DEL PROGRAMA**

## **2.1 Objetivo General**

Manufacturar dispositivos nacionales que ejecuten IGA-E / IGA-S del Programa 1, con agente local, voz y OCR, sin nube.

## **2.2 Objetivos Específicos**

1. Fase 1: 105.000 unidades (Años 1–3), componentes mixtos.  
2. Fase 2: 550.000 unidades (Años 4–5), 80%+ nacional.  
3. 35 plantas escuela-fábrica.  
4. SKU Estudiante (IGA-E) y SKU Trabajador (IGA-S + RAG local).  
5. Verificación offline de credenciales P2.  
6. 80%+ de componentes nacionales en Año 5.  
7. Retail USD 449–599 (subsidio interno vía exportación).  
8. 17.800 empleos directos.

# **3\. ESPECIFICACIONES TÉCNICAS**

## **3.1 Hardware**

| Componente | Especificación v4.0 |
| ----- | ----- |
| Pantalla | Táctil 8–10", mín. 1400×1050, IPS |
| Procesador Fase 1 | SoC ARM importado + **NPU ≥40 TOPS** |
| Procesador Fase 2 | CPU/NPU nacional (Plan Electrónico) |
| Memoria RAM | **16 GB LPDDR5X** (piso; no 4–8 GB) |
| Almacenamiento | **256–512 GB** UFS/NVMe, expandible microSD |
| Teclado | Integrado desmontable + USB-C / Bluetooth |
| Conectividad | Wi-Fi 6E/7, Bluetooth 5.3, USB-C (×2) |
| Batería | 12–16 h, USB-C PD |
| Cámara | Frontal 5 MP, trasera 8 MP (documentos / OCR) |
| Audio | Micrófono dual ANC, altavoces estéreo |
| Chasis | Nacional, modular, reparable |

## **3.2 Software**

### **3.2.1 Sistema Operativo**

Distribución Linux argentina (Debian/Ubuntu). Escritorio liviano táctil. Español argentino por defecto; lenguas originarias. Actualizaciones opcionales, nunca forzadas.

### **3.2.2 Pila de IA (septiembre 2026)**

* **Runtime:** llama.cpp / GGUF + ONNX Runtime para NPU.  
* **Modelos:** IGA-E-Q (Estudiante), IGA-S-Q (Trabajador).  
* **Metas:** IGA-E ≥25 tok/s; IGA-S ≥12 tok/s.  
* **Voz y OCR:** Nativos desde el Año 1 (no “Fase 2 visión”).  
* **Agente local:** Archivos del usuario, calculadora, RAG sobre carpeta elegida, verificación de firmas P2. Sin red.

### **3.2.3 Interfaz Web Local**

Servidor en http://dispositivo.local:8080. El procesamiento no sale de la LAN.

## **3.3 Dos SKU**

| | **Estudiante** | **Trabajador** |
| ----- | ----- | ----- |
| Modelo | IGA-E-Q | IGA-S-Q |
| RAM / NPU | 16 GB / ≥40 TOPS | 16 GB / ≥40 TOPS (misma placa; más peso de modelo) |
| RAG local | Opcional | Predeterminado (carpeta de trabajo) |
| Destino | Escuelas técnicas, UN | Estado, CONICET, PyME, oficios |

# **4\. ARQUITECTURA DE PRIVACIDAD**

## **4.1 Cero Memoria Automática**

Sesiones efímeras. Sin historial. Si se pierde el aparato, no hay conversaciones extraíbles.

## **4.2 Preámbulo Configurable**

Nombre de la IA, valores, atributos del usuario, tono, especialidades. Sugerencias que exigen confirmación explícita. El preámbulo nunca se sincroniza a un servidor.

## **4.3 Seguridad ante Pérdida o Robo**

| Escenario | Protección |
| ----- | ----- |
| Pérdida | Conversaciones ya borradas; solo Preámbulo si fue guardado |
| Robo | Sin historial; cifrado AES-256 de lo persistido |
| Red | Procesamiento local; cero telemetría |
| Backup | No hay backup automático |

Borrado seguro al cerrar sesión. Borrado remoto opcional, definido por el usuario.

# **5\. MODELO ESCUELA-FÁBRICA**

## **5.1 Concepto**

Plantas dentro de escuelas técnicas, UTN y centros de formación. El estudiante produce y se forma.

## **5.2 Infraestructura**

**Fase 1 (Años 1–3):** 12 escuelas + 1 UTN; PBA, Córdoba, Santa Fe.

**Fase 2 (Años 4–5, con horizonte a 8):** 25 escuelas + 3 UTN + 7 CFP en Cuyo, NOA, Patagonia = 35 plantas.

## **5.3 Beneficios**

Formación práctica, inserción, descentralización, desarrollo regional, cultura productiva.

# **6\. FASES DE PRODUCCIÓN Y COMPONENTES**

## **6.1 Fase 1 (Años 1-3)**

| Componente | Inversión/Año | Origen | Empleo |
| ----- | ----- | :---: | ----- |
| SoC ARM + NPU ≥40 TOPS | USD 22M | Importado | 850 |
| Memoria RAM 16 GB | USD 16M | Importado | 580 |
| Almacenamiento 256–512 GB | USD 16M | Importado | 650 |
| Display táctil | USD 24M | Importado | 1.072 |
| Teclado + periféricos | USD 12M | **Nacional** | 535 |
| Batería | USD 10M | **Nacional** | 447 |
| Conectividad (Wi-Fi 6E/7) | USD 8M | Importado | 357 |
| Chasis/Estructura | USD 8M | **Nacional** | 357 |
| Software (SO, GGUF, ONNX, agente) | USD 16M | **Nacional** | 680 |
| Ensamblado y QA | USD 13M | **Nacional** | 560 |
| **TOTAL FASE 1 (por año)** | **USD 145M** | **Mixto** | **6.088** |

*Producción Fase 1: 20.000 + 35.000 + 50.000 = 105.000*

## **6.2 Fase 2 (Años 4-5)**

| Componente | Inversión/Año | Origen | Empleo |
| ----- | ----- | :---: | ----- |
| Placa base nacional | USD 18M | **Nacional** | 750 |
| CPU/NPU nacional | USD 22M | **Nacional** | 880 |
| Memoria RAM nacional | USD 14M | **Nacional** | 560 |
| Almacenamiento nacional | USD 16M | **Nacional** | 650 |
| Display táctil nacional | USD 24M | **Nacional** | 1.072 |
| Resto componentes nacionales | USD 50M | **Nacional** | 2.100 |
| Software + modelos IGA-E/S | USD 20M | **Nacional** | 800 |
| Ensamblado y QA | USD 16M | **Nacional** | 680 |
| **TOTAL FASE 2 (por año)** | **USD 180M** | **80%+ Nac.** | **7.492** |

*Producción Fase 2: 150.000 + 400.000 = 550.000*

# **7\. PRECIOS Y MERCADO**

## **7.1 Costos y Precios**

| Fase | BOM Unitario | Precio Retail | Estrategia |
| ----- | :---: | :---: | ----- |
| Fase 1 | USD 240–280 | USD 449–529 | Introducción |
| Fase 2 | USD 280–330 | USD 529–599 | NPU/RAM nacionales |

El alza de BOM respecto de v3.0 (USD 210–300) cubre 16 GB y NPU. El retail se mantiene accesible por subsidio cruzado de exportación.

## **7.2 Demanda Inicial (Años 1-3)**

Escuelas técnicas 15.000; universidades 8.000; investigación 5.000; sector público piloto 10.000; resto venta al público.

## **7.3 Exportación Regional (Año 4+)**

MERCOSUR y UNASUR. Ventaja: IA en español latinoamericano, offline, agente local, precio de franja media.

# **8\. CRONOGRAMA DETALLADO**

## **8.1 Año 1**

Meses 1–4: diseño y licitación (NPU, 16 GB). Meses 5–9: 12 plantas, instructores. Meses 10–12: 20.000 unidades, IGA-E-Q.

## **8.2 Años 2-3**

Año 2: 35.000, IGA-S-Q en SKU Trabajador, voz/OCR. Año 3: 50.000, venta pública, credenciales P2 offline.

## **8.3 Años 4-5**

Año 4: componentes del Plan Electrónico; 150.000. Año 5: 35 plantas, 400.000, 80%+ nacional, wallet MDDA, exportación.

# **9\. PRESUPUESTO CONSOLIDADO**

## **9.1 Inversión por Categoría**

| Concepto | Monto (USD) |
| ----- | ----- |
| Infraestructura de plantas | 220.000.000 |
| Componentes y ensamblado | 1.150.000.000 |
| I+D software, NPU, agente, modelos de borde | 160.000.000 |
| Capacitación escuela-fábrica | 70.000.000 |
| Contingencias | 80.000.000 |
| **TOTAL** | **1.680.000.000** |

## **9.2 Inversión por Fase**

| Concepto | Fase 1 (Años 1-3) | Fase 2 (Años 4-5) | Total |
| ----- | ----- | ----- | ----- |
| Infraestructura de plantas | USD 130M | USD 90M | USD 220M |
| Componentes y ensamblado | USD 520M | USD 630M | USD 1.150M |
| I+D software, NPU, agente | USD 70M | USD 90M | USD 160M |
| Capacitación escuela-fábrica | USD 40M | USD 30M | USD 70M |
| Contingencias | USD 40M | USD 40M | USD 80M |
| **TOTAL** | **USD 800M** | **USD 880M** | **USD 1.680M** |

La tabla de categorías (sección 9.1) es la que rige: 220 + 1.150 + 160 + 70 + 80 = 1.680.

# **10\. INDICADORES DE ÉXITO**

## **10.1 Producción**

1. 655.000 dispositivos.  
2. Defectos <2%.  
3. 80%+ nacional en Fase 2.  
4. 35 plantas.

## **10.2 Impacto**

5. 17.800 empleos directos; 44.500+ indirectos.  
6. 5.000+ estudiantes en escuela-fábrica.  
7. 100% escuelas técnicas cubiertas.  
8. Satisfacción >85%.

## **10.3 Soberanía y desempeño**

9. 0% APIs externas para inferencia.  
10. 0 bytes de telemetría.  
11. IGA-E/S en 100% de unidades.  
12. IGA-E ≥25 tok/s; IGA-S ≥12 tok/s en QA de fábrica.  
13. Credenciales P2 offline desde Año 3.  
14. Agente local operativo sin red en 100% de unidades.

# **11\. ARTICULACIÓN CON OTROS PROGRAMAS**

## **11.1 Con Programa 1**

IGA-E-Q e IGA-S-Q preinstalados. Nodos comunitarios con IGA-M/L. Actualizaciones de pesos opcionales, en mano del usuario.

## **11.2 Con Programa 2**

Verificación offline de títulos y matrículas. Wallet básica. Sin claves de identidad residentes en el aparato.

## **11.3 Con Programa 4**

Dispositivos para alumnos. Drivers, ONNX, agente y SO como practicum. Auditoría de firmware.

# **12\. SUSTENTABILIDAD Y AMBIENTE**

Modular, derecho a reparar, acopio nacional, 10+ años de software, auditoría ambiental de proveedores. Rechazo a la obsolescencia programada.

# **13\. CONCLUSIÓN**

El Programa 3 v4.0 pone en la mano de cada argentino un aparato que, en 2026, sí puede correr un destilado de razonamiento con voz, OCR y agente, sin nube. 16 GB y NPU no son lujo: son el piso de soberanía individual.

USD 1.680 millones, 655.000 unidades, 17.800 empleos directos, escuela-fábrica. Tecnología que sirve a la ciudadanía, no que la vigila.

*Programa 3: Dispositivos Portátiles de Inteligencia Artificial*

*Plan Informático Nacional v4.0 — República Argentina*

> Este documento está bajo CC0 1.0 (Dominio Público). No se requiere atribución del autor original.
> https://creativecommons.org/publicdomain/zero/1.0/deed.es
