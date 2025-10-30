import { MapPin, Bike, Coins, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              <Leaf className="h-4 w-4" />
              Circular economy powered by tokens
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Turn your recyclables into real-world rewards
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Classify and process plastic, glass, aluminum, and organics at home.
              Request doorstep pickup, track riders in real time, and earn digital
              tokens redeemable at local stores.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#map" className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-lg shadow">
                <MapPin className="h-5 w-5" /> Request pickup
              </a>
              <a href="#how" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-5 py-3 rounded-lg border border-slate-200">
                <Bike className="h-5 w-5" /> Become a rider
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
                <dt className="text-xs text-slate-500">Collections</dt>
                <dd className="mt-1 text-xl font-semibold text-slate-900">12,480+</dd>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
                <dt className="text-xs text-slate-500">Kg recycled</dt>
                <dd className="mt-1 text-xl font-semibold text-slate-900">86,200</dd>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
                <dt className="text-xs text-slate-500">Tokens issued</dt>
                <dd className="mt-1 text-xl font-semibold text-slate-900 inline-flex items-center gap-1">
                  <Coins className="h-5 w-5 text-amber-500" /> 3.6M
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 bg-emerald-500 rounded-full" />
                  <span className="text-sm font-medium text-slate-900">Recycling tips</span>
                </div>
              </div>
              <ul className="p-6 space-y-4 text-sm text-slate-700">
                <li>• Rinse containers to remove food residue before recycling.</li>
                <li>• Keep plastic bags separate — many centers recycle them differently.</li>
                <li>• Flatten cardboard to save space and improve logistics.</li>
                <li>• Organic waste becomes compost — great for local gardens.</li>
              </ul>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="bg-emerald-600 text-white rounded-xl p-5">
                <p className="text-sm/5 opacity-90">Impact so far</p>
                <p className="mt-1 text-2xl font-semibold">1,280 tons CO₂e avoided</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <p className="text-sm/5 text-slate-600">Partners</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">40+ supermarkets & shops</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
