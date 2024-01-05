import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getAnimeDetails() {
            try {
                let res = await axiosInstance.get(`/anime/${id}`);
                setAnime(res.data);
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
            <div className="card" style={{ width: '30%' }}>
                <img
                    style={{ height: '400px' }}
                    className="card-img-top"
                    src={anime.entry.images.jpg.image_url}
                    alt={anime.entry.title}
                />
                <div className="card-body">
                    <h5 className="card-title">{anime.title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Episodes :{anime.episodes[0].title}
                    </li>
                    <li className='list-group list-group-flush'>
                        Premium : {anime.episodes[0].premium}
                    </li>
                </ul>
            </div>;

        </>
    )
}

export default Details
