Zdebug
======

Instalación
-----------

RUN mkdir -p /usr/src/php/ext/xdebug && \
    curl -fsSL https://xdebug.org/files/xdebug-2.8.0beta1.tgz | tar xz -C /usr/src/php/ext/xdebug --strip 1 && \
    docker-php-ext-install xdebug && \
    echo "xdebug.remote_enable=1" >> /usr/local/etc/php/conf.d/xdebug.ini && \
    echo "xdebug.remote_port=9001" >> /usr/local/etc/php/conf.d/xdebug.ini && \
    echo "xdebug.remote_autostart=0" >> /usr/local/etc/php/conf.d/xdebug.ini

Configuración del IDE
---------------------