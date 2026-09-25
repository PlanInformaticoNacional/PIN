
PLAN INFORMÁTICO NACIONAL

**Versión 4.0 — Septiembre 2026**

# **PROGRAMA 2**

**BLOCKCHAIN NACIONAL: CRIPTOMONEDA Y FINANCIAMIENTO SOBERANO**

*Moneda Digital Descentralizada Argentina y Proof-of-Useful-Work (liquidación en cadena, trabajo útil fuera de cadena)*

**Documento Detallado de Programa**  
República Argentina

| FICHA TÉCNICA |  |
| :---- | :---- |
| **Inversión Total** | USD 185.000.000 |
| **Plazo de Ejecución** | 5 años |
| **Empleo Directo** | 1.250 puestos de trabajo |
| **Organismos Ejecutores** | BCRA (coordinación), INVAP S.E., Universidades Nacionales, YPF (energía), empresas privadas habilitadas* |

*\*Empresas privadas habilitadas: con participación estatal o capital accionario mayoritariamente nacional (≥51%) certificado durante toda la duración del Plan.*
| **Entregable Principal** | Red blockchain operativa que liquida PoUW: entrenamiento, inferencia, evaluación y curación de IGA |

> Este documento está bajo CC0 1.0 (Dominio Público). No se requiere atribución del autor original.
> https://creativecommons.org/publicdomain/zero/1.0/deed.es

# **1\. FUNDAMENTACIÓN Y MARCO DOCTRINARIO**

## **1.1 Contexto Estratégico**

Las blockchains permiten infraestructura financiera soberana. Bitcoin consume energía en hashes inútiles. Ethereum concentra riqueza en Proof-of-Stake rentístico. Las stablecoins ancladas al dólar perpetúan dependencia.

El Programa 2 propone una Moneda Digital Descentralizada Argentina (MDDA) cuyo trabajo de minería produce valor real: tareas de Inteligencia Artificial del Programa 1.

**Actualización 2026:** las redes de trabajo útil que funcionan (Bittensor con dTAO y subredes, Psyche de Nous Research, Prime Intellect) no entrenan *dentro* del bloque. El entrenamiento, la inferencia y la evaluación ocurren **fuera de la cadena**. La cadena registra puntajes, stake, emisión y liquidación. El PoUW de gradientes puramente on-chain sigue inmaduro y no es el diseño principal de MDDA.

## **1.2 Crítica al Proof-of-Stake Puro y Modelo Híbrido**

* **Modelo rentístico:** El PoS puro recompensa la tenencia, no el trabajo.  
* **Concentración:** En Ethereum, una minoría de actores concentra el stake.  
* **Club cerrado:** Sin capital inicial no hay validación.  
* **Desvinculación productiva:** El staking no produce bienes.

**Modelo Híbrido PoS + PoUW:** El stake es garantía de honestidad. La recompensa principal proviene del trabajo útil verificado (entrenamiento, inferencia, evaluación, curación). Se incentiva el compromiso de largo plazo sin caer en el rentismo.

## **1.3 Principios Doctrinarios**

* **Trabajo como fuente de valor:** La emisión se vincula a trabajo computacional útil.  
* **Soberanía energética:** Excedentes (gas de pozo, eólica, geotérmica, mareomotriz y otras renovables).  
* **Estabilidad con justicia:** Control de precios sin sacrificar al minero-trabajador.  
* **Descentralización nacional:** Nodos federales, anti-dominancia extranjera.  
* **Cadena estrecha:** La cadena no ejecuta el tensor; liquida el tensor.

## **1.4 Integración con el Programa 1 (IGA)**

* Los mineros ejecutan tareas publicadas por P1 (y, más adelante, por terceros nacionales).  
* La MDDA emitida financia más cómputo.  
* Los modelos resultantes se destilan al Programa 3.  
* Energía excedente - soberanía cognitiva.

# **2\. OBJETIVOS DEL PROGRAMA**

## **2.1 Objetivo General**

Implementar una red nacional basada en PoUW que financie IGA, aproveche excedentes energéticos y estabilice el precio de MDDA con mecanismos algorítmicos.

## **2.2 Objetivos Específicos**

