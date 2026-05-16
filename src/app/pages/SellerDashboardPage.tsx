import { Link } from "react-router";
import { ArrowLeft, Plus, Edit, Trash2, Eye } from "lucide-react";
import { useState } from "react";

export function SellerDashboardPage() {
  const [activeTab, setActiveTab] = useState<"listings" | "add">("listings");

  const listings = [
    {
      id: 1,
      name: "Honda Civic Headlight",
      price: "Rs 8,500",
      condition: "New",
      views: 45,
      status: "Active",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Toyota Corolla Air Filter",
      price: "Rs 1,200",
      condition: "New",
      views: 23,
      status: "Active",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=200&h=150&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <Link to="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Seller Dashboard</h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("listings")}
              className={`flex-1 py-2 text-sm font-medium border-b-2 transition ${
                activeTab === "listings"
                  ? "border-emerald-600 text-emerald-600"
                  : "border-transparent text-gray-500"
              }`}
            >
              My Listings
            </button>
            <button
              onClick={() => setActiveTab("add")}
              className={`flex-1 py-2 text-sm font-medium border-b-2 transition ${
                activeTab === "add"
                  ? "border-emerald-600 text-emerald-600"
                  : "border-transparent text-gray-500"
              }`}
            >
              Add Listing
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {activeTab === "listings" ? (
          <div className="space-y-4">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-xs text-gray-500">Active Listings</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">28</p>
                <p className="text-xs text-gray-500">Total Orders</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">4.8</p>
                <p className="text-xs text-gray-500">Rating</p>
              </div>
            </div>

            {/* Listings */}
            <div className="space-y-3">
              {listings.map((listing) => (
                <div
                  key={listing.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div className="flex">
                    <img
                      src={listing.image}
                      alt={listing.name}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="p-3 flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-medium text-gray-900 text-sm">
                          {listing.name}
                        </h3>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">
                          {listing.status}
                        </span>
                      </div>
                      <p className="text-lg font-bold text-emerald-600 mb-1">
                        {listing.price}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {listing.views} views
                        </span>
                        <span>•</span>
                        <span>{listing.condition}</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 p-2 flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded text-sm">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-red-600 hover:bg-red-50 rounded text-sm">
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveTab("add")}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700"
            >
              <Plus className="w-5 h-5" />
              Add New Listing
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Add Listing Form */}
            <div className="bg-white rounded-lg p-4">
              <label className="block font-medium text-gray-900 mb-3">
                Upload Images
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
                <Plus className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">Upload product photos</p>
                <p className="text-xs text-gray-500">Up to 5 images</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <label className="block font-medium text-gray-900 mb-3">
                Part Name
              </label>
              <input
                type="text"
                placeholder="e.g. Honda Civic Headlight Assembly"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="bg-white rounded-lg p-4">
              <label className="block font-medium text-gray-900 mb-3">
                Compatible Cars
              </label>
              <div className="space-y-3">
                <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Select Make</option>
                  <option>Honda</option>
                  <option>Toyota</option>
                  <option>Suzuki</option>
                </select>
                <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Select Model</option>
                  <option>Civic</option>
                  <option>City</option>
                  <option>Accord</option>
                </select>
                <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Select Year Range</option>
                  <option>2020-2024</option>
                  <option>2016-2020</option>
                  <option>2012-2016</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <label className="block font-medium text-gray-900 mb-3">Price</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  Rs
                </span>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <label className="block font-medium text-gray-900 mb-3">
                Condition
              </label>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 border border-emerald-600 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium">
                  New
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium">
                  Used
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium">
                  Refurbished
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <label className="block font-medium text-gray-900 mb-3">
                Description
              </label>
              <textarea
                placeholder="Describe the part, its condition, and any important details..."
                rows={4}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700">
              Publish Listing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
