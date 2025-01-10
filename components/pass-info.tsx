'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Ship } from 'lucide-react'
import { useBooking } from './contexts/booking-context'
import { getCrbyCode } from '@/app/actions/get-carancy'

export  function PassengerForm({onComplete}:any) {
  const [agreed, setAgreed] = useState(false)
  const {bookingData} =  useBooking()
useEffect(()=>{
  console.log(bookingData)
},[])


  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
         <div className="bg-blue-50/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">ملخص الحجز</h3>
            <span className="text-gray-600">
              <Calendar className="h-5 w-5 inline-block ml-2" />
              - 
            </span>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span> {localStorage.arrival}  </span>
            </div>
            <div className="flex items-center gap-1">
              <Ship className="h-4 w-4" />
              <span>{localStorage.departure} </span>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">رسوم الكابينة</span>
              <span>{getCrbyCode(localStorage.getItem('country')!,localStorage.price)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">رسوم الميناء</span>
              <span>{getCrbyCode(localStorage.getItem('country')!,'303')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">رسوم الخدمة</span>
              <span>{getCrbyCode(localStorage.getItem('country')!,'103')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">رسوم ضريبة القيمة المضافة</span>
              <span>{getCrbyCode(localStorage.getItem('country')!,'403')}</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t">
              <span>المبلغ الإجمالي</span>
              <span>
              {getCrbyCode(localStorage.getItem('country')!,(parseInt(localStorage.price) + 815))}
              </span>
            </div>
          </div>

          <div className="mt-4">
            <span className="text-green-600 flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              أقساط
            </span>
          </div>

         
        </div>
      <div className="max-w-2xl mx-auto p-4 mb-16">
        <Card>
          <CardContent className="p-6">
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <div>
                  <Label className="text-gray-700 block mb-1">
                    الاسم الأول <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    required
                    className="w-full border-gray-300"
                    placeholder="الاسم الأول"
                  />
                </div>

                <div>
                  <Label className="text-gray-700 block mb-1">
                    اسم العائلة <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    required
                    className="w-full border-gray-300"
                    placeholder="اسم العائلة"
                  />
                </div>

                <div>
                  <Label className="text-gray-700 block mb-1">
                    البريد الإلكتروني <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    type="email"
                    required
                    className="w-full border-gray-300"
                    placeholder="البريد الإلكتروني"
                  />
                </div>

                <div>
                  <Label className="text-gray-700 block mb-1">
                    تأكيد البريد الإلكتروني <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    type="email"
                    required
                    className="w-full border-gray-300"
                    placeholder="تأكيد البريد الإلكتروني"
                  />
                </div>

                <div>
                  <Label className="text-gray-700 block mb-1">
                    رقم الجوال <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Input 
                      type="tel"
                      className="w-20 border-gray-300"
                      placeholder="+966"
                    />
                    <Input 
                      type="tel"
                      required
                      className="flex-1 border-gray-300"
                      placeholder="رقم الجوال"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-gray-700 block mb-1">
                    رقم الهوية / الإقامة <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    required
                    className="w-full border-gray-300"
                    placeholder="رقم الهوية / الإقامة"
                  />
                </div>

                <div>
                  <Label className="text-gray-700 block mb-1">
                    تاريخ الميلاد <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    type="date"
                    required
                    className="w-full border-gray-300"
                  />
                </div>

                <div>
                  <Label className="text-gray-700 block mb-1">
                    الجنسية <span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    required
                    className="w-full border-gray-300"
                    placeholder="الجنسية"
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2 rtl:space-x-reverse">
                  <Checkbox 
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm text-gray-700 cursor-pointer"
                    >
                      أوافق على الشروط والأحكام وسياسة الخصوصية
                    </label>
                    <p className="text-sm text-gray-500">
                      يجب أن تكون جميع المعلومات المقدمة صحيحة وحديثة. سيتم التحقق من صحة المعلومات عند تسجيل الوصول.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={!agreed}
                >
                  الحجز في الانتظار بسعة 15 دقيقة
                </Button>
                <Button 
                  type="button"
                  onClick={onComplete}
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  المتابعة في عملية الدفع
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

