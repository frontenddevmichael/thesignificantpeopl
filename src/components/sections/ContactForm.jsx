import { useState, useCallback } from 'react';
import Button from '../ui/Button';
import Toast from '../ui/Toast';
import { churchInfo } from '../../data/churchInfo';
import styles from './ContactForm.module.css';

const waNumber = churchInfo.contact.whatsapp[0].replace(/^0/, '234');

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Invalid email address';
  if (!values.message.trim()) errors.message = 'Message is required';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const fieldErrors = validate({ ...values, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || null }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(values);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(validationErrors).length !== 0) return;

    setSubmitting(true);

    const text = encodeURIComponent(
      `Hello, my name is ${values.name}.\nEmail: ${values.email}\n\n${values.message}`
    );

    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');

    setValues({ name: '', email: '', message: '' });
    setTouched({});
    setErrors({});
    setSubmitting(false);
    setToast({ type: 'success', message: 'WhatsApp opened. Send your message to reach us.' });
  };

  const dismissToast = useCallback(() => setToast(null), []);

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="cf-name">Name</label>
            <input id="cf-name" name="name" type="text" className={`${styles.input} ${errors.name && touched.name ? styles.inputError : ''}`} value={values.name} onChange={handleChange} onBlur={handleBlur} disabled={submitting} />
            {errors.name && touched.name && <span className={styles.error}>{errors.name}</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="cf-email">Email</label>
            <input id="cf-email" name="email" type="email" className={`${styles.input} ${errors.email && touched.email ? styles.inputError : ''}`} value={values.email} onChange={handleChange} onBlur={handleBlur} disabled={submitting} />
            {errors.email && touched.email && <span className={styles.error}>{errors.email}</span>}
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="cf-message">Message</label>
          <textarea id="cf-message" name="message" rows={5} className={`${styles.textarea} ${errors.message && touched.message ? styles.inputError : ''}`} value={values.message} onChange={handleChange} onBlur={handleBlur} disabled={submitting} />
          {errors.message && touched.message && <span className={styles.error}>{errors.message}</span>}
        </div>
        <div>
          <Button variant="primary" type="submit" disabled={submitting}>
            {submitting ? 'Opening WhatsApp\u2026' : 'Send via WhatsApp'}
          </Button>
        </div>
      </form>
      {toast && <Toast type={toast.type} message={toast.message} onClose={dismissToast} />}
    </>
  );
}
