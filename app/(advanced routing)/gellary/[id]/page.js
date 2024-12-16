import React from 'react';
import { imgs } from '../data';

function ImageDetailsPage({ params }) {
    const { id } = params
    const data = imgs?.find((im) => (im.id.toString() === id))
    console.log(id, data);
    return (
        <div>
            <p>{data?.name}</p>
        </div>
    );
}

export default ImageDetailsPage;