1. **Red operativa:** ≥100 nodos, ≥4 por provincia.  
2. **PoUW 2026:** Mercado de tareas fuera de cadena; atestaciones y pago en cadena.  
3. **Canasta de tareas:** Entrenamiento (cuando la verificación lo permita), **inferencia**, **evaluación** y **curación** — las tres últimas están más maduras que el pretrain distribuido.  
4. **Despliegue descentralizado:** Privados, OSC, universidades, autárquicas. El gobierno solo fija referencias (kWh, tasas).  
5. **Estabilidad:** Volatilidad <3% mensual tipo Reflexer RAI.  
6. **Energía:** ≥50 MW de excedente capitalizado.  
7. **Tasa de mineros:** 4–8% anual, inferior a usos productivos de la energía (~10–12%).  
8. **Cómputo a IGA:** Aspiración de ≥USD 5.000 M en *valor de cómputo* en 5 años, **condicionada a la calidad de verificación**.  
9. **Wallets:** Privacidad por diseño y cumplimiento por escalones.

# **3\. ARQUITECTURA TÉCNICA**

## **3.1 Proof-of-Useful-Work (2026)**

### **3.1.1 Separación de capas**

| Capa | Qué hace | Qué no hace |
| ----- | ----- | ----- |
| **Fuera de cadena** | Entrena, infiere, evalúa, cura datos, intercambia gradientes o logits | No escribe tensores en cada bloque |
| **En cadena** | Stake, registro de tareas, atestaciones, emisión, oráculos, slashing | No corre un paso de Adam por transacción |

### **3.1.2 Funcionamiento**

El cliente (P1 u otro) publica una tarea con precio por unidad verificable (iteración, lote de inferencia, ítem de eval, lote de curación). El minero la ejecuta y publica un compromiso (Merkle, prueba de logits o muestreo de mejora de pérdida). Los verificadores muestrean. Si hay consenso positivo, se finaliza el bloque de liquidación y se paga; si no, se penaliza el stake.

### **3.1.3 Referencias (no vendors a adoptar a ciegas)**

* **Bittensor (dTAO, subredes, consenso Yuma):** mercado de inteligencia; la cadena Substrate liquida, el trabajo es off-chain.  
* **Psyche (Nous Research):** entrenamiento asíncrono comprimido; coordinador y clientes.  
* **Prime Intellect / OpenDiLoCo:** pretrain distribuido con comunicación reducida.  
* **Pruebas de logits:** verificación de que se corrió el modelo correcto sin reejecutar todo.

MDDA puede tomar elementos de estos diseños tras auditoría. No se importa un token extranjero como moneda nacional.

### **3.1.4 Ventajas sobre PoW tradicional**

| Aspecto | PoW tradicional | PoUW (MDDA v4.0) |
| ----- | ----- | ----- |
| Trabajo | Hashes | Tareas IGA verificadas |
| Producto | Solo seguridad | Seguridad + modelos, evals y datos |
| Energía | Débil justificación | Producción cognitiva |
| Lugar del cómputo | ASIC inútil | GPU/NPU útil, fuera de cadena |

## **3.2 Mecanismo de Emisión**

### **3.2.1 Parámetros observados (sin intervención)**

* Potencia de red (unidades verificadas / segundo).  
* Precio MDDA (oráculos).  
* Precio de mercado del cómputo.  
* Comisiones.

### **3.2.2 Parámetros híbridos**

* Costo energético por unidad: reporte de nodos + referencia INDEC (o similar) de kWh.

### **3.2.3 Parámetros estratégicos (Plan de Gobierno)**

* Tasa de ganancia objetivo de mineros (4–8%).  
* Límites de emisión anual (0,1%–20%).  
* Coeficiente κ de sensibilidad.

### **3.2.4 Fórmula de Ajuste**

*TasaGanancia = (EmisiónPorBloque + PagosPorTareas + Comisiones) / CostoCómputoPorBloque*

*CostoCómputoPorBloque = (Unidades × CostoEnergéticoPorUnidad) + AmortizaciónHardware*

*δ = κ × (TasaGananciaObjetivo − TasaGananciaObservada)*

*NuevaEmisión = EmisiónActual × (1 + δ)*

### **3.2.5 Períodos de la Red**

| Período | Duración | Ajuste δ | Objetivo |
| ----- | :---: | :---: | ----- |
| **Formación** | 6 meses | ±1% por bloque | 1 MDDA por unidad verificada (canasta de tareas) |
| **Madurez** | Post 6 meses | ±0,1% por bloque | Tasa ganancia 6% anual |

Emisión anual acotada entre 0,1% y 20%.

## **3.3 Estabilización de Precio (Tipo Reflexer RAI)**

RAI no se ancla al dólar. Flota con baja volatilidad vía control automático. MDDA replica:

