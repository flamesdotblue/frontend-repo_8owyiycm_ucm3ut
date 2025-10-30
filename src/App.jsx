import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MapSection from "./components/MapSection";
import TokenWallet from "./components/TokenWallet";

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-600">
        <p>
          CircuLogix connects households, riders, and recycling centers to make
          recycling effortless and rewarding. Track collections, earn tokens, and
          close the loop in the circular economy.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} CircuLogix. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <section id="how" className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
            {["Sort at home", "Request pickup", "Redeem tokens"].map((step, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="h-8 w-8 rounded-md bg-emerald-600 text-white flex items-center justify-center font-semibold">
                  {i + 1}
                </div>
                <h3 className="mt-3 font-semibold">{step}</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {i === 0 && "Separate plastic, glass, aluminum, and organic materials. Rinse containers and flatten cartons to optimize pickup."}
                  {i === 1 && "Open the app to view nearby riders on the live map, then send a pickup request with your preferred time."}
                  {i === 2 && "Earn blockchain-based tokens for every completed collection and delivery. Redeem them at partner stores."}
                </p>
              </div>
            ))}
          </div>
        </section>
        <MapSection />
        <TokenWallet />
      </main>
      <Footer />
    </div>
  );
}
