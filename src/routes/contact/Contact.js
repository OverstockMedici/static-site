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
                ...state,
                formErrorMsg: 'Incorrect email format',
                loading: false,
            });
            return false;
        }
        return true;
    };

    const handleSubmit = e => {
        e.preventDefault();
        setState({
            ...defaultState,
            loading: true,
        });

        const isValid = formValidation(formData);
        if (!isValid) return;

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
            <Button data-testid="submit-button" type="submit" disabled isMobile={store.isMobile}>
                Submitting
            </Button>
        ) : (
            <Button data-testid="submit-button-mobile" type="submit" isMobile={store.isMobile}>
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

                <Inquiries>
                    <div className="inquiries-data">
                        <div className="inquery-info">
                            <H2>Business Inquries</H2>
                            <p>USA / Global</p>
                            <p>801.947.3100</p>
                            <p>info@pelionvp.com</p>
                        </div>
                        <div className="inquery-info">
                            <H2>PR Inquiries</H2>
                            <p>USA / Global</p>
                            <p>801.947.3564</p>
                            <p>pr@pelionvp.com</p>
                        </div>
                    </div>
                </Inquiries>
            </main>
        </div>
    );
}
