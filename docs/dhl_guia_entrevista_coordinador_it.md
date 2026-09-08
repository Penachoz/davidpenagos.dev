# GUÍA DE PREPARACIÓN
## Coordinador IT – ISM | DHL | Cali

**Candidato:** David Alejandro Penagos Valencia  
**Objetivo:** presentar una postulación honesta, defender proyectos reales y cubrir las brechas técnicas críticas antes de una entrevista.

---

# 1. Veredicto de ajuste

## Sí cumples o tienes evidencia cercana

- Estudiante de Ingeniería Informática.
- Resides en Cali.
- Inglés C1, superior al B1 Speaking solicitado.
- Fundamentos de Linux, redes, conectividad y balanceo.
- Laboratorio de soporte de infraestructura con tres máquinas virtuales Ubuntu.
- Pruebas de carga y documentación técnica.
- Respuesta a incidentes y fundamentos de seguridad.
- Experiencia BPO: comunicación, seguimiento y manejo de presión.
- Interés y proyectos de mejora técnica.

## No cumples todavía

- Dos años de experiencia laboral en redes y telecomunicaciones.
- Administración productiva de LAN, WAN y WLAN.
- Soporte directo a switches, routers, access points o firewalls empresariales.
- Experiencia demostrada con SD-WAN.
- Gestión corporativa de backups y pruebas de restauración.
- Inventario y ciclo de vida de activos tecnológicos.
- Uso profesional de una herramienta ITSM/CMDB.
- Coordinación formal de personas, proveedores o proyectos IT.

## Conclusión

Es una postulación de alcance, no una coincidencia directa. Debes aplicar porque formación, ciudad e inglés ayudan y la empresa podría flexibilizar; pero no debes afirmar que cumples el requisito de experiencia. Mantén en paralelo postulaciones a practicante, analista junior, soporte de infraestructura, NOC y cloud support.

---

# 2. Presentación de 60 segundos

> Soy David Alejandro Penagos, estudiante de Ingeniería Informática de la UAO y tengo inglés C1. Estoy orientando mi carrera a infraestructura y operación de servicios. En mi proyecto más relevante construí un laboratorio reproducible con tres máquinas Ubuntu: dos servidores Apache y un balanceador, y validé su comportamiento con pruebas de carga. También he trabajado en documentación de respuesta a incidentes y hardening de permisos Linux. Mi experiencia en BPO me enseñó a comunicarme con usuarios y mantener el seguimiento bajo presión. Sé que aún no tengo dos años formales administrando redes empresariales; por eso no quiero exagerar mi experiencia. Lo que ofrezco es una base técnica verificable, aprendizaje rápido y disciplina para operar bajo procesos y estándares.

## Versión en inglés

> My name is David Penagos. I am a Computer Engineering student at Universidad Autónoma de Occidente, and I have C1 English proficiency. I am building my career in IT infrastructure and service operations. My most relevant project is a reproducible three-VM Ubuntu lab with two Apache backends, an HTTP load balancer, and load testing with Artillery. I have also worked on Linux permission hardening and incident-response documentation. My BPO background strengthened my communication and follow-up under pressure. I do not yet have two years of formal enterprise networking experience, but I can demonstrate solid fundamentals, structured troubleshooting, and a strong ability to learn.

---

# 3. “¿Por qué DHL?”

Respuesta:

> Me interesa DHL porque en logística la infraestructura IT está conectada directamente con la operación: una caída de red afecta inventario, despachos, trazabilidad y servicio al cliente. Me atrae un entorno global con estándares comunes, mejora continua y oportunidades de crecimiento interno. El propósito de conectar personas y mejorar vidas también tiene una traducción técnica concreta: mantener disponibles y protegidos los servicios que permiten mover información y mercancía. Quiero aportar mi base de redes, Linux, documentación e inglés mientras desarrollo experiencia en infraestructura empresarial e ITSM.

No respondas solamente “por el salario” o “porque es una multinacional”.

---

# 4. Cómo hablar de la brecha de dos años

Si preguntan “¿cumples los dos años?”:

