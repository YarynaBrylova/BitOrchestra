import axios from 'axios';
import type { FormValuesI } from '../components/RewiewsWidget/review-form/Review-form';

export const ReviewService = {
  getReviewsList: () => axios.get('http://localhost:3001/reviews'),

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
