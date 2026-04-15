const loading = () => {
  return (
    <div>
      <div className="flex flex-col flex-1 items-center justify-center min-h-screen">
        <div className="w-12 h-12 justify-center items-center flex border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="mt-3 text-gray-500 text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default loading;
