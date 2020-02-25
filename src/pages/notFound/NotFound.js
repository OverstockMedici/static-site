import React from 'react';
import Meta from '../../components/Meta';
import { Link } from 'components/Router';
import { Main } from './notFound.style';
import { meta } from '../../content/notFound.content';

export default function NotFound() {
    return (
        <div className="not-found">
            <Meta {...meta} />
            <Main role="main">
                <p>We couldn&apos;t find the page you were looking for. This is either because:</p>
                <ul>
                    <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
                    <li>The page you are looking for has been moved or deleted.</li>
                </ul>
                <p>
                    You can return to our homepage by <Link to="/">clicking here</Link>
                </p>
            </Main>
        </div>
    );
}
