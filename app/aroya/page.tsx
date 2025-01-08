import Image from 'next/image'
import { Calendar, ChevronLeft, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


export default function RoutesPage() {
  return (
    <>
      {/* Cruise Type Selection */}
      <div className="px-4 flex justify-center gap-4 mb-6">
        {['أرويا', 'رويال كاريبيان', 'إن سي ال'].map((name, i) => (
          <div key={name} className="text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
              <img
                src={`/${i + 1}.png`}
                alt={name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm text-white">{name}</span>
          </div>
        ))}
      </div>

        <div className="bg-gradient-to-b from-cyan-500 to-blue-900 rounded-3xl p-6 text-white ">
          <div className="flex items-center gap-2 mb-2 ">
            <Image
              src="/vercel.svg"
              alt="Aroya Cruises"
              width={100}
              height={24}
              className="h-6 object-contain"
            />
            <h1 className="text-xl font-bold">أرويا كروز</h1>
          </div>
          <p className="mb-6 text-md">إحجز رحلات أرويا كروز مع ريزيرفال</p>

          {/* Cruise Ship Image */}
          <div className="rounded-xl overflow-hidden mb-6">
            <img
              src="/aroya_ship.jpg"
              alt="Cruise Ship"
              width={200}
              height={100}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Button
              variant="secondary"
              className="h-10 text-right justify-between"
            >
              <span>التواريخ</span>
              <Calendar className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              className="h-10 text-right justify-between"
            >
              <span>مسار الرحلة</span>
              <MapPin className="w-5 h-5" />
            </Button>
          </div>

          {/* Search Bar */}
          <Input
            type="search"
            placeholder="بحث"
            className="bg-white h-10 text-right"
          />
        </div>
        </>
  )
}

