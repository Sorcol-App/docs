---
title: Flujo Git
description: Muestra el flujo de trabajo en Git y Git hub
---

## Flujo de Trabajo 

El flujo de trabajo del proyecto se gestionará de forma paralela utilizando Git para el control de versiones y Jira para la administración de tareas e incidencias. A continuación, se describe cómo funcionará cada flujo:

### 1. Flujo de Trabajo en Git
Se seguirá un modelo de desarrollo basado en Git Flow, como se muestra en el diagrama.

´´´mermaid

graph TD
    A[main] -->|Crear rama| B[develop]
    B -->|Nueva funcionalidad| C[feature]
    C -->|Merge| B
    B -->|Preparar versión| D[release]
    D -->|Merge| A
    D -->|Merge| B
    A -->|Corrección urgente| E[hotfix]
    E -->|Merge| A
    E -->|Merge| B
´´´


Las principales etapas incluyen:

*Creación de ramas:*

- *Rama develop*: utilizada como rama principal de desarrollo.
- *Rama feature*: se crea para desarrollar nuevas funcionalidades.
- *Rama release*: destinada a preparar nuevas versiones.
- *Rama hotfix*: para aplicar correcciones urgentes en producción.

*Proceso de integración y commits:*

Cada nueva funcionalidad comienza en una rama feature. Al completarse, se fusiona con develop.
Las correcciones urgentes utilizan ramas hotfix que, una vez aplicadas, se integran tanto en main como en develop.
Las versiones finales pasan por una rama release antes de ser fusionadas en main.
Este flujo garantiza un control detallado sobre los desarrollos, lanzamientos y correcciones en producción.
