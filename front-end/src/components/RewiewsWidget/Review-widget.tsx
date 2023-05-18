import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import type { ReviewDataI } from './reviews/Review';

import { ReviewComponent } from './reviews/Review';
import { ReviewFormComponent } from './review-form/Review-form';
import { AllReviewsComponent } from './reviews/All-reviews';

import { ReviewService } from '../../fake-api/reviewsService';

import './Review-widget.scss';
import { useDispatch, useSelector } from 'react-redux';

interface StateI {
  reviews: ReviewDataI[]
}

export const ReviewWidgetComponent: FC = () => {
  const [ isLoading, setIsLoading ] = useState(true);

  const dispatch = useDispatch();
  const reviewsList = useSelector((state: StateI) => state.reviews);

  console.log('rl', reviewsList);

  useEffect(() => {
    dispatch(ReviewService.getReviewsList());
    setIsLoading(false);
  }, []);

  const [lastReview, ...restReviews] = reviewsList;

  return (
    <>
      { isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status" />
        </div>)
      }
      { lastReview && <ReviewComponent review={lastReview}/> }
      { restReviews.length > 0 && <AllReviewsComponent restReviews={[...restReviews]}/> }
      <ReviewFormComponent/>
    </>    
  );
};