'use client';
import { FormEvent, useRef, useState } from 'react';
export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const pending = useRef(false);
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending.current) return;
    pending.current = true;
    setStatus('sending');
    const form = event.currentTarget;
    const values = new FormData(form);
    try {
      const response = await fetch('https://coaltech.in/contact.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(20000), body: JSON.stringify({ name: String(values.get('name')).trim(), email: String(values.get('email')).trim(), message: String(values.get('message')).trim() }) });
      const result = await response.json();
      if (!response.ok || result?.ok !== true) throw new Error('Request failed');
      setStatus('sent');
      form.reset();
    } catch { setStatus('error'); }
    finally { pending.current = false; }
  };
  return <form className="contact-form" onSubmit={submit} aria-busy={status === 'sending'}><label>Name<input readOnly={status === 'sending'} required name="name" autoComplete="name" maxLength={120} pattern=".*\S.*" /></label><label>Email<input readOnly={status === 'sending'} required type="email" name="email" autoComplete="email" maxLength={254} /></label><label>What are you working on?<textarea readOnly={status === 'sending'} required name="message" rows={5} maxLength={10000} aria-describedby="message-help" /></label><p className="form-help" id="message-help">Tell us what you need to make or improve. Your name, email and message are sent to Coaltech to respond to your enquiry.</p><button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send enquiry ↗'}</button><p className="form-status" role="status" aria-live="polite">{status === 'sent' ? 'Thanks. Your enquiry has been sent.' : status === 'error' ? <>Your enquiry could not be sent. Your text is still here. Try again or <a href="mailto:management@coaltech.in">email management@coaltech.in</a>.</> : ''}</p></form>;
}

