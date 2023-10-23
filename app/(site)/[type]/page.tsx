import { getMenu, getPage } from '@/helpers/requests';
import { firstLevelMenu } from '@/helpers/helpers';

export const generateStaticParams = async (): Promise<
 {
  type: string;
 }[]
> => {
 let paths: { type: string }[] = [];
 for (const m of firstLevelMenu) {
  const menu = await getMenu(m.id);
  paths = paths.concat(menu.flatMap((item) => item.pages.map((page) => ({ type: m.route }))));
 }
 return paths;
};

const Type = async ({ params }: { params: { type: string } }): Promise<JSX.Element> => {
 const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
 if (!firstCategoryItem) {
  throw new Error('страница не найдена');
 }

 return <div>{params.type}</div>;
};
export default Type;
