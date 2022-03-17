import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

    const { data:images,loading } = useFetchGifs(category);



    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category]);

    return (
        <Fragment>
            <h3>{category}</h3>
            
            {loading && <p>Cargando...</p>}

            <div className='card-grid'> 
                     {
                         images.map(img =>(
                            <GifGridItem key={img.id} {...img}/> 
                         ))
                     }
            </div>

        </Fragment>
    )
}

GifGrid.prototype = {
    category: PropTypes.string.isRequired
}
