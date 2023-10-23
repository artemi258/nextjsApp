import { API } from '../api/api';
import { MenuItem } from '../interfaces/menu.interface';
import { TopPageModel } from '../interfaces/page.interface';
import { ProductModel } from '../interfaces/product.interface';

export const getMenu = async (firstCategory: number): Promise<MenuItem[]> => {
 const res = await fetch(API.topPage.find, {
  method: 'POST',
  body: JSON.stringify({ firstCategory }),
  headers: { 'content-type': 'application/json' },
 });
 return res.json();
};
export const getPage = async (alias: string): Promise<TopPageModel> => {
 const res = await fetch(`${API.topPage.byAlias}${alias}`, {
  method: 'GET',
 });
 return res.json();
};
export const getProducts = async (category: string): Promise<ProductModel[]> => {
 const res = await fetch(API.product.find, {
  method: 'POST',
  body: JSON.stringify({ category, limit: 10 }),
  headers: { 'content-type': 'application/json' },
 });
 return res.json();
};
