import ContactForm from '../components/ContactForm';

const Objektbetreuung = () => {
    return (
        <div className="page-container animate-fade-in">
            <div className="page-hero" style={{ backgroundImage: 'url(/objekt-bg.jpeg)' }}>
                <div className="page-hero-content">
                    <h1>Objektbetreuung</h1>
                    <p>Werterhalt und Sicherheit für Ihre Immobilien</p>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="service-detail-section">
                    <div className="service-image-container">
                        <img src="/objekt-bg.jpeg" alt="Objektbetreuung" />
                    </div>
                    <div className="service-text-container">
                        <h2>Werterhalt durch professionelle Betreuung</h2>
                        <p>
                            Im Rahmen der Objektbetreuung kümmern wir uns um den Werterhalt Ihrer Wohn- oder Gewerbeimmobilie.
                            Durch regelmäßige Kontrollen erkennen wir Schäden frühzeitig und sorgen für eine schnelle
                            Weiterleitung an zuständige Stellen.
                        </p>
                        <h3>Unsere Leistungen:</h3>
                        <ul className="tasks-list">
                            <li>Ganzheitliche Betreuung von Wohn- und Gewerbeobjekten</li>
                            <li>Regelmäßige Objektkontrollen und Begehungen</li>
                            <li>Überwachung von Gemeinschaftsflächen</li>
                            <li>Dokumentation und Meldung von Mängeln</li>
                            <li>Koordination von Handwerks- und Servicefirmen</li>
                            <li>Unterstützung der Hausverwaltung im Tagesgeschäft</li>
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

export default Objektbetreuung;
