
import ReCAPTCHA from 'react-google-recaptcha';
import { createRef } from 'react';
import useRecaptcha from '../../hooks/useRecaptcha';

export default function ReCaptcha() {
    const recaptchaRef = createRef();
    const { handleExpired, getLoadStatus, handleHumanVerify } = useRecaptcha();
    return (
        <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.REACT_APP_SITE_KEY}
            onChange={(token) => handleHumanVerify(token)}
            size="normal"
            onExpired={(expire) => handleExpired(expire)}
            asyncScriptOnLoad={() => getLoadStatus(true)}
        >
        </ReCAPTCHA>
    )
}