import React, { useEffect, useState, useRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { Main, Hero, DownButton, Overview, Industries, WhoIs, LearnMore } from './home.style';
import { ButtonLink } from '../components/ButtonLink';
import { home, meta } from '../content/home.content';

const peaceColiseum = 'img/peace-coliseum.png';
const peaceColiseumTall = 'img/peace-coliseum-350-tall.jpg';
const peaceColiseum380 = 'img/peace-coliseum-380.jpg';
const peaceColiseum600 = 'img/peace-coliseum-600.jpg';
const peaceColiseum870 = 'img/peace-coliseum-870.jpg';
const peaceColiseumFull = 'img/peace-coliseum-589-full.jpg';
const courtyard = 'img/peace-coliseum-courtyard.png';
const courtyardTall = 'img/peace-coliseum-courtyard-350-tall.jpg';
const courtyard380 = 'img/peace-coliseum-courtyard-380.jpg';
const courtyard600 = 'img/peace-coliseum-courtyard-600.jpg';
const courtyard870 = 'img/peace-coliseum-courtyard-870.jpg';
const courtyardFull = 'img/peace-coliseum-courtyard-589-full.jpg';

export default function Home() {
    const [overviewAnimation, setOverviewAnimation] = useState(false);
    const [industriesAnimation, setIndustriesAnimation] = useState(false);

    const refOverview = useRef(null);
    const refIndustriesContainer = useRef(null);


    useEffect(() => {
        smoothscroll.polyfill();

        document.title = meta.title;

        // Observer to add the animated class to initial animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0.2 && entry.target === refOverview.current) {
                    setOverviewAnimation(true);
                } else if (entry.intersectionRatio > 0.2 && entry.target === refIndustriesContainer.current) {
                    setIndustriesAnimation(true);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.21
        });

        observer.observe(refOverview.current);
        observer.observe(refIndustriesContainer.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    const scrollDown = () => {
        const height = window.innerHeight * 0.9;

        window.scroll({
            top: height,
            behavior: 'smooth'
        });
    };

    const buildOverview = () => (
        home.overview.map((overview, index) => (
            <div className={`overview-${index + 1}`} key={overview.heading}>
                <h2>{overview.heading}</h2>
                <p>{overview.content}</p>
            </div>
        ))
    );

    const buildIndustries = () => ( // TODO: remove text from services .png files
        home.industries.map(industry => (
            <img src={industry.imgUrl} alt={industry.caption} key={industry.caption} />
        ))
    );

    const buildWhoIsParagraphs = paragraphs => (
        paragraphs.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
        ))
    );

    return (
        <div className="home">
            <Main role="main">
                <Hero>
                    <div className="text-1">Advancing</div>
                    <div className="text-2">Blockchain</div>
                    <div className="text-3">Technology</div>
                    <DownButton onClick={scrollDown} aria-label="Arrow Down" title="Arrow Down" />
                </Hero>

                <Overview
                    ref={refOverview}
                    id="overview"
                    className={overviewAnimation && 'animated'}
                >
                    {buildOverview()}
                </Overview>

                <Industries className="industries">
                    <h2>Medici Ventures focuses on:</h2>
                    <div
                        ref={refIndustriesContainer}
                        className={`industries-container ${industriesAnimation && 'animated'}`}
                    >
                        {buildIndustries()}
                    </div>
                </Industries>

                <WhoIs>
                    <div className="who-is-1">
                        <picture>
                            <source media="(min-width: 1070px)" srcSet={peaceColiseumFull} />
                            <source media="(min-width: 870px)" srcSet={peaceColiseumTall} />
                            <source media="(min-width: 601px)" srcSet={peaceColiseum870} />
                            <source media="(min-width: 400px)" srcSet={peaceColiseum600} />
                            <source media="(max-width: 399px)" srcSet={peaceColiseum380} />
                            <img src={peaceColiseum} alt="Medici Ventures Headquarters" />
                        </picture>
                        <div>
                            <h2>Who is Medici Ventures</h2>
                            {buildWhoIsParagraphs(home.whoIs1)}
                        </div>
                    </div>
                    <div className="who-is-2">
                        <picture>
                            <source media="(min-width: 1070px)" srcSet={courtyardFull} />
                            <source media="(min-width: 870px)" srcSet={courtyardTall} />
                            <source media="(min-width: 601px)" srcSet={courtyard870} />
                            <source media="(min-width: 400px)" srcSet={courtyard600} />
                            <source media="(max-width: 399px)" srcSet={courtyard380} />
                            <img src={courtyard} alt="Medici Ventures Headquarters Courtyard" />
                        </picture>
                        <div>
                            {buildWhoIsParagraphs(home.whoIs2)}
                        </div>
                    </div>
                </WhoIs>
                <LearnMore>
                    <ButtonLink to="/companies">Learn More</ButtonLink>
                </LearnMore>
            </Main>
        </div>
    );
}
