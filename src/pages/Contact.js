import React from "react";
import Header from "../shared/Header";
import { url } from "../environment";
import tick from '../assets/su.png';
import error from '../assets/er.png';

import { message } from 'antd';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 327,
    bgcolor: 'background.paper',
    borderRadius: '25px',

    boxShadow: 24,
    pt: 4,
    px: 4,
    pb: 5,
};
const Contact = () => {
    const [FromEmail, setFromEmail] = React.useState('');
    const [Message, setMessage] = React.useState('');
    const [IsLoading, setIsLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [messageApi, contextHolder] = message.useMessage();
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleAdd = (e) => {
        e.preventDefault();

        if (FromEmail === '') {
            setErrorMessage('Email cannot be empty');
        } else if (!isValidEmail(FromEmail)) {
            setErrorMessage('Invalid email format');
        } else {
            // Perform the desired action when the email is valid
            console.log('Email:', FromEmail);
            // Clear the input and error message
            addQuery()

        }
    };

    const isValidEmail = (value) => {
        // Regular expression pattern for email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(value);
    };
    const addQuery = () => {

        fetch(`${url}/user/queries/add`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify({


                "from": FromEmail,
                "message": Message,
            })
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.message === 'Query  has been sent Succesfully') {

                    setFromEmail('');
                    setErrorMessage('');
                    handleOpen()
                }
                else {
                    setErrorMessage(response.message);

                    handleOpen1()
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            {contextHolder}
            <Header />
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={tick} width={120} height={120} />
                        <h3 style={{ color: 'black' }} className="mt-4" >
                            <b>Query has been send Successfully!</b>
                        </h3>
                        <Typography id="modal-modal-description" style={{ fontSize: '14px' }} sx={{ mt: 3 }}>


                        </Typography>

                        <div class="form-inner mt-5 mb-2" style={{ background: 'none !important' }}>
                            <button style={{ width: '100%', height: '50px' }} class="primary-btn1 mt-4" onClick={(e) => { setOpen(false); setMessage(''); setFromEmail('') }}>  Ok</button>

                        </div>

                    </div>
                </Box>
            </Modal>
            <Modal
                open={open1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={error} width={120} height={120} />
                        <h3 style={{ color: 'black' }} className="mt-4" >
                            <b>{errorMessage}</b>
                        </h3>
                        <Typography id="modal-modal-description" style={{ fontSize: '14px' }} sx={{ mt: 3 }}>


                        </Typography>

                        <div class="form-inner mt-5 mb-2" style={{ background: 'none !important' }}>
                            <button style={{ width: '100%', height: '50px' }} class="primary-btn1 mt-4" onClick={(e) => setOpen1(false)}>  Ok</button>

                        </div>

                    </div>
                </Box>
            </Modal>
            <div class="inner-page-banner">
                <div class="breadcrumb-vec-btm">
                    <img class="img-fluid" src="assets/images/bg/inner-banner-btm-vec.png" alt="" />
                </div>
                <div class="container">
                    <div class="row justify-content-center align-items-center text-center">
                        <div class="col-lg-6 align-items-center">
                            <div class="banner-content">
                                <h1>Contact Us</h1>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="banner-img d-lg-block d-none">
                                <div class="banner-img-bg">
                                    <img class="img-fluid" src="assets/images/bg/inner-banner-vec.png" alt="" />
                                </div>
                                <img class="img-fluid" src="https://demo.egenslab.com/html/scooby/preview/assets/images/bg/inner-banner-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact-pages pt-120 mb-120">
                <div class="container">
                    <div class="row align-items-center g-lg-4 gy-5">

                        <div class="col-lg-7">
                            <div class="contact-form">
                                <h2>Have Any Questions</h2>
                                <form>
                                    <div class="row">
                                        <div class="col-lg-12 mb-40">
                                            <div class="form-inner">
                                                <input type="text" placeholder="Type Your Email" value={FromEmail} onChange={(e) => setFromEmail(e.target.value)} />
                                            </div>
                                            {errorMessage && <p style={{ color: 'red', }}>{errorMessage}</p>}
                                        </div>

                                        <div class="col-lg-12 mb-40">
                                            <div class="form-inner">
                                                <textarea placeholder="Your message" value={Message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-inner">
                                                <button class="primary-btn1" onClick={handleAdd}>Send Message <i class="bi bi-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;