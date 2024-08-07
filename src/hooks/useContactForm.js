import { useState } from "react";
import emailjs from "@emailjs/browser";

function useContactForm(isHumanVerified, isVerifyExpired, formRef) {
    const [submitStatus, setSubmitStatus] = useState({ status: null, reason: "" });

    const [formInput, setFormInput] = useState({
        name: "",
        email: "",
        phone: "",
        intention: "",
        date: "",
        message: "Hi, ",
    })

    const handleOnFormChange = (e) => {
        const { name, email, phone, date, message, intention, value } = e.target;

        setFormInput({
            ...formInput,
            [name]: value,
            [email]: value,
            [phone]: value,
            [intention]: value,
            [date]: value,
            [message]: value,
        })

    }

    const handleRadioButton = (event) => {
        if (event.target.value === formInput.intention) {
            setFormInput({ ...formInput, intention: "" })
        } else {
            setFormInput({ ...formInput, intention: event.target.value })
        }
    }
    //final submission after recaptcha validation
    const handleFormSubmit = async () => {
        // setLoading(true);
        // recaptchaRef.current.execute();
        setSubmitStatus({ status: "loading", reason: "" });

        if (!isHumanVerified) {
            setSubmitStatus({ status: "error", reason: "You are a robot!" })
        } else if (isVerifyExpired) {
            setSubmitStatus({ status: "error", reason: "Your verification expired. Please reverify!" })
        } else {
            try {
                const response = await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current)

                if (response) {
                    setSubmitStatus({ status: "success", reason: "You have successfully send your informtion!" })
                }
            } catch (error) {
                setSubmitStatus({ status: "error", reason: error })
            }
        }
    }


    const handler = {
        formInput,
        handleOnFormChange,
        handleRadioButton,
        handleFormSubmit,
    }


    return { ...handler, submitStatus }
}

export default useContactForm;