'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'



interface BookingContextType {
  bookingData: any
  updateBookingData: (data: Partial<any>) => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookingData, setBookingData] = useState<any>({
   
  })

  const updateBookingData = (data: Partial<any>) => {
    console.log(data)
    setBookingData((prevData: any) => ({ ...prevData, ...data }))
  }

  return (
    <BookingContext.Provider value={{ bookingData, updateBookingData }}>
      {children}
    </BookingContext.Provider>
  )
}

export const useBooking = () => {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}
