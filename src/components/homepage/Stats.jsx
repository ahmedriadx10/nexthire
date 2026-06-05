import { HiOutlineBriefcase } from 'react-icons/hi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import { FiStar } from 'react-icons/fi';
const Stats = () => {

const statsData = [
  {
    id: 1,
    count: '50K',
    label: 'Active Jobs',
    Icon: HiOutlineBriefcase,
  },
  {
    id: 2,
    count: '12K',
    label: 'Companies',
    Icon: HiOutlineOfficeBuilding,
  },
  {
    id: 3,
    count: '2M',
    label: 'Job Seekers',
    Icon: FiUsers,
  },
  {
    id: 4,
    count: '97%',
    label: 'Satisfaction Rate',
    Icon: FiStar,
  },
];
  return (
    <section className='max-w-7xl mx-auto w-[90%] py-20 lg:py-40 xl:py-50 space-y-12'>

<h2 className='max-w-2xl mx-auto text-center text-3xl md:text-[40px] font-medium'>Assisting over 15,000 job seekers find their dream positions.</h2>    

<section className=" ">
      <div className="">
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => {
            const IconComponent = stat.Icon;
            return (
              <div
                key={stat.id}
                className="bg-[#111111] border border-zinc-800/50 rounded-2xl p-8 flex flex-col justify-between min-h-55 transition-all duration-300 hover:border-zinc-700 hover:bg-[#141414]"
              >
                {/* আইকন সেকশন */}
                <div className="text-zinc-400 w-fit text-2xl">
                  <IconComponent />
                </div>

                {/* টেক্সট এবং নাম্বার সেকশন */}
                <div className="mt-8">
                  <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    {stat.count}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-3 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    </section>
  );
};

export default Stats;