'use client';

import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from 'react';
import styles from './Rating.module.scss';
import { IRatingProps } from './Rating.props';
import StarIcon from './star.svg';
import cn from 'classnames';

export const Rating = forwardRef(
 (
  { isEditable = false, error, rating, setRating, ...props }: IRatingProps,
  ref: ForwardedRef<HTMLDivElement>,
 ): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
   constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number): void => {
   const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
    return (
     <span
      onMouseEnter={(): void => changeDisplay(i + 1)}
      onMouseLeave={(): void => changeDisplay(rating)}
      className={cn(styles.star, {
       [styles.filled]: i < currentRating,
       [styles.editable]: isEditable,
      })}
      onClick={(): void => onClick(i + 1)}>
      <StarIcon
       tabIndex={isEditable ? 0 : -1}
       onKeyDown={(e: KeyboardEvent<SVGAElement>): boolean | void =>
        isEditable && handleSpace(i + 1, e)
       }
      />
     </span>
    );
   });
   setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number): void => {
   if (!isEditable) {
    return;
   }
   constructRating(i);
  };
  const onClick = (i: number): void => {
   if (!isEditable || !setRating) {
    return;
   }
   setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>): void => {
   if (e.code !== 'Space' || !setRating) {
    return;
   }
   setRating(i);
  };

  return (
   <div
    {...props}
    ref={ref}
    className={cn(styles.ratingWrapper, {
     [styles.error]: error,
    })}>
    {ratingArray.map((r, i) => (
     <span key={i}>{r}</span>
    ))}
    {error && <span className={styles.errorMessage}>{error.message}</span>}
   </div>
  );
 },
);
