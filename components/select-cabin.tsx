'use client'

import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useBooking } from './contexts/booking-context'

interface CabinType {
  id: string
  name: string
  title: string
  description: string
  mainImage: string
  thumbnails?: string[]
  minCapacity: number
  maxCapacity: number
  price: number
}

const cabinTypes: CabinType[] = [
  {
    id: 'interior',
    name: 'داخلية',
    title: 'كبينة داخلية',
    description: 'سرير كوين أو سريرين منفصلين (حسب الطلب) حمام خاص للإستحمام ومجفف للشعر تلفزيون مسطح, خزانة, تليفون, ميني بار, ومكيف هواء للتحكم عن بعد بعض الكبائن توفر سرير بولمان إضافي',
    mainImage: '/wdcx.jpg',
    minCapacity: 1,
    maxCapacity: 3,
    price: 4060
  },
  {
    id: 'balcony',
    name: 'شرفة',
    title: 'كبينة مع بلكونة',
    description: 'سرير كوين أو سريرين منفصلين (حسب الطلب) حمام خاص للإستحمام ومجفف للشعر تلفزيون ذكى, خزانة, تليفون, ميني بار, ومكيف هواء للتحكم عن بعد بعض الكبائن توفر سرير بولمان إضافي ,بلكونة مجهزة',
    mainImage: '/asd2e.jpg',
    minCapacity: 1,
    maxCapacity: 5,
    price: 5868
  },
  {
    id: 'suite',
    name: 'أجنحة خزامى',
    title: 'جناح ديلوكس',
    description: 'سرير كوين أو سريرين منفصلين (حسب الطلب) حمام خاص للإستحمام ومجفف للشعر تلفزيون ذكى, خزانة, تليفون, ثلاجة صغيرة, ومكيف هواء للتحكم عن بعد',
    mainImage: '/qwedasd.png',
    minCapacity: 1,
    maxCapacity: 4,
    price: 12667
  }
]

export  function CabinSelection({onComplete}:any) {
  const [selectedType, setSelectedType] = useState('interior')
  const { bookingData, updateBookingData } = useBooking()

  const selectedCabin = cabinTypes.find(cabin => cabin.id === selectedType)
  const handleCabinSelect = (selectedType:string) => {
  setSelectedType(selectedType)
    
    updateBookingData({ cabinType: selectedType })
    // Here you would typically navigate to the next step
    return onComplete
  }
  return (
    <div className="max-w-2xl mx-auto bg-white p-2 mb-16" dir="rtl">
      {/* Tab Navigation */}
      <div className="flex border-b mb-6">
        {cabinTypes.map(cabin => (
          <button
            key={cabin.id}
            className={`flex-1 pb-2 px-4 text-center ${
              selectedType === cabin.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600'
            }`}
            onClick={() => handleCabinSelect(cabin.id)}
          >
            {cabin.name}
          </button>
        ))}
      </div>

      {selectedCabin && (
        <div>
          <h2 className="text-2xl font-bold mb-4">{selectedCabin.title}</h2>
          
          {/* Main Image */}
          <div className="relative mb-4">
            <img
              src={selectedCabin.mainImage}
              alt={selectedCabin.title}
              width={800}
              height={400}
              className="w-full rounded-lg"
            />
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed text-right">
            {selectedCabin.description}
          </p>

          {/* Capacity */}
          <div className="flex justify-between text-sm text-gray-600 mb-6">
            <span>الحد الأدنى لسعة الكابينة: {selectedCabin.minCapacity}</span>
            <span>الحد الأقصى للكابينة: {selectedCabin.maxCapacity}</span>
          </div>

          {/* Price and Actions */}
          <div className="flex items-center justify-between">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              onClick={()=>{
                localStorage.setItem('price',selectedCabin.price! as any)
                onComplete(2)
              }}
            >
              اختار
            </Button>
            <div className="text-left">
              <div className="text-sm text-gray-600">المبلغ الإجمالي</div>
              <div className="text-xl font-bold">
                {getCrbyCode(localStorage.getItem('country')!,selectedCabin.price)}
                <span className="text-sm font-normal text-gray-600 mr-1">
                  شامل الضريبة
                </span>
              </div>
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <Check className="h-4 w-4" />
                <span>أقساط</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

