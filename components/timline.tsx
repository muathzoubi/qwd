'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface CruiseItineraryDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function CruiseItineraryDialog({ open, onOpenChange }: CruiseItineraryDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" h-full overflow-y-auto" dir="rtl">
        <DialogHeader className="border-b pb-4">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl font-bold text-blue-900">مسار الرحلة</DialogTitle>
            <button className="text-gray-600" onClick={() => onOpenChange(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
        </DialogHeader>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            رحلات 3 ليالي جدة | الجزيرة الخاصة | جدة
          </h2>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
           
              <div className="text-right">
                <h3 className="text-gray-600 mb-1">:سفينة سياحية</h3>
                <p className="text-lg font-semibold">Aroya</p>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-gray-600 mb-1">:المغادرة من</h3>
              <p className="text-lg font-semibold">جدة</p>
            </div>

            <div className="mb-8">
              <h3 className="text-gray-600 mb-1">:تاريخ المغادرة</h3>
              <p className="text-lg font-semibold">16 يناير 2025</p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute right-4 h-full w-0.5 bg-blue-200" />
              
              {/* Stop 1 */}
              <div className="relative flex mb-12">
                <div className="absolute right-2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full" />
                <div className="mr-12">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-gray-500">01</span>
                    <h4 className="text-xl font-bold">ميناء جدة الإسلامي</h4>
                  </div>
                  <p className="text-gray-600 mb-1">ميناء جدة الإسلامي</p>
                  <p className="text-gray-500 italic">المغادرة PM 10:00</p>
                  <p className="text-blue-600">Jan-2025-16</p>
                </div>
              </div>

              {/* Stop 2 */}
              <div className="relative flex mb-12">
                <div className="absolute right-2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full" />
                <div className="mr-12">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-gray-500">02</span>
                    <h4 className="text-xl font-bold">في البحر</h4>
                  </div>
                  <p className="text-gray-600">في البحر</p>
                  <p className="text-blue-600">Jan-2025-17</p>
                </div>
              </div>

              {/* Stop 3 */}
              <div className="relative flex mb-12">
                <div className="absolute right-2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full" />
                <div className="mr-12">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-gray-500">03</span>
                    <h4 className="text-xl font-bold">الجزيرة الخاصة</h4>
                  </div>
                  <p className="text-gray-600">الجزيرة الخاصة</p>
                  <p className="text-gray-500 italic">PM- 7:00 AM 5:30</p>
                  <p className="text-blue-600">Jan-2025-18</p>
                </div>
              </div>

              {/* Stop 4 */}
              <div className="relative flex">
                <div className="absolute right-2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full" />
                <div className="mr-12">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-gray-500">04</span>
                    <h4 className="text-xl font-bold">ميناء جدة الإسلامي</h4>
                  </div>
                  <p className="text-gray-600">ميناء جدة الإسلامي</p>
                  <p className="text-gray-500 italic">AM 7:00 الوصول الى</p>
                  <p className="text-blue-600">Jan-2025-19</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">ملاحظات هامة</h3>
            <p className="text-gray-600 leading-relaxed">
              قد تختلف الموانئ حسب تاريخ المغادرة وتخضع لتغيرات الطقس والظروف الأخرى. ولا توجد أي موانئ إضافية، ما لم يتم ذكرها في القائمة أعلاه.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
