import ContentDisplay from '@/app/components/ContentDisplay';
import React from 'react';

function ContentPage({ params }) {
    return (
        <div>
            <ContentDisplay id={params?.contentId}></ContentDisplay>
        </div>
    );
}

export default ContentPage;