---
title: Planeación primer MER
description: primer modelo de entidad relacion 
---

# Users (Tabla de usuarios)

    Descripción: Esta tabla almacena la información de los usuarios 

### Atributos
    
    id (PK):
    Tipo: UUID
    Descripción: Identificador único de cada usuario.

    email:
    Tipo: VARCHAR
    Descripción: Correo electrónico del usuario, que se utilizará como 
    nombre de usuario para el inicio de sesión.

    primer_nombre:
    Tipo: VARCHAR
    Descripción: Primer nombre del usuario.

    segundo_nombre:
    Tipo: VARCHAR
    Descripción: Segundo nombre del usuario (opcional).

    apellidos:
    Tipo: VARCHAR
    Descripción: Apellidos del usuario.

    apodo:
    Tipo: VARCHAR
    Descripción: Apodo del usuario, utilizado como un nombre alternativo 
    dentro de la plataforma (opcional).

    username:
    Tipo: VARCHAR
    Descripción: Nombre de usuario único para identificar al usuario dentro 
    de la plataforma.

    pais:
    Tipo: VARCHAR
    Descripción: País de residencia del usuario.

    ciudad:
    Tipo: VARCHAR
    Descripción: Ciudad de residencia del usuario.

    fecha_nacimiento:
    Tipo: DATE
    Descripción: Fecha de nacimiento del usuario.

    fecha_registro:
    Tipo: TIMESTAMP
    Descripción: Fecha y hora en que el usuario se registró en la plataforma. 
    Se genera automáticamente al momento del registro.

    numero_telefono:
    Tipo: VARCHAR
    Descripción: Número de teléfono del usuario (opcional).

    password:
    Tipo: VARCHAR
    Descripción: Contraseña cifrada del usuario para autenticación.

    genero:
    Tipo: VARCHAR
    Descripción: Género del usuario (opcional).

    nivel_inicial:
    Tipo: INTEGER
    Descripción: Nivel inicial del usuario al registrarse en la plataforma.

    nivel_actual:
    Tipo: INTEGER
    Descripción: Nivel actual del usuario en la plataforma, que puede 
    actualizarse a medida que progresa.

### Claves y Restricciones:
Clave primaria (PK): id

Restricciones:

El campo email debe ser único.

El campo username debe ser único.

El campo numero_telefono es opcional, pero si se proporciona debe ser válido.

# Nivel (Tabla de niveles)

    Descripción: Esta tabla almacena información sobre los diferentes niveles dentro 
    de la plataforma, incluyendo el nombre del nivel, la cantidad de módulos asociados, 
    el estado de aprobación y si requiere haber completado un nivel previo.

### Atributos

    id (PK):
    Tipo: UUID
    Descripción: Identificador único del nivel.

    nombre_nivel:
    Tipo: VARCHAR
    Descripción: Nombre que describe el nivel en la plataforma (ej. "Nivel 1").

    cantidad_modulos:
    Tipo: INTEGER
    Descripción: Cantidad de módulos que componen el nivel.

    aprobado:
    Tipo: BOOLEAN
    Descripción: Indica si el nivel ha sido aprobado o completado por un usuario. 
    Valores posibles: true (aprobado) o false (no aprobado).

    nivel_requerido (FK):
    Tipo: UUID
    Descripción: Referencia al identificador del nivel requerido como prerrequisito 
    para acceder a este nivel. Si no hay nivel requerido, puede ser null. 
    autorreferencial a la tabla Nivel

### Claves y Restricciones:

Clave primaria (PK): id

Clave foránea (FK): nivel_requerido, que se refiere a otro registro dentro de la misma tabla Nivel.

### Relaciones:

Relación autorreferencial con la tabla Nivel: Un nivel puede requerir la finalización de otro 
nivel anterior, referenciado por el campo nivel_requerido.


# Unidad (Tabla de unidades)

Descripción: Esta tabla almacena información sobre las diferentes unidades que 
componen un nivel dentro de la plataforma. Cada unidad tiene un tipo específico 
y un número de lecciones asociadas.

### Atributos

    id (PK):
    Tipo: UUID
    Descripción: Identificador único de la unidad.

    nombre_unidad:
    Tipo: VARCHAR
    Descripción: Nombre que describe la unidad (ej. "Alfabeto", "Saludos", "Colores").

    cantidad_lecciones:
    Tipo: INTEGER
    Descripción: Número de lecciones que componen la unidad.

    aprobado:
    Tipo: BOOLEAN
    Descripción: Indica si la unidad ha sido aprobada o completada por un usuario. 
    Valores posibles: true (aprobado) o false (no aprobado).

    tipo_unidad:
    Tipo: VARCHAR o ENUM
    Descripción: Categoría de la unidad, como 
    "alfabeto", "números", "saludos", "colores" o "final".

    nivel_id (FK):
    Tipo: UUID
    Descripción: Referencia al identificador del nivel al que pertenece esta unidad 
    (relación con la tabla Nivel).

### Claves y Restricciones:

Clave primaria (PK): id

Clave foránea (FK): nivel_id, que se refiere al campo id en la tabla Nivel.

### Relaciones:

Relación con la tabla Nivel:
Cada unidad está vinculada a un nivel específico mediante la clave foránea 
nivel_id, lo que establece que las unidades pertenecen a un nivel determinado.









Actividades
seleccion multiple
Verdadero o falso
Relacion

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
