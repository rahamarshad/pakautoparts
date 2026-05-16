import { Link } from "react-router";
import { ArrowLeft, MapPin, CreditCard, Smartphone, Banknote } from "lucide-react";

export function CheckoutPage() {
  const orderItem = {
    name: "Honda Civic Headlight Assembly (Right Side)",
    price: 8500,
    delivery: 200,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&h=150&fit=crop",
  };

  const total = orderItem.price + orderItem.delivery;

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/product/1" className="p-2 -ml-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-semibold">Checkout</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
        {/* Delivery Address */}
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              Delivery Address
            </h3>
            <button className="text-sm text-emerald-600 font-medium">
              Change
            </button>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="font-medium text-gray-900 mb-1">Home</p>
            <p className="text-sm text-gray-600">
              House 123, Street 5, Satellite Town, Rawalpindi
            </p>
            <p className="text-sm text-gray-600 mt-1">+92 300 1234567</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
          <div className="flex gap-3 pb-4 border-b border-gray-100">
            <img
              src={orderItem.image}
              alt={orderItem.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 text-sm mb-1">
                {orderItem.name}
              </h4>
              <p className="text-lg font-bold text-emerald-600">
                Rs {orderItem.price.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="pt-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-900">
                Rs {orderItem.price.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="text-gray-900">Rs {orderItem.delivery}</span>
            </div>
            <div className="border-t border-gray-100 pt-2 flex justify-between">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="font-bold text-emerald-600 text-lg">
                Rs {total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-emerald-600" />
            Payment Method
          </h3>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 border-2 border-emerald-600 bg-emerald-50 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="payment"
                defaultChecked
                className="w-4 h-4 text-emerald-600"
              />
              <Banknote className="w-5 h-5 text-emerald-600" />
              <div className="flex-1">
                <p className="font-medium text-gray-900 text-sm">
                  Cash on Delivery
                </p>
                <p className="text-xs text-gray-500">Pay when you receive</p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                className="w-4 h-4 text-emerald-600"
              />
              <Smartphone className="w-5 h-5 text-gray-600" />
              <div className="flex-1">
                <p className="font-medium text-gray-900 text-sm">
                  JazzCash / Easypaisa
                </p>
                <p className="text-xs text-gray-500">Mobile wallet payment</p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                className="w-4 h-4 text-emerald-600"
              />
              <CreditCard className="w-5 h-5 text-gray-600" />
              <div className="flex-1">
                <p className="font-medium text-gray-900 text-sm">
                  Credit / Debit Card
                </p>
                <p className="text-xs text-gray-500">
                  Visa, Mastercard accepted
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <p className="text-sm text-gray-700 font-medium mb-1">
            Estimated Delivery: 2-4 hours
          </p>
          <p className="text-xs text-gray-600">
            Your order will be delivered from Saddar, Rawalpindi
          </p>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">Total Amount</span>
            <span className="text-xl font-bold text-emerald-600">
              Rs {total.toLocaleString()}
            </span>
          </div>
          <button className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700">
            Place Order
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            By placing order, you agree to our Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
}
