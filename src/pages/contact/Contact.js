import React, { useState, useEffect } from 'react';
import postData from './contact.post';
import { HeroImg, H2, Inquiries, MapImg, ContactH2, ContactForm, ServerMsg, Button } from './contact.style';
import { meta } from '../../content/contact.content';

const heroImgSm = '/img/coliseum-closeup-600.jpg';
const heroImgMed = '/img/coliseum-closeup-900.jpg';
const heroImgLg = '/img/coliseum-closeup-1200.jpg';
const mapImg = '/img/contact-map.png';
const mapImgSm = '/img/contact-map-600.jpg';


export default function Contact() {
    useEffect(() => {
        document.title = meta.title;
    }, []);

    const defaultState = {
        fname: '',
        lname: '',
        company: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
        error: false,
        serverMsg: '',
        loading: false

    };
    const [state, setState] = useState(defaultState);
    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setState({
            ...defaultState,
            loading: true
        });
        postData('/contact', state)
            .then(res => res.json())
            .then((response) => {
                setState({
                    ...defaultState,
                    loading: false,
                    serverMsg: response.message
                });
            })
            .catch((error) => {
                setState({
                    ...state,
                    error: true,
                    loading: false,
                    serverMsg: error.message || error
                });
            });
    };

    const getButtonContent = () => (
        state.loading ?
            <Button type="submit" disabled>Submitting</Button> :
            <Button type="submit">Submit</Button>
    );
    // TODO: viewStates
    // TODO: unit tests
    // TODO: replace fetch with axios or polyfill

    return (
        <div className="contact">
            <main role="main">
                <HeroImg>
                    <source media="(min-width: 1200px)" srcSet={heroImgLg} />
                    <source media="(min-width: 900px)" srcSet={heroImgMed} />
                    <source media="(max-width: 600px)" srcSet={heroImgSm} />
                    <img src={heroImgMed} alt="Peace Coliseum" />
                </HeroImg>

                <Inquiries>
                    <div className="inquiries-data">
                        <div className="inquery-info">
                            <H2>Business Inquries</H2>
                            <p>USA / Global</p>
                            <p>801.947.3100</p>
                            <p>info@mediciventures.com</p>
                        </div>
                        <div className="inquery-info">
                            <H2>PR Inquiries</H2>
                            <p>USA / Global</p>
                            <p>801.947.3564</p>
                            <p>pr@mediciventures.com</p>
                        </div>
                    </div>
                    <MapImg>
                        <source media="(min-width: 601px)" srcSet={mapImg} />
                        <source media="(max-width: 600px)" srcSet={mapImgSm} />
                        <img src={mapImgSm} alt="Medici Ventures Location" />
                    </MapImg>

                </Inquiries>
                <section className="contact-us">
                    <ContactH2>Contact Us</ContactH2>
                    {
                        state.serverMsg &&
                        <ServerMsg>{state.serverMsg}</ServerMsg>
                    }

                    {
                        !state.serverMsg &&
                        <ContactForm onSubmit={handleSubmit}>
                            <fieldset>
                                <legend>Name<sup>*</sup></legend>
                                <label className="sub-label">
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="fname"
                                        value={state.fname}
                                        maxLength="30"
                                        required
                                        onChange={handleInputChange}
                                    />
                                    First Name
                                </label>
                                <label className="sub-label">
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lname"
                                        value={state.lname}
                                        maxLength="30"
                                        onChange={handleInputChange}
                                    />
                                    Last Name
                                </label>
                            </fieldset>
                            <label htmlFor="company">Company</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={state.company}
                                maxLength="100"
                                onChange={handleInputChange}
                            />
                            <label htmlFor="email">Email Address<sup>*</sup></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={state.email}
                                maxLength="100"
                                required
                                onChange={handleInputChange}
                            />
                            <label className="phone-number">
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={state.phone}
                                    maxLength="12"
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label htmlFor="subject">Subject<sup>*</sup></label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={state.subject}
                                maxLength="100"
                                required
                                onChange={handleInputChange}
                            />
                            <label htmlFor="message">Message<sup>*</sup></label>
                            <textarea
                                id="message"
                                maxLength="500"
                                name="message"
                                value={state.message}
                                required
                                onChange={handleInputChange}
                            />
                            {getButtonContent()}
                        </ContactForm>
                    }
                </section>
            </main>
        </div>
    );
}
