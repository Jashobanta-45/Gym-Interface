import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">FLY</span>
              <span className="text-red-500">KIT</span>
            </h3>
            <p className="text-neutral-400 mb-4">
              Transform your body and life with our professional fitness training programs.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Our Classes</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Trainers</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Schedule</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Strength Training</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Cardio</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Yoga</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-red-500 transition-colors">Personal Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>123 Gym Street</li>
              <li>Fitness City, FC 12345</li>
              <li className="pt-2">
                <a href="tel:+1234567890" className="hover:text-red-500 transition-colors">+123 4567 890</a>
              </li>
              <li>
                <a href="mailto:info@flykit.com" className="hover:text-red-500 transition-colors">info@flykit.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400 text-sm">
          <p>&copy; 2024 FlyKit Fitness Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
