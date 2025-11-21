import React from 'react';

const About = () => {
    return (
        <section id="about" className="section" style={{
            backgroundColor: 'transparent',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <div>
                        <h2 style={{
                            fontSize: '2.5rem',
                            marginBottom: '1.5rem',
                            color: 'var(--color-carbon)'
                        }}>
                            Sobre Nosotros
                        </h2>
                        <p style={{
                            marginBottom: '1.5rem',
                            fontSize: '1.1rem',
                            color: 'var(--color-carbon)'
                        }}>
                            METAB es una marca guiada por la ciencia, enfocada en la salud metabólica. Transformamos la evidencia más reciente en obesidad y medicina metábolica en herramientas claras y prácticas que apoyan a los profesionales de la salud en su práctica diaria.
                        </p>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-carbon)'
                        }}>
                            Basados en nuestros pilares: <strong>ciencia, Balance y transformación</strong>, diseñamos recursos educativos, marcos clínicos y materiales para pacientes que combinan rigor científico con simplicidad y elegancia. Nuestro objetivo es ayudar a los médicos a ofrecer una atención metabólica más segura, informada y efectiva, creando al mismo tiempo una experiencia tranquila y confiable para los médicos y sus pacientes.
                        </p>
                    </div>
                    <div style={{
                        background: 'linear-gradient(135deg, #e0e0e0 0%, #ffffff 100%)', // Subtle gray to white gradient
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)', // Enhanced shadow for impact
                        height: '400px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* Placeholder for an image if needed later */}
                        <img src="/Central_Metab.svg" alt="Metab Graphic" style={{ width: '60%', opacity: 1 }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
