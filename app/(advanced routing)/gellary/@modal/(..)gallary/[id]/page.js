import React from 'react';
import { imgs } from '../../../data';
import Modal from '@/app/components/Modal';

function ImageDetailsPage({ params }) {
    const { id } = params
    const data = imgs?.find((im) => (im.id.toString() === id))
    return (
        <Modal>
            <div className='text-red-400'>
                <p>{data?.name}</p>
            </div>
        </Modal>
    );
}

export default ImageDetailsPage;