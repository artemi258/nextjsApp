import { IHtagProps } from './Htag.props';
import styles from './Htag.module.scss';
import { createElement } from 'react';

export const Htag = ({ tag, children }: IHtagProps): JSX.Element => {
 return <>{createElement(tag, { className: styles[tag] }, children)}</>;
};
