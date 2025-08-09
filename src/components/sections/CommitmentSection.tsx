const CommitmentSection = () => {
  const commitments = [
    {
      title: "Excellence",
      description: "We strive for excellence in every legal service we provide"
    },
    {
      title: "Integrity",
      description: "Maintaining the highest standards of professional ethics"
    },
    {
      title: "Client Focus",
      description: "Your success is our priority - we're dedicated to your goals"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Commitment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
