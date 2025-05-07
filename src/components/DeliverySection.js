import { ArrowRight } from "lucide-react";

export default function DeliverySection() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Panel - Store Image */}
                    <div className="relative overflow-hidden rounded-lg">
                        <div className="aspect-w-4 aspect-h-3 w-full h-full bg-gray-200">
                            <img
                                src=""
                                alt="Erewhon Store"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-10 left-10">
                                <div className="bg-white py-3 px-6 rounded-sm">
                                    <h3 className="font-medium text-center">DELIVERY | PICKUP</h3>
                                    <p className="text-sm text-center">READY IN 30 MINUTES</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Kitchen Image */}
                    <div className="relative overflow-hidden rounded-lg">
                        <div className="aspect-w-4 aspect-h-3 w-full h-full bg-amber-50">
                            <img
                                src=""
                                alt="Luxury Kitchen"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-10 right-10">
                                <div className="bg-white py-3 px-6 rounded-sm">
                                    <h3 className="font-medium text-center">SHIP ANYWHERE</h3>
                                    <p className="text-sm text-center">ARRIVES IN 2 DAYS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <a href="#shop-now" className="inline-flex items-center text-black font-medium hover:underline group">
                        EXPLORE MORE OPTIONS
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </div>
            </div>
        </section>
    );
}