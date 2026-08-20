---
title: "OncoRuta Mujer Inteligente: Sistema Preventivo Inteligente de Alert
as Contra el Abandono y Rescate Activo de Pacientes"
description: "Propuesta de gobernanza en salud pública y capa digital intercultural sobrepuesta al INEN e IREN para prevenir el abandono (drop-out) en el tratamiento del cáncer de mama y cuello uterino en el Perú."
pubDate: 2026-03-10
author: "Oriana Yadhira Vértiz Vergara"
tags: ["#SaludPública", "#Gobernanza", "#SaludDigital", "#PolíticasPúblicas"]
---

## 1. El contexto crítico del desgaste emocional en la ruta oncológica
El control del cáncer de mama y de cuello uterino en el Perú representa uno de los desafíos más urgentes para la gobernabilidad de la salud pública. Las brechas estructurales de infraestructura se combinan con severas desigualdades socioeconómicas y geográficas para limitar el acceso real a servicios de salud oportunos. 

El Instituto Nacional de Enfermedades Neoplásicas (INEN), ubicado en Lima como el principal establecimiento de referencia oncológica nacional, centraliza de manera histórica la mayor carga diagnóstica del país. Durante el año 2024, el INEN registró un total de 12,903 casos nuevos de diversas regiones, de los cuales 5,091 correspondieron a neoplasias malignas de mama y de cuello uterino en mujeres de 30 a 65 años. 

Sin embargo, la supervivencia libre de enfermedad en estas pacientes no está limitada únicamente por la complejidad biológica del tumor, sino por una profunda fragmentación administrativa en el circuito que transcurre entre la sospecha oncológica inicial y la confirmación diagnóstica definitiva por biopsia. En esta ventana de tiempo crítica, aproximadamente el 30% de las pacientes abandona la ruta de atención médica.

Este abandono sistemático configura un "viacrucis" físico y emocional. La rigidez de los procesos administrativos y burocráticos exige que la paciente transite de manera presencial por múltiples ventanillas físicas en Lima para obtener un ticket, evaluar su afiliación al SIS/EsSalud y abrir su historia clínica. El horario de entrega de tickets está limitado a ventanas matutinas (6:00 a.m. a 1:00 p.m. para chequeos preventivos y 7:00 a.m. a 4:00 p.m. para sospecha oncológica). Solo el 6.7% de las pacientes logra programar una cita en menos de 24 horas tras la apertura de su historia clínica, obligando al 93.3% restante a esperar varios días o semanas en la capital.

**OncoRuta Mujer Inteligente** se propone como una capa digital de navegación proactiva sobrepuesta al ecosistema del INEN (SISINEN) y los Institutos Regionales de Enfermedades Neoplásicas (IREN). La plataforma busca transformar el seguimiento reactivo tradicional en un acompañamiento dinámico, continuo e intercultural.

---

## 2. Articulación y Descentralización Macroregional con los IREN
Para contrarrestar la extrema centralización de la atención en Lima, OncoRuta se articula como una red digital interoperable conectando directamente al INEN con los tres IREN del país mediante conexiones asíncronas y bases de datos PostgreSQL espejo.

| Instituto Regional | Ubicación Física y Sede | Ámbito de Cobertura Territorial | Volumen y Capacidad Operativa | Realidad Lingüística y Demandas Interculturales |
| :--- | :--- | :--- | :--- | :--- |
| **IREN Norte** | Moche, Trujillo, La Libertad. | La Libertad, Lambayeque, Piura, Cajamarca, Tumbes, Áncash y San Martín. | Centraliza la atención oncológica del norte. Apoyo comunitario de ALINEN Norte y Pacasmayo. | Quechua de Pataz, Quechua Inkawasi-Kañaris y Castellano regional. |
| **IREN Centro** | Provincia de Concepción, Junín. | Junín, Pasco, Huancavelica, Huánuco y Ayacucho. | +35,600 consultas externas y 2,774 hospitalizaciones (2023). 19.15% corresponden a cáncer de cuello uterino. Cuenta con la Casa Refugio Esperanza. | Quechua Wanka, Quechua Chanka y variantes de Asháninka de la Selva Central. |
| **IREN Sur** | Cercado de Arequipa. | Arequipa, Cusco, Puno, Moquegua, Tacna, Apurímac, Ica y Madre de Dios. | ~4,000 pacientes/mes. Alta saturación (15 médicos para ~200 pacientes/día). | Quechua Collao y Aimara altiplánico. |

---

## 3. Adecuación Lingüística y Flujos Interculturales
El sistema implementa una interfaz bilingüe y un sistema de respuesta de voz interactiva (IVR) con locuciones personalizadas:

