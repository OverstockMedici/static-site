import React from 'react';
import { Head } from 'react-static';
import { useLocation } from './Router';

// Most pages have a meta.image but it is optional
// Optional children to apss in any additional page specific tags in the Head
export default function Meta({ title, description, image = undefined, children = undefined }) {
    const { pathname } = useLocation();
    
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={`https://www.mediciventures.com${pathname}`} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            (
                image &&
                <meta property="og:image" content={`https://www.mediciventures.com${image}`} />
            )
            {children}
        </Head>
    )
}
