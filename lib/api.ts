import axios from 'axios';
import { Code, Document } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_URL,
});

export const fetchCodes = async (): Promise<Code[]> => {
  try {
    const response = await apiClient.get('/codes');
    return response.data;
  } catch (error) {
    console.error('Error fetching codes:', error);
    return [];
  }
};

export const saveCodes = async (codes: Code[]): Promise<void> => {
  try {
    await apiClient.post('/codes', { codes });
  } catch (error) {
    console.error('Error saving codes:', error);
  }
};

export const saveDocument = async (doc: Document): Promise<void> => {
  try {
    await apiClient.post(`/documents/${doc.id}`, doc);
  } catch (error) {
    console.error('Error saving document:', error);
  }
};

export const fetchDocument = async (id: string): Promise<Document | null> => {
  try {
    const response = await apiClient.get(`/documents/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching document:', error);
    return null;
  }
};
