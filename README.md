# Around the US API

API del proyecto "Around the US" desarrollada con **Node.js** y **Express.js**. Este servidor maneja las peticiones del frontend (React) para obtener la lista de usuarios y tarjetas, así como los datos de un usuario específico.

## 🚀 Tecnologías y herramientas utilizadas

- **Node.js** (v18+)
- **Express.js** (v5.2.1)
- **Módulo `fs`** (para leer archivos JSON)
- **Módulo `path`** (para manejar rutas seguras)
- **ESLint** + **Airbnb Base** (para mantener la calidad y estilo del código)
- **Nodemon** (para recarga automática en desarrollo)

## 📋 Funcionalidades (Endpoints)

El servidor ofrece los siguientes endpoints:

| Método | Ruta | Descripción | Código de éxito | Código de error |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/users` | Devuelve la lista completa de todos los usuarios. | `200 OK` | `500` (Error del servidor) |
| `GET` | `/users/:id` | Devuelve los datos de un usuario específico según su `_id`. | `200 OK` | `404` (Usuario no encontrado) / `500` |
| `GET` | `/cards` | Devuelve la lista completa de todas las tarjetas. | `200 OK` | `500` (Error del servidor) |
| `GET` | `/*` (Cualquier otra ruta) | Devuelve un mensaje de error indicando que el recurso no existe. | - | `404` (Recurso no encontrado) |

### 💡 Ejemplo de respuesta (GET /users/8340d0ec33270a25f2413b69)

```json
{
  "name": "Katherine Johnson",
  "about": "Mathematician",
  "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/800px-Katherine_Johnson_1983.jpg",
  "_id": "8340d0ec33270a25f2413b69"
}