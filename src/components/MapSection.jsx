import { MapPin, Bike } from "lucide-react";

export default function MapSection() {
  return (
    <section id="map" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between flex-col lg:flex-row gap-8">
          <div className="flex-1 w-full">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Nearby riders</h2>
                <p className="text-sm text-slate-600">Real-time locations powered by your device's geolocation.</p>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <iframe
                title="OpenStreetMap"
                className="absolute inset-0 h-full w-full"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15%2C51.50%2C-0.1%2C51.54&layer=mapnik&marker=51.52%2C-0.125"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>

          <aside className="w-full lg:w-80 shrink-0">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Available riders</h3>
              <ul className="space-y-3">
                {[
                  { name: "Amina K.", distance: "0.6 km", eta: "4 min" },
                  { name: "Luis M.", distance: "1.2 km", eta: "7 min" },
                  { name: "Priya R.", distance: "1.9 km", eta: "10 min" },
                ].map((r, i) => (
                  <li key={i} className="flex items-center justify-between bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                        <Bike className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{r.name}</p>
                        <p className="text-xs text-slate-600">{r.distance} • ETA {r.eta}</p>
                      </div>
                    </div>
                    <button className="text-xs font-medium text-emerald-700 hover:text-emerald-800">Notify</button>
                  </li>
                ))}
              </ul>

              <div className="mt-4 text-xs text-slate-500">
                Tip: Riders can batch requests with optimized routes to reduce time and fuel.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
