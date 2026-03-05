import ContactForm from '../components/ContactForm';

const Gebaeudereinigung = () => {
    return (
        <div className="page-container animate-fade-in">
            <div className="page-hero" style={{ backgroundImage: 'url(/reinigung-bg.png)' }}>
                <div className="page-hero-content">
                    <h1>Gebäudereinigung</h1>
                    <p>Strahlende Sauberkeit für ein perfektes Erscheinungsbild</p>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="service-detail-section">
                    <div className="service-image-container">
                        <img src="/reinigung-bg.png" alt="Gebäudereinigung" />
                    </div>
                    <div className="service-text-container">
                        <h2>Makellose Sauberkeit innen und außen</h2>
                        <p>
                            Eine saubere Immobilie hebt nicht nur den ersten Eindruck – sie steigert auch den Wert
                            und die Zufriedenheit der Bewohner. Unser Team sorgt für ein hygienisches und einladendes Umfeld.
                        </p>
                        <h3>Wir bieten:</h3>
                        <ul className="tasks-list">
                            <li>Treppenhaus-, Keller- und Flurreinigung</li>
                            <li>Reinigung von Gemeinschaftsräumen & Eingangsbereichen</li>
                            <li>Außenflächen- und Eingangsbereichsreinigung</li>
                            <li>Fenster- und Fassadenreinigung</li>
                            <li>Mülltonnen- und Containerorganisation und -reinigung</li>
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

export default Gebaeudereinigung;
