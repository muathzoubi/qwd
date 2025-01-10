'use client'

import { useState } from 'react'
import { CabinSelection } from './select-cabin'
import { PassengerForm } from './pass-info'
import { WaitingPage } from './waiting-page'
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
        return <CabinSelection  onComplete={setCurrentStep} />
      case BookingStep.PassengerInfo:
        return <PassengerForm onComplete={() => setCurrentStep(BookingStep.Payment)} />
      case BookingStep.Payment:
        return <PaymentForm onComplete={() => setCurrentStep(BookingStep.Confirmation)} />
      case BookingStep.Confirmation:
        return <div> <WaitingPage /></div>
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

