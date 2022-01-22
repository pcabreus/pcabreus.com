Trabajo con arreglos, listas o bucles
=====================================

Evitar siempre el uso del `array_merge` en php y de `merge` en twig. Usar las siguiente funciones en cada caso:

* `sequent_merge`: Para arreglos secuenciales.
* `assoc_merge`: Para arreglos asociativos.

	```
	<?php
	$a = [1,2,3];
	$b = [4];
	$b[] = 5;
	/*$a = array_merge($a, $b);*/ 	//	$a -> [1,2,3,4,5]
	sequest_merge($a, $b) 			//	$a -> [1,2,3,4,5]
	```

Las función recibe los array por referencia por lo que no es necesario reasignarlo.

En twig se crearon filtros similares, pero si es necesario (por como funciona twig) asignar el resultado del filtro:

	```
	{% set a = [1,2,3] %}
	{% set b = [4] %}
	
	{# set b = b | merge([5]) #} {# $b -> [4,5] #}
	{% set b = b | add_to_array(5) %} {# $b -> [4,5] #}
	
	{# set a = a | merge(b) #} {# $a -> [1,2,3,4,5] #}
	{% set a = a | sequent_merge(b) %} {# $a -> [1,2,3,4,5] #}
	{{ dump(a) }}
	```

Se creó un nuevo filtro que permite asignar un elemento a la lista, sin necesidad de hacer un merge entre corchetes.

**Nota:** Esto solo aplica cuando se desea agregar un arreglo a otro arreglo modificando el primero: