import  { useState } from 'react'
import StatsSection from '../../components/StatsSection';
import TopList from '../../components/TopList';

function Dashboard() {
  const statsData = [
    {
      title: "Total Coupons clicks",
      icon: "/assets/svgs/calendar.svg",
      value: 255,
      suffix: "/month",
    },
    {
      title: "Total Orders",
      icon: "/assets/svgs/non-refund.svg",
      value: 55,
      suffix: "/month",
    },
    {
      title: "Total Revenue",
      icon: "/assets/svgs/empty-wallet.svg",
      value: "5,540",
      suffix: "/month",
    },
    {
      title: "Total Doctors",
      icon: "/assets/svgs/profile-add.svg",
      value: 5,
      suffix: "/month",
    },
  ];
  const TopAffiliateDoctors = [
  {
    name: "Dr. Meenal",
    specialty: "Gynecology + 2 others",
    image: "/assets/images/avatar.png",
    percent: 8,
  },
  {
    name: "Dr. Pallav",
    specialty: "Gynecology + 2 others",
    image: "/assets/images/avatar.png",
    percent: 1,
  },
  {
    name: "Dr. Sapna",
    specialty: "Gynecology + 2 others",
    image: "/assets/images/avatar.png",
    percent: -2,
  },
];
const TopAffiliateProducts = [
  {
    name: "Amrutam Nari Sondarya Malt",
    image: "/assets/images/product-1.png",
  },
  {
    name: "Amrutam Bhringraj Hair Therapy",
    image: "/assets/images/product-2.png",
  },
  {
    name: "Amrutam Lozenge Malt",
    image: "/assets/images/product-3.png",
  },
];
  const [active, setActive] = useState("today");
  const handleTabsChange = (tab: string) => {
    setActive(tab);
  };
  return (
    <div className='flex flex-col gap-8'>
       <div className="tabs bg-white rounded-3xl font-medium text-gray-500 h-16 
                flex items-center px-3 max-w-screen
                overflow-x-auto whitespace-nowrap scrollbar-hide 
                sm:justify-around">

  {/* Today */}
  <div
    className={`cursor-pointer pb-1 px-4 shrink-0 ${
      active === "today"
        ? "border-b-2 border-green-800 text-green-800"
        : ""
    }`}
    onClick={() => handleTabsChange("today")}
  >
    Today So Far
  </div>

  {/* Week */}
  <div
    className={`cursor-pointer pb-1 px-4 shrink-0 ${
      active === "week"
        ? "border-b-2 border-green-800 text-green-800"
        : ""
    }`}
    onClick={() => handleTabsChange("week")}
  >
    Week So Far
  </div>

  {/* Month */}
  <div
    className={`cursor-pointer pb-1 px-4 shrink-0 ${
      active === "month"
        ? "border-b-2 border-green-800 text-green-800"
        : ""
    }`}
    onClick={() => handleTabsChange("month")}
  >
    Month So Far
  </div>

  {/* Custom */}
  <div
    className={`cursor-pointer pb-1 px-4 shrink-0 ${
      active === "custom"
        ? "border-b-2 border-green-800 text-green-800"
        : ""
    }`}
    onClick={() => handleTabsChange("custom")}
  >
    Custom
  </div>
</div>

        <div className='stats'>
          <StatsSection stats={statsData} />
        </div>
        <div className='top-section flex flex-col lg:flex-row justify-between items-center gap-4'>
          <div className="heading affiliate-doctors font-medium">
            <p className='text-xl pl-2'>Top Affiliate Doctors</p>
            <div className="top-list mt-4">
              <TopList list={TopAffiliateDoctors}/>
            </div>
          </div>
            <div className="heading affiliate-products font-medium">
            <p className=' text-xl pl-2'>Top Affiliate Products</p>
            <div className="top-list mt-4">
              <TopList list={TopAffiliateProducts}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard