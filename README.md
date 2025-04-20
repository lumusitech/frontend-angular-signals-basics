# Angular 19+ basics with signals

This repository contains an approach to Angular 19+ using signals. It is a simple example of how to use signals in an Angular application.

## Topics del repo

- Señales
- Estado
- Propiedades
- Rutas
- Métodos
- Eventos
- Cambios en el DOM
- Cada archivo y directorio de un proyecto
- RouterLink
- RouterLink Active
- Nuevo control flow
- @for
- @if
- ngClass - ngStyle - Alternativas
- Comunicación entre componentes
- Inputs / outputs (Como señales)
- Servicios en Angular
- Efectos y LocalStorage
- LinkedSignal
- HashRouter
- Despliegues

## Location Strategy - Hash

Esto es usado para hacer que las rutas se carguen a partir del root del dominio en lugar de la raíz de la aplicación angular o de sus rutas hijas. Si no se configura así, al hacer reload en una ruta manejada por angular, no se encontrarán las urls.

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
      // Con esto, logramos:
      // https://your-domain.com/#/
      // https://your-domain.com/#/dragonball
      // https://your-domain.com/#/dragonball-super
    },
  ],
};
```
