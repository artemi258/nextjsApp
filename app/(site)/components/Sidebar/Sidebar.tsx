import { Menu } from '..';
import styles from './Sidebar.module.scss';
import { ISidebarProps } from './Sidebar.props';
import cn from 'classnames';
import Logo from './logo.svg';
import { Search } from '@/components';

export const Sidebar = ({ className, ...props }: ISidebarProps): JSX.Element => {
 return (
  <div className={cn(className, styles.sidebar)} {...props}>
   <Logo className={styles.logo} />
   <Search />
   <Menu />
  </div>
 );
};
