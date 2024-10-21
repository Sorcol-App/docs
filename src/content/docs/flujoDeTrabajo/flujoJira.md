---
title: Flujo Jira
description: Flujo de trabajo global para el equipo.
---

### Flujo de Trabajo de Tareas en Jira
Las tareas se gestionarán según el diagrama lo que permite un seguimiento claro del estado de cada incidencia desde la creación hasta su finalización. 

- *Nota:* el flujo podría verse eventualmente modificado para que se ajuste a las necesidades particulares del equipo. Sin embargo, es necesario que se presente propuesta de cambios al equipo antes de realizar algún cambio.

![Diagrama de flujo de trabajo en Jira](/src/assets/flujoTrabajoJira.png)

En Jira, el flujo de trabajo tiene 3 componentes clave: estado, transición y resolución.

**Estado:** indica en qué parte del flujo se encuentra la incidencia. En nuestro caso, se tendrán en cuenta las siguientes:

- *Create:* conformado por tareas pendientes en el backlog. Es definido por el Project Manager según los requerimientos de la aplicación.
- *To Do:* tareas asignadas a la épica que se esté desarrollando, según la línea de tiempo. 
- *In Progress:* hace referencia a una tarea en desarrollo sobre la cual se está trabajando activamente.
- *Blocked:* estado para una tarea en progreso en la que se está experimentando un bloqueo y por ende, requiere de alguna gestión o intervención en específico que permita que esta regrese a *In Progress* y continúe el curso del flujo.
- *Ready for Test:* tarea que se entrega para ser probada o evaluada con el fin de recibir feedback, según el tipo de tarea.
- *Error Report*: aplica para una tarea que está en *Ready for Test* e indica que se está presentando un error, por lo cual debe regresar a *In Progress* donde el responsable del desarrollo debe implementar las correcciones.
- *Done:* Tarea completada tras pasar las pruebas.

**Reglas y transiciones:** representan la acción que se toma para hacer que la incidencia pase de un estado a otro. Para ello, hemos definido las siguientes reglas:

1) Es un requerimiento que una tarea tenga un responsable antes de pasar a *In Progress*. Otros miembros del equipo podrán sumarse como colaboradores.
2) Una tarea pasará de *In Progress* a *Bloqued* en los siguientes casos:
- Se trata de una tarea dependiente, es decir, cuando es necesario esperar el trabajo de alguien más.
- Hay un error que se debe solucionar.
- Cambios pendientes en *develop* que bloquean otros desarrollos.
- Se requiere de una ayuda en específico pues no hay claridad en cómo continuar el desarrollo. 
- *Nota 1:* las tareas bloqueadas se deben resolver antes de tomar otra tarea del *To Do*.
- *Nota 2:* es importante tener en cuenta que cuando un bloqueo persiste durante más de una semana, es pertinente buscar ayuda del Líder técnico, de manera que se pueda definir un plan de trabajo o de ser el caso, posponer esa tarea y tomar otra.
3) El encargado de realizar el test a una tarea entregada no será la misma persona responsable del desarrollo de dicha tarea. Sin embargo, en caso de que se presente algún error que deba ser corregido, el responsable del desarrollo implementará las correciones pertinentes.
4) No se permitirá que una tarea pase a *Done* si no ha sido revisada y aprobada previamente por parte del Líder técnico o algún compañero asignado.
5) Los errores detectados durante la fase de pruebas deben regresar a *In Progress* para ser solucionados.

**Resolución:** hace referencia a los criterios para determinar que se ha completado una tarea y por lo tanto, deja de estar abierta. Para este proyecto, la tarea se considerará como resuelta cuando ha sido probada y aprobada.