import React, { useEffect } from 'react';

const ContactForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://js-na2.hsforms.net/forms/embed/244423874.js";
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--color-warm-greige)' }}>
            <div className="container">
                <div style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    backgroundColor: '#ffffff',
                    padding: '3rem',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}>
                    <h2 style={{
                        textAlign: 'center',
                        marginBottom: '2rem',
                        color: 'var(--color-carbon)'
                    }}>
                        Contact Us
                    </h2>
                    <div
                        className="hs-form-frame"
                        data-region="na2"
                        data-form-id="272a0eb7-6b50-4292-a07d-656a0b1474d2"
                        data-portal-id="244423874"
                    >
                        {/* HubSpot form will render here */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
