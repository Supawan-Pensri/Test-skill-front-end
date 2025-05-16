import Image from "next/image";

import Navbar from "@/components/NavbarIndex";
import Footer from "@/components/Footer";
import DeliverySection from "@/components/DeliverySection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <DeliverySection />
    </div>
  );
  
}
