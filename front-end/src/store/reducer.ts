import type { AnyAction } from 'redux';
import type { ReviewDataI } from '../components/RewiewsWidget/reviews/Review';

const defaultState = {
  reviews: [],
};

export const reducer = (state = defaultState, action: AnyAction) => {
  console.log(action.type);
  switch (action.type) {
    case 'ADD_ALL_REVIEWS':
      return { ...state, reviews: [...action.payload] };
    case 'ADD_NEW_REVIEW':
      return { ...state, reviews: [...action.payload] };
    default:
      return state;
  }
};

export const AddAllReviewsAction = (payload: ReviewDataI[]) => ({
  type: 'ADD_ALL_REVIEWS',
  payload,
});
