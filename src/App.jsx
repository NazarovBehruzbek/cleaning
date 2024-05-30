import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import './styles.css'
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import Timeline from './timeline';
export default function App() {
  const {t,i18n} = useTranslation()
  useEffect(() => {
    Aos.init({
      duration: 900,
      offset: 100,
      easing: 'ease',
      once: true,
    });
  }, []);
  return (
    <>
  <Timeline/>
    </>
  )
}
