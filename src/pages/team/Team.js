import React, { useEffect, useContext } from 'react';
import Particle from 'particleground-light';
import { Link } from 'components/Router';
import { ButtonLinkReversed } from '../../components/ButtonLink';
import { Hero, HeroContent, Blockquote, Cite, TeamList, JobListings, StyledArrow } from './team.style';
import { foregroundOptions, backgroundOptions } from './team.particleground';
import { content, meta } from '../../content/team.content';
import { useRouteData } from 'react-static';

const { team } = content;
const arrowRight = '/img/arrow-right-green.png';

export default function Team() {
    useEffect(() => {
        document.title = meta.title;
        // TODO dynamically import Particle
        const pg1 = new Particle(document.getElementById('particles-foreground'), foregroundOptions);
        const pg2 = new Particle(document.getElementById('particles-background'), backgroundOptions);

        return function cleanup() {
            pg1.destroy();
            pg2.destroy();
        };
    }, []);

    const { jobs } = useRouteData();
    console.log('jobs: ', jobs);

    const pdfPath = '/img/Medici+Ventures+Vision+Statement+and+Core+Values.pdf';
    const handlePdfDownload = (e) => {
        e.preventDefault();
        window.open(pdfPath);
    };
    const buildTeam = () => (
        team.map(employee => (
            <figure key={employee.name}>
                <img src={employee.image} alt={employee.name} />
                <figcaption>
                    <div className="employee-name">{employee.name}</div>
                    <div className="employee-title">/ {employee.title}</div>
                    <div className="employee-info">{employee.info}</div>
                </figcaption>
            </figure>
        ))
    );

    const buildListings = () => (
        jobs.map(listing => (
            <div key={listing.title} className="job-listing">
                <a href={listing.url} target="_blank" rel="noopener noreferrer"><h3>{listing.title}</h3></a>
                <div className="job-description">
                    <a href={listing.url} title="Read Full Job Description" target="_blank" rel="noopener noreferrer">
                        <StyledArrow src={arrowRight} alt="View Job" />
                    </a>
                </div>
            </div>
        ))
    );

    return (
        <div className="team">
            <main role="main">
                <Hero>
                    <div id="particles-background" />
                    <div id="particles-foreground" />
                    <HeroContent>
                        <Blockquote>
                            &quot;We believe changing the world takes amazing people, not just technology, and our employees are our greatest strength.&quot;
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
