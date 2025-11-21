import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-carbon)',
            color: '#ffffff',
            padding: '3rem 0'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <img
                    src="/icon.svg"
                    alt="Metab Logo"
                    style={{ height: '40px', marginBottom: '1.5rem' }}
                />
                <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Metab. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
