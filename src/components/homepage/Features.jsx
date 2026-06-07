import { FiSearch, FiTrendingUp, FiLayers, FiBookmark, FiMousePointer, FiFileText, FiHexagon, FiArrowUpRight } from "react-icons/fi";

const FeaturesPage = () => {
  // ফিচারের ডেটা অবজেক্ট অ্যারে, যা ম্যাপ (map) করে রেন্ডার হবে
  const featuresData = [
    {
      id: 1,
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
      icon: <FiSearch className="text-[#d8b4fe] text-xl" />,
    },
    {
      id: 2,
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
      icon: <FiTrendingUp className="text-[#d8b4fe] text-xl" />,
    },
    {
      id: 3,
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
      icon: <FiLayers className="text-[#d8b4fe] text-xl" />,
    },
    {
      id: 4,
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
      icon: <FiBookmark className="text-[#d8b4fe] text-xl" />,
    },
    {
      id: 5,
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
      icon: <FiMousePointer className="text-[#d8b4fe] text-xl" />,
    },
    {
      id: 6,
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
      icon: <FiFileText className="text-[#d8b4fe] text-xl" />,
    },
    {
      id: 7,
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
      icon: <FiHexagon className="text-[#d8b4fe] text-xl" />,
    },
    {
      id: 8,
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
      icon: <FiArrowUpRight className="text-[#d8b4fe] text-xl" />,
    },
  ];

  return (
    // মূল সেকশন কন্টেইনার (ডার্ক ব্যাকগ্রাউন্ড ও প্যাডিং)
    <div className="bg-[#151516] text-white  py-20 px-6 sm:px-12 lg:px-24 flex flex-col items-center justify-center ">
      
      {/* হেডার পার্ট (টপ ট্যাগলাইন এবং মেইন টাইটেল) */}
      <div className="text-center max-w-2xl mb-16">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
          <span className="w-1.5 h-1.5 bg-blue-600 inline-block"></span>
          FEATURES JOB
          <span className="w-1.5 h-1.5 bg-blue-600 inline-block"></span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
          Everything you need <br /> to succeed
        </h2>
      </div>

      {/* গ্রিড কন্টেইনার (রেসপনসিভ ৪ কলাম লেআউট) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 max-w-7xl w-full">
        {featuresData.map((feature) => (
          <div key={feature.id} className="flex items-start gap-4 group">
            
            {/* গ্লোয়িং বর্ডারসহ আইকন বক্স */}
            <div className="flex items-center justify-center min-w-14 h-14 bg-[#121214] border border-gray-800/60 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover:border-purple-500/50 transition-colors duration-300">
              {feature.icon}
            </div>

            {/* টেক্সট কন্টেন্ট */}
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-medium text-gray-100 group-hover:text-white transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default FeaturesPage;