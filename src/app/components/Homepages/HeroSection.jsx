const stats = [
  { value: "10", label: "Total Friends" },
  { value: "3", label: "Overdue" },
  { value: "5", label: "On Track" },
  { value: "12", label: "Interactions" },
];

const HeroSection = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <div className=" container mx-auto border-b pb-12 border-b-gray-300">
        <div className="max-w-4xl mx-auto text-center  lg:pt-12 xl:pt-16">
          <h1 className="text-5xl font-bold capitalize">
            Track your friendships with ease
          </h1>
          <p className="pt-6 max-w-2xl mx-auto text-[#64748B]">
            BondhuTrack combines modern tracking with emotional value, helping
            you manage friendships with data-driven insights and simple tools.
          </p>

          <p className="my-2 text-sm text-green-700 font-medium">
            “বন্ধুত্বের যত্ন নিন, সম্পর্ক রাখুন সবসময় জীবন্ত”
          </p>

          <button className="rounded-lg relative w-48  mx-auto group-hover:rounded-xl mt-4  h-10 cursor-pointer flex items-center border border-green-500 bg-green-900 group hover:bg-green-900 active:bg-green-900 active:border-green-500">
            <span className="text-gray-200 group-hover:text-[8px]   font-semibold ml-8 transform group-hover:translate-x-20 transition-all  duration-300">
              Add A Friend
            </span>
            <span className="absolute right-0 h-full w-10 rounded-lg bg-green-900 hover:bg-green-500  flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
              <svg
                className="svg w-8 text-white"
                fill="none"
                height={24}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1={12} x2={12} y1={5} y2={19} />
                <line x1={5} x2={19} y1={12} y2={12} />
              </svg>
            </span>
          </button>
        </div>

        {/* Connection Overview */}
        {/* STATS SECTION */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-[#0F172A]">
                {item.value}
              </h2>
              <p className="text-[#64748B] mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
