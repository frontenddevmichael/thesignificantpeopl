import { useState } from 'react';
import Button from '../ui/Button';
import styles from './ContactForm.module.css';

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  if (!values.request.trim()) errors.request = 'Prayer request is required';
  return errors;
}

export default function PrayerRequestForm() {
  const [values, setValues] = useState({ name: '', email: '', request: '' });
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
    setTouched({ name: true, request: true });
    if (Object.keys(validationErrors).length === 0) {
      // TODO: wire to backend (Formspree/EmailJS/custom) — confirm with client
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="pr-name">Name</label>
          <input id="pr-name" name="name" type="text" className={`${styles.input} ${errors.name && touched.name ? styles.inputError : ''}`} value={values.name} onChange={handleChange} onBlur={handleBlur} />
          {errors.name && touched.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="pr-email">Email <span style={{ opacity: 0.5 }}>(optional)</span></label>
          <input id="pr-email" name="email" type="email" className={styles.input} value={values.email} onChange={handleChange} onBlur={handleBlur} />
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="pr-request">Prayer Request</label>
        <textarea id="pr-request" name="request" rows={5} className={`${styles.textarea} ${errors.request && touched.request ? styles.inputError : ''}`} value={values.request} onChange={handleChange} onBlur={handleBlur} />
        {errors.request && touched.request && <span className={styles.error}>{errors.request}</span>}
      </div>
      <div>
        <Button variant="primary" type="submit">Submit Prayer Request</Button>
      </div>
      <span className={styles.hint}>// TODO: wire to backend — confirm with client</span>
    </form>
  );
}
