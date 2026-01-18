import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-black via-neutral-900 to-red-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-red-500 font-semibold mb-4 text-sm tracking-wider">KEEP YOUR BODY RUNNING STRONG</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              YOUR FITNESS<br />
              YOUR VICTORY
            </h1>
            <p className="text-neutral-300 mb-8 text-lg">
              We provide top quality equipment and excellent service to transform your body and life, ensuring you get the maximum.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-semibold transition-colors text-lg">
              VIEW PLANS SCHEDULE
            </button>
            <div className="mt-8 flex items-center gap-4">
              <div>
                <div className="text-4xl font-bold">2k+</div>
                <div className="text-neutral-400 text-sm">Satisfied Customer</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fitness athlete"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-600 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>

        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <button className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <button className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
