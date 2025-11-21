import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Advantages from './components/Advantages';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
    return (
        <div className="app">
            <ParticlesBackground />
            <Header />
            <main>
                <Hero />
                <About />
                <Advantages />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
}

export default App;
