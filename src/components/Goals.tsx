import { Dumbbell, Activity, Trophy } from 'lucide-react';

export default function Goals() {
  const steps = [
    {
      icon: Dumbbell,
      title: 'Gym Movement',
      description: 'Many gyms offer more than resources to reach progress, such as fitness tests, nutritional body composition.'
    },
    {
      icon: Activity,
      title: 'Fitness Practice',
      description: 'Gyms are equipped to numerous fitness levels and preferences, ensuring training by joining physical wellness.'
    },
    {
      icon: Trophy,
      title: 'Achievement',
      description: 'Group fitness classes bring instructors offer participants a structured and engaging setting to exercise.'
    }
  ];

  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-red-500 font-semibold mb-3 text-sm tracking-wider">WORKING PROCESS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Easy Step To Achieve Your Goals.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-red-500 mx-auto group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={`https://images.pexels.com/photos/${
                      index === 0 ? '1552252' : index === 1 ? '416809' : '1552249'
                    }/pexels-photo-${
                      index === 0 ? '1552252' : index === 1 ? '416809' : '1552249'
                    }.jpeg?auto=compress&cs=tinysrgb&w=400`}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg">
                  <step.icon size={28} />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-neutral-900 mt-6">{step.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
