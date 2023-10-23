import { getMenu, getPage, getProducts } from '@/helpers/requests';
import { firstLevelMenu } from '@/helpers/helpers';
import { ProductModel } from '@/interfaces/product.interface';
import { Card, HhData, Htag, P, Tag } from '@/components';
import styles from './page.module.scss';
import { TopLevelCategory } from '@/interfaces/page.interface';

export const generateStaticParams = async (): Promise<
 {
  type: string;
  alias: string;
 }[]
> => {
 let paths: { type: string; alias: string }[] = [];
 for (const m of firstLevelMenu) {
  const menu = await getMenu(m.id);
  paths = paths.concat(
   menu.flatMap((item) => item.pages.map((page) => ({ type: m.route, alias: page.alias }))),
  );
 }
 return paths;
};

const PageProducts = async ({
 params,
}: {
 params: { alias: string; type: string };
}): Promise<JSX.Element> => {
 const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
 let products: ProductModel[] = [];
 const page = await getPage(params.alias);
 if (!page._id || !firstCategoryItem) {
  throw new Error('страница не найдена');
 }
 if (firstCategoryItem && !page._id) {
  products = await getProducts(params.type);
 }
 return (
  <div className={styles.wrapper}>
   <div className={styles.title}>
    <Htag tag='h1'>{page.title}</Htag>
    {products && (
     <Tag color='gray' size='m'>
      {products.length}
     </Tag>
    )}
    <span>Сортировка</span>
   </div>
   <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>
   <div className={styles.hhTitle}>
    <Htag tag='h2'>Вакансии - {page.category}</Htag>
    <Tag color='red' size='m'>
     hh.ru
    </Tag>
   </div>
   {params.type == 'courses' && page.hh && <HhData {...page.hh} />}
  </div>
 );
};
export default PageProducts;
