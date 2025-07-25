import * as authService from '../services/auth.service.js';

export async function login(req, res) {
  const { email, password } = req.body;
  const token = await authService.login(email, password);
  if (!token) return res.status(401).json({ message: 'Credenciales inválidas' });
  res.json({ token });
}
