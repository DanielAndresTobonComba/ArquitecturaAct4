# ArquitecturaAct4 


# Sistema de Inicio de Sesión en Arquitectura Cliente

## Descripción del Proyecto

Este proyecto implementa un sistema de inicio de sesión utilizando únicamente tecnologías del lado del cliente: **HTML**, **CSS** y **JavaScript**. El sistema permite a los usuarios iniciar sesión y registrarse localmente usando un almacenamiento basado en `localStorage`. La aplicación se estructura siguiendo una arquitectura orientada al cliente, donde toda la lógica de negocio y gestión de sesión ocurre en el navegador.

### Características principales:

- **Inicio de sesión**: Los usuarios pueden iniciar sesión si su nombre de usuario y contraseña coinciden con los registros almacenados localmente.
- **Registro de usuarios**: Si el usuario no existe, es redirigido a un formulario de registro para crear una nueva cuenta.
- **Página de bienvenida**: Tras iniciar sesión, se muestra una tarjeta personalizada con los detalles del usuario.
- **Cierre de sesión**: Los usuarios pueden cerrar sesión, eliminando su información de la sesión activa y volviendo a la página de inicio de sesión.

## Operación del Proyecto

El sistema se organiza de la siguiente manera:

1. **Inicio de sesión (`loggin.html`)**: El usuario ingresa su nombre de usuario y contraseña. Si la autenticación es exitosa, se almacena el usuario activo en `localStorage` y es redirigido a la página de bienvenida.
2. **Registro (`register.html`)**: Si los datos ingresados no existen en la base local, se redirige al formulario de registro, donde el usuario puede crear una nueva cuenta. Los datos se almacenan en `localStorage` como un par clave-valor (usuario-contraseña).
3. **Página de bienvenida (`bienvenido.html`)**: Una vez iniciado el proceso de autenticación, se muestra una tarjeta de bienvenida con el nombre del usuario. El usuario también tiene la opción de cerrar sesión.
4. **Cierre de sesión**: Al hacer clic en el botón "Cerrar Sesión", el sistema elimina la información del usuario de `localStorage` y redirige al inicio de sesión.

## Montaje y Herramientas Utilizadas

Para ejecutar este proyecto, no se requiere un servidor backend, ya que todo el procesamiento se realiza del lado del cliente. A continuación se describen las herramientas y tecnologías utilizadas:

- **HTML**: Para estructurar las páginas de inicio de sesión, registro y bienvenida.
- **CSS**: Para aplicar estilos a los formularios y la tarjeta de bienvenida, con un diseño centrado y responsivo.
- **JavaScript**: Utilizado para la lógica del negocio, incluyendo el manejo de eventos, validación de usuarios y la gestión de sesiones mediante `localStorage`.
- **LocalStorage**: Almacenamiento local del navegador para persistir usuarios y sesiones.

### Montaje:

1. Clonar o descargar el repositorio del proyecto.
2. Abrir el archivo `loggin.html` en un navegador para acceder a la página de inicio de sesión.
3. No se necesita configuración adicional, ya que todo el proyecto es del lado del cliente.

## Aplicación y Objetivo del Ejercicio

El objetivo principal de este ejercicio es demostrar una implementación de un sistema de inicio de sesión y registro básico sin necesidad de un servidor, utilizando solo herramientas del lado del cliente. Es ideal para comprender cómo se puede gestionar la autenticación y la persistencia de datos mediante las APIs del navegador como `localStorage`.

## Presentación del Producto y Ventajas de la Arquitectura Propuesta

### Ventajas:
- **Simplicidad**: No requiere configuración de backend, lo que simplifica el desarrollo y la puesta en marcha.
- **Rápida implementación**: Todo el sistema se ejecuta en el navegador del usuario, lo que permite una experiencia de uso rápida.
- **Escalabilidad para prototipos**: Si bien este enfoque es ideal para prototipos y sistemas de demostración, la estructura modular permite escalar fácilmente el proyecto para incluir un backend en el futuro.

### Desventajas:
- **Seguridad**: Al tratarse de un sistema de autenticación en el cliente, no es seguro para producción, ya que los datos sensibles se almacenan en `localStorage`.
- **Dependencia del navegador**: Toda la lógica se ejecuta del lado del cliente, lo que puede limitar la funcionalidad en navegadores antiguos o si `JavaScript` está deshabilitado.

## Herramientas Usadas y su Aplicación

1. **HTML**: Estructura de las páginas web. Se utilizó para organizar los formularios y las secciones de cada página.
2. **CSS**: Mejora la experiencia del usuario mediante la presentación visual de los elementos en las páginas web.
3. **JavaScript**: Desempeña un papel central en la lógica de negocio, incluyendo la validación de usuarios, gestión de sesiones y redirección entre páginas.
4. **LocalStorage**: Permite almacenar datos de manera persistente en el navegador, emulando una base de datos local simple para guardar usuarios y sesiones activas.

---

Este proyecto es un ejercicio básico para demostrar cómo implementar un sistema de autenticación sin backend, enfocándose en la estructura y arquitectura del lado del cliente. Ideal para aprender sobre las API del navegador y la gestión de la sesión.

