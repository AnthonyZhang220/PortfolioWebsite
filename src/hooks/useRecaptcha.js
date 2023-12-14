import { useState } from 'react'
import axios from "axios";

function useRecaptcha() {
  const [isVerifyExpired, setIsVerifyExpired] = useState(false);
  const [isHumanVerified, setIsHumanVerified] = useState(false);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);

  const getLoadStatus = (status) => {
    setIsRecaptchaLoaded(status);
  }

  const handleExpired = () => {
    setIsVerifyExpired(true);
  }

  //verify recaptcha with Google on backend
  const handleHumanVerify = async (token) => {
    console.log(token)
    const captchaToken = token;

    try {
      const res = await axios.post("https://anthonyzhang.netlify.app/recaptcha", { captchaToken }, {
        headers: {
          'Access-Control-Allow-Origin': "http://127.0.0.1:3000"
        }
      })
      if (res.data === "Human") {
        setIsHumanVerified(true);
      } else {
        setIsHumanVerified(false);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { isHumanVerified, isVerifyExpired, handleExpired, getLoadStatus, isRecaptchaLoaded, handleHumanVerify }
}

export default useRecaptcha