import { Link } from "react-router";
import { ArrowRight, Package, RefreshCw, Zap, Wrench, Settings, Radio, Gauge } from "lucide-react";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-gray-900">
              PartsBazaar
            </Link>

            {/* Login Button */}
            <button className="px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Find Car Parts in Pakistan
            </h1>
            <p className="text-xl text-gray-600">
              Fast delivery from local sellers across Rawalpindi, Islamabad & beyond
            </p>
          </div>

          {/* Part Type Selection - Main CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {/* New Parts Card */}
            <Link
              to="/search?condition=new"
              className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-3xl p-12 sm:p-16 hover:border-emerald-400 hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500 opacity-5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <Package className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  New Parts
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  Brand new OEM and aftermarket parts with warranty
                </p>
                <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-lg">
                  Browse New Parts
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Used Parts Card */}
            <Link
              to="/search?condition=used"
              className="group relative bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-3xl p-12 sm:p-16 hover:border-amber-400 hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500 opacity-5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <RefreshCw className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Used Parts
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  Quality used parts inspected by verified sellers
                </p>
                <div className="inline-flex items-center gap-2 text-amber-700 font-semibold text-lg">
                  Browse Used Parts
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Request Part Link */}
          <p className="text-center text-gray-600">
            Can't find what you need?{" "}
            <Link
              to="/request-part"
              className="text-emerald-600 font-semibold hover:text-emerald-700 underline decoration-2 underline-offset-2"
            >
              Request a Part
            </Link>
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Choose Type
              </h3>
              <p className="text-gray-600">
                Select between new or used parts
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Search & Filter
              </h3>
              <p className="text-gray-600">
                Find parts by car model or category
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Get parts delivered same-day or next-day
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Spacing */}
      <div className="h-16"></div>
    </div>
  );
}