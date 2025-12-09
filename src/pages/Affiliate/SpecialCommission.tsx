import CommissionSection from "../../components/CommissionSection";
import { useState } from "react";
export default function SpecialCommission() {
     const [isEnabled, setIsEnabled] = useState(true);
      const [product, setProduct] = useState("");
      const [percentage, setPercentage] = useState("");
      const [doctor, setDoctor] = useState("");
      const [doctorPercentage, setDoctorPercentage] = useState("");
  return (
   <div className="section1">
        <CommissionSection

          title="Default Product Commission"
          switchValue={isEnabled}
          onSwitchChange={setIsEnabled}
          buttonText="Add"
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
  )
}
