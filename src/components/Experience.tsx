import { CheckCircle } from 'lucide-react';

export default function Experience() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Gym training"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>

          <div>
            <p className="text-red-500 font-semibold mb-3 text-sm tracking-wider">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
              We Have Lot Of Experience<br />Gym Training
            </h2>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Discover the ultimate fitness experience with our state-of-the-art facilities and expert trainers. We provide personalized workout plans designed to help you achieve your fitness goals efficiently and safely. Our comprehensive approach ensures that every aspect of your fitness journey is covered.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-red-500 flex-shrink-0" size={20} />
                <span className="text-neutral-700">Certified Trainers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-red-500 flex-shrink-0" size={20} />
                <span className="text-neutral-700">Exceptional Facility</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-red-500 flex-shrink-0" size={20} />
                <span className="text-neutral-700">Personal Training</span>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-semibold transition-colors">
              READ MORE
            </button>
          </div>
        </div>

        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-red-500/20"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-white rounded-full"></div>
              </div>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Athletic training"
            className="w-full h-96 object-cover rounded-lg mt-8 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
