import { Link } from "react-router";
import { ArrowLeft, Upload, Camera, CheckCircle } from "lucide-react";
import { useState } from "react";

export function RequestPartPage() {
  const [submitted, setSubmitted] = useState(false);

  const responses = [
    {
      id: 1,
      seller: "Auto Parts Hub",
      verified: true,
      price: "Rs 8,200",
      delivery: "2-4 hours",
      message: "We have this in stock. Original quality. Can deliver today.",
    },
    {
      id: 2,
      seller: "Saddar Motors",
      verified: true,
      price: "Rs 7,800",
      delivery: "Next day",
      message: "Genuine Honda part available. Best price guaranteed.",
    },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
            <Link to="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Part Requests</h1>
          </div>
        </header>

        {/* Success State */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center mb-6">
            <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-3" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Request Submitted!
            </h2>
            <p className="text-sm text-gray-600">
              Sellers will send you quotes within 30 minutes
            </p>
          </div>

          {/* Request Details */}
          <div className="bg-white rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Your Request</h3>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Part:</span> Honda Civic Headlight (Right Side)
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Car:</span> Honda Civic 2018
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Condition:</span> New preferred
            </p>
          </div>

          {/* Seller Responses */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Seller Responses ({responses.length})
            </h3>
            <div className="space-y-3">
              {responses.map((response) => (
                <div
                  key={response.id}
                  className="bg-white border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium text-gray-900">
                        {response.seller}
                        {response.verified && (
                          <span className="ml-1 text-emerald-600">✓</span>
                        )}
                      </p>
                      <p className="text-sm text-gray-500">{response.delivery}</p>
                    </div>
                    <p className="text-lg font-bold text-emerald-600">
                      {response.price}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{response.message}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50">
                      Message
                    </button>
                    <button className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700">
                      Accept Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-semibold">Request a Part</h1>
        </div>
      </header>

      {/* Form */}
      <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            Can't find what you need? Tell us what part you're looking for and get
            quotes from verified sellers in Saddar market.
          </p>
        </div>

        {/* Upload Photo */}
        <div className="bg-white rounded-lg p-4">
          <label className="block font-medium text-gray-900 mb-3">
            Upload Photo (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">
              Take a photo of the part or VIN plate
            </p>
            <p className="text-xs text-gray-500 mb-3">
              Helps sellers identify the exact part you need
            </p>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
              <Upload className="w-4 h-4" />
              Upload Image
            </button>
          </div>
        </div>

        {/* Car Details */}
        <div className="bg-white rounded-lg p-4">
          <label className="block font-medium text-gray-900 mb-3">
            Car Details
          </label>
          <div className="space-y-3">
            <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Select Make</option>
              <option>Honda</option>
              <option>Toyota</option>
              <option>Suzuki</option>
              <option>Daihatsu</option>
            </select>
            <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Select Model</option>
              <option>Civic</option>
              <option>City</option>
              <option>Accord</option>
            </select>
            <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Select Year</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
        </div>

        {/* Part Description */}
        <div className="bg-white rounded-lg p-4">
          <label className="block font-medium text-gray-900 mb-3">
            What part do you need?
          </label>
          <input
            type="text"
            placeholder="e.g. Front bumper, Headlight, Side mirror"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <textarea
            placeholder="Add more details (optional)... e.g. Right side, color needed, condition preference"
            rows={4}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Condition Preference */}
        <div className="bg-white rounded-lg p-4">
          <label className="block font-medium text-gray-900 mb-3">
            Condition Preference
          </label>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 border border-emerald-600 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium">
              New
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium">
              Used
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium">
              Any
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-40">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setSubmitted(true)}
            className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700"
          >
            Submit Request
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            You'll receive quotes from sellers within 30 minutes
          </p>
        </div>
      </div>
    </div>
  );
}
