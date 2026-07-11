import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { profile } from '../data/portfolioData.js';
import SectionWrapper from './SectionWrapper.jsx';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <SectionWrapper
      id="contact"
      eyebrow="06 · Say Hello"
      title="Let's build something that listens."
      subtitle="Open to research collaborations, internships, and interesting AI problems."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6">
          <a
            href={`mailto:${profile.email}`}
            className="glass-card flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-cyan/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-signal-gradient-soft text-cyan">
              <FiMail />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-mist-500">Email</p>
              <p className="text-sm text-mist-100">{profile.email}</p>
            </div>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="glass-card flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-cyan/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-signal-gradient-soft text-cyan">
              <FiGithub />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-mist-500">GitHub</p>
              <p className="text-sm text-mist-100">Kaushal-11</p>
            </div>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass-card flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-cyan/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-signal-gradient-soft text-cyan">
              <FiLinkedin />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-mist-500">LinkedIn</p>
              <p className="text-sm text-mist-100">kaushal-bhanderi</p>
            </div>
          </a>

          <p className="pt-2 text-sm leading-relaxed text-mist-500">
            Send a message and you'll get an instant confirmation reply in your inbox — I read every message personally and follow up shortly after.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Your name" name="name" value={form.name} onChange={handleChange} required />
            <Field label="Your email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="mt-5">
            <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} />
          </div>
          <div className="mt-5">
            <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-mist-500">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the project, role, or idea…"
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-mist-100 outline-none transition-colors placeholder:text-mist-700 focus:border-cyan/60"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === 'sending' ? (
              'Sending…'
            ) : (
              <>
                <FiSend /> Send message
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="mt-4 flex items-center gap-2 font-mono text-xs text-cyan">
              <FiCheck /> Message sent — check your inbox for a confirmation.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 flex items-center gap-2 font-mono text-xs text-amber">
              <FiAlertCircle /> {errorMsg}
            </p>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-mist-500">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-mist-100 outline-none transition-colors placeholder:text-mist-700 focus:border-cyan/60"
      />
    </div>
  );
}
