import React, { useState } from 'react';

import type { FC } from 'react';
import type { ReviewDataI } from './Review';

import { ReviewComponent } from './Review';

import { AllReviews } from '../../../variables';
import './All-reviews.scss';

interface AllReviewProps {
    restReviews: ReviewDataI[]
}

export const AllReviewsComponent: FC<AllReviewProps> = ({restReviews}) => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviews = restReviews.map((rev: ReviewDataI) => <ReviewComponent review={rev} key={rev.id}/>);

  const handleClick = () => {
    setShowAllReviews(!showAllReviews);
  };
  
  return (
    <>
      {showAllReviews ? reviews : null}

      <button type="button" className="btn btn-link" onClick={handleClick}>
        {showAllReviews ? AllReviews.HideAllReviews : AllReviews.ShowAllReviews}
      </button>
    </>
  );
};