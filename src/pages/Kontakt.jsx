import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Kontakt = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#phone-section') {
            const element = document.getElementById('phone-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [location]);

    return (
        <div className="page-container animate-fade-in">
            <div className="page-hero" style={{ backgroundImage: 'url(/kontakt-bg.jpeg)' }}>
                <div className="page-hero-content">
                    <h1>Kontakt</h1>
                    <p>Wir sind für Sie da</p>
                </div>
            </div>
            <div className="content-wrapper">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    marginBottom: '4rem'
                }}>
                    <div>
                        <h2>Treten Sie mit uns in Verbindung</h2>
                        <p style={{ marginBottom: '1.5rem', color: '#64748b' }}>
                            Sie haben Fragen zu unseren Dienstleistungen oder wünschen ein indiduelles Angebot?
                            Wir beraten Sie gerne unverbindlich.
                        </p>
                        <div style={{ marginBottom: '1rem' }}>
                            <strong>Adresse:</strong><br />
                            Max-Müllner-Str. 17<br />
                            80933 München<br />
                            Deutschland
                        </div>
                        <div style={{ marginBottom: '1rem' }} id="phone-section">
                            <strong>Telefon:</strong><br />
                            +49 163 3670880
                        </div>
                        <div>
                            <strong>E-Mail:</strong><br />
                            info@isar-gebaeudeservice.de
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kontakt;
