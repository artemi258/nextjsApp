'use client';

import { getMenu, getPage, getProducts } from '@/helpers/requests';
import { firstLevelMenu } from '@/helpers/helpers';
import { ProductModel } from '@/interfaces/product.interface';
import { Advantages, Card, HhData, Htag, P, Product, Sort, Tag } from '@/components';
import styles from './page.module.scss';
import { SortEnum } from '@/components/Sort/Sort.props';
import { useParams } from 'next/navigation';
import { useEffect, useReducer, useState } from 'react';
import { TopPageModel } from '@/interfaces/page.interface';
import { sortReducer } from '@/utils/sort.reducer';

const PageProducts = (): JSX.Element => {
 const { alias, type } = useParams<{ alias: string; type: string }>();
 const firstCategoryItem = firstLevelMenu.find((m) => m.route == type);
 const [products, setProducts] = useState<ProductModel[]>([]);
 const [page, setPage] = useState<TopPageModel | undefined>();
 const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, {
  products,
  sort: SortEnum.Rating,
 });
 //  console.log(sortedProducts);
 const setSort = (sort: SortEnum) => {
  dispathSort({ type: sort, payload: products });
 };

 useEffect(() => {
  request();
 }, []);

 const request = async () => {
  const getPageItem = await getPage(alias);
  setPage(getPageItem);
  if (!getPageItem._id || !firstCategoryItem) {
   throw new Error('страница не найдена');
  }
  if (firstCategoryItem && getPageItem._id) {
   const getProductsItem = await getProducts(getPageItem.category);
   setProducts(getProductsItem);
   dispathSort({ type: SortEnum.Rating, payload: getProductsItem });
  }
 };

 return (
  <div className={styles.wrapper}>
   <div className={styles.title}>
    <Htag tag='h1'>{page?.title}</Htag>
    {sortedProducts && (
     <Tag color='gray' size='m'>
      {sortedProducts.length}
     </Tag>
    )}
    <Sort sort={sort} setSort={setSort} /> <span>Сортировка</span>
   </div>
   <div>{sortedProducts && sortedProducts.map((p) => <Product key={p._id} product={p} />)}</div>
   <div className={styles.hhTitle}>
    <Htag tag='h2'>Вакансии - {page?.category}</Htag>
    <Tag color='red' size='m'>
     hh.ru
    </Tag>
   </div>
   {type == 'courses' && page?.hh && <HhData {...page.hh} />}
   {page?.advantages && page.advantages.length > 0 && (
    <>
     <Htag tag='h2'>Преимущства</Htag>
     <Advantages advantages={page.advantages} />
    </>
   )}
   {page?.seoText && (
    <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />
   )}
   <Htag tag='h2'>Получаемые навыки</Htag>
   {page?.tags.map((t) => (
    <Tag key={t} color='primary'>
     {t}
    </Tag>
   ))}
  </div>
 );
};
export default PageProducts;
