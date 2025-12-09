import { useState, useEffect } from "react";
import FAQTabs from "../../../components/FAQTabs";
import Icon from "../../../components/Icon";
import Button from "../../../components/ui/Button";
import AddNewFAQ from "../../../components/AddNewFAQ";
import Modal from "../../../components/ui/Modal";
import FAQSelection from "../../../components/FAQSelection";
function Customization() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleTabsChange = (tab: string) => {
    setActive(tab);
  };
  const handleTabs = (tab: string) => {
    setActiveTab(tab);
  };
  const [isNewFaqOnHomePage, setIsNewFaqOnHomePage] = useState(false);
  const homepageMax = 11;

  const tabs = ["Consultation", "Shop", "Wallet", "Forum", "Additional"];

  const faqData = {
    Consultation: [
      {
        id: "1",
        question: "What types of consultations are available?",
        answer: "You can book...",
      },
      {
        id: "2",
        question: "Can I get refund for wallet money?",
        answer: "Refunds are...",
      },
      {
        id: "3",
        question: "Can I refund for wallet money?",
        answer: "Refunds are...",
      },
      {
        id: "4",
        question: "Can I get refund for wallet money?",
        answer: "Refunds are...",
      },
      {
        id: "5",
        question: "Can I get refund for wallet money?",
        answer: "Refunds are...",
      },
      {
        id: "6",
        question: "Can I get refund for wallet money?",
        answer: "Refunds are...",
      },
      {
        id: "7",
        question: "Can I get refund for wallet money?",
        answer: "Refunds are...",
      },
      {
        id: "8",
        question: "Can I get refund for wallet money?",
        answer: "Refunds are...",
      },
      {
        id: "9",
        question: "Can I get refund for wallet money?",
        answer: "Refunds are...",
      },
      {
        id: "10",
        question: "Can I get refund for wallet money?",
        answer: "Refunds are...",
      },
      {
        id: "11",
        question: "Can I get refund for wallet money?",
        answer: "Refunds are...",
      },
    ],
    Shop: [
      {
        id: "3",
        question: "What is the return policy?",
        answer: "Returns allowed within...",
      },
    ],
    Wallet: [],
    Forum: [],
    Additional: [],
  };

  const [active, setActive] = useState("FAQ");
  const [activeTab, setActiveTab] = useState("consumer");
  const [isNewFaq, setIsNewFaq] = useState(false);
  const [replaceModalOpen, setReplaceModalOpen] = useState(false);
  const [selectionModalOpen, setSelectionModalOpen] = useState(false);
  useEffect(() => {
    console.log("JHEL")
    console.log(isNewFaqOnHomePage);
    if (isNewFaqOnHomePage) {
      setReplaceModalOpen(true);
    }
  }, [isNewFaqOnHomePage]);

  return (
    <div className="flex flex-col gap-8">
      <div
        className="tabs bg-white rounded-2xl font-medium text-gray-500 h-16 
                flex items-center px-3 max-w-screen gap-5
                overflow-x-auto whitespace-nowrap scrollbar-hide justify-start
                "
      >
        {/* Today */}
        <div
          className={`cursor-pointer pb-1 px-4 shrink-0 ${
            active === "banners"
              ? "border-b-2 border-green-800 text-green-800"
              : ""
          }`}
          onClick={() => handleTabsChange("banners")}
        >
          Banners
        </div>

        {/* Week */}
        <div
          className={`cursor-pointer pb-1 px-4 shrink-0 ${
            active === "page-per-products"
              ? "border-b-2 border-green-800 text-green-800"
              : ""
          }`}
          onClick={() => handleTabsChange("page-per-products")}
        >
          Page Per Products
        </div>

        {/* Month */}
        <div
          className={`cursor-pointer pb-1 px-4 shrink-0 ${
            active === "ingredients"
              ? "border-b-2 border-green-800 text-green-800"
              : ""
          }`}
          onClick={() => handleTabsChange("ingredients")}
        >
          Ingredients
        </div>

        {/* Custom */}
        <div
          className={`cursor-pointer pb-1 px-4 shrink-0 ${
            active === "FAQ" ? "border-b-2 border-green-800 text-green-800" : ""
          }`}
          onClick={() => handleTabsChange("FAQ")}
        >
          FAQ
        </div>
      </div>
      <div
        className="tabs bg-white rounded-2xl font-medium text-gray-500 h-16 
                flex items-center px-3 max-w-screen gap-5
                overflow-x-auto whitespace-nowrap scrollbar-hide justify-around
                "
      >
        <div
          className={`cursor-pointer pb-1 px-4 shrink-0 ${
            activeTab === "consumer"
              ? "border-b-2 border-green-800 text-green-800"
              : ""
          }`}
          onClick={() => handleTabs("consumer")}
        >
          Consumer
        </div>
        <div
          className={`cursor-pointer pb-1 px-4 shrink-0 ${
            activeTab === "doctor"
              ? "border-b-2 border-green-800 text-green-800"
              : ""
          }`}
          onClick={() => handleTabs("doctor")}
        >
          Doctor
        </div>
      </div>
      {isNewFaq ? (
        <AddNewFAQ
          setIsNewFaqOnHomePage={setIsNewFaqOnHomePage}
          setIsNewFaq={setIsNewFaq}
        />
      ) : (
        <div className="bg-white rounded-2xl">
          <div className="headers-section p-6 flex sm:flex-row flex-col items-center gap-4 w-full">
            <h2 className="text-[20px] font-semibold text-left text-black mb-3 sm:w-40 w-full">
              FAQ List
            </h2>

            {/* Search + icons */}
            <div className="flex flex-row justify-between w-full items-center mb-4">
              <div className="flex items-center gap-3">
                {/* Search Box */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search here"
                    onChange={(e) => setSearchQuery(e.target.value)}
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

              <div className="action-buttons flex gap-4">
                <Button onClick={() => setIsNewFaq(true)}>Add New FAQ</Button>
                <button className="bg-gray-100 h-10 w-10 rounded-lg flex items-center justify-center">
                  <Icon src="/assets/svgs/sort-icon.svg" size={18} />
                </button>
                <button className="bg-gray-100 h-10 w-10 rounded-lg flex items-center justify-center">
                  <Icon src="/assets/svgs/download-icon.svg" size={18} />
                </button>
              </div>
            </div>
          </div>
          <FAQTabs tabs={tabs} data={faqData} />
        </div>
      )}
      <Modal
        width="w-[30]"
        height="h-50"
        isOpen={replaceModalOpen}
        onClose={() => setReplaceModalOpen(false)}
      >
        <div className="h-full grid">
          <p className="title text-sm text-red-500">
            Homepage already has maximun number of FAQ's.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
              <p>Would you like to replace it instead ?</p>
            </div>
            <div className="flex justify-around">
              <button
                onClick={() => setReplaceModalOpen(false)}
                className="bg-gray-100 w-30 cursor-pointer border-2 rounded-sm px-4 py-2 border-green-800"
              >
                Cancel
              </button>
              <Button
                onClick={() => {
                  setReplaceModalOpen(false);
                  setSelectionModalOpen(true);
                }}
              >
                Replace
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
      width="w-[40vw]"
        height="h-[75vh]"
        isOpen={selectionModalOpen}
        onClose={() => setSelectionModalOpen(false)}
      >
        <FAQSelection
          faqs={faqData["Consultation"]} // ← from your tab system
          onCancel={() => setSelectionModalOpen(false)}
          onReplace={() => {
            setSelectionModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
}
export default Customization;
