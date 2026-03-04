import ContactForm from '../components/ContactForm';

const Kleinreparaturen = () => {
    return (
        <div className="page-container animate-fade-in">
            <div className="page-hero" style={{ backgroundImage: 'url(/reparatur-bg.jpeg)' }}>
                <div className="page-hero-content">
                    <h1>Kleinreparaturen</h1>
                    <p>Schnelle Hilfe bei kleinen Mängeln</p>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="service-detail-section">
                    <div className="service-image-container">
                        <img src="/reparatur-bg.jpeg" alt="Kleinreparaturen" />
                    </div>
                    <div className="service-text-container">
                        <h2>Zügig und fachgerecht repariert</h2>
                        <p>
                            Sie haben kleine Schäden oder störende Mängel im Objekt? Wir beheben sie schnell
                            und kompetent – ohne lange Wartezeiten oder teure Fremdfirmen.
                        </p>
                        <h3>Dazu zählen u. a.:</h3>
                        <ul className="tasks-list">
                            <li>Austausch defekter Leuchtmittel</li>
                            <li>Justierung von Türen und Beschlägen</li>
                            <li>Beseitigung kleiner Mängel an Wänden oder Einbauten</li>
                            <li>Austausch von Dichtungen und Verschleißteilen</li>
                            <li>Kleinere technische Anpassungen</li>
                        </ul>
                    </div>
                </div>
                <div style={{ marginTop: '4rem' }}>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Kleinreparaturen;
