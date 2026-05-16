import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import {
  ArrowLeft,
  ChevronDown,
  Gauge,
  Lightbulb,
  Package,
  Search,
  Settings,
  Sparkles,
  Zap,
} from "lucide-react";
import { products as productCatalog } from "../../data/products";

const categoryIcons = {
  "Engine Parts": Settings,
  "Body Parts": Package,
  Interior: Gauge,
  Electrical: Zap,
  Lighting: Lightbulb,
};

function uniqueOptions<T extends string | number>(values: T[]) {
  return Array.from(new Set(values)).sort((a, b) => String(a).localeCompare(String(b)));
}

export function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const aiQuery = searchParams.get("ai") ?? "";
  const conditionParam = searchParams.get("condition");
  const conditionFilter =
    conditionParam === "new" ? "New" : conditionParam === "used" ? "Used" : "";

  const [searchTerm, setSearchTerm] = useState(aiQuery);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const conditionProducts = useMemo(
    () =>
      conditionFilter
        ? productCatalog.filter((product) => product.condition === conditionFilter)
        : productCatalog,
    [conditionFilter],
  );

  const makes = useMemo(
    () => uniqueOptions(conditionProducts.map((product) => product.make)),
    [conditionProducts],
  );

  const models = useMemo(
    () =>
      uniqueOptions(
        conditionProducts
          .filter((product) => !selectedMake || product.make === selectedMake)
          .map((product) => product.model),
      ),
    [conditionProducts, selectedMake],
  );

  const years = useMemo(
    () =>
      uniqueOptions(
        conditionProducts
          .filter((product) => !selectedMake || product.make === selectedMake)
          .filter((product) => !selectedModel || product.model === selectedModel)
          .map((product) => product.year),
      ),
    [conditionProducts, selectedMake, selectedModel],
  );

  const categories = useMemo(
    () => uniqueOptions(conditionProducts.map((product) => product.category)),
    [conditionProducts],
  );

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return conditionProducts.filter((product) => {
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return (
        matchesSearch &&
        (!selectedMake || product.make === selectedMake) &&
        (!selectedModel || product.model === selectedModel) &&
        (!selectedYear || String(product.year) === selectedYear) &&
        (!selectedCategory || product.category === selectedCategory)
      );
    });
  }, [conditionProducts, searchTerm, selectedMake, selectedModel, selectedYear, selectedCategory]);

  const pageTitle = conditionFilter ? `${conditionFilter} Parts` : "Browse Parts";

  function clearFilters() {
    setSearchTerm("");
    setSelectedMake("");
    setSelectedModel("");
    setSelectedYear("");
    setSelectedCategory("");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <Link to="/" className="-ml-2 rounded-lg p-2 transition hover:bg-gray-100">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{pageTitle}</h1>
              <p className="text-sm text-gray-600">
                Search mock inventory by part, make, model, year, and category.
              </p>
            </div>
          </div>

          <div className="relative mb-4">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by part name or category..."
              className="w-full rounded-xl border-2 border-gray-200 py-3 pl-12 pr-4 text-gray-900 transition focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <select
                value={selectedMake}
                onChange={(event) => {
                  setSelectedMake(event.target.value);
                  setSelectedModel("");
                  setSelectedYear("");
                }}
                className="w-full cursor-pointer appearance-none rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 font-medium text-gray-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none"
              >
                <option value="">All Makes</option>
                {makes.map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="relative">
              <select
                value={selectedModel}
                onChange={(event) => {
                  setSelectedModel(event.target.value);
                  setSelectedYear("");
                }}
                className="w-full cursor-pointer appearance-none rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 font-medium text-gray-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none"
              >
                <option value="">All Models</option>
                {models.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="relative">
              <select
                value={selectedYear}
                onChange={(event) => setSelectedYear(event.target.value)}
                className="w-full cursor-pointer appearance-none rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 font-medium text-gray-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none"
              >
                <option value="">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>

            <button
              type="button"
              onClick={clearFilters}
              className="rounded-xl border-2 border-gray-200 bg-white px-4 py-3 font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-100"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </header>

      {aiQuery && (
        <div className="border-b border-emerald-100 bg-emerald-50">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 rounded-xl border border-emerald-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-700">AI Part Finder</p>
                  <h2 className="font-semibold text-gray-900">Searching for: {aiQuery}</h2>
                  <p className="text-sm text-gray-600">
                    These are mock matches. Refine by make, model, year, or category.
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

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <section className="mb-5">
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-semibold text-gray-900">Categories</h2>
            <p className="text-sm font-medium text-gray-600">
              {filteredProducts.length} of {conditionProducts.length} parts shown
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            <button
              type="button"
              onClick={() => setSelectedCategory("")}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                selectedCategory
                  ? "border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
                  : "border-emerald-600 bg-emerald-600 text-white"
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => {
              const Icon = categoryIcons[category];
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    selectedCategory === category
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : "border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category}
                </button>
              );
            })}
          </div>
        </section>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-44 w-full object-cover"
                />
                <div className="p-4">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold leading-snug text-gray-900">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {product.make} {product.model} {product.year}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {product.condition}
                    </span>
                  </div>

                  <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                    {product.description}
                  </p>

                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase text-gray-500">
                        {product.category}
                      </p>
                      <p className="mt-1 text-xl font-bold text-emerald-600">
                        {product.price}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      View details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
            <h2 className="text-xl font-semibold text-gray-900">No parts found</h2>
            <p className="mx-auto mt-2 max-w-md text-gray-600">
              Try changing the make, model, year, category, or search term to see more mock parts.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Reset browsing
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
