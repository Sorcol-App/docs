---
title: Flujo Jira
description: Este esl el flujo de trabajo de Jira,
---

### Flujo de Trabajo de Tareas en Jira
En Jira, las tareas se gestionarán según el diagrama, lo que permite un seguimiento claro del estado de cada incidencia desde la creación hasta su finalización.

![Diagrama de flujo de trabajo en Jira](/web/public/flujoTrabajoJira.png)

Las etapas clave incluyen:

*Estados:*

- *To Do*: Tareas pendientes por comenzar.
- *In Progress*: Tareas en desarrollo.
- *Blocked*: Estado para tareas bloqueadas que requieren intervención.
- *Ready for Test*: Listo para ser probado.
- *Done*: Tarea completada tras pasar las pruebas.

*Reglas y transiciones:*

- Transiciones entre estados: No se permitirá que una tarea pase a Done si no ha sido revisada previamente.
- Las tareas bloqueadas deben ser desbloqueadas antes de continuar con su desarrollo.
- Los errores detectados durante la fase de pruebas deben regresar a In Progress para ser solucionados.
