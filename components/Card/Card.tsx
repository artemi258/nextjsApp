import { ForwardedRef, forwardRef } from 'react';
import styles from './Card.module.scss';
import { ICardProps } from './Card.props';
import cn from 'classnames';

export const Card = forwardRef(
 (
  { color = 'white', children, className, ...props }: ICardProps,
  ref: ForwardedRef<HTMLDivElement>,
 ): JSX.Element => {
  return (
   <div
    className={cn(styles.card, className, {
     [styles.blue]: color == 'blue',
    })}
    {...props}
    ref={ref}>
    {children}
   </div>
  );
 },
);
