import React from 'react';

const Header = () => {
    return (
        <header style={{
            padding: '0.25rem 0',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div className="logo">
                    <a href="#home">
                        <img
                            src="/Metab_Logo.svg"
                            alt="Metab Logo"
                            style={{ height: '120px' }}
                        />
                    </a>
                </div>
                <nav>
                    <ul style={{
                        display: 'flex',
                        gap: '1rem',
                        listStyle: 'none',
                        alignItems: 'center', // Ensure vertical centering
                        margin: 0,
                        padding: 0
                    }}>
                        <li><a href="#home" style={{ color: 'var(--color-carbon)', textDecoration: 'none', fontWeight: 600 }}>Inicio</a></li>
                        <li><a href="#about" style={{ color: 'var(--color-carbon)', textDecoration: 'none', fontWeight: 600 }}>Sobre Nosotros</a></li>
                        <li><a href="#advantages" style={{ color: 'var(--color-carbon)', textDecoration: 'none', fontWeight: 600 }}>Ventajas</a></li>
                        <li><a href="#contact" className="btn btn-primary">Contáctanos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
