import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axiosConfig/axios';

const Details = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getAnimeDetails() {
            try {
                let res = await axiosInstance.get(`/anime/${id}`);
                setAnime(res.data.data);
                console.log(res.data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getAnimeDetails();
    }, [id]);


    if (loading) {
        return <p className='text-white'>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <>
            <div className="card bg-glass m-auto text-dark mt-5" style={{ width: '30%' }}>
                <img
                    style={{ height: '400px' }}
                    className="card-img-top"
                    src={anime.images.jpg?.image_url}
                    alt={anime.title}
                />
                <div className="card-body">
                    <h5 className="card-title text-center display-5">{anime.title}</h5>
                </div>
                    <p className="list-group-item">
                        Episodes :{anime.episodes}
                    </p>
            </div>;
        </>
    )
}

export default Details
