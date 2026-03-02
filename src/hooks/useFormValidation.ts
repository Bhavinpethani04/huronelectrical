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
    // Simulate async submit
    await new Promise(r => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData(EMPTY);
  };

  return { formData, errors, submitted, isSubmitting, handleChange, handleSubmit };
}

