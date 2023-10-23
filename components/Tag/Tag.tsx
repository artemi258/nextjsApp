import styles from './Tag.module.scss';
import { ITagProps } from './Tag.props';
import cn from 'classnames';

export const Tag = ({
 size = 's',
 children,
 color = 'ghost',
 href,
 className,
 ...props
}: ITagProps): JSX.Element => {
 return (
  <div className={cn(styles.tag, className, [styles[size]], styles[color])} {...props}>
   {href ? <a href={href}>{children}</a> : <>{children}</>}
  </div>
 );
};
