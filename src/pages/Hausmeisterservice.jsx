import ContactForm from '../components/ContactForm';

const Hausmeisterservice = () => {
    return (
        <div className="page-container animate-fade-in">
            <div className="page-hero" style={{ backgroundImage: 'url(/hausmeister-bg.jpeg)' }}>
                <div className="page-hero-content">
                    <h1>Hausmeisterservice</h1>
                    <p>Professionelle Betreuung rund um Ihre Immobilie</p>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="service-detail-section">
                    <div className="service-image-container">
                        <img src="/hausmeister-bg.jpeg" alt="Hausmeisterservice" />
                    </div>
                    <div className="service-text-container">
                        <h2>Umfassender Service für Ihr Gebäude</h2>
                        <p>
                            Unser Hausmeisterservice sorgt dafür, dass Ihr Objekt in allen Bereichen zuverlässig betreut wird.
                            Wir übernehmen regelmäßige Kontrollgänge, kümmern uns um Ordnung und sind Ihr Ansprechpartner vor Ort
                            – für Eigentümer, Hausverwaltungen und Mieter.
                        </p>
                        <h3>Typische Aufgaben:</h3>
                        <ul className="tasks-list">
                            <li>Regelmäßige Objekt- und Hausbegehungen</li>
                            <li>Kontrolle von Ordnung und Sauberkeit</li>
                            <li>Ansprechpartner für Eigentümer, Hausverwaltungen und Mieter</li>
                            <li>Überwachung des allgemeinen Gebäudezustands</li>
                            <li>Meldung von Mängeln und Schäden</li>
                            <li>Koordination externer Dienstleister</li>
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

export default Hausmeisterservice;
