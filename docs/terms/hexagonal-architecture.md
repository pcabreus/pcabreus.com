---
title: Hexagonal Architecture
keywords: architecture, pattern, hexagonal
related: clean-architecture.md
state: todo
---


https://apiumhub.com/es/tech-blog-barcelona/aplicando-arquitectura-hexagonal-proyecto-symfony/

# Architectura Hexagonal

Separa la aplicación en distintas capas o regiones con su propia responsabilidad.
Permite que una aplicación pueda ser usada de la misma forma por usuarios, programas, pruebas automatizadas o scripts.
Permite ser desarrollada y probada de forma aislada de su infraestuctura a la hora de ejecución.

La Arquitectura Hexagonal propone que nuestro dominio sea el núcleo de las capas y que este no se acople a nada externo. En lugar de hacer uso explícito y mediante el principio de inversión de dependencias nos acoplamos a contratos (interfaces o puertos) y no a implementaciones concretas.

## Conceptos

### Actores

Los actores primarios utilizan el sistema para ejecutar una acción, mientras que los actores secundarios son los que el sistema utiliza para conseguirlo.
    
    > Un adaptador primario es una pieza de código entre el usuario y el centro de la lógica. Un adaptador puede ser una función de la prueba unitaria para el centro de la lógica

### Dominio

Modelo conceptual.

### Adaptadores

*Adaptadores primarios:* puntos entradas y salida que se comunican con el cliente, con el exterior. Estos adaptadores usan, y no implementan, los puertos primarios para acceder al core lógico de la aplicación.
    
    > Controladores, comandos, Sockets, Workers
    
*Adaptadores secundarios*: Implementación de los puertos secundarios. 
    
    > base de datos, caché, otros microservicios o sistemas en red.
    
### Puertos

*Puertos primarios:* Capa de servicio, de lógica y negocio. Usa objeto de dominio.
    
    > Factory, Processor, Manager
    
*Puertos secundarios:* Interfaces a implementar por los adaptadores para realizar tareas externas con los objetos de dominio. Son usados por objetos del dominio.
    
    > RepositorioInterface, Storage, Client, 

## Ventajas

- Se pueden testear las capa independiente de las externas, falseando el comportamiento de estas otras.
- La aplicación puede esencialmente ser dirigida por cualquier número de controles distintos
- Puedes desarrollar el interior del centro de la aplicación mucho antes que empieces a pensar sobre el tipo de base de datos que vas a utilizar
- Independiente a servicios externos
- Mas fácil de testear de manera individual
- Los puertos y adaptadores son reemplazables
- Separación de las diferentes tasas de cambio para componentes externos
- Alto [matenimiento](technical-dept.md), Cambios en una área de la aplicación no afectan a otras


## Lecturas

https://openwebinars.net/cursos/arquitectura-hexagonal/
https://apiumhub.com/es/tech-blog-barcelona/arquitectura-hexagonal/


https://alistair.cockburn.us/coming-soon/
https://fideloper.com/hexagonal-architecture
https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
https://es.slideshare.net/profpv/hexagonal-architecture-in-php
https://apiumhub.com/es/tech-blog-barcelona/arquitectura-hexagonal/