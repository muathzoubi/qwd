import { Card } from '@/components/ui/card'
import { CreditCard, Users, Building2, Gift, UserMinus, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export function MenuItems() {
  const menuItems = [
    {
      icon: CreditCard,
      label: 'طرق الدفع',
      href: '/payment-methods'
    },
    {
      icon: Users,
      label: 'المسافرون الإضافيين',
      href: '/additional-travelers'
    },
    {
      icon: Building2,
      label: 'الفنادق المفضلة',
      href: '/favorite-hotels'
    },
    {
      icon: Gift,
      label: 'الرمز الترويجي',
      href: '/promo-code'
    },
    {
      icon: UserMinus,
      label: 'حذف الحساب',
      href: '/delete-account'
    }
  ]

  return (
    <div className="p-4 space-y-2">
      {menuItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <Card className="flex items-center justify-between p-4 hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <item.icon className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700">{item.label}</span>
            </div>
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </Card>
        </Link>
      ))}
    </div>
  )
}

