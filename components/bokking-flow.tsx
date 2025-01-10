'use client'

import { useState } from 'react'
import { BookingProvider } from './contexts/booking-context'
import { CabinSelection } from './select-cabin'
import { PassengerForm } from './pass-info'
import PaymentForm from './payment'
import { GeustForm } from './gest-info'

enum BookingStep {
  GuestInfo,
  CabinSelection,
  PassengerInfo,
  Payment,
  Confirmation
}

export  function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(BookingStep.GuestInfo)

  const renderStep = () => {
    switch (currentStep) {
        case BookingStep.GuestInfo:
            return <GeustForm  onComplete={() => setCurrentStep(BookingStep.CabinSelection)} />
      case BookingStep.CabinSelection:
        return <CabinSelection  onComplete={() => setCurrentStep(BookingStep.PassengerInfo)} />
      case BookingStep.PassengerInfo:
        return <PassengerForm onComplete={() => setCurrentStep(BookingStep.Payment)} />
      case BookingStep.Payment:
        return <PaymentForm onComplete={() => setCurrentStep(BookingStep.Confirmation)} />
      case BookingStep.Confirmation:
        return <div>Booking Confirmed!</div>
      default:
        return null
    }
  }

  return (
    <>
      {renderStep()}
      </>
  )
}

