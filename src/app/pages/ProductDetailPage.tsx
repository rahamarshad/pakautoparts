import { Link, useNavigate } from "react-router";
import { ArrowLeft, Clock, ShieldCheck, Package, MessageCircle, CheckCircle } from "lucide-react";

export function ProductDetailPage() {
  const navigate = useNavigate();

  const product = {
    id: 1,
    name: "Honda Civic Headlight Assembly (Right Side)",
    compatibility: ["Honda Civic 2016", "Honda Civic 2017", "Honda Civic 2018", "Honda Civic 2019", "Honda Civic 2020"],
    price: "Rs 8,500",
    condition: "New",
    delivery: "2-4 hours",
    location: "Saddar, Rawalpindi",
    seller: {
      name: "Auto Parts Hub",
      verified: true,
      rating: 4.8,
      totalSales: 250,
    },
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&h=600&fit=crop",
    description: "High-quality OEM replacement headlight assembly. Comes with bulbs and wiring harness. Direct fit replacement, no modifications needed.",
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-semibold">Product Details</h1>
        </div>
      </header>

      {/* Product Image */}
      <div className="bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
        {/* Price & Title */}
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h2 className="font-semibold text-gray-900">{product.name}</h2>
            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium shrink-0">
              {product.condition}
            </span>
          </div>
          <p className="text-2xl font-bold text-emerald-600 mb-3">
            {product.price}
          </p>

          {/* Delivery Info */}
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="font-medium text-gray-900">{product.delivery}</span>
            <span className="text-gray-500">to {product.location}</span>
          </div>
        </div>

        {/* Compatibility */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            Compatible With
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.compatibility.map((car) => (
              <span
                key={car}
                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm"
              >
                {car}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Seller Info */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Seller Information</h3>
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-bold">AH</span>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <p className="font-medium text-gray-900">{product.seller.name}</p>
                  {product.seller.verified && (
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  ⭐ {product.seller.rating} • {product.seller.totalSales} sales
                </p>
              </div>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50">
            <MessageCircle className="w-4 h-4" />
            Chat with Seller
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Buyer Protection</h3>
          <div className="space-y-2.5">
            <div className="flex items-start gap-3">
              <Package className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm text-gray-900">7-Day Return Policy</p>
                <p className="text-xs text-gray-500">
                  Return if part doesn't fit or is defective
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm text-gray-900">Quality Checked</p>
                <p className="text-xs text-gray-500">
                  All parts verified by platform before listing
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm text-gray-900">Fast Delivery Guarantee</p>
                <p className="text-xs text-gray-500">
                  Get refund if delivery takes longer than promised
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-40">
        <div className="max-w-7xl mx-auto flex gap-3">
          <button className="flex-1 px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50">
            Chat
          </button>
          <button
            onClick={() => navigate("/checkout")}
            className="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
