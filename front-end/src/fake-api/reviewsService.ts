import axios from 'axios';

import type { FormValuesI } from '../components/RewiewsWidget/review-form/Review-form';
import { AddAllReviewsAction } from '../store/reducer';

export const ReviewService = {
  getReviewsList: () =>
    function (dispatch) {
      axios
        .get('http://localhost:3001/reviews')
        .then((resp) => dispatch(AddAllReviewsAction(resp.data)));
    },

  postReview: (data: FormValuesI) => {
    const { name, comment } = data;
    axios.post('http://localhost:3001/reviews', {
      id: 6,
      author: name,
      date: 'May 08, 23',
      rate: 3,
      reviewContent: comment,
    });
  },
};
