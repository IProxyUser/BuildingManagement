import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => {
                setIsSubmitted(true);
                // Reset form after 5 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: ''
                    });
                }, 5000);
            })
            .catch(error => console.error("Netlify Form Submission Error:", error));
    };

    return (
        <div className="contact-form-container">
            <div className="contact-form-header">
                <h2>Unverbindliche Anfrage</h2>
                <p>Haben Sie Fragen zu unseren Leistungen? Kontaktieren Sie uns gerne!</p>
            </div>

            {isSubmitted ? (
                <div className="success-message">
                    <div className="success-icon">✓</div>
                    <h3>Vielen Dank für Ihre Nachricht!</h3>
                    <p>Wir werden uns in Kürze bei Ihnen melden.</p>
                </div>
            ) : (
                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p style={{ display: 'none' }}>
                        <label>Don't fill this out if you're human: <input name="bot-field" onChange={handleChange} /></label>
                    </p>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Ihr Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-Mail *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Ihre E-Mail-Adresse"
                            />
                        </div>
                    </div>

                    <div className="form-group-row">
                        <div className="form-group">
                            <label htmlFor="phone">Telefon *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Ihre Telefonnummer"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Interesse an / Betreff</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                            >
                                <option value="">Bitte wählen...</option>
                                <option value="Hausmeisterservice">Hausmeisterservice</option>
                                <option value="Objektbetreuung">Objektbetreuung</option>
                                <option value="Gebäudereinigung">Gebäudereinigung</option>
                                <option value="Kleinreparaturen">Kleinreparaturen</option>
                                <option value="Grünanlagenpflege">Grünanlagenpflege</option>
                                <option value="Winterdienst">Winterdienst</option>
                                <option value="Sonstiges">Sonstiges</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="message">Nachricht *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Ihre Nachricht an uns..."
                            rows="5"
                        ></textarea>
                    </div>

                    <div className="form-submit">
                        <button type="submit" className="btn-submit">Nachricht Senden</button>
                        <p className="privacy-notice">* Pflichtfelder</p>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
