"use client";

import { useLanguage } from '../LanguageProvider';

const CommitmentSection = () => {
  const { t } = useLanguage();
  
  const commitments = [
    {
      titleKey: "excellence",
      descriptionKey: "excellence_desc"
    },
    {
      titleKey: "integrity",
      descriptionKey: "integrity_desc"
    },
    {
      titleKey: "client_focus",
      descriptionKey: "client_focus_desc"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {t('our_commitment')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t(item.titleKey)}
              </h3>
              <p className="text-gray-600">
                {t(item.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
