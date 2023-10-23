import styles from './Header.module.scss';
import { IHeaderProps } from './Header.props';
import cn from 'classnames';

export const Header = (props: IHeaderProps): JSX.Element => {
 return <div {...props}>HEADER</div>;
};
