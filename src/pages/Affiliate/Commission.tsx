import CommissionSection from "../../components/CommissionSection";
import Button from "../../components/ui/Button";
import { useState } from "react";
import ResponsiveTable from "../../components/ui/ResponsiveTable";
import Icon from "../../components/Icon";
import { useNavigate } from "react-router-dom";
function Commission() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);
  const [product, setProduct] = useState("");
  const [percentage, setPercentage] = useState("");
  const [doctor, setDoctor] = useState("");
  const [doctorPercentage, setDoctorPercentage] = useState("");
  const [isDoctorEnabled, setIsDoctorEnabled] = useState(true);
  const sampleData = [
    {
      doctorName: "Alina Mathew",
      doctorImg: "/assets/images/avatar-2.png",
      doctorCommission: "30%",
      productName: "Nari Sandariya Malt",
      productCommission: "30%",
    },
    {
      doctorName: "Jack Rock",
      doctorImg: "/assets/images/avatar-3.png",
      doctorCommission: "30%",
      productName: "Nari Sandariya Malt",
      productCommission: "30%",
    },
    {
      doctorName: "Alina Mathew",
      doctorImg: "/assets/svgs/user-dummy.svg",
      doctorCommission: "30%",
      productName: "Nari Sandariya Malt",
      productCommission: "30%",
    },
    {
      doctorName: "Alina Mathew",
      doctorImg: "/assets/images/avatar-3.png",
      doctorCommission: "30%",
      productName: "Nari Sandariya Malt",
      productCommission: "30%",
    },
    {
      doctorName: "Jack Rock",
      doctorImg: "/assets/images/avatar-1.png",
      doctorCommission: "30%",
      productName: "Nari Sandariya Malt",
      productCommission: "30%",
    },
    {
      doctorName: "Alina Mathew",
      doctorImg: "/assets/images/avatar-4.png",
      doctorCommission: "30%",
      productName: "Nari Sandariya Malt",
      productCommission: "30%",
    },
    {
      doctorName: "Jack Rock",
      doctorImg: "/assets/images/avatar-1.png",
      doctorCommission: "30%",
      productName: "Nari Sandariya Malt",
      productCommission: "30%",
    },
    {
      doctorName: "Alina Mathew",
      doctorImg: "/assets/images/avatar-1.png",
      doctorCommission: "30%",
      productName: "Nari Sandariya Malt",
      productCommission: "30%",
    },
    {
      doctorName: "Alina Mathew",
      doctorImg: "/assets/svgs/user-dummy.svg",
      doctorCommission: "30%",
      productName: "Nari Sandariya Malt",
      productCommission: "30%",
    },
    {
      doctorName: "Jack Rock",
      doctorImg: "/assets/images/avatar-4.png",
      doctorCommission: "30%",
      productName: "Nari Sandariya Malt",
      productCommission: "30%",
    },
  ];
  const columns = [
    {
      key: "doctorName",
      label: "Doctor Name",
      render: (row: any) => (
        <div className="flex items-center gap-3">
          <img
            src={row.doctorImg}
            className="h-10 w-10 rounded-full object-cover"
            alt=""
          />
          <span>{row.doctorName}</span>
        </div>
      ),
    },
    { key: "doctorCommission", label: "Doctor’s Commission" },
    { key: "productName", label: "Product Name" },
    { key: "productCommission", label: "Product’s Commission" },
    {
      key: "action",
      label: "Action",
      render: () => (
        <button>
          <Icon src="/assets/svgs/edit-icon.svg" size={30} />
        </button>
      ),
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <Button onClick={() => navigate("/affiliate/commission/special-commission")} width="15vw">Add Special Commission</Button>
      </div>
      <div className="section1">
        <CommissionSection
          title="Default Product Commission"
          switchValue={isEnabled}
          onSwitchChange={setIsEnabled}
          buttonText="Update"
          onSubmit={() => console.log("submitted")}
          fields={[
            {
              label: "Product",
              placeholder: "Applies to all the products",
              value: product,
              onChange: setProduct,
              type: "select",
              options: ["All Products", "Product A", "Product B"],
            },
            {
              label: "Percentage",
              placeholder: "Please select a Percentage",
              required: true,
              value: percentage,
              onChange: setPercentage,
              type: "select",
              options: ["5%", "10%", "15%", "20%"],
            },
          ]}
        />
      </div>
      <div className="section2">
        <CommissionSection
          title="Default Doctor Commission"
          switchValue={isDoctorEnabled}
          onSwitchChange={setIsDoctorEnabled}
          buttonText="Update"
          onSubmit={() => console.log("submitted")}
          fields={[
            {
              label: "Doctor",
              placeholder: "Applies to all the doctors",
              value: doctor,
              onChange: setDoctor,
              type: "select",
              options: ["All Doctors", "Doctor A", "Doctor B"],
            },
            {
              label: "Percentage",
              placeholder: "Please select a Percentage",
              required: true,
              value: doctorPercentage,
              onChange: setDoctorPercentage,
              type: "select",
              options: ["5%", "10%", "15%", "20%"],
            },
          ]}
        />
      </div>
   <div className="sector3 p-6">
  <div className="bg-white p-6 rounded-xl flex flex-col gap-4">

    {/* HEADER SECTION (No scrolling) */}
    <div className="headers-section flex sm:flex-row flex-col items-center gap-4 w-full">
      <h2 className="text-[20px] font-semibold text-left text-black mb-3 sm:w-80 w-full">
        Special Commission
      </h2>

      {/* Search + icons */}
      <div className="flex flex-row justify-between w-full items-center mb-4">
        <div className="flex items-center gap-3">

          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              onChange={(e)=> setSearchQuery(e.target.value)}
              className="
                w-full bg-[#f0f7f4] px-9 py-3 rounded-lg outline-none 
                placeholder-gray-400 text-sm
              "
            />
            <span className="absolute left-3 top-2.5 text-green-600">
              <Icon src="/assets/svgs/search-icon.svg" size={18} />
            </span>
          </div>

          {/* Plus & Refresh Icons */}
          <div className="flex gap-2">
            <button className="bg-gray-100 h-10 w-10 rounded-lg flex items-center justify-center">
              <Icon src="/assets/svgs/plus.svg" size={18} />
            </button>
            <button className="bg-gray-100 h-10 w-10 rounded-lg flex items-center justify-center">
              <Icon src="/assets/svgs/re-fresh.svg" size={18} />
            </button>
          </div>
        </div>

        {/* Download Icon */}
        <button className="bg-gray-100 h-10 w-10 rounded-lg flex items-center justify-center">
          <Icon src="/assets/svgs/download-icon.svg" size={18} />
        </button>
      </div>
    </div>

    {/* TABLE SECTION — ONLY THIS SCROLLS */}
    <div className="w-full max-w-full overflow-x-auto overflow-y-hidden">
  <div className="min-w-max"> 
    <ResponsiveTable
      columns={columns}
      data={sampleData}
      rowsPerPage={5}
      searchQuery={searchQuery}
    />
  </div>
</div>

  </div>
</div>

    </div>
  );
}

export default Commission;
