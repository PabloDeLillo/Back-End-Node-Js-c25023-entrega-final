import { db } from '../config/firebase.js';

const collection = db.collection('products');

export async function getAll() {
  const snapshot = await collection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getById(id) {
  const doc = await collection.doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
}

export async function create(data) {
  const ref = await collection.add(data);
  const newDoc = await ref.get();
  return { id: newDoc.id, ...newDoc.data() };
}

export async function remove(id) {
  await collection.doc(id).delete();
}
