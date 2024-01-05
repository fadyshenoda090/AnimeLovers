import React, { useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import axiosInstance from '../../axiosConfig/axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AnimiesAction } from '../../store/slices/animeis';
import { decreaseCounter, increaseCounter } from '../../store/slices/favoritesCounter';
import { addToFavorites, removeFromFavorites } from '../../store/slices/favorites';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const animiesArray = useSelector((state) => state.animies.animies);
  const favorites= useSelector((state)=>state.favorites.list)


  useEffect(() => {
    dispatch(AnimiesAction());
  }, []);

  const toggleFavoriteState = (id) => {
    const isFavorite = favorites.some((favorite) => favorite.id === id);

    if (isFavorite) {
        dispatch(removeFromFavorites({ id }));
        dispatch(decreaseCounter());
    } else {
        dispatch(addToFavorites({ id }));
        dispatch(increaseCounter());
    }
  }

  return (
    animiesArray.data == null ? 
    <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>:
    <>
      <div className="container-fluid mt-4">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {animiesArray.data.map((anime) => (
            <div key={anime.entry.mal_id} className="col mb-3">
              <div className="card bg-glass" style={{ height: '30rem' }}>
                <img
                  className="w-100"
                  style={{ height: '78%', cursor: 'pointer' }}
                  src={anime.entry.images.jpg.image_url}
                  alt={anime.entry.title}
                />
                <div className="card-body">
                  <h5 className="text-center">{anime.entry.title}</h5>
                  <div className="container-fluid d-flex justify-content-center">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        navigate(`/details/${anime.entry.mal_id}`);
                      }}
                    >
                      Details
                    </button>
                    <span
                      className="d-inline-block btn btn-primary ms-3"
                      style={{width:"15%"}}
                      onClick={() => {
                        toggleFavoriteState(anime.id);
                      }}
                    >
                      <AiFillHeart className={`fs-4`} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
