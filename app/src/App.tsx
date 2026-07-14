import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import PropertyDevelopment from "./pages/PropertyDevelopment";
import LandPlanning from "./pages/LandPlanning";
import LandDevelopment from "./pages/LandDevelopment";
import Landowners from "./pages/Landowners";
import Investors from "./pages/Investors";
import JointVentures from "./pages/JointVentures";
import JvFunding from "./pages/JvFunding";
import Properties from "./pages/Properties";
import Acquisitions from "./pages/Acquisitions";
import Disposals from "./pages/Disposals";
import Projects from "./pages/Projects";
import Sales from "./pages/Sales";
import Lettings from "./pages/Lettings";
import OffMarket from "./pages/OffMarket";
import PropertyOptions from "./pages/PropertyOptions";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property-development" element={<PropertyDevelopment />} />
        <Route path="/land-planning" element={<LandPlanning />} />
        <Route path="/land-development" element={<LandDevelopment />} />
        <Route path="/landowners" element={<Landowners />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/joint-ventures" element={<JointVentures />} />
        <Route path="/jv-funding" element={<JvFunding />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/acquisitions" element={<Acquisitions />} />
        <Route path="/properties/disposals" element={<Disposals />} />
        <Route path="/properties/projects" element={<Projects />} />
        <Route path="/properties/sales" element={<Sales />} />
        <Route path="/properties/lettings" element={<Lettings />} />
        <Route path="/off-market" element={<OffMarket />} />
        <Route path="/property-options" element={<PropertyOptions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
