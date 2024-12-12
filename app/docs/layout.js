import React from 'react';

import { getDocument } from "@/lib/doc";
import Sidebar from '../components/Sidebar';

function DocsLayout({ children }) {
    const allDocuments = getDocument()
    return (
        <div>
            <div className="min-h-screen flex">
                <Sidebar docs={allDocuments}></Sidebar>
                <div className="flex-grow">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DocsLayout;