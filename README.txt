API REST Productos - Node.js + Firestore + JWT

Instalación:
1) npm install
2) Completar .env con datos de Firebase y JWT
3) npm run start

Endpoints protegidos requieren Authorization: Bearer <token>

Login:
POST /auth/login
{ "email": "admin@admin.com", "password": "password123" }
