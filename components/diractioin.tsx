import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog } from './ui/dialog'

const routes = [
  {
    id: 1,
    title: 'جدة - الجزيرة الخاصة - جدة',
    image: '/placeholder.svg',
    href: '/route/private-island'
  },
  {
    id: 2,
    title: 'جدة - شرم الشيخ - جدة',
    image: '/placeholder.svg',
    href: '/route/sharm-el-sheikh'
  },
  {
    id: 3,
    title: 'جدة - العقبة - جدة',
    image: '/placeholder.svg',
    href: '/route/aqaba'
  },
  {
    id: 4,
    title: 'رحلة كروز عيد الفطر',
    image: '/placeholder.svg',
    href: '/route/eid-cruise'
  },
  {
    id: 5,
    title: 'رحلة كروز يوم التأسيس',
    image: '/placeholder.svg',
    href: '/route/foundation-day'
  }
]

export default function DirDialog({ open,
    onOpenChange}:any) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>

      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">مسار الرحلة</h1>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ChevronLeft className="w-6 h-6" />
              <span className="sr-only">رجوع</span>
            </Link>
          </Button>
        </div>
      </header>

      {/* Routes List */}
      <main className="p-4 space-y-4">
        {routes.map((route) => (
          <Link
            key={route.id}
            href={route.href}
            className="block group relative h-48 rounded-lg overflow-hidden"
          >
            <Image
              src={route.image}
              alt=""
              width={800}
              height={400}
              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold text-center px-4">
                {route.title}
              </h2>
            </div>
          </Link>
        ))}
      </main>
    </Dialog>
  )
}

