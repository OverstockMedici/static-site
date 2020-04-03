import React, { useEffect, useContext } from 'react';
import Particle from 'particleground-light';
import Meta from '../../components/Meta';
import { Link } from 'components/Router';
import { ButtonLinkReversed } from '../../components/ButtonLink';
import { Hero, HeroContent, Blockquote, Cite, TeamList, JobListings } from './team.style';
import { foregroundOptions, backgroundOptions } from './team.particleground';
import { content, meta } from '../../content/team.content';
import TeamCard from './TeamCard.js';
import ListingsRow from './ListingsRow';
import { useRouteData } from 'react-static';

const { team } = content;

export default function Team() {
    useEffect(() => {
        // TODO dynamically import Particle
        const pg1 = new Particle(document.getElementById('particles-foreground'), foregroundOptions);
        const pg2 = new Particle(document.getElementById('particles-background'), backgroundOptions);

        return function cleanup() {
            pg1.destroy();
            pg2.destroy();
        };
    }, []);

    const { jobs } = useRouteData();

    const pdfPath = '/img/Medici+Ventures+Vision+Statement+and+Core+Values.pdf';
    const handlePdfDownload = (e) => {
        e.preventDefault();
        window.open(pdfPath);
    };

    const buildTeam = () => (
        team.map(({name, image, title, info}) => <TeamCard key={name} {...{ name, image, title, info }} />)
    );
    
    const buildListings = () => (
        jobs.map(({title, url}) => <ListingsRow key={title} {...{ title, url }} />)
    );

    return (
        <div className="team">
            <Meta {...meta} />
            <main role="main">
                <Hero>
                    <div id="particles-background" />
                    <div id="particles-foreground" />
                    <HeroContent>
                        <Blockquote>
                            &quot;We believe changing the world takes amazing
                            people, not just technology, and our employees are
                            our greatest strength.&quot;
                        </Blockquote>
                        <Cite>- Medici Ventures Core Values</Cite>
                        <ButtonLinkReversed to={pdfPath} onClick={handlePdfDownload}>Our Core Values</ButtonLinkReversed>
                    </HeroContent>
                </Hero>
                <TeamList>{buildTeam()}</TeamList>
                <JobListings>
                    <div className="join-our-team">
                        <h2>Join Our Team</h2>
                        <p>If you share our vision of the power of blockchain, then we’d love to talk with you.</p>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    {
                        jobs.length > 0 && (
                            <div className="listings">
                                {buildListings()}
                            </div>
                        )
                    }
                </JobListings>
            </main>
        </div>
    );
}
