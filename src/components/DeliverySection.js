import { ArrowRight } from "lucide-react";
import Image from 'next/image'
import Link from 'next/link'

export default function DeliverySection() {
    return (
        <section className="w-full h-full  bg-white ">

            //แถวแรก 2 ภาพแรก

            import {Link} from 'next/link';
            import Image from 'next/image';

            <div className="flex flex-row items-center justify-between px-0 w-full">
                <div className="ml-0 w-1/2 pr-[10px] relative">
                    <Link href="/page1">
                        <div className="relative">
                            <Image
                                src="/images/pexels-pixabay-33109.jpg" // ✅ ใช้ path จาก public folder
                                width={0}
                                height={0}
                                sizes="100%"
                                style={{ width: '100%', height: 'auto' }}
                                alt="Picture of the author"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-2xl font-bold text-white bg-black bg-opacity-40 px-4 py-2 rounded">Nature</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="mr-0 w-1/2 pl-[10px] relative">
                    <Link href="/page2">
                        <div className="relative">
                            <Image
                                src="/images/1.jpg" // ✅ ใช้ path จาก public folder
                                width={0}
                                height={0}
                                sizes="100%"
                                style={{ width: '100%', height: 'auto' }}
                                alt="Picture of the author"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-2xl font-bold text-white bg-black bg-opacity-40 px-4 py-2 rounded">The Forest</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* //==================== แถวที่ 2 ============================ */}
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                <Link href="/forest/page.js" className="block relative w-full h-[400px] group">
                    <Image
                        src="/images/forest.jpeg"
                        alt="ป่าไม้"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="pt-5"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                        <h2 className="text-2xl font-bold">The Forest</h2>
                    </div>
                </Link>



            </div>


        </section>
    );
}