> No tengo dos años de experiencia laboral directa administrando redes corporativas. Mi experiencia formal ha sido en BPO y mi experiencia técnica viene de la universidad y de laboratorios propios. Sí puedo demostrar un cluster de tres servidores Ubuntu con balanceo y pruebas de carga, fundamentos de troubleshooting, documentación de incidentes e inglés C1. Entiendo que la experiencia es un requisito importante; por eso quiero ser transparente y mostrar qué puedo ejecutar hoy y cómo cerraría rápidamente las brechas del rol.

Esto puede producir un rechazo, pero protege tu credibilidad. Una mentira sobre VLAN, backups o SD-WAN se descubre en cinco preguntas.

---

# 5. Redes: contenido obligatorio

## Modelo mental

Diagnostica de abajo hacia arriba:

1. Energía, cable, LEDs, interfaz.
2. Enlace y VLAN.
3. Dirección IP, máscara, gateway y DHCP.
4. Ruta y conectividad IP.
5. DNS.
6. Puerto y sesión TCP/UDP.
7. Aplicación.
8. Alcance, impacto y cambios recientes.

## Conceptos

- **LAN:** red local de una sede.
- **WAN:** conecta sedes o redes a larga distancia mediante operadores, Internet, MPLS, VPN o SD-WAN.
- **WLAN:** LAN inalámbrica; SSID, access points, controladores, bandas, canales y seguridad.
- **VLAN:** segmentación lógica de capa 2.
- **Access port:** transporta normalmente una VLAN hacia un dispositivo final.
- **Trunk:** transporta varias VLAN etiquetadas entre equipos.
- **STP:** evita bucles de capa 2.
- **DHCP:** asigna IP, máscara, gateway y DNS.
- **DNS:** traduce nombres; un ping por IP exitoso y por nombre fallido apunta a DNS.
- **NAT:** traduce direcciones privadas/públicas.
- **ACL/firewall:** permite o bloquea tráfico según política.
- **VPN:** túnel cifrado entre usuarios/sedes y una red.
- **Default gateway:** salida hacia otras redes.
- **Latency, jitter, packet loss:** afectan voz, videollamadas y aplicaciones.

## Wi-Fi

- Diferencia entre 2.4 GHz, 5 GHz y 6 GHz.
- Cobertura no equivale a capacidad.
- Interferencia, canales superpuestos, potencia y densidad.
- WPA2/WPA3, autenticación y segmentación de invitados.
- RSSI/señal, roaming y saturación de access points.

## Comandos

Windows:

```text
ipconfig /all
ping
tracert
nslookup
arp -a
route print
netstat -ano
Test-NetConnection
```

Linux:

```text
ip addr
ip route
ping
traceroute
dig / nslookup
ss -tulpn
curl -v
tcpdump
ethtool
journalctl
```

## Secuencia: usuario sin Internet

1. Confirmar si es un usuario, área o sede.
2. Revisar cable/Wi-Fi e interfaz.
3. Validar IP, máscara, gateway y DHCP.
4. Ping a loopback, IP local, gateway y una IP externa.
5. Resolver un dominio para separar DNS de conectividad.
6. Revisar VLAN, puerto de switch, AP, firewall o enlace WAN según alcance.
7. Consultar alertas y cambios recientes.
8. Aplicar workaround seguro o escalar con evidencia.
9. Comunicar estado y documentar solución.

---

# 6. SD-WAN: lo mínimo defendible

No afirmes experiencia práctica. Explica conceptos:

- SD-WAN separa la política/control de la transmisión de datos.
- Usa varios transportes (Internet, MPLS, LTE/5G) y selecciona rutas según política y desempeño.
- **Underlay:** conectividad IP de los proveedores.
- **Overlay:** túneles seguros entre sedes sobre el underlay.
- **Control plane:** distribuye rutas, identidad y políticas.
- **Data plane:** transporta tráfico real.
- Beneficios: gestión centralizada, segmentación, visibilidad, failover y selección dinámica por SLA.

Para troubleshooting:

1. Verificar energía, enlaces y underlay.
2. Confirmar IP, rutas, DNS/NTP y alcance a controladores.
3. Validar certificados/identidad y conexiones de control.
4. Revisar túneles, TLOC/BFD, pérdida, latencia y jitter.
5. Confirmar políticas y rutas del overlay.
6. Capturar evidencia antes de reiniciar.

