# 🎬 VideoReactGrupo4

Un proyecto frontend construido con React y Vite para una pequeña aplicación de vídeo/demo. Este README explica la estructura, cómo arrancar la API local (JSON server), el flujo de datos y quiénes son los responsables del proyecto.

---

⚡ Características principales

- 🚀 Arranque rápido con Vite
- 🧩 Componentes React organizados en `src/components`
- 🔁 API de desarrollo basada en `json-server` usando `server/db.json`
- 🎨 Estilos con Tailwind (y soporte de `react-icons`)

---

📦 Scripts útiles

Usa los scripts definidos en `package.json`:

```bash
# Levantar la app en modo desarrollo
npm run dev

# Levantar la API local (json-server) en http://localhost:3000
npm run api

# Construir para producción
npm run build

# Previsualizar build localmente
npm run preview
```

---

🧭 Flujo de datos / Conexión con la API

1. `server/db.json` actúa como la base de datos falsa (JSON) usada en desarrollo.
2. Ejecuta `npm run api` para iniciar `json-server` (por defecto en `http://localhost:3000`).
3. El frontend (Vite) realiza peticiones HTTP a la API local — revisa `src/services/api.js` para la configuración de las rutas y métodos.
4. Flujo típico:

- El componente monta y llama a `fetch` / helpers en `src/services/api.js`.
- La API (json-server) responde con recursos desde `server/db.json`.
- El estado se actualiza en los componentes y la UI renderiza los datos.

Ejemplo de endpoint (json-server):

```
GET http://localhost:3000/videos
POST http://localhost:3000/videos
```

> Nota: adapta las rutas según las colecciones definidas en `server/db.json`.

---

🗂 Estructura principal del proyecto

- public/ — recursos estáticos
- server/db.json — datos mock para `json-server` (API local)
- src/
	- assets/ — imágenes y logos
	- components/ — componentes React organizados por dominio
	- pages/ — vistas/route pages
	- services/api.js — módulos para consumir la API
	- main.jsx, App.jsx — punto de entrada

---

🔧 Dependencias importantes

- React 19
- Vite
- json-server (dev) — para la API local
- react-router-dom — routing
- react-icons — íconos UI

Puedes ver las versiones exactas en `package.json`.

---

👥 Equipo

- Alberto García — Desarrollador
- Ives Andrés — Desarrollador
- Ana Morán — Desarrolladora & Product Owner
- Suso Suárez — Desarrollador & Scrum Master

---

---

## 🗓️ Dailies & Kick-off Meeting

### 🔄 Dailies (Scrum)

Las *dailies* son reuniones breves (máx. 15 minutos) donde cada miembro del equipo comparte el estado de su trabajo. Su objetivo es mantener la sincronización y detectar bloqueos rápidamente.

Ejemplos típicos de nuestras intervenciones:

- **Qué hice ayer:**  
  "Implementé el componente `VideoCard` y conecté el fetch de vídeos."

- **Qué haré hoy:**  
  "Voy a integrar el formulario de subida de vídeos y validar campos."

- **Bloqueos:**  
  "El endpoint POST de json-server no está devolviendo el ID correctamente; necesito revisarlo con el equipo."

---

### 🚀 Kick-off Meeting

La *Kick-off Meeting* marca el inicio del proyecto o del sprint. Sirve para alinear expectativas, definir objetivos y repartir responsabilidades.

Elementos tratados en el Kick-off:

- Objetivo del proyecto o sprint  
- Revisión del backlog inicial  
- Aclaración de roles (PO, SM, Devs)  
- Alineación técnica (stack, estructura, estándares)  
- Identificación de riesgos iniciales  
- Definición de la primera entrega o milestone  

Mensaje de apertura:

> "El objetivo de este sprint es tener la primera versión funcional del listado de vídeos, conectada a la API local y con navegación básica entre páginas."

🛠 Flujo de trabajo recomendado (desarrollo)

1. Clona el repo y instala dependencias:

```bash
npm install
```

2. Levanta la API local:

```bash
npm run api
```

3. En otra terminal, arranca la app:

```bash
npm run dev
```

4. Abre `http://localhost:5173` (o puerto que indique Vite) y prueba la app.

---

📝 Contribuciones

- Crea una rama por feature: `feat/mi-feature`
- Haz commits claros y atómicos
- Abre Pull Requests contra `main` y pide revisión del equipo

---

❗ Consideraciones

- `server/db.json` es solo para desarrollo; para producción usa una API real.
- Revisa `src/services/api.js` antes de cambiar endpoints.

---

📄 Licencia

Este proyecto no incluye licencia explícita.
---

