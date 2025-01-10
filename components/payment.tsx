'use client'

import { useState } from 'react'
import { Apple, ChevronRight, Plus, CreditCard } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface PaymentFormProps {
  onSubmit: (data: any) => void
}

export  function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>('')
  const [cardDetails, setCardDetails] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  })

  const handleMethodChange = (value: string) => {
    setSelectedMethod(value)
  }

  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ paymentMethod: selectedMethod, ...cardDetails })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      <RadioGroup
        value={selectedMethod}
        onValueChange={handleMethodChange}  
        className="space-y-3"
      >
        <div className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="new-card" id="new-card" />
            <Label htmlFor="new-card" className="text-lg">إضافة بطاقة جديدة</Label>
          </div>
          <Plus className="h-5 w-5 text-gray-500" />
        </div>

        <div className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="apple" id="apple" />
            <Label htmlFor="apple" className="text-lg">أبل باي</Label>
          </div>
          <Apple className="h-5 w-5" />
        </div>

     

        <div className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="saved-card" id="saved-card" />
            <Label htmlFor="saved-card" className="text-lg">الدفع باستخدام البطاقة المسجلة</Label>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-500" />
        </div>
      </RadioGroup>

      {selectedMethod === 'new-card' && (
        <div className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="cardName">الاسم على البطاقة</Label>
            <Input
              id="cardName"
              name="cardName"
              value={cardDetails.cardName}
              onChange={handleCardDetailsChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cardNumber">رقم البطاقة</Label>
            <Input
              id="cardNumber"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleCardDetailsChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">تاريخ الانتهاء</Label>
              <Input
                id="expiry"
                name="expiry"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={handleCardDetailsChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardDetailsChange}
                required
              />
            </div>
          </div>
        </div>
      )}

      <Button type="submit" className="w-full" disabled={!selectedMethod}>
        إتمام الدفع
      </Button>
    </form>
  )
}

