Patterns of designs
===================

All main classes should be services.

Service should be as simple as possible. If not, create other service to do another task.

Use different service injection on each case:

* By parameters. Only for controllers
* ServiceSubscriberInterface. Using in order to use the container on lazy or less use service.
* Dependencies Injection ( **Recommended** ). Require in the constructor what you need.

Repository
----------

Repositories store entities, all require interaction with data should come from repositories

Methods name should be as descriptive as possible. Using the `By` to specify the next filters parts.

* `find` prefix should return a object.

* `findOrCreate` prefix should return a object if exists, if not it should create one using the factory.

* `get` prefix could return no object result, like scalar results

Factory
-------

Factories is a implementation of factory pattern. It's the only place when entities should be created.

All public method of the factory should prefix `create`. That limits the service to only create objects.

If a factories require create other entity that main one it should require other service that make the test.

Manager
-------

Manager is a concept that we have to make careful, because the name itself says that do to much different things that 
probably should be in different services.

Utils
-----

By convention Utils class has static functions so it does not require to be created to do it's work. 

So a util class:

* Does not have attributes.
* Does not have constructor. In practice it has a private one to prevent create instance of it.
* All method are static.
* Each function is totally independent of others, and everything that needs you be set as parameters or calling to 
another static function `self::staticMethod()`.

Builder
-------

Builders allow to add information than can be used to create a complex object or data.