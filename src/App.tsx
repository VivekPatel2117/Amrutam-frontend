import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="w-full max-h-screen bg-gray-50 overflow-hidden">

      {/* Navbar */}
      <Navbar 
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(prev => !prev)}
      />

      {/* Layout */}
      <div className="flex mt-[2vh]"> 
        <Sidebar 
          isOpen={isSidebarOpen}
          setOpen={() => setIsSidebarOpen(true)}
        />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>

    </div>
  );
}

export default App;
