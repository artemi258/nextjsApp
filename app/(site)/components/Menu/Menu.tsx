import { getMenu } from '@/helpers/requests';
import styles from './Menu.module.scss';
import { IMenuProps } from './Menu.props';
import { MenuChildren } from './MenuChildren';
import { firstLevelMenu } from '@/helpers/helpers';
import { MenuItem } from '@/interfaces/menu.interface';

export const Menu = async (): Promise<JSX.Element> => {
 const menu: MenuItem[][] = [];
 for (const m of firstLevelMenu) {
  const res = await getMenu(m.id);
  console.log(res);
  menu.push(res);
 }

 return <div className={styles.menu}>{<MenuChildren menu={menu} />}</div>;
};
