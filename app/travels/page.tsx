'use client'

import CruiseItineraryDialog from '@/components/timline'
import { useEffect, useState } from 'react'
import GateBooking from '@/components/gate'
import { cruiseData, cruiseData4 } from '../all'


export default function CruiseBooking() {
  const [openTimeline,setOpenTimlein]=useState(false)
  return (
    <div className="font-sans text-right mb-16" dir="rtl">
      <header className="flex justify-between items-center p-4 bg-white">
        <button className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold">الرحلات</h1>
        <div className="w-6" /> {/* Placeholder for balance */}
      </header>

      <div className="p-4 bg-gray-100">
        <div className="flex justify-between items-center mb-4">
          <button className="flex items-center text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
            </svg>
            فلتر
          </button>
          <div className="flex items-center">
            <span className="mr-2">:ترتيب حسب</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3z" />
            </svg>
          </div>
        </div>

        <GateBooking cruiseData={cruiseData}/>
        <GateBooking cruiseData={cruiseData4}/>
      </div>
      <CruiseItineraryDialog open={openTimeline} onOpenChange={setOpenTimlein} />
    </div>
  )
}

