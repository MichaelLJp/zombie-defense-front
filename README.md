🧟 Zombie Defense Strategy - Frontend
Este es el cliente web para el Sistema de Defensa contra Hordas Zombie, desarrollado con Angular y diseñado para ofrecer una interfaz táctica intuitiva para la gestión de recursos y estrategias de supervivencia.

🚀 Tecnologías y Frameworks
Core: Angular (v19+).

Estilos: SCSS / Tailwind CSS (opcional, según tu proyecto).

Despliegue: Azure Static Web Apps con CI/CD automatizado.

Estado: Integración con API REST en .NET 10.

🛠️ Configuración de Desarrollo
Requisitos Previos
Node.js: Versión LTS.

Angular CLI: npm install -g @angular/cli.

Instalación
Clonar el repositorio:

Bash
git clone https://github.com/tu-usuario/zombie-defense-frontend.git
Instalar dependencias:

Bash
npm install
Ejecutar en local:

Bash
ng serve
Accede a http://localhost:4200 en tu navegador.

🌐 Despliegue en Producción (Azure)
Este proyecto utiliza GitHub Actions para el despliegue automático. Cada vez que se realiza un push a la rama main, Azure Static Web Apps inicia un flujo de trabajo que:

Compila la aplicación Angular.

Distribuye los archivos estáticos en la red global de Azure (CDN).

URL del sitio publicado: [Inserta aquí tu URL de .azurestaticapps.net].

🛡️ Características del Frontend
Dashboard Táctico: Visualización en tiempo real de los puntos de defensa.

Responsive Design: Optimizado para dispositivos móviles y escritorio (vital en el campo de batalla).

Consumo de API: Comunicación asíncrona con el backend de defensa.
