import React from 'react';

function layoutPerallelModal({ children, modal }) {
    
    return (
        <>
            {modal}
            {children}
        </>
    );
}

export default layoutPerallelModal;