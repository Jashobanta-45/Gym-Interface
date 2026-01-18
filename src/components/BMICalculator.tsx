import { useState } from 'react';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('male');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = parseFloat(height) / 100;
      const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-500 font-semibold mb-2 text-sm tracking-wider">BODY MASS INDEX</p>
          <h2 className="text-4xl md:text-5xl font-bold">Calculate Your BMI Now</h2>
        </div>

        <div className="bg-neutral-900 rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-400">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
                className="w-full bg-black border border-neutral-700 rounded px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-400">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height"
                className="w-full bg-black border border-neutral-700 rounded px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-400">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                className="w-full bg-black border border-neutral-700 rounded px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-neutral-400">Sex</label>
              <select
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                className="w-full bg-black border border-neutral-700 rounded px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <button
            onClick={calculateBMI}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded font-semibold transition-colors text-lg"
          >
            CALCULATE BMI NOW
          </button>

          {bmi !== null && (
            <div className="mt-8 p-6 bg-black rounded-lg border border-red-500/30">
              <div className="text-center">
                <div className="text-5xl font-bold text-red-500 mb-2">{bmi}</div>
                <div className="text-xl text-neutral-300">{getBMICategory(bmi)}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