En Cisco Catalyst SD-WAN se revisan comandos como `show sdwan control connections`, historial de conexiones, rutas, BFD y trazas del plano de datos. Di que conoces el enfoque, no que lo operaste.

---

# 7. ITSM e ITIL

## Diferencias

- **Incidente:** interrupción no planeada o degradación. Objetivo: restaurar rápido.
- **Problema:** causa real o potencial de incidentes. Objetivo: eliminar causa o documentar workaround/error conocido.
- **Solicitud:** petición estándar del usuario, por ejemplo acceso o instalación.
- **Cambio:** adición, modificación o eliminación que puede afectar un servicio. Debe evaluar riesgo, autorización, plan, validación y rollback.

## Priorización

Prioridad = impacto + urgencia.

- **P1:** impacto crítico/masivo; operación detenida.
- **P2:** impacto alto, workaround limitado.
- **P3/P4:** impacto reducido o solicitud no urgente.

La definición exacta depende de la matriz corporativa.

## Flujo de incidente

Detectar → registrar → categorizar → priorizar → diagnosticar → escalar → restaurar → validar con usuario → cerrar → documentar.

En incidente mayor:

- Nombrar coordinador.
- Definir canal único.
- Separar recuperación de análisis de causa.
- Comunicar cadencia y ETA solo con evidencia.
- Crear timeline.
- Hacer postmortem sin culpa y acciones con responsable/fecha.

## Cambio

Todo cambio debe incluir:

- Objetivo y alcance.
- Activos/servicios afectados.
- Riesgo e impacto.
- Ventana y responsables.
- Plan de prueba.
- Plan de rollback.
- Evidencia y revisión posterior.

---

# 8. Backups y continuidad

## Conceptos

- **RPO:** cuánta información se puede perder, medido en tiempo.
- **RTO:** cuánto puede tardar la recuperación.
- **Full:** copia completa.
- **Incremental:** cambios desde el último backup.
- **Differential:** cambios desde el último full.
- **Regla 3-2-1:** tres copias, dos medios, una fuera del sitio.
- Backup exitoso no equivale a recuperación: debe probarse el restore.

## Qué monitorear

- Ejecución y duración.
- Bytes/objetos respaldados.
- Fallos y reintentos.
- Capacidad del repositorio.
- Cumplimiento de retención.
- Cifrado y acceso.
- Última restauración probada.

## Si falla un backup

1. Determinar sistema, alcance y RPO comprometido.
2. Revisar job, credenciales, espacio, red, agente y logs.
3. No borrar la última copia válida.
4. Reintentar según procedimiento.
5. Escalar si se acerca el límite RPO.
6. Validar integridad/restauración.
7. Registrar incidente y causa.

---

# 9. Inventario y activos

Campos mínimos:

- Asset tag y serial.
- Tipo, marca y modelo.
- Usuario/custodio.
- Ubicación.
- Estado y criticidad.
- IP/MAC para activos de red.
- Sistema operativo/software/licencias.
- Fecha de compra, garantía y proveedor.
- Último mantenimiento.
- Fecha y método de disposición.

Ciclo de vida:

Planear → adquirir → recibir → etiquetar → asignar → mantener → transferir → retirar → borrar datos → disponer.

Una CMDB relaciona activos/configuration items con servicios e impacto. No es solo una hoja de cálculo.

---

# 10. Indicadores

- **Disponibilidad:** `(tiempo total - indisponibilidad) / tiempo total × 100`.
- **MTTD:** tiempo medio desde inicio hasta detección.
- **MTTR:** tiempo medio hasta restauración.
- **Cumplimiento SLA:** tickets resueltos dentro del SLA / total × 100.
- **First Contact Resolution:** resueltos en primer contacto / total × 100.
- **Reincidencia:** incidentes repetidos / total.
- **Change success rate:** cambios sin incidente/rollback / total.
- **Backlog aging:** antigüedad de tickets abiertos.
- **Backup success:** jobs exitosos / jobs programados.
- **Exactitud de inventario:** activos verificados / activos registrados.

No mejores un KPI ocultando tickets. Define fuente, fórmula, período, meta y responsable.

---

# 11. Mejora continua

Usa PDCA:

