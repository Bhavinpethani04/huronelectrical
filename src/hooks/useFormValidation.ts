import { useState } from 'react';
import type { ContactFormData, FormErrors } from '../types';

const EMPTY: ContactFormData = {
  name: '', email: '', phone: '', service: '', message: '',
};

function validate(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (data.phone && !/^[\d\s\-()+]{7,}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!data.message.trim()) errors.message = 'Please tell us about your project.';
  return errors;
}

export function useFormValidation() {
  const [formData, setFormData] = useState<ContactFormData>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Something went wrong.');
      }
      setSubmitted(true);
      setFormData(EMPTY);
    } catch (err) {
      setErrors({ name: err instanceof Error ? err.message : 'Failed to send. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, errors, submitted, isSubmitting, handleChange, handleSubmit };
}

