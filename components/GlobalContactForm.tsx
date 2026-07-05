'use client';

import { usePathname } from 'next/navigation';
import ContactForm from '@/components/ContactForm';

export default function GlobalContactForm() {
  const pathname = usePathname();
  
  // Pages où le formulaire doit être masqué
  const excludedPages = ['/mentions-legales', '/politique-confidentialite'];
  
  if (excludedPages.includes(pathname)) {
    return null;
  }
  
  return <ContactForm />;
}