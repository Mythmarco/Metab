import React from 'react';

const advantages = [
    {
        title: "Respaldo Científico Real",
        text: "Cada protocolo METAB parte de evidencia clínica actualizada y estudios revisados por pares, para que tomes decisiones basadas en ciencia, no en tendencias."
    },
    {
        title: "Calidad y Trazabilidad",
        text: "Trabajamos sólo con productos fabricados bajo Buenas Prácticas (GMP), con trazabilidad completa y controles de calidad documentados en cada lote."
    },
    {
        title: "Enfoque Integral del Paciente",
        text: "No nos limitamos al peso: abordamos control metabólico, balance hormonal y bienestar global, integrando nutrición, estilo de vida y terapias avanzadas."
    },
    {
        title: "Protocolos Claros y Aplicables",
        text: "Recibes guías clínicas estructuradas, rangos sugeridos, criterios de seguimiento y material educativo para que puedas implementar de forma segura y ordenada."
    },
    {
        title: "Innovación Biomédica Responsable",
        text: "Acercamos las terapias metabólicas más avanzadas, siempre con un análisis crítico de la evidencia y criterios de uso responsable en la práctica diaria."
    }
];

const Advantages = () => {
    return (
        <section id="advantages" className="section" style={{ backgroundColor: 'var(--color-silver-mist)' }}>
            <div className="container">
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    marginBottom: '3rem',
                    color: 'var(--color-carbon)'
                }}>
                    Ventajas para tu práctica Clínica
                </h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem'
                }}>
                    {advantages.map((adv, index) => (
                        <div key={index} style={{
                            backgroundColor: '#ffffff',
                            padding: '2rem',
                            borderRadius: '12px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'default',
                            flex: '1 1 300px',
                            maxWidth: '400px'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                            }}
                        >
                            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    color: 'var(--color-carbon)',
                                    borderBottom: '2px solid var(--color-frosted-mint)',
                                    paddingBottom: '0.5rem',
                                    display: 'inline-block',
                                    marginBottom: 0
                                }}>
                                    {adv.title}
                                </h3>
                            </div>
                            <p style={{
                                color: 'var(--color-carbon)',
                                fontSize: '1rem',
                                lineHeight: '1.6'
                            }}>
                                {adv.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages;
