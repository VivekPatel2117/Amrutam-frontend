import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import AffilateDashboard from "./pages/Affiliate/Dashboard";
import Breadcrumb from "./components/Breadcrumb";
import AffilateCommission from "./pages/Affiliate/Commission";
import SpecialCommission from "./pages/Affiliate/SpecialCommission";
import AffiliateCoupon from "./pages/Affiliate/Coupons";
import SpecialCoupons from "./pages/Affiliate/SpecialCoupons";
import PendingPayments from "./pages/Affiliate/Payments/PendingPayments";
import PaymentHistory from "./pages/Affiliate/Payments/PaymentHistory";
import Customization from "./pages/FAQ/App/Customization";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1020);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1020);

  // Detect Mobile / Desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1020);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100 overflow-hidden">
      {/* NAVBAR (fixed height) */}
      <div className="shrink-0">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        />
      </div>

      {/* MAIN LAYOUT (fills remaining height) */}
      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR */}
        <Sidebar isOpen={isSidebarOpen} setOpen={setIsSidebarOpen} />

        {/* MAIN CONTENT — SCROLLABLE */}
        <main
          className={`
            flex-1 
            overflow-y-auto       
            overscroll-contain 
            ${isMobile ? "p-2" : "p-6"}
          `}
        >
          <Breadcrumb />

          <Routes>
            <Route path="/" element={<AffilateDashboard />} />
            <Route path="/affiliate" element={<AffilateDashboard />} />
            <Route
              path="/affiliate/dashboard"
              element={<AffilateDashboard />}
            />
            <Route
              path="/affiliate/commission"
              element={<AffilateCommission />}
            />
            <Route
              path="/affiliate/commission/special-commission"
              element={<SpecialCommission />}
            />
            <Route
              path="/affiliate/coupons/special-coupons"
              element={<SpecialCoupons />}
            />
            <Route path="/affiliate/coupons" element={<AffiliateCoupon />} />
            <Route path="/affiliate/payment" element={<PendingPayments />} />
            <Route
              path="/affiliate/payments/pending-payment"
              element={<PendingPayments />}
            />
            <Route
              path="/affiliate/payments/payment-history"
              element={<PaymentHistory />}
            />
            <Route path="/FAQ/App/customization" element={<Customization />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
