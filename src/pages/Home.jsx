import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import './Home.css';

const Home = () => {
    const contactRef = useRef(null);
    const navigate = useNavigate();

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCallAction = () => {
        navigate('/kontakt#phone-section');
    };

    const services = [
        { title: 'Hausmeisterservice', path: '/hausmeisterservice', image: '/hausmeister-bg.jpeg' },
        { title: 'Objektbetreuung', path: '/objektbetreuung', image: '/objekt-bg.png' },
        { title: 'Gebäudereinigung', path: '/gebaeudereinigung', image: '/reinigung-bg.png' },
        { title: 'Kleinreparaturen', path: '/kleinreparaturen', image: '/reparatur-bg.jpeg' },
        { title: 'Grünanlagenpflege', path: '/gruenanlagenpflege', image: '/gruenanlagen-bg.jpeg' },
        { title: 'Winterdienst', path: '/winterdienst', image: '/winterdienst-bg.png' }
    ];

    return (
        <div className="page-container animate-fade-in">
            <div className="page-hero home-hero" style={{ backgroundImage: 'url(/home-bg.png)' }}>
                <div className="page-hero-content">
                    <h1>Willkommen bei ISAR Gebäudeservice</h1>
                    <p>Ihr zuverlässiger Hausmeisterservice in München und Umgebung für professionelle Objektbetreuung, Gebäudereinigung und Grünanlagenpflege</p>
                    <div className="hero-cta-container">
                        <button className="btn-primary" onClick={scrollToContact}>Angebot anfordern</button>
                        <button className="btn-outline" onClick={handleCallAction}>Jetzt anrufen</button>
                    </div>
                </div>
            </div>

            <div className="content-wrapper">
                <section className="home-services-intro">
                    <h2>Unsere Dienstleistungen</h2>
                    <p>
                        Vom klassischen Hausmeisterservice über die professionelle Gebäudereinigung bis hin
                        zur spezialisierten Grünanlagenpflege – wir bieten Ihnen ein umfassendes Paket für den
                        Werterhalt und die Pflege Ihrer Immobilie.
                    </p>
                </section>

                <div className="service-grid">
                    {services.map((service, index) => (
                        <Link to={service.path} key={index} className="service-card">
                            <img src={service.image} alt={service.title} className="service-card-img" />
                            <div className="service-card-content">
                                <h3>{service.title}</h3>
                                <span className="read-more">Mehr erfahren →</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <section className="why-us-section">
                    <div className="why-us-content">
                        <h2>Warum wir?</h2>
                        <p>
                            Wir kombinieren handwerkliches Know-how mit Serviceorientierung und koordinieren
                            alle Aufgaben rund um Ihre Immobilie zuverlässig und professionell. Unser Ziel ist:
                            Werterhalt, Sicherheit und Zufriedenheit – für Eigentümer, Verwalter und Mieter gleichermaßen.
                        </p>
                    </div>
                </section>

                <div style={{ marginTop: '6rem' }} ref={contactRef}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 id="contact-form-section">Unverbindliche Anfrage</h2>
                        <p>Gerne erstellen wir Ihnen ein unverbindliches Angebot für Ihr Objekt.</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Home;
