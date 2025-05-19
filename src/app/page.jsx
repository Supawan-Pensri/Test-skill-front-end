import Image from "next/image";

import NavbarIndex from "@/components/NavbarIndex"; 
import DeliverySection from "@/components/DeliverySection";

export default function Home() {
  return (
    <div>
      <NavbarIndex />
      <DeliverySection />
    </div>
  );
  
}
