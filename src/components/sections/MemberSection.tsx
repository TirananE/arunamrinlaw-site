import Image from 'next/image';
import { teamMembersDataKeys } from '@/data';
import { useLanguage } from '../LanguageProvider';

const MemberSection = () => {
  const { t, language } = useLanguage();

  // Ensure Suwat Apaipakdi always appears first
  const sortedTeamMembers = [...teamMembersDataKeys].sort((a, b) => {
    if (a.name === "Suwat Apaipakdi") return -1;
    if (b.name === "Suwat Apaipakdi") return 1;
    return 0;
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedTeamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-[300px]">
                <Image
                  src={member.imageUrl}
                  alt={language === 'th' ? member.nameThai : member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {language === 'th' ? member.nameThai : member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {t(member.positionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberSection;