1. **Plan:** definir problema, línea base y causa.
2. **Do:** piloto pequeño.
3. **Check:** comparar KPI antes/después.
4. **Act:** estandarizar o corregir.

Herramientas:

- 5 porqués.
- Diagrama de Ishikawa.
- Pareto.
- Mapa de proceso.
- SIPOC.
- Medición de tiempos.
- Matriz impacto/esfuerzo.

Ejemplo para entrevista:

> En el laboratorio de balanceo identifiqué que el aprovisionamiento manual reducía reproducibilidad. Lo convertí en un entorno definido con Vagrant y scripts, documenté direccionamiento y agregué una prueba repetible con Artillery. La siguiente mejora propuesta es validar configuración en CI y añadir observabilidad. No lo presento como producción, sino como una forma de aplicar estandarización y medición.

---

# 12. Seguridad de infraestructura

- Mínimo privilegio y separación de funciones.
- MFA para administradores.
- Segmentación de red y VLAN de gestión.
- Parches y firmware bajo cambio controlado.
- Backups cifrados e inmutables cuando aplique.
- Logs centralizados y alertas.
- Acceso remoto mediante VPN/ZTNA.
- Credenciales en un gestor de secretos.
- Configuraciones respaldadas y versionadas.
- Inventario y eliminación segura de datos.

Nunca cambies firewall, VLAN, firmware o routing en producción sin autorización, plan de validación y rollback.

---

# 13. Preguntas técnicas probables

## ¿Qué harías si una sede pierde conectividad?

Define alcance, confirma impacto, revisa capa física y energía, valida direccionamiento/gateway, prueba underlay y DNS, revisa alertas/cambios, confirma WAN/SD-WAN, establece workaround, escala al carrier con trazas y comunica periódicamente. Al restaurar, valida servicios críticos y documenta causa/acciones.

## ¿Cómo investigarías Wi-Fi lento?

Separaría cobertura de capacidad: alcance, usuarios afectados, banda/canal, RSSI, interferencia, utilización del AP, DHCP/DNS, pérdida/jitter y backhaul. Compararía cable vs. Wi-Fi, revisaría roaming y evitaría aumentar potencia sin medir.

## ¿Cómo ejecutarías una migración de red?

Inventario y dependencias → diseño y riesgos → piloto → respaldo de configuraciones → ventana → plan de comunicaciones → criterios go/no-go → implementación → pruebas técnicas y de negocio → rollback si falla → actualización documental.

## ¿Cómo asegurarías backups?

Política ligada a RPO/RTO, 3-2-1, cifrado, acceso mínimo, monitoreo diario, retención, copia fuera de sitio/inmutable y restauraciones periódicas documentadas.

## ¿Qué diferencia hay entre incidente y problema?

El incidente busca restaurar el servicio; el problema busca la causa y reducir recurrencia. Un rollback puede cerrar el incidente, pero el problema continúa hasta tratar su causa.

## ¿Cómo priorizas?

Impacto, urgencia, criticidad del servicio, usuarios/sedes afectados, riesgo de seguridad y compromisos SLA. Sigo la matriz corporativa, no preferencia personal.

## ¿Cómo manejarías algo que no sabes?

Protejo el servicio, delimito impacto, recolecto evidencia, consulto documentación/runbooks, pruebo en un entorno seguro, escalo con contexto y documento lo aprendido. No improviso cambios irreversibles.

---

# 14. Preguntas conductuales

Prepara historias STAR reales:

1. **Problema técnico:** cluster Apache/Vagrant.
2. **Análisis bajo presión:** experiencia BPO sin revelar datos.
3. **Aprendizaje autónomo:** Linux, redes o programación competitiva.
4. **Error:** una configuración/laboratorio que falló y cómo cambiaste el proceso.
5. **Mejora:** hacer reproducible y medible un procedimiento.
6. **Trabajo en equipo:** proyecto universitario; especifica tu contribución.
7. **Prioridades simultáneas:** estudio, proyecto y solicitudes.

STAR:

- Situación: contexto breve.
- Tarea: responsabilidad concreta.
- Acción: qué hiciste tú.
- Resultado: resultado verificable y aprendizaje.

