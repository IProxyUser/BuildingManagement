import React from 'react';

const Impressum = () => {
    return (
        <div className="page-container animate-fade-in">
            <div className="page-hero" style={{ backgroundImage: 'url(/office-bg.jpeg)' }}>
                <div className="page-hero-content">
                    <h1>Impressum</h1>
                    <p>Rechtliche Informationen</p>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="legal-content">
                    <section style={{ marginBottom: '2rem' }}>
                        <h2>Angaben gemäß § 5 TMG</h2>
                        <p>
                            ISAR Gebäudeservice<br />
                            Inhaber: Noureddine Ramzi
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3>Adresse:</h3>
                        <p>
                            Max-Müllner-Str. 17<br />
                            80933 München<br />
                            Deutschland
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3>Telefon:</h3>
                        <p>01783299943</p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3>E-Mail:</h3>
                        <p>info@isar-gebaeudeservice.de</p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
                        <p>Noureddine Ramzi</p>
                    </section>

                    <hr style={{ margin: '3rem 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />

                    <section style={{ marginBottom: '2rem' }}>
                        <h2>Haftung für Inhalte</h2>
                        <p>
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                        <p>
                            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2>Haftung für Links</h2>
                        <p>
                            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                        </p>
                        <p>
                            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2>Urheberrecht</h2>
                        <p>
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                        </p>
                        <p>
                            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
