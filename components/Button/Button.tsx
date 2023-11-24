'use client';

import { motion } from 'framer-motion';
import styles from './Button.module.scss';
import { IButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({
 appearance,
 arrow = 'none',
 children,
 className,
 ...props
}: IButtonProps): JSX.Element => {
 return (
  <motion.button
   whileHover={{ scale: 1.05 }}
   onClick={(): void => console.log('hello')}
   className={cn(styles.button, className, styles[appearance])}
   {...props}>
   {children}
   {arrow !== 'none' && (
    <span className={cn(styles.arrow, { [styles.down]: arrow === 'down' })}>
     <ArrowIcon />
    </span>
   )}
  </motion.button>
 );
};