* **Región Sur (Quechua Collao / Aimara):** Utiliza metáforas basadas en el *ayni* (apoyo recíproco) y el cuidado mutuo familiar para explicar los procedimientos clínicos y reducir la angustia.
* **Región Centro (Quechua Wanka / Asháninka):** Incorpora locuciones en lengua Asháninka para guiar respetando las concepciones locales del pudor corporal e intimidad.
* **Región Norte (Quechua Inkawasi Kañaris / Pataz):** Adapta los mensajes a las particularidades léxicas del quechua norteño.

---

## 4. El Acompañamiento en el Ciclo de Vida
1. **Fase de Tamizaje y Sospecha:** Llamadas de voz automatizadas bilingües sobre preparación previa.
2. **Fase de Confirmación Diagnóstica:** Algoritmos de Procesamiento de Lenguaje Natural (PLN) identifican en tiempo real los resultados de biopsias con alta sospecha para acelerar la pre-reserva de citas.
3. **Fase de Tratamiento Activo:** Alertas automáticas de asistencia y coordinación de traslados/hospedaje.
4. **Fase Paliativa y Soporte al Cuidador:** Acompañamiento domiciliario bajo la Ley N.° 30846, recolección de niveles de dolor, alertas a equipos médicos (ADAMO-MINSA) y prevención del *burnout* del cuidador.

---

## 5. Análisis Multidimensional de Costos y Sostenibilidad Financiera
A pesar de que el SIS y FISSAL cubren los tratamientos de alto costo (como el esquema de Trastuzumab que asciende a S/. 51,502.25), el 25% de las pacientes sufre gasto de bolsillo por barreras logísticas. Con un ingreso familiar mediano de S/. 1,000 mensuales, la estadía en Lima destruye la economía familiar.

| Categoría de Gasto de Bolsillo | Costo Promedio sin OncoRuta | Costo Proyectado con OncoRuta | Mecanismo de Mitigación y Reducción del Gasto |
| :--- | :--- | :--- | :--- |
| **Transporte (Paciente + Acompañante)** | S/. 350.00 – S/. 900.00 por viaje. | S/. 0.00 – S/. 180.00 por viaje. | Coordinación anticipada de pasajes vía SIS/FISSAL antes de iniciar viaje. |
| **Alojamiento y Hospedaje** | S/. 420.00 – S/. 720.00 (6 días). | S/. 0.00. | Derivación directa a red de albergues (ALINEN o Frieda Heller / FPC). |
| **Alimentación y Viáticos** | S/. 270.00 (6 días). | S/. 0.00. | Cobertura completa en la red de albergues integrados. |
| **Pérdida de Ingresos (Lucro Cesante)** | S/. 600.00 – S/. 900.00 / mes. | S/. 180.00 – S/. 270.00 / mes. | Reducción de la estancia hospitalaria en Lima a menos de 24 horas. |
| **Gasto Médico de Bolsillo** | S/. 150.00 – S/. 400.00 por evento. | S/. 0.00. | Detección de desabastecimiento y gestión directa con voluntariados. |

---

## 6. La Ruta del Abandono en Estadios Avanzados
Los albergues intrahospitalarios tradicionales (como ALINEN) solo cubren Estadios I y II debido a limitaciones de espacio. Las pacientes en **Estadios III y IV** enfrentan esquemas prolongados y terminan abandonando por colapso financiero. 

OncoRuta desvía automáticamente a las pacientes con diagnóstico en Estadio III o IV hacia el **Albergue Frieda Heller de la Fundación Peruana de Cáncer (FPC)** o la **Casa Refugio Esperanza (IREN Centro)**, generando a la vez un expediente digital para viáticos extraordinarios del FISSAL (Ley 31041).

---

## 7. Categorías Clínicas en la Plataforma
1. **Preventivo:** Pacientes en tamizaje o espera de biopsia.
2. **Estadio I y II:** Cáncer temprano; elegibles para Albergue ALINEN.
3. **Estadio III y IV:** Cáncer avanzado; enrutamiento prioritario a Albergue Frieda Heller (FPC).
4. **Fase Paliativa:** Control del dolor y soporte integral al cuidador.

---

## 8. Recalibración Matemática del Índice de Riesgo de Abandono (IRA)
OncoRuta calcula diariamente el riesgo de deserción mediante la ecuación:

$$IRA = \left(1 - \frac{C_{\text{asistidas}}}{C_{\text{totales}}}\right) \cdot e^{\alpha \cdot T_{\text{retraso}}} \cdot (1 + V_{\text{geográfica}})$$

