import { useState } from 'react';
import Button from '../ui/Button';
import styles from './ContactForm.module.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(validationErrors).length === 0) {
      // TODO: wire to backend (Formspree/EmailJS/custom) — confirm with client
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="cf-name">Name</label>
          <input id="cf-name" name="name" type="text" className={`${styles.input} ${errors.name && touched.name ? styles.inputError : ''}`} value={values.name} onChange={handleChange} onBlur={handleBlur} />
          {errors.name && touched.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" className={`${styles.input} ${errors.email && touched.email ? styles.inputError : ''}`} value={values.email} onChange={handleChange} onBlur={handleBlur} />
          {errors.email && touched.email && <span className={styles.error}>{errors.email}</span>}
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" rows={5} className={`${styles.textarea} ${errors.message && touched.message ? styles.inputError : ''}`} value={values.message} onChange={handleChange} onBlur={handleBlur} />
        {errors.message && touched.message && <span className={styles.error}>{errors.message}</span>}
      </div>
      <div>
        <Button variant="primary" type="submit">Send Message</Button>
      </div>
      <span className={styles.hint}>// TODO: wire to backend — confirm with client</span>
    </form>
  );
}
