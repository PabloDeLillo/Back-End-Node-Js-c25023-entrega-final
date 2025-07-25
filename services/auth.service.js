import jwt from 'jsonwebtoken';

const USER = { email: 'admin@admin.com', password: 'password123' };

export function login(email, password) {
  if (email === USER.email && password === USER.password) {
    return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  }
  return null;
}
