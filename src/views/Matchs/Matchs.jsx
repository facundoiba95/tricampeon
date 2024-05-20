import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchMatches } from '../../redux/features/api/slices/apiMatchesSlice';

const Matchs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMatches(2014))
  }, []);

  return (
    <div>Matchs</div>
  )
}

export default Matchs