'use client'

import { CalendarIcon, MapPinIcon, Search, Users } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
            <Link href="#" className="group">
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg"
                    alt="دبي"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">دبي</h3>
                  <p className="text-sm text-gray-600">الإمارات العربية المتحدة</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="#" className="group">
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg"
                    alt="سان دييغو"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">سان دييغو</h3>
                  <p className="text-sm text-gray-600">الولايات المتحدة الأمريكية</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="#" className="group">
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg"
                    alt="كاواي"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">كاواي</h3>
                  <p className="text-sm text-gray-600">هاواي</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="#" className="group">
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg"
                    alt="سيدني"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">سيدني</h3>
                  <p className="text-sm text-gray-600">أستراليا</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="mb-12 relative rounded-xl overflow-hidden">
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg"
              alt="أغراض العطلة الصيفية"
              fill
              className="object-cover brightness-50"
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
                className="object-cover"
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
                className="object-cover"
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
                className="object-cover"
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
                className="object-cover"
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
                className="object-cover"
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

