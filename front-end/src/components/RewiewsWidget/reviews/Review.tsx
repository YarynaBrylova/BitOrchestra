import React, { useState } from 'react';

import type { FC } from 'react';

import Rating from '@mui/material/Rating';
import { AllReviews } from '../../../variables';

import './Review.scss';

const MAX_SYMBOLS = 300;

export interface ReviewDataI {
    id: number
    author: string
    date: string
    rate: number
    reviewContent: string
}

interface ReviewPropsI {
    review: ReviewDataI
}

interface ReadMorePropsI {
  children: string
}

const ReadMore: FC<ReadMorePropsI> = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const handleClick = () => {
    setIsReadMore(false);
  };

  const showReadMoreButton = text.length > MAX_SYMBOLS && isReadMore;

  return (
    <div className='read-more'>
      { showReadMoreButton ? (text.slice(0, MAX_SYMBOLS) + '...') : text }

      { showReadMoreButton && 
        <button type="button" className="btn btn-link" onClick={handleClick}>
          {AllReviews.ReadMore}
        </button>
      }
    </div>
  );
};

export const ReviewComponent: FC<ReviewPropsI> = ({review}) => {
  const { author, date, rate, reviewContent } = review;
  return (
    <div className='review-wrapper' key={review.id}>
      <h4>{author}</h4>
      <div className='date'>{date}</div>
      <Rating name="read-only" value={rate} readOnly sx={{color: '#2F4F4F'}}/>
      <ReadMore>
        {reviewContent}
      </ReadMore>
    </div>
  );
};