### Definición de Parámetros:
* **Adherencia Histórica:** $\left(1 - \frac{C_{\text{asistidas}}}{C_{\text{totales}}}\right)$ evalúa el historial de asistencias a citas críticas.
* **Inasistencia Temporal ($T_{\text{retraso}}$):** Días hábiles acumulados de retraso.
* **Coeficiente de Agresividad Clínica ($\alpha$):** 
  * $\alpha = 0.15$ para Mastología.
  * $\alpha = 0.08$ para Ginecología Oncológica.
  * $\alpha = 0.20$ si PLN detecta términos como *"maligno"*, *"infiltrante"* o *"BI-RADS 4/5"*.
* **Factor de Vulnerabilidad Geográfica ($V_{\text{geográfica}}$):** Medido entre [0.0, 1.0] cruzando tiempo de viaje e índice de pobreza distrital:

$$V_{\text{geográfica}} = \min\left(1.0, \frac{\text{Tiempo de Viaje (horas)}}{12} \cdot 0.6 + \text{Índice Pobreza Distrital} \cdot 0.4\right)$$

---

## 9. Matriz de Clasificación del Riesgo (IRA)

| Rango de Score | Clasificación | Protocolo Gatillado | Acciones de Rescate e Integración |
| :--- | :--- | :--- | :--- |
| **IRA $\ge$ 8.0** | **Riesgo Crítico (Alerta Roja)** | Alerta visible en la consola DASP y llamadas IVR bilingües inmediatas. | Notificación a Trabajo Social (UFTS) para pasajes SIS/FISSAL y hospedaje prioritario. |
| **5.0 $\le$ IRA < 8.0** | **Riesgo Moderado (Alerta Amarilla)** | Programación de SMS interactivos bidireccionales y llamadas IVR bilingües. | Reprogramación asistida por SMS; si no confirma en 48h, interviene facilitador intercultural. |
| **IRA < 5.0** | **Riesgo Bajo (Alerta Verde)** | Incorporación al ciclo estándar de recordatorios informativos. | Envíos periódicos de preparación clínica y contención emocional en su lengua originaria. |

---

## 10. Gobernanza y Alineamiento con el ROF del INEN
* **Jefatura Institucional:** Resoluciones para el "Plan Cero Colas".
* **DISAD / DASP:** Consola web operacional para enfermeras navegadoras.
* **Unidad Funcional de Trabajo Social (UFTS - RJ N.° 323-2020-J-INEN):** Canalización de alertas rojas para pasajes y hospedaje.
* **Oficina de Informática (OI):** Custodia de datos (Directivas 001 y 002-2020-INEN/OGA-OI).
* **Comités Institucionales:** Auditoría continua por el Comité de Gobierno Digital y Comité de Historias Clínicas.

---

## 11. Marco Normativo y Protección de Datos
* **Acreditación SIHCE (RM N.° 164-2025-MINSA & RM N.° 188-2026-MINSA):** Estándares HL7 FHIR e interoperabilidad RENHICE.
* **Firma Digital (NTS N° 139-MINSA/2018/DGAIN & Ley N.° 27269):** Certificados IOFE para el valor probatorio de la Historia Clínica Electrónica.
* **Protección de Datos Sensibles (Ley N.° 29733):** Cifrado TLS 1.3, anonimización para análisis y consentimiento informado digital.
* **Auditoría (RM N.° 170-2026/MINSA):** Logs de auditoría por 5 años y almacenamiento de HCE por 15 años.

---

## 12. Plan de Trabajo para Piloto (3 Meses)

| Mes | Fase | Actividades Clave | Responsables |
| :--- | :--- | :--- | :--- |
| **Mes 1** | Constitución y Codiseño Intercultural | Aprobación del Comité de Ética, talleres con antropólogos y grabación de guiones IVR en Quechua y Aimara. | Jefatura, DASP, Oficina de Informática. |
| **Mes 2** | Integración Técnica y Pruebas | Despliegue de backend (FastAPI, Celery, Redis, PostgreSQL espejo), conexión con SISINEN y calibración del IRA. | OI, DASP, Comité de Historias Clínicas. |
| **Mes 3** | Piloto Operativo y Despliegue Regional | Despliegue en Mastología y Ginecología Oncológica en INEN Lima y transferencia progresiva al IREN Norte. | DASP, UFTS, ALINEN, FPC, IREN Norte. |

---

## 13. Conclusiones
OncoRuta demuestra que reducir el abandono en el tratamiento oncológico no requiere únicamente mayor infraestructura, sino la articulación inteligente, empática e interoperable de los recursos estatales y de la sociedad civil. Al combinar algoritmos predictivos, respeto por la diversidad lingüística y articulación social, la plataforma transforma la burocracia en un acompañamiento humano y eficiente.