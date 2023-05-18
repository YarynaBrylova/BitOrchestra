import React from 'react';

import type { FC } from 'react';

import { ReviewComponent } from './reviews/Review';
import { ReviewFormComponent } from './review-form/Review-form';
import { AllReviewsComponent } from './reviews/All-reviews';
import { reviews } from '../../All-reviews-data';

import './Review-widget.scss';

export const ReviewWidgetComponent: FC = () => {
  const [lastReview, ...restReviews] = reviews;

  return (
    <>
      <ReviewComponent review={lastReview}/>
      <AllReviewsComponent restReviews={[...restReviews]}/>
      <ReviewFormComponent/>
    </>
  );
};