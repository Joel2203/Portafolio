import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const btn = e.target.querySelector('button[type="submit"]');
    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_sli84mp';
    const userID = 'QuHI0lBxcZ-Er-i1A'; // Replace with your EmailJS user ID

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  };

  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">Contactame</h2>
      </div>
      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#161616] rounded-xl">
          <div className="p-10">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                  />
                </div>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu email"
                    className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                  />
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      placeholder="Tu mensaje"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-slate-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
