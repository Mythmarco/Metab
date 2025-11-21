import React from 'react';

const Hero = () => {
    return (
        <section id="home" style={{
            backgroundColor: 'transparent',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '0px',
            paddingBottom: '75px' // Space for header
        }}>
            <div className="container">
                <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                        src="/METAB_S.svg"
                        alt="METAB"
                        style={{ width: '500px', maxWidth: '100%', margin: 0, marginBottom: '1rem', display: 'block' }}
                    />
                    <h2 style={{
                        fontSize: '2rem',
                        color: 'var(--color-carbon)',
                        textAlign: 'center',
                        fontWeight: 600,
                        marginTop: 0
                    }}>
                        Soluciones Científicas para el Control Metabólico
                    </h2>
                    <a href="#contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>Contáctanos</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
