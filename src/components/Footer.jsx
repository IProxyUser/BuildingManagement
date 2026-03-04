import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2 className="footer-logo">ISAR Service</h2>
                    <p className="footer-description">
                        Ihr zuverlässiger Partner für Gebäudemanagement. Wir bieten professionelle Dienstleistungen für die Werterhaltung und Pflege Ihrer Immobilien – vom Hausmeisterservice bis zur Grünanlagenpflege.
                    </p>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Dienstleistungen</h3>
                    <ul className="footer-links">
                        <li><Link to="/hausmeisterservice">Hausmeisterservice</Link></li>
                        <li><Link to="/objektbetreuung">Objektbetreuung</Link></li>
                        <li><Link to="/gebaeudereinigung">Gebäudereinigung</Link></li>
                        <li><Link to="/kleinreparaturen">Kleinreparaturen</Link></li>
                        <li><Link to="/gruenanlagenpflege">Grünanlagenpflege</Link></li>
                        <li><Link to="/winterdienst">Winterdienst</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Kontakt</h3>
                    <div className="footer-contact-info">
                        <div className="contact-item">
                            <MapPin size={20} className="contact-icon" />
                            <span>Musterstraße 123, 12345 Musterstadt</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={20} className="contact-icon" />
                            <span>+49 123 456789</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={20} className="contact-icon" />
                            <span>info@isarservice.de</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ISAR Gebäudeservice. Alle Rechte vorbehalten.</p>
                <div className="footer-bottom-links">
                    <Link to="#">Impressum</Link>
                    <Link to="#">Datenschutzerklärung</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
