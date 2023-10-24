import styles from './Input.module.scss';
import { IInputProps } from './Input.props';
import cn from 'classnames';

export const Input = ({ className, ...props }: IInputProps): JSX.Element => {
 return <input className={cn(className, styles.input)} {...props} />;
};