No inventes porcentajes. Usa cantidades reales: tres VMs, dos backends, un balanceador, herramientas usadas, documentación entregada.

---

# 15. Preguntas en inglés

Practica en voz alta:

1. Tell me about yourself.
2. Why do you want to work at DHL?
3. Describe a network or infrastructure issue you troubleshot.
4. How would you handle a major incident affecting a warehouse?
5. What is the difference between an incident, a problem, and a change?
6. How do you prioritize multiple support requests?
7. Tell me about a process you improved.
8. What would you do if a backup job failed?
9. How do you communicate technical issues to non-technical users?
10. What are your current technical gaps?

Regla: respuestas de 60–90 segundos, verbo de acción, evidencia y cierre.

---

# 16. Plan de estudio previo a llamada

## Prioridad 1

- Repasar tu CV y cada línea técnica.
- Practicar presentación y “por qué DHL” en español e inglés.
- Networking: IP, subnetting, VLAN, DHCP, DNS, routing, Wi-Fi.
- Defender `modproxy-artillery` sin abrir el README.

## Prioridad 2

- ITSM: incidente, problema, solicitud, cambio, SLA y escalamiento.
- Backup: RPO/RTO, 3-2-1 y restore.
- Inventario/CMDB.
- KPI y mejora continua.

## Prioridad 3

- SD-WAN: underlay/overlay, control/data plane, failover.
- Seguridad y documentación.
- Simulación de los seis escenarios de esta guía.

No intentes memorizar comandos específicos de fabricantes que nunca usaste. Aprende el modelo de diagnóstico.

---

# 17. Preguntas que debes hacer

- ¿Cuál es la unidad de DHL y el alcance de sedes/usuarios?
- ¿Qué porcentaje del rol es hands-on versus coordinación?
- ¿Qué fabricantes de switching, Wi-Fi, firewall y SD-WAN utilizan?
- ¿Cuál es la herramienta ITSM y cómo definen severidades/SLA?
- ¿Existe equipo regional/global de segundo nivel?
- ¿Cómo se miden disponibilidad, MTTR y cambios exitosos?
- ¿Qué proyectos esperan durante los primeros tres meses?
- ¿La vacante admite un estudiante sin dos años formales si demuestra fundamentos?
- ¿Puede formalizarse como práctica profesional mediante convenio con la UAO?

---

# 18. Qué NO decir

- “Sí tengo dos años” si no puedes documentarlos.
- “Manejo SD-WAN” por haber leído una definición.
- “Administré backups” si solo conoces teoría.
- “Soy experto en redes/cloud”.
- “Quiero DHL por el salario”.
- “Puedo con todo porque aprendo rápido” sin evidencia.
- Hablar negativamente de empleadores anteriores.

Sustituye “experto” por “tengo experiencia práctica en…” y “estoy desarrollando…”.

---

# 19. Mensaje corto para aplicar

> Hola. Me interesa la vacante de Coordinador IT – ISM en Cali. Soy estudiante de Ingeniería Informática UAO, tengo inglés C1 y experiencia práctica con Linux, redes, virtualización, Apache, balanceo y documentación de incidentes. Mi experiencia formal no alcanza todavía los dos años solicitados, pero adjunto una hoja de vida dirigida y proyectos verificables. Estoy disponible para conversar sobre el nivel de ajuste o sobre oportunidades junior/práctica en infraestructura IT dentro de DHL.

---

# Fuentes de estudio

- DHL Values: https://careers.dhl.com/global/en/our-values
- DHL Students & Graduates: https://careers.dhl.com/global/en/students-graduates
- ITIL 4 Glossary: https://www.itconcepts.ch/wp-content/uploads/itil4-foundation-glossary-january-2019.pdf
- Cisco SD-WAN Troubleshooting Guide: https://www.cisco.com/c/en/us/td/docs/routers/sdwan/troubleshooting/guide/troubleshooting-guide.html
- Cisco control/data plane troubleshooting: https://www.cisco.com/c/en/us/support/docs/routers/sd-wan/222302-troubleshoot-common-sd-wan-control-and-d.html

## Nota

Esta guía prepara conceptos y comunicación; no sustituye dos años de operación real. Si recibes una prueba técnica, responde únicamente con conocimientos que puedas explicar y ejecutar.
