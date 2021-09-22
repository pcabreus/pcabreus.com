---
title: Hexagonal Architecture
keywords: architecture, pattern, hexagonal
related: clean-architecture.md
state: todo
---

# Architectura Hexagonal

Separa la aplicación en distintas capas o regiones con su propia responsabilidad.
Permite que una aplicación pueda ser usada de la misma forma por usuarios, programas, pruebas automatizadas o scripts.
Permite ser desarrollada y probada de forma aislada de su infraestuctura a la hora de ejecución.

La Arquitectura Hexagonal propone que nuestro dominio sea el núcleo de las capas y que este no se acople a nada externo. En lugar de hacer uso explícito y mediante el principio de inversión de dependencias nos acoplamos a contratos (interfaces o puertos) y no a implementaciones concretas.

## Ventajas
Se pueden testear las capa independiente de las externas, falseando el comportamiento de estas otras.


https://alistair.cockburn.us/coming-soon/
https://fideloper.com/hexagonal-architecture
https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
https://es.slideshare.net/profpv/hexagonal-architecture-in-php
https://apiumhub.com/es/tech-blog-barcelona/arquitectura-hexagonal/