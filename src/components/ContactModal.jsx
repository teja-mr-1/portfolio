import { useState } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const email = "s252744@student.dtu.dk";

  if (!isOpen) return null;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent("Opportunity / Inquiry for Teja")}`;
  const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}&subject=${encodeURIComponent("Opportunity / Inquiry for Teja")}`;
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent("Opportunity / Inquiry for Teja")}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform transition-all animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-100">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-gray-900">Get in Touch</h3>
          <p className="text-sm font-medium text-gray-500 mt-1">Choose your preferred email client to send a message</p>
        </div>

        {/* Copy Email Bar */}
        <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl border border-gray-200 mb-6">
          <span className="text-xs font-bold text-gray-700 select-all tracking-wide truncate">{email}</span>
          <button
            onClick={handleCopy}
            className="ml-2 px-3 py-1.5 bg-white border border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-300 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-600">Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {/* Gmail Web */}
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 hover:border-red-500 rounded-2xl hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-black text-lg group-hover:scale-110 transition-transform">
                ✉️
              </div>
              <div className="text-left">
                <p className="text-sm font-extrabold text-gray-900 group-hover:text-red-600 transition">Gmail Web</p>
                <p className="text-xs text-gray-500">Compose in browser via Gmail</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Outlook Web */}
          <a
            href={outlookUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 hover:border-blue-500 rounded-2xl hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-lg group-hover:scale-110 transition-transform">
                📬
              </div>
              <div className="text-left">
                <p className="text-sm font-extrabold text-gray-900 group-hover:text-blue-600 transition">Outlook Web</p>
                <p className="text-xs text-gray-500">Compose in browser via Outlook</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Default Mail App */}
          <a
            href={mailtoUrl}
            onClick={onClose}
            className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 hover:border-gray-800 rounded-2xl hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-800 flex items-center justify-center font-black text-lg group-hover:scale-110 transition-transform">
                💻
              </div>
              <div className="text-left">
                <p className="text-sm font-extrabold text-gray-900 group-hover:text-gray-800 transition">Default Mail App</p>
                <p className="text-xs text-gray-500">Open system mail client</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-800 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
