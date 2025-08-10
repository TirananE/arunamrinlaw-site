"use client";

import { useLanguage } from '../LanguageProvider';

const ContactSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {t('contact_us')}
        </h2>
        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                {t('subject')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                {t('message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors"
              >
                {t('send_message')}
              </button>
            </div>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('phone')}</h3>
              <p className="text-gray-600">+66 2 123 4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('email')}</h3>
              <p className="text-gray-600">contact@arunamrinlaw.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('line_id')}</h3>
              <p className="text-gray-600">@arunamrinlaw</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
