import ContactForm from '../components/ContactForm';

const Gruenanlagenpflege = () => {
    return (
        <div className="page-container animate-fade-in">
            <div className="page-hero" style={{ backgroundImage: 'url(/gruenanlagen-bg.jpeg)' }}>
                <div className="page-hero-content">
                    <h1>Grünanlagenpflege</h1>
                    <p>Gepflegte Gärten und Außenanlagen</p>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="service-detail-section">
                    <div className="service-image-container">
                        <img src="/gruenanlagen-bg.jpeg" alt="Grünanlagenpflege" />
                    </div>
                    <div className="service-text-container">
                        <h2>Ihre Visitenkarte im Freien</h2>
                        <p>
                            Eine gepflegte Außenanlage beeinflusst den ersten Eindruck Ihrer Immobilie maßgeblich.
                            Wir übernehmen sowohl regelmäßige Pflege als auch saisonale Aufgaben.
                        </p>
                        <h3>Unsere Leistungen:</h3>
                        <ul className="tasks-list">
                            <li>Rasenmähen und Pflege</li>
                            <li>Hecken- und Strauchschnitt</li>
                            <li>Unkrautentfernung</li>
                            <li>Pflege von Beeten und Gehwegen</li>
                            <li>Laub- und Abfallbeseitigung</li>
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

export default Gruenanlagenpflege;
