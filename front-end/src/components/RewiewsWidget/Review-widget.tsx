import React, { useEffect, useState } from 'react';
import type { FC } from 'react';

import { ReviewComponent } from './reviews/Review';
import { ReviewFormComponent } from './review-form/Review-form';
import { AllReviewsComponent } from './reviews/All-reviews';

import { ReviewService } from '../../fake-api/reviewsService';

import './Review-widget.scss';

export const ReviewWidgetComponent: FC = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isError, setIsError ] = useState(false);
  const [ reviewsList, setReviewsList ] = useState([]);

  useEffect(() => {
    ReviewService.getReviewsList()
      .then(resp => {
        setReviewsList(resp.data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [reviewsList]);

  const [lastReview, ...restReviews] = reviewsList;

  return (
    <>
      { isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status" />
        </div>)
      }
      { isError && <div className='error-data'>Something went wrong!</div>}
      { lastReview && <ReviewComponent review={lastReview}/> }
      { restReviews.length > 0 && <AllReviewsComponent restReviews={[...restReviews]}/> }
      <ReviewFormComponent/>
    </>    
  );
};