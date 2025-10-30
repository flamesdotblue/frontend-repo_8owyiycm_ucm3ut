import { Coins } from "lucide-react";
import { useState } from "react";

export default function TokenWallet() {
  const [userBalance] = useState(1240);
  const [riderBalance] = useState(2080);

  const activities = [
    { label: "Pickup completed — plastics (2.3kg)", amount: +30, time: "2h ago" },
    { label: "Delivery to center — organic (5kg)", amount: +50, time: "Yesterday" },
    { label: "Redeemed at SuperMart", amount: -120, time: "3d ago" },
  ];

  return (
    <section id="wallet" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-9 w-9 rounded-lg bg-amber-500 text-white flex items-center justify-center">
            <Coins className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-semibold text-slate-900">Digital wallet</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <WalletCard title="User balance" amount={userBalance} color="emerald" />
              <WalletCard title="Rider balance" amount={riderBalance} color="sky" />
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Recent activity</h3>
              <ul className="divide-y divide-slate-200">
                {activities.map((a, i) => (
                  <li key={i} className="py-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-900">{a.label}</p>
                      <p className="text-xs text-slate-500">{a.time}</p>
                    </div>
                    <span className={`text-sm font-medium ${a.amount > 0 ? "text-emerald-700" : "text-slate-700"}`}>
                      {a.amount > 0 ? "+" : ""}{a.amount} TOK
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Redeem your tokens</h3>
            <p className="mt-1 text-sm/6 text-emerald-50">
              Use tokens at partnered supermarkets, local shops, or services. Scan a QR code at checkout to redeem.
            </p>
            <div className="mt-6 bg-white/10 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-emerald-100">Primary wallet</p>
              <p className="mt-1 text-3xl font-semibold">{userBalance + riderBalance} TOK</p>
            </div>
            <button className="mt-6 w-full bg-white text-emerald-700 hover:bg-emerald-50 font-medium rounded-lg py-3">
              Generate redeem QR
            </button>
            <p className="mt-3 text-xs text-emerald-100">
              Secured by blockchain for transparency and traceability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WalletCard({ title, amount, color }) {
  const colorClasses = {
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      chip: "bg-emerald-600",
    },
    sky: {
      bg: "bg-sky-50",
      text: "text-sky-700",
      chip: "bg-sky-600",
    },
  }[color];

  return (
    <div className={`${colorClasses.bg} rounded-xl p-4 border border-slate-200`}>
      <p className="text-xs text-slate-600">{title}</p>
      <p className={`mt-1 text-2xl font-semibold ${colorClasses.text}`}>{amount} TOK</p>
      <div className="mt-3 inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs text-white font-medium shadow-sm ${colorClasses.chip}">
        On-chain wallet
      </div>
    </div>
  );
}
