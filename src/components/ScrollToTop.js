import react, { useEffect } from 'react';

export default function ScrollToTop(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.location.pathname]);

    return props.children;
}
