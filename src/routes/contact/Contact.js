import React, { useState, useContext } from 'react';
import Meta from '../../components/Meta';
import postData from './contact.post';
import {
    HeroImg,
    H2,
    Inquiries,
    MapImg,
    ContactH2,
    ContactForm,
    ServerMsg,
    Button,
    ErrorMessage,
} from './contact.style';
import { meta } from '../../content/contact.content';
import { Context } from '../../store';
import isEmail from './utils/isEmail';

const emailServiceUrl =
    'https://us-central1-corp-200921.cloudfunctions.net/medici-contact-form-service';

const heroImgSm = '/img/coliseum-closeup-600.jpg';
const heroImgMed = '/img/coliseum-closeup-900.jpg';
const heroImgLg = '/img/coliseum-closeup-1200.jpg';
const mapImg = '/img/contact-map.png';
const mapImgSm = '/img/contact-map-600.jpg';

export default function Contact() {
    const { store, dispatch } = useContext(Context);
    const defaultState = {
        error: false,
        formErrorMsg: '',
        serverMsg: '',
        loading: false,
    };
    const [state, setState] = useState(defaultState);
    const defaultFormData = {
        fname: '',
        lname: '',
        company: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    };
    const [formData, setFormData] = useState(defaultFormData);
    const handleInputChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const formValidation = formObject => {
        const isCorrectEmailFormat = isEmail(formObject.email);
        if (!isCorrectEmailFormat) {
            setState({
                formErrorMsg: 'Incorrect email format',
                loading: false,
            });
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        setState({
            ...defaultState,
            loading: true,
        });

        formValidation(formData);
        postData(emailServiceUrl, formData)
            .then(res => res.json())
            .then(response => {
                setState({
                    ...defaultState,
                    loading: false,
                    serverMsg: response.message,
                });
                setFormData({
                    ...defaultFormData,
                });
            })
            .catch(error => {
                setState({
                    ...state,
                    error: true,
                    loading: false,
                    serverMsg: error.message || error,
                });
            });
    };

    const getButtonContent = () =>
        state.loading ? (
            <Button type="submit" disabled isMobile={store.isMobile}>
                Submitting
            </Button>
        ) : (
            <Button type="submit" isMobile={store.isMobile}>
                Submit
            </Button>
        );
    // TODO: unit tests
    // TODO: replace fetch with axios or polyfill

    const { fname, lname, company, phone, email, subject, message } = formData;

    return (
        <div className="contact">
            <Meta {...meta} />
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
                    {state.serverMsg && (
                        <ServerMsg>{state.serverMsg}</ServerMsg>
                    )}
                    {!state.serverMsg && (
                        <ContactForm onSubmit={handleSubmit}>
                            <fieldset>
                                <legend>
                                    Name<sup>*</sup>
                                </legend>
                                <label className="sub-label">
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="fname"
                                        value={fname}
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
                                        value={lname}
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
                                value={company}
                                maxLength="100"
                                onChange={handleInputChange}
                            />
                            <label htmlFor="email">
                                Email Address<sup>*</sup>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                maxLength="100"
                                required
                                onChange={handleInputChange}
                            />
                            {state.formErrorMsg && (
                                <ErrorMessage>
                                    {state.formErrorMsg}
                                </ErrorMessage>
                            )}
                            <label className="phone-number">
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    maxLength="12"
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label htmlFor="subject">
                                Subject<sup>*</sup>
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={subject}
                                maxLength="100"
                                required
                                onChange={handleInputChange}
                            />
                            <label htmlFor="message">
                                Message<sup>*</sup>
                            </label>
                            <textarea
                                id="message"
                                maxLength="500"
                                name="message"
                                value={message}
                                required
                                onChange={handleInputChange}
                            />
                            {getButtonContent()}
                        </ContactForm>
                    )}
                </section>
            </main>
        </div>
    );
}