* Oráculos de precio descentralizados.  
* Precio de redención que evoluciona con la tasa de control.  
* Si mercado > redención - tasa sube - incentiva vender.  
* Si mercado < redención - tasa baja - incentiva comprar.  
* Controlador PID por bloque. Sin intervención humana cotidiana.

## **3.4 Estructura de Nodos**

**Nodo Principal:** entrenamiento/inferencia PoUW (GPU), archivo, oráculo, gateway. Requiere stake.

**Nodo Secundario:** solo archivo, solo gateway, o tareas livianas (eval, curación, inferencia chica). Stake no obligatorio; recompensa menor.

**Nacionalidad:** IP argentina; ≥4 nodos por provincia; detección de proxy/VPN; incentivos a zonas de baja conectividad; operador puede ser anónimo, infraestructura verificablemente nacional.

# **4\. INTEGRACIÓN CON EXCEDENTE ENERGÉTICO**

## **4.1 Fuentes**

* Gas ventilado en pozos (Vaca Muerta y otros).  
* Eólica (Patagonia, costa).  
* Geotérmica (Neuquén, Mendoza).  
* Mareomotriz y undimotriz.  
* Solar, mini-hidro, biogás.

## **4.2 Modelo de Capitalización**

1. Generadores en boca de pozo o junto al parque renovable.  
2. Contenedores con GPU/aceleradores para tareas PoUW.  
3. Enlace de datos (operadores locales; satelital nacional cuando exista; no se depende de un único proveedor extranjero).  
4. El retorno justifica gasoductos y líneas que de otro modo no se hacen.  
5. La minería escala según excedente: no compite con la demanda productiva.

## **4.3 Estimación de Capacidad**

| Parámetro | Estimación |
| ----- | ----- |
| Gas ventilado (Vaca Muerta) | 8–12 millones m³/día |
| Potencia eléctrica equivalente | 80–120 MW |
| Capacidad (H100/H200/B200 equiv.) | 150–250 aceleradores |
| Aporte anual a IGA | 15–25% del cómputo total (si la verificación escala) |
| CO₂ evitado vs flare | 200.000–300.000 ton/año |

## **4.4 Coordinación con YPF**

Acceso a pozos, gas a costo marginal, ESG por menor venteo, electrificación rural como externalidad.

# **5\. ECOSISTEMA DE WALLETS Y TRANSACCIONES**

## **5.0 Smart Contracts (EVM)**

Tokens ERC-20, certificados NFT (títulos, matrículas), gobernanza de cooperativas, escrow, identidad soberana. Comisiones en MDDA.

## **5.1 Principios**

* Privacidad por defecto para el individuo.  
* KYC por escalones: individuo básico sin KYC; comercio con CUIT; corporativo UIF/AFIP; entidades financieras BCRA.  
* Sin impuesto a la tenencia.  
* APIs abiertas.

## **5.2 Tipos de Wallet**

* Básica (estudiantes/trabajadores) en dispositivos P3.  
* Corporativa oficial (multifirma, auditoría).  
* Compatibilidad EVM open-source (MetaMask, Rabby, Frame, Gnosis Safe, Trezor, Ledger).

## **5.3 Comisiones**

Base por bytes; prioridad opcional; bono 10–20% a mineros para evitar bloques vacíos.

# **6\. CRONOGRAMA DETALLADO**

## **6.1 Fase de Desarrollo (Años 1-2)**

**Inversión: USD 62.000.000**

### **Año 1**

* **Q1:** Equipo, especificación: cadena de liquidación + mercado de tareas.  
* **Q2:** Núcleo de consenso híbrido; mercado de inferencia y evaluación (más verificable que el pretrain).  
* **Q3:** Emisión dinámica; testnet interna.  
* **Q4:** Wallets básicas, API de nodos, documentación.

### **Año 2**

* **Q1:** Testnet pública; auditoría externa.  
* **Q2:** Oráculos y RAI.  
* **Q3:** Mainnet (Formación), 20 nodos.  
* **Q4:** 50 nodos; primer puente energético.

**Entregable:** Mainnet, 50+ nodos, wallets, canasta de tareas de inferencia/eval operativa.

## **6.2 Fase de Infraestructura (Años 2-4)**

**Inversión: USD 82.000.000**

### **Año 3**

* Piloto 5 contenedores YPF. Oráculos. 100 nodos federales. Madurez.

### **Año 4**

* 20 contenedores. Tareas de entrenamiento P1 cuando la verificación lo permita. Wallets comercial e institucional.

