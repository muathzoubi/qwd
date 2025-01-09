'use client'

import { CalendarIcon, MapPinIcon, Search, Users } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
const travelers = [
  {
    link: "#",
    img: "/san.png",
    country: "الولايات المتحدة الأمريكية",
    city: "سان فرانسيسكو",
    start: "⭐ ⭐ ⭐ ⭐",
    pricefor: "السعر لشخصين",
    price: "451",
    currency: "ريال قطري",
    visitors: "1.2 مليون زائر",
  },
  {
    link: "#",
    img: "/paris.png",
    country: "فرنسا",
    city: "باريس",
    start: "⭐ ⭐ ⭐ ⭐ ⭐",
    pricefor: "السعر لشخصين",
    price: "520",
    currency: "ريال قطري",
    visitors: "2.8 مليون زائر",
  },
  {
    link: "#",
    img: "/tokyo.png",
    country: "اليابان",
    city: "طوكيو",
    start: "⭐ ⭐ ⭐ ⭐",
    pricefor: "السعر لشخصين",
    price: "600",
    currency: "ريال قطري",
    visitors: "3.5 مليون زائر",
  },
  {
    link: "#",
    img: "/rome.png",
    country: "إيطاليا",
    city: "روما",
    start: "⭐ ⭐ ⭐ ⭐",
    pricefor: "السعر لشخصين",
    price: "480",
    currency: "ريال قطري",
    visitors: "4 مليون زائر",
  },
  {
    link: "#",
    img: "/cairo.png",
    country: "مصر",
    city: "القاهرة",
    start: "⭐ ⭐ ⭐",
    pricefor: "السعر لشخصين",
    price: "350",
    currency: "ريال قطري",
    visitors: "2.2 مليون زائر",
  },
  {
    link: "#",
    img: "/bali.png",
    country: "إندونيسيا",
    city: "بالي",
    start: "⭐ ⭐ ⭐ ⭐ ⭐",
    pricefor: "السعر لشخصين",
    price: "700",
    currency: "ريال قطري",
    visitors: "1.9 مليون زائر",
  },
  {
    link: "#",
    img: "/dubai.png",
    country: "الإمارات العربية المتحدة",
    city: "دبي",
    start: "⭐ ⭐ ⭐ ⭐",
    pricefor: "السعر لشخصين",
    price: "400",
    currency: "ريال قطري",
    visitors: "3.2 مليون زائر",
  },
];

export default function TravelBooking() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="stays" className="w-full">
            <TabsList className="h-16 justify-start w-full bg-transparent border-none">
              <TabsTrigger value="stays" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
                الإقامة
              </TabsTrigger>
              <TabsTrigger value="flights" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
                الطيران
              </TabsTrigger>
              <TabsTrigger value="cars" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
                السيارات
              </TabsTrigger>
              <TabsTrigger value="packages" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
                الباقات
              </TabsTrigger>
              <TabsTrigger value="things" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
                أنشطة
              </TabsTrigger>
              <TabsTrigger value="cruises" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600">
                رحلات بحرية
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </nav>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <form className="grid md:grid-cols-[1fr_1fr_auto_auto] gap-4">
            <div>
              <Label htmlFor="where" className="sr-only">إلى أين؟</Label>
              <div className="relative">
                <MapPinIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input id="where" placeholder="إلى أين؟" className="pr-10" />
              </div>
            </div>
            <div>
              <Label htmlFor="dates" className="sr-only">التواريخ</Label>
              <div className="relative">
                <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input id="dates" placeholder="اختر التواريخ" className="pr-10" />
              </div>
            </div>
            <div>
              <Label htmlFor="travelers" className="sr-only">المسافرون</Label>
              <div className="relative">
                <Users className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input id="travelers" placeholder="٢ مسافر، غرفة واحدة" className="pr-10" />
              </div>
            </div>
            <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Search className="h-5 w-5" />
              <span className="sr-only">بحث</span>
            </Button>
          </form>
        </div>

        {/* Trending Destinations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">استكشف الإقامة في الوجهات الرائجة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {travelers.map((i,index)=>
            <Link href={i.link} className="group p-4" key={index}>
              <Card className="overflow-hidden">
              <CardHeader className='m-0 p-0'>
              <div className="relative ">
                  <img
                    src={i.img}
                    alt={i.city}
                    className="object-contacin group-hover:scale-105 transition-transform max-height-[120px]"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4  bg-gray-50 rounded z-10">
                <h3 className="font-semibold">{ i.city}</h3>
                <p className="text-sm text-gray-600">{i.country }</p>
                <p className="text-sm text-gray-600">{i.start}</p>
                <p className="text-sm text-gray-600">{`عدد الزوار  ${i.visitors}`}</p>
                <div className='flex justify-between m-1'>
                  <p className="text-sm font-bold text-gray-600">{i.pricefor }  </p>
                  <p className="text-sm text-green-600  font-bold">  {`${i.price} ريال`}</p>
                </div>
              </CardContent>
              </Card>
            </Link>
            )}
          
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="mb-12 relative rounded-xl overflow-hidden">
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg"
              alt="أغراض العطلة الصيفية"
              fill
              className="object-contain brightness-50"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
              <h2 className="text-4xl font-bold mb-4">اصنع ذكريات جديدة</h2>
              <p className="text-xl mb-6">احصل على خصم ٢٥٪ على معظم الفنادق المختارة وابدأ في صنع ذكريات جديدة مع من تحب.</p>
              <Button variant="outline" className="w-fit text-white border-white hover:bg-white hover:text-gray-900">
                استكشف العروض
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <div className="relative h-48">
              <Image
                src="/placeholder.svg"
                alt="شارع ملون"
                fill
                className="object-contain"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2">اعثر على رحلتك المثالية</h3>
              <p className="text-gray-600">خطط لرحلتك مع نصائح خبراء من فريقنا.</p>
            </CardContent>
          </Card>
          <Card>
            <div className="relative h-48">
              <Image
                src="/placeholder.svg"
                alt="حمام سباحة مع كرة شاطئ"
                fill
                className="object-contain"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2">احجز بمرونة</h3>
              <p className="text-gray-600">أنت المتحكم مع خيارات الإلغاء المجاني.</p>
            </CardContent>
          </Card>
          <Card>
            <div className="relative h-48">
              <Image
                src="/placeholder.svg"
                alt="مغامرة المشي"
                fill
                className="object-contain"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2">نحن معك</h3>
              <p className="text-gray-600">فريق الدعم متواجد لمساعدتك على مدار الساعة.</p>
            </CardContent>
          </Card>
        </section>

        {/* Additional Offers */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg"
                alt="منظر المنتجع"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">منتجعات شاملة</h3>
                <p className="mb-4">لا شيء أفضل من قضاء وقت رائع مع عائلتك.</p>
                <Button variant="outline" className="w-fit text-white border-white hover:bg-white hover:text-gray-900">
                  شاهد العروض
                </Button>
              </div>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg"
                alt="ركوب الدراجات"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">عروض اللحظة الأخيرة</h3>
                <p className="mb-4">احتفل باللحظة مع مغامرة غير متوقعة.</p>
                <Button variant="outline" className="w-fit text-white border-white hover:bg-white hover:text-gray-900">
                  شاهد العروض
                </Button>
              </div>
            </div>
          </Card>
        </section>
    </div>
  )
}

