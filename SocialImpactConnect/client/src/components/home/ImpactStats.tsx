import { impactStats } from "@/lib/data";

const ImpactStats = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {impactStats.map((stat, index) => (
            <div key={index} className="p-6">
              <p className="text-4xl font-bold text-primary-600">{stat.value}</p>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
