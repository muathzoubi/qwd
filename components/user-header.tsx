import { UserCircle } from 'lucide-react'

export function UserHeader() {
  return (
    <div className="bg-gradient-to-l from-blue-900 to-blue-700 text-white p-6 pt-12">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">لوحة التحكم</h1>
          <p className="text-lg">مرحباً بك مرة أخرى، Mohd ASls</p>
        </div>
        <button className="text-white">
          <UserCircle className="w-8 h-8" />
        </button>
      </div>
      <div className="mt-4">
        <p className="text-sm mb-1">رصيد محفظتك</p>
        <p className="text-2xl font-bold">0 ريال سعودي</p>
      </div>
    </div>
  )
}

