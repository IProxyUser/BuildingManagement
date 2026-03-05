import ContactForm from '../components/ContactForm';

const Winterdienst = () => {
    return (
        <div className="page-container animate-fade-in">
            <div className="page-hero" style={{ backgroundImage: 'url(/winterdienst-bg.png)' }}>
                <div className="page-hero-content">
                    <h1>Winterdienst</h1>
                    <p>Sicherheit bei Eis und Schnee</p>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="service-detail-section">
                    <div className="service-image-container">
                        <img src="/winterdienst-bg.png" alt="Winterdienst" />
                    </div>
                    <div className="service-text-container">
                        <h2>Sicherheit bei Eis und Schnee</h2>
                        <p>
                            Bei Schnee und Eis sind wir für Sie da – rechtzeitig und professionell.
                            Unser Winterdienst sorgt für sichere Wege, Auffahrten und Zugänge.
                        </p>
                        <h3>Leistungen:</h3>
                        <ul className="tasks-list">
                            <li>Schneräumung auf Gehwegen, Zufahrten und Parkplätzen</li>
                            <li>Streudienst nach Vereinbarung</li>
                            <li>Einsatz gemäß örtlicher Regelungen und Sicherheitsstandards</li>
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

export default Winterdienst;
