import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2 className="footer-logo">ISAR Gebäudeservice</h2>
                    <p className="footer-description">
                        Ihr zuverlässiger Hausmeisterservice in München und Umgebung für professionelle Objektbetreuung, Gebäudereinigung und Grünanlagenpflege
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
                            <span>Max-Müllner-Str. 17, 80933 München</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={20} className="contact-icon" />
                            <span>+49 163 3670880</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={20} className="contact-icon" />
                            <span>info@isar-gebaeudeservice.de</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ISAR Gebäudeservice. Alle Rechte vorbehalten.</p>
                <div className="footer-bottom-links">
                    <Link to="/impressum">Impressum</Link>
                    <Link to="/datenschutz">Datenschutzerklärung</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
