import * as productService from '../services/products.service.js';

export async function getAllProducts(req, res) {
  const products = await productService.getAll();
  res.json(products);
}

export async function getProductById(req, res) {
  const product = await productService.getById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
  res.json(product);
}

export async function createProduct(req, res) {
  const newProduct = await productService.create(req.body);
  res.status(201).json(newProduct);
}

export async function deleteProduct(req, res) {
  await productService.remove(req.params.id);
  res.json({ message: 'Producto eliminado' });
}
