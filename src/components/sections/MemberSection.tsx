import Image from 'next/image';

const MemberSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Senior Partner",
      image: "/team/member1.jpg",
      specialization: "Corporate Law"
    },
    {
      name: "Jane Smith",
      position: "Partner",
      image: "/team/member2.jpg",
      specialization: "International Trade"
    },
    {
      name: "David Wilson",
      position: "Associate",
      image: "/team/member3.jpg",
      specialization: "Litigation"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-[300px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600">
                  Specialization: {member.specialization}
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
