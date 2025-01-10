'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, ChevronDown, MapPin, Ship } from 'lucide-react'
import { useBooking } from './contexts/booking-context'

export  function GeustForm({onComplete}:any) {
    const [selectedCabinType, setSelectedCabinType] = useState('interior')


  useEffect(()=>{
  },[selectedCabinType])
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between gap-4 mb-4">
        <button className="flex items-center gap-2 text-blue-600">
          <Ship className="h-5 w-5" />
          <span>معلومات السفينة</span>
        </button>
        <button className="flex items-center gap-2 text-blue-600">
          <MapPin className="h-5 w-5" />
          <span>مسار الرحلة</span>
        </button>
        <button className="flex items-center gap-2 text-blue-600">
          <Calendar className="h-5 w-5" />
          <span>تواريخ أخرى</span>
        </button>
      </div>

      <img
        src="/aroya_ship.jpg"
        alt="Cruise Ship"
        width={800}
        height={400}
        className="w-full rounded-lg mb-4"
      />

      <h2 className="text-xl font-bold text-center mb-6">
        رحلات 3 ليالي جدة | الجزيرة الخاصة | جدة
      </h2>

      <div className="flex border-b mb-6">
        <button
          className={`flex-1 pb-2 px-4 text-center ${
            selectedCabinType === 'interior'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600'
          }`}
          onClick={() => setSelectedCabinType('interior')}
        >
          داخلية مطلة
        </button>
        <button
          className={`flex-1 pb-2 px-4 text-center ${
            selectedCabinType === 'balcony'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600'
          }`}
          onClick={() => setSelectedCabinType('balcony')}
        >
          شرفة
        </button>
        <button
          className={`flex-1 pb-2 px-4 text-center ${
            selectedCabinType === 'suite'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600'
          }`}
          onClick={() => setSelectedCabinType('suite')}
        >
          أجنحة خزامى
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">:العمر</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>• البالغين من 18 عام أو أكبر</li>
            <li>• الاطفال من 2 الي 17.99 عام</li>
            <li>• الرضع من 6 شهور الي 1.99 عام</li>
          </ul>
        </div>

        <div>
          <Label className="text-gray-600">عدد الضيوف</Label>
          <div className="relative mt-1">
            <Input type="text" value="2" className="pr-4 pl-10" />
            <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <Label className="text-gray-600">عمر الضيف 1</Label>
          <Input className="mt-1" />
        </div>


        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={onComplete}
        >
          متابعة
        </Button>
      </div>
    </div>

    <div className="bg-blue-50/50 rounded-lg p-4">
    </div>
  </div>
  )
}

