import { Clock, Users } from 'lucide-react';

export default function Classes() {
  const classes = [
    {
      image: 'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Strength Training',
      trainer: 'John Smith',
      duration: '45 min',
      capacity: '15 people'
    },
    {
      image: 'https://images.pexels.com/photos/3076514/pexels-photo-3076514.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Cardio Power',
      trainer: 'Sarah Johnson',
      duration: '60 min',
      capacity: '20 people'
    },
    {
      image: 'https://images.pexels.com/photos/3076519/pexels-photo-3076519.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Yoga & Flexibility',
      trainer: 'Emma Wilson',
      duration: '50 min',
      capacity: '12 people'
    },
    {
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'HIIT Training',
      trainer: 'Mike Brown',
      duration: '40 min',
      capacity: '18 people'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-red-500 font-semibold mb-3 text-sm tracking-wider">OUR GYM FITNESS TRAINING</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Our Gym Fitness Classes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((classItem, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Join Now
                </button>
              </div>

              <h3 className="text-xl font-bold mb-2 text-neutral-900">{classItem.title}</h3>
              <p className="text-red-500 font-semibold mb-3">{classItem.trainer}</p>

              <div className="flex items-center gap-4 text-sm text-neutral-600">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{classItem.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{classItem.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
