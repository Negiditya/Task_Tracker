function Loader() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-2xl border bg-white p-6 shadow-sm"
        >
          <div className="h-6 w-2/3 rounded bg-gray-200"></div>

          <div className="mt-5 h-4 rounded bg-gray-200"></div>

          <div className="mt-2 h-4 w-5/6 rounded bg-gray-200"></div>

          <div className="mt-6 flex gap-3">
            <div className="h-8 w-20 rounded-full bg-gray-200"></div>

            <div className="h-8 w-24 rounded-full bg-gray-200"></div>
          </div>

          <div className="mt-8 h-4 w-1/2 rounded bg-gray-200"></div>

          <div className="mt-8 flex justify-between">
            <div className="h-10 w-24 rounded-lg bg-gray-200"></div>

            <div className="h-10 w-24 rounded-lg bg-gray-200"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Loader;
