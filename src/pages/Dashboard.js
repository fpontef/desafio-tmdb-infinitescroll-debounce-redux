import React from 'react';
import { useSelector } from 'react-redux';
import MoviePopularPage from './MoviePopularPage';
import MovieSearchPage from './MovieSearchPage';

const Dashboard = () => {
  const { keyword } = useSelector((state) => state.searchQuery);

  if (keyword) {
    return <MovieSearchPage keyword={keyword} />;
  } else {
    return <MoviePopularPage />;
  }
};

export default Dashboard;
