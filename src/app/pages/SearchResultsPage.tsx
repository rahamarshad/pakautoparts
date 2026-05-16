import { Link, useSearchParams } from "react-router";
import { ArrowLeft, ChevronDown, Clock, ShieldCheck, Package, Zap, Radio, Settings, Gauge, Wind, Sparkles } from "lucide-react";

export function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const aiQuery = searchParams.get("ai") ?? "";

  const categories = [
    { name: "Engine Parts", icon: Settings },
    { name: "Body Parts", icon: Package },
    { name: "Brakes", icon: Zap },
    { name: "Suspension", icon: Wind },
    { name: "Electrical", icon: Radio },
    { name: "Interior", icon: Gauge },
  ];

  const products = [
    {
      id: 1,
      name: "Honda Civic Headlight Assembly",
      compatibility: "Civic 2016-2020",
      price: "Rs 8,500",
      condition: "New",
      delivery: "2-4 hours",
      location: "Saddar, Rawalpindi",
      seller: "Auto Parts Hub",
      verified: true,
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Honda Civic Front Bumper",
      compatibility: "Civic 2016-2020",
      price: "Rs 15,000",
      condition: "Refurbished",
      delivery: "Same day",
      location: "Saddar, Rawalpindi",
      seller: "Parts Valley",
      verified: true,
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Honda Civic Side Mirror (Right)",
      compatibility: "Civic 2016-2020",
      price: "Rs 4,200",
      condition: "New",
      delivery: "Next day",
      location: "Raja Bazaar, Rawalpindi",
      seller: "Saddar Motors",
      verified: false,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Honda Civic Brake Pads (Set of 4)",
      compatibility: "Civic 2016-2020",
      price: "Rs 3,500",
      condition: "New",
      delivery: "2-4 hours",
      location: "Saddar, Rawalpindi",
      seller: "Auto Parts Hub",
      verified: true,
      image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Search Parts</h1>
          </div>

          {/* Search Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search for a part..."
              defaultValue={aiQuery}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          {/* Car Selector */}
          <div className="grid grid-cols-3 gap-3">
            <div className="relative">
              <select className="w-full appearance-none px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition cursor-pointer">
                <option value="">Make</option>
                <option>Honda</option>
                <option>Toyota</option>
                <option>Suzuki</option>
                <option>Daihatsu</option>
                <option>Nissan</option>
                <option>Hyundai</option>
                <option>KIA</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="w-full appearance-none px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition cursor-pointer">
                <option value="">Model</option>
                <option>Civic</option>
                <option>City</option>
                <option>Corolla</option>
                <option>Cultus</option>
                <option>Alto</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="w-full appearance-none px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition cursor-pointer">
                <option value="">Year</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </header>

      {aiQuery && (
        <div className="bg-emerald-50 border-b border-emerald-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col gap-3 rounded-xl border border-emerald-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-700">AI Part Finder</p>
                  <h2 className="font-semibold text-gray-900">
                    Searching for: {aiQuery}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Showing likely matches. Use make, model, and year filters to narrow it down.
                  </p>
                </div>
              </div>
              <Link
                to="/request-part"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Ask sellers to find it
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Categories</h2>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 border-2 border-transparent transition"
                >
                  <Icon className="w-6 h-6 text-gray-700" />
                  <span className="text-xs font-medium text-gray-900 text-center">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-sm font-medium text-gray-900">{products.length} parts found</p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 space-y-3">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition flex"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-28 h-28 object-cover"
            />
            <div className="p-3 flex-1">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-medium text-gray-900 text-sm">
                  {product.name}
                </h3>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-xs font-medium shrink-0">
                  {product.condition}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-1">{product.compatibility}</p>
              <p className="text-lg font-bold text-emerald-600 mb-1">
                {product.price}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                <Clock className="w-3 h-3" />
                <span>{product.delivery}</span>
                <span className="text-gray-400">•</span>
                <span>{product.location}</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="text-gray-600">{product.seller}</span>
                {product.verified && (
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
