import { Recycle, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-md">
            <Recycle className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-900 tracking-tight">CircuLogix</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#map" className="hover:text-slate-900">Live map</a>
          <a href="#wallet" className="hover:text-slate-900">Wallet</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="relative p-2 rounded-lg hover:bg-slate-100 text-slate-600">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 inline-flex h-2.5 w-2.5 bg-emerald-500 rounded-full"></span>
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg shadow-sm">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