**Entregable:** 100+ nodos, 20 contenedores, wallets completas.

## **6.3 Fase de Escalado (Año 5)**

**Inversión: USD 41.000.000**

* 40+ contenedores; ≥50 MW; UX; evaluación de impacto.

**Entregable:** Red madura, estabilidad demostrada, informe de valor de cómputo *efectivamente verificado* (no el techo aspiracional).

# **7\. PRESUPUESTO DETALLADO**

## **7.1 Distribución por Categoría**

| Categoría | Monto (USD) | % del Total | Años |
| ----- | ----- | ----- | :---: |
| Desarrollo de protocolo | 36.000.000 | 19,5% | 1-2 |
| Infraestructura de nodos | 28.000.000 | 15,1% | 2-5 |
| Contenedores minería energética | 46.000.000 | 24,9% | 3-5 |
| Red de oráculos | 12.000.000 | 6,5% | 2-4 |
| Personal (desarrolladores, ops) | 33.000.000 | 17,8% | 1-5 |
| Desarrollo de wallets | 11.000.000 | 5,9% | 1-4 |
| Auditorías y seguridad | 10.000.000 | 5,4% | 1-5 |
| Contingencias | 9.000.000 | 4,9% | 1-5 |
| **TOTAL** | **185.000.000** | **100%** | **5** |

## **7.2 Flujo Anual de Inversión**

| Año 1 | Año 2 | Año 3 | Año 4 | Año 5 |
| :---: | :---: | :---: | :---: | :---: |
| $29M | $33M | $46M | $43M | $34M |

# **8\. INDICADORES DE ÉXITO**

## **8.1 Indicadores Técnicos**

1. ≥100 nodos, ≥4 por provincia.  
2. Uptime ≥99,5%.  
3. ≥100 transacciones por segundo.  
4. Latencia de bloque <60 s.  
5. Volatilidad de precio <3% mensual en Madurez.  
6. ≥70% de las unidades pagadas corresponden a tareas *verificadas* (no auto-reporte).

## **8.2 Indicadores de Impacto**

7. 1.250 empleos directos.  
8. Valor de cómputo verificado publicado anualmente; la meta de USD 5.000 M es techo aspiracional.  
9. ≥50 MW de excedente.  
10. 200.000+ t CO₂ evitadas vs flare.  
11. ≥50.000 wallets activas al Año 5.  
12. Tasa de mineros en 4–8%.

# **9\. COMPARACIÓN CON OTRAS REDES**

| Variable | Bitcoin | Ethereum | Bittensor | MDDA v4.0 |
| ----- | :---: | :---: | :---: | :---: |
| Consenso | PoW | PoS | Yuma + dTAO | **Híbrido PoS+PoUW** |
| Trabajo útil | No | No | Sí (subredes, off-chain) | **Sí (IGA nacional)** |
| Moneda | BTC | ETH | TAO (extranjera) | **MDDA soberana** |
| Control emisión | Halving | Variable | Mercado de subredes | **Tasa de ganancia** |
| Estabilidad de precio | Baja | Baja | Baja | **Alta (RAI)** |
| Anclaje territorial | No | No | No | **Nodos argentinos** |

# **10\. ARTICULACIÓN CON OTROS PROGRAMAS**

## **10.1 Con Programa 1**

Mercado de tareas IGA; pago en MDDA; informe anual de cómputo verificado.

## **10.2 Con Programa 3**

Credenciales firmadas verificables offline; wallet básica en el dispositivo; sin identidad almacenada en el aparato (riesgo de robo).

## **10.3 Con Programa 4**

Formación en protocolos, auditoría, criptografía; nodos en sedes; tesis sobre verificación de trabajo útil.

# **11\. CONCLUSIÓN**

MDDA v4.0 no finge que un bloque pueda entrenar un MoE. Separa liquidación y trabajo. Convierte excedente energético en cómputo cognitivo. Mantiene la doctrina: el trabajo útil —no el encaje rentístico— es la fuente de valor.

Con USD 185 millones en 5 años y 1.250 empleos directos, el programa sostiene a IGA más allá del ciclo presupuestario y ofrece a la población una red de pagos descentralizada, con el Estado limitado a funciones de referencia.

*Programa 2: Blockchain Nacional: Criptomoneda y Financiamiento Soberano*

*Plan Informático Nacional v4.0 — República Argentina*

> Este documento está bajo CC0 1.0 (Dominio Público). No se requiere atribución del autor original.
> https://creativecommons.org/publicdomain/zero/1.0/deed.es
