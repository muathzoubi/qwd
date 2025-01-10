'use client'

import { CalendarIcon, InfoIcon, MapIcon } from 'lucide-react'
import CruiseItineraryDialog from '@/components/timline'
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from 'react'
import Link from 'next/link'
import { BookingProvider, useBooking } from './contexts/booking-context'
import { getCrbyCode } from '@/app/actions/get-carancy'


export default function GateBooking({cruiseData}:any) {
  const [openTimeline,setOpenTimlein]=useState(false)
  const {updateBookingData}=useBooking()
  return (
    <>
    <div className="font-sans text-right mb-16" dir="rtl">
  
    
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <p className="text-gray-500 mb-2">تم العثور على هذه الرحلات</p>
          <div className="flex justify-between items-center mb-4">
            <button className="flex items-center text-blue-500">
              <InfoIcon className="h-5 w-5 ml-1" />
              معلومات السفينة
            </button>
            <button className="flex items-center text-blue-500" onClick={()=>setOpenTimlein(true)}>
              <MapIcon className="h-5 w-5 ml-1" />
              مسار الرحلة
            </button>
            <button className="flex items-center text-blue-500">
              <CalendarIcon className="h-5 w-5 ml-1" />
              مواعيد أخرى
            </button>
          </div>
          <img
            src="/aroya_ship.jpg"
            alt="Cruise Ship"
            width={600}
            height={300}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-4">{cruiseData[0].title}</h2>
          {cruiseData.map((cruise: { id: Key | null | undefined; departure: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; arrival: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined }) => (
            <div key={cruise.id} className="border-t py-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 ml-1 text-gray-500" />
                  <span>:المغادرة</span>
                </div>
                <span>{cruise.departure}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 ml-1 text-gray-500" />
                  <span>:الوصول الى</span>
                </div>
                <span>{cruise.arrival}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-blue-500">يبدأ من {getCrbyCode(localStorage.getItem('country')!,cruise.price as string )}</span>
                <span className="text-gray-500">(للضيف الواحد (شامل الضريبة</span>
              </div>
              <div className="flex justify-between items-center">
                <Link href={'/book'}>
                <button onClick={()=>{
               localStorage.setItem('departure',cruise.departure! as any)
               localStorage.setItem('arrival',cruise.arrival! as any)
               localStorage.setItem('title',cruiseData[0].title!)
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  احجز رحلة بحرية &lt;&lt;
                </button>
                </Link>
                <span className="text-green-500">أقساط ✓</span>
              </div>
            </div>
          ))}
          <button className="w-full bg-gray-800 text-white py-3 rounded-lg mt-4">
            عرض المزيد من الرحلات
          </button>
        </div>
      <CruiseItineraryDialog open={openTimeline} onOpenChange={setOpenTimlein} />
      </div>

      </>
  )
}

