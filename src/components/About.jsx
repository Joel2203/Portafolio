import React from 'react'
import aboutImg from '../assets/dev.jpg'

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">

        <div className="md:grid md:grid-cols-2 sm:py-16">

        <div className="mt-4 md:mt-0 text-left flex">
            <div className="my-auto mx-6">
                <h2 className="text-4xl font-bold mb-4 primary-color">Sobre mi</h2>
                <p className="text-base lg:text-lg">
                Soy un Ingeniero Informático altamente competente con experiencia destacada en la gestión de proyectos tecnológicos, programación, desarrollo de aplicaciones para escritorio y ciberseguridad. Mi dedicación a la tecnología y la capacidad para tomar decisiones estratégicas me impulsan a continuar creciendo y aprendiendo en el ámbito de la informática.
                </p>
            </div>
        </div>

        <img className="mx-auto rounded-3xl py-8 md:py-0" src={aboutImg} width={300} height={300} />

    </div>
    </div>
  )
}

export default About