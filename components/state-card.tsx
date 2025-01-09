import { Card } from '@/components/ui/card'
import { Plane, Building2, Award } from 'lucide-react'

export function StatsCards() {
  return (
    <Card className="mx-4 -mt-6 bg-white rounded-xl shadow-lg">
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="flex flex-col items-center text-center">
          <Award className="w-6 h-6 text-blue-600 mb-2" />
          <span className="text-2xl font-bold">0</span>
          <span className="text-sm text-gray-500">النقاط المكتسبة</span>
        </div>
        <div className="flex flex-col items-center text-center border-x">
          <Building2 className="w-6 h-6 text-blue-600 mb-2" />
          <span className="text-2xl font-bold">0</span>
          <span className="text-sm text-gray-500">الفنادق المحجوزة</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Plane className="w-6 h-6 text-blue-600 mb-2" />
          <span className="text-2xl font-bold">0</span>
          <span className="text-sm text-gray-500">الرحلات المحجوزة</span>
        </div>
      </div>
    </Card>
  )
}

