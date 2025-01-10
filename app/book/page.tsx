
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Calendar, ChevronDown, Ship, MapPin, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { CabinSelection } from '@/components/select-cabin'
import { PassengerForm } from '@/components/pass-info'
import PaymentForm from '@/components/payment'
import { BookingFlow } from '@/components/bokking-flow'
import { BookingProvider } from '@/components/contexts/booking-context'
export interface Guest {
  age: string;
}

export interface BookingDetails {
  startDate: string;
  endDate: string;
  nights: number;
  guests: Guest[];
  cabinType: 'interior' | 'balcony' | 'suite';
  prices: {
    cabin: number;
    port: number;
    service: number;
    vat: number;
    total: number;
  };
}
export default function BookingSteps() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedCabinType, setSelectedCabinType] = useState('interior')
  return (
    <BookingProvider>
      <header className="flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center gap-2">
          <ChevronDown className="h-5 w-5" />
          <h1 className="text-lg font-semibold text-blue-900">معلومات الضيوف</h1>
        </div>
        <Button variant="ghost" size="icon">
          <X className="h-5 w-5" />
        </Button>
      </header>
      <BookingFlow />
    </BookingProvider>
  )
}


