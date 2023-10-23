'use client';

import styles from './Menu.module.scss';

import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import Link from 'next/link';
import cn from 'classnames';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { firstLevelMenu } from '@/helpers/helpers';

export const MenuChildren = ({ menu }: { menu: MenuItem[][] }): JSX.Element => {
 const pathname = usePathname();
 const [menuState, setMenuState] = useState<MenuItem[]>(menu[0]);
 const setMenu = (newMenu: MenuItem[]) => {
  setMenuState(newMenu);
 };
 const updateMenu = (type: number) => {
  setMenuState(menu[type]);
 };

 const openSecondLevel = (secondCategory: string) => {
  setMenu &&
   setMenu(
    menuState.map((m) => {
     if (m._id.secondCategory == secondCategory) {
      m.isOpened = !m.isOpened;
     }
     return m;
    }),
   );
 };

 const buildFirstLevel = () => {
  return firstLevelMenu.map((m) => {
   return (
    <div key={m.route}>
     <Link href={`/${m.route}`} onClick={() => updateMenu(m.id)}>
      <div
       className={cn(styles.firstLevel, {
        [styles.firstLevelActive]: pathname.includes(firstLevelMenu[m.id].route),
       })}>
       {m.icon}
       <span>{m.name}</span>
      </div>
     </Link>
     {pathname.includes(firstLevelMenu[m.id].route) && buildSecondLevel(m)}
    </div>
   );
  });
 };

 const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
  return (
   <div className={styles.secondBlock}>
    {menuState.map((m) => {
     if (m.pages.map((p) => p.alias).includes(pathname)) {
      m.isOpened = true;
     }
     return (
      <div key={m._id.secondCategory}>
       <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
        {m._id.secondCategory}
       </div>
       <div
        className={cn(styles.secondLevelBlock, {
         [styles.secondLevelBlockOpened]: m.isOpened,
        })}>
        {buildThirdLevel(m.pages, menuItem.route)}
       </div>
      </div>
     );
    })}
   </div>
  );
 };

 const buildThirdLevel = (pages: PageItem[], route: string) => {
  return pages.map((p) => {
   return (
    <Link
     key={p._id}
     href={`/${route}/${p.alias}`}
     className={cn(styles.thirdLevel, {
      [styles.thirdLevelActive]: `/${route}/${p.alias}` == pathname,
     })}>
     {p.category}
    </Link>
   );
  });
 };

 return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
