import React, { useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import axiosInstance from '../../axiosConfig/axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AnimiesAction } from '../../store/slices/animeis';

const Home = () => {
  const [animies, setAnimies] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const arr = useSelector((state) => state.animies.animies);

  // Call the function
  useEffect(() => {
    dispatch(AnimiesAction());
  }, []);

  return (
    arr.data == null ? 
    <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>:
    <>
      <div className="container-fluid mt-4">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {arr.data.map((anime) => (
            <div key={anime.entry.mal_id} className="col mb-3">
              <div className="card text-white bg-dark" style={{ height: '30rem' }}>
                <img
                  className="w-100"
                  style={{ height: '78%', cursor: 'pointer' }}
                  src={anime.entry.images.jpg.image_url}
                  alt={anime.entry.title}
                />
                <div className="card-body">
                  <h5 className="text-center">{anime.entry.title}</h5>
                  <div className="container">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        navigate(`/details/${anime.id}`);
                      }}
                    >
                      Details
                    </button>
                    <span
                      className="d-inline-block btn btn-primary ms-3"
                      onClick={() => {
                        toggleFavoriteState(anime.id);
                      }}
                    >
                      <span className="mx-2">Add To Favorites</span>
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
