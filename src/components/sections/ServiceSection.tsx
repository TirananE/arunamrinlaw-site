const ServiceSection = () => {
  const services = [
    {
      title: "Corporate Law",
      description: "Business registration, mergers & acquisitions, corporate restructuring"
    },
    {
      title: "Commercial Contracts",
      description: "Contract drafting, review, and negotiation for business transactions"
    },
    {
      title: "Litigation",
      description: "Civil and commercial dispute resolution, arbitration"
    },
    {
      title: "Investment Advisory",
      description: "Foreign investment consulting, BOI promotion applications"
    },
    {
      title: "Labor Law",
      description: "Employment contracts, work permits, labor disputes"
    },
    {
      title: "Intellectual Property",
      description: "Trademark registration, patent applications, IP protection"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
