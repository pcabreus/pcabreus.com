# Testing

## Nightwatch

En la máquina local ejecutar los siguientes:
```
$ npm install colors
$ npm install yargs
$ npm install jquery
$ npm install -g nightwatch
```

Ejecutar los tests:
```
$ nightwatch tests/nightwatch/<test file>
```

### Inicialización del proyecto para test:
Checkear lossiguientes en el .env 
```
APP_ID=test
APP_HOST=tourknife.localhost

MYSQL_DATABASE=tk_test
MYSQL_USER=tech
MYSQL_PASSWORD=t3ch

APP_ENV=prod
APP_DEBUG=false
```

Los tests actualmente mantenidos y que hay que ejecutar en orden son:  
**General**
```
nightwatch tests/nightwatch/general/login.js --env integration
nightwatch tests/nightwatch/general/destinations.js --env integration
nightwatch tests/nightwatch/general/templates.js --env integration
nightwatch tests/nightwatch/product/completeProvider.js --env integration
```

**Producto**  
Creación de un tour, itinerario y periodos. Y asignación de servicios.
```
nightwatch --test tests/nightwatch/product/tourCreate.js --testcase "tour_new" --env integration
nightwatch --test tests/nightwatch/product/itineraryCreate.js --testcase "itinerary_new" --env integration
nightwatch --test tests/nightwatch/product/periodCreate.js --testcase "period_new" --env integration
nightwatch --test tests/nightwatch/product/serviceCreate.js --testcase "service_new" --env integration
```

Poner precios y reserva.
```
nightwatch --test tests/nightwatch/product/completeTour.js --env integration
```
