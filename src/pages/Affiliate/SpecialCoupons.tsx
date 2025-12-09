import CommissionSection from "../../components/CommissionSection";
import { useState } from "react";

export default function SpecialCoupons() {
  const [isEnabled, setIsEnabled] = useState(true);

  const [product, setProduct] = useState("");
  const [productDiscount, setProductDiscount] = useState("");

  const [doctor, setDoctor] = useState("");
  const [doctorDiscount, setDoctorDiscount] = useState("");

  return (
    <div className="section1">
      <CommissionSection
        title="Special Coupon Commission"
        switchValue={isEnabled}
        onSwitchChange={setIsEnabled}
        buttonText="Add Coupon"
        onSubmit={() => console.log("Coupon Added")}

        // 🔥 Add this to control number of fields in a row
        gridCols={2}

        fields={[
          {
            label: "Product Name",
            placeholder: "Please select a product",
            value: product,
            onChange: setProduct,
            type: "select",
            options: ["Product A", "Product B", "Product C"],
            required: true,
          },
          {
            label: "Product Discount (%)",
            placeholder: "Select discount percentage",
            value: productDiscount,
            onChange: setProductDiscount,
            type: "select",
            options: ["5%", "10%", "15%", "20%", "25%"],
            required: true,
          },
          {
            label: "Doctor Name",
            placeholder: "Please select a doctor",
            value: doctor,
            onChange: setDoctor,
            type: "select",
            options: ["Doctor A", "Doctor B", "Doctor C"],
            required: true,
          },
          {
            label: "Doctor Discount (%)",
            placeholder: "Select discount percentage",
            value: doctorDiscount,
            onChange: setDoctorDiscount,
            type: "select",
            options: ["5%", "10%", "15%", "20%", "25%"],
            required: true,
          },
        ]}
      />
    </div>
  );
}
