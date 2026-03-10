🧟‍♂️ ZombieDefense Analytics - Frontend
Este es el panel de control táctico desarrollado en Angular para el sistema de defensa contra hordas de zombies. Permite a los comandantes de campo calcular estrategias óptimas de disparo basadas en recursos limitados (balas y tiempo) y visualizar el histórico de ejecuciones.

🛠️ Tecnologías Utilizadas
Framework: Angular 21.2.0 (Core, Common, Forms).

Gestor de Paquetes: npm 11.6.2.

Reactive Forms: Para la gestión precisa de los parámetros de simulación.

RxJS: Implementación de flujos reactivos con BehaviorSubject y switchMap para evitar ráfagas de peticiones (Race Conditions).

Bootstrap 5 + SCSS Custom: Estilizado con temática Dark/Neon para una experiencia inmersiva.

🏗️ Arquitectura y Patrones

- Arquitectura Modular: El proyecto sigue una estructura modular para facilitar el mantenimiento:

    src/app/core: Contiene servicios singleton, modelos globales e interceptores de seguridad.

    src/app/features: Módulos funcionales como el simulador de defensa (defense-simulator).

    src/app/shared: Componentes reutilizables (ej. ui-input) y pipes.


- Native Control Flow: Uso de las directivas @if y @for de Angular 21 para un renderizado optimizado y tipos seguros en el historial de ejecuciones.

- Inyección de Dependencias: Uso extensivo de la función inject() para una gestión de dependencias más limpia y desacoplada.


🔐 Seguridad e Interceptores
El sistema utiliza un AuthInterceptor que inyecta automáticamente la cabecera X-API-KEY en cada petición saliente hacia el backend de .NET. Esto garantiza que solo los terminales autorizados por Z-SAFE puedan acceder a los datos tácticos.

🚀 Instalación y Ejecución
Instalar dependencias:

Bash
npm install
Configurar el entorno:
Asegúrate de que la URL del API en src/app/core/Services/defense.service.ts apunte a tu backend local o de Azure:

Local: https://localhost:7001/api/defense

Azure: https://zombie-defense-api.azurewebsites.net/api/defense

Correr el servidor de desarrollo:

Bash
ng serve
Navega a http://localhost:4200/. La aplicación se recargará automáticamente si cambias algún archivo.

📊 Funcionalidades Clave
Simulación en Tiempo Real: Envío de parámetros al algoritmo de la mochila (Knapsack) en el backend.

Historial Dinámico: Tabla de ejecuciones previas con ordenamiento automático por eficiencia.

Visualización de Errores: Manejo de estados de carga y errores de conexión con la base de datos SQL Server.

Comando de Campo: Recuerda que cada bala cuenta. ¡Buena suerte!
