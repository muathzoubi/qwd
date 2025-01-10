'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Wallet2 } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type PaymentMethod = 'card' | 'stc'

export default function PaymentForm({onComplete}:any) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card')

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-2xl mx-auto p-4 space-y-4">
        {/* Payment Method Selection */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-6">اختر طريقة الدفع</h2>
            <RadioGroup
              defaultValue="card"
              onValueChange={(value: string) => setPaymentMethod(value as PaymentMethod)}
              className="grid gap-4"
            >
              <Label
                htmlFor="card"
                className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  paymentMethod === 'card' 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <RadioGroupItem value="card" id="card" className="sr-only" />
                <CreditCard className="h-6 w-6 text-blue-600" />
                <div className="flex-1">
                  <div className="font-medium">بطاقة ائتمان</div>
                  <div className="text-sm text-gray-500">الدفع باستخدام البطاقة الائتمانية</div>
                </div>
              </Label>

              <Label
                htmlFor="stc"
                className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  paymentMethod === 'stc' 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <RadioGroupItem value="stc" id="stc" className="sr-only" />
                <Wallet2 className="h-6 w-6 text-blue-600" />
                <div className="flex-1">
                  <div className="font-medium">STC Pay</div>
                  <div className="text-sm text-gray-500">الدفع باستخدام محفظة STC Pay</div>
                </div>
              </Label>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Credit Card Form */}
        {paymentMethod === 'card' && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">تفاصيل البطاقة</h2>
              <form className="space-y-4">
                <div>
                  <Label className="text-gray-700 block mb-1">
                    رقم البطاقة <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                  maxLength={16}
                    required
                    className="w-full border-gray-300 font-mono"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>

                <div>
                  <Label className="text-gray-700 block mb-1">
                    اسم حامل البطاقة <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    required
                    className="w-full border-gray-300"
                    placeholder="الاسم كما يظهر على البطاقة"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-700 block mb-1">
                      تاريخ الانتهاء <span className="text-red-500">*</span>
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="الشهر" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => {
                            const month = (i + 1).toString().padStart(2, '0')
                            return (
                              <SelectItem key={month} value={month}>
                                {month}
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="السنة" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => {
                            const year = (new Date().getFullYear() + i).toString()
                            return (
                              <SelectItem key={year} value={year}>
                                {year}
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-gray-700 block mb-1">
                      رمز الأمان (CVV) <span className="text-red-500">*</span>
                    </Label>
                    <Input 
                      required
                      maxLength={4}
                      className="w-full border-gray-300 font-mono"
                      placeholder="000"
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6"
                  onClick={onComplete}
                >
                  إتمام الدفع
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* STC Pay Form */}
        {paymentMethod === 'stc' && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">STC Pay الدفع باستخدام</h2>
              <form className="space-y-4">
                <div>
                  <Label className="text-gray-700 block mb-1">
                    رقم الجوال <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Input 
                      type="tel"
                      className="w-20 border-gray-300"
                      value="+966"
                      disabled
                    />
                    <Input 
                      type="tel"
                      required
                      className="flex-1 border-gray-300"
                      placeholder="5xxxxxxxx"
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6"
                >
                  إتمام الدفع
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

