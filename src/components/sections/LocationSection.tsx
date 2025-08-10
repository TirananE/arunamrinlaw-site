"use client";

import { useLanguage } from '../LanguageProvider';

const LocationSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {t('our_office')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t('visit_us')}
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>{t('address')}:</strong><br />
                123 Business Center Building<br />
                Floor 15, Sukhumvit Road<br />
                Bangkok 10110, Thailand
              </p>
              <p>
                <strong>{t('office_hours')}:</strong><br />
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday - Sunday: Closed
              </p>
              <p>
                <strong>{t('nearest_bts')}:</strong><br />
                Asok Station (5 minutes walk)
              </p>
            </div>
          </div>
          <div className="h-[400px]">
            {/* Replace the iframe src with your actual Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=your-embed-url"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
