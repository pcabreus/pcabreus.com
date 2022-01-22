Hint-types
==========

Los tipos de datos son tomados en cuenta cada vez más por los programadores de php, debido a que mejora 
la legibilidad del código y evita cometer errores de datos.

Prácticas a mejorar en TK:
--------------------------

* Comparar 2 valores usando el comparador `$a === $b`.
* Comparar en arreglo usando el comparador `in_array($a, [$b, $c, $d], true)`.
* Siempre que sea posible usar tipo de datos en los parámetros `function a(int $b, string $c, User $d);`
* Siempre que sea posible usar tipo de datos al retornar `function a() ?int;`
* Usar `?` siempre que el valor pueda ser `null` pero que no tenga valor por defecto ej. `function a(?int $initval)`
* Usar `?` siempre que el `return` pueda ser `null` como en las entidades antes de que tengan valor los datos ej. `function getUsername(): ?string`
 
 PHP 7.4 property type
 ---------------------
 Será posible definir tipos para las propiedades
 
    ```
    <?php
    class User {
        /** @ORM\Column(type="string") */
        protected string $username;
        
        /** @ORM\Column(type="string") */
        protected int $count;
    }
    ```