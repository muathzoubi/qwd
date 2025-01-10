"use client"

import Image from 'next/image';
import {
  Calendar,
  MapPin,
  Plane,
  Building2,
  Ship,
  User,
  Briefcase,
  Tag,
  Home,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { DatePickerDialog } from '@/components/date-dialog';
import DirDialog from '@/components/diractioin';
import LocationFinder from '@/components/flying';
import Link from 'next/link';

export default function Page() {
  const [openDat, setOpenDate] = useState(false)
  const [openDir, setOpeir] = useState(false)
  const [date, setDate] = useState<Date>()

  return (
    <div className="h-screen mobileBG font-sans" dir="rtl">
      {/* Top Navigation */}
      <header className="p-4 flex justify-between items-center">
        <button className="p-2 rounded-full bg-white/80 backdrop-blur">
          <User className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-full bg-white/80 backdrop-blur">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Cruise Type Selection */}
      <div className="px-4 flex justify-center gap-4 mb-6">
        {['أرويا', 'رويال كاريبيان', 'إن سي ال'].map((name, i) => (
          <div key={name} className="text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
              <img
                src={`/${i + 1}.png`}
                alt={name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm text-white">{name}</span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <main className="px-8">
        <div className="bg-gradient-to-b from-cyan-500 to-blue-900 rounded-3xl p-4 text-white ">
          <div className="flex items-center gap-2 mb-2 ">
            <Image
              src="/vercel.svg"
              alt="Aroya Cruises"
              width={100}
              height={24}
              className="h-6 object-contain"
            />
            <h1 className="text-xl font-bold">أرويا كروز</h1>
          </div>
          <p className="mb-6 text-md">إحجز رحلات أرويا كروز مع ريزيرفال</p>

          {/* Cruise Ship Image */}
          <div className="rounded-xl overflow-hidden mb-6">
            <img
              src="/aroya_ship.jpg"
              alt="Cruise Ship"
              width={200}
              height={100}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Button
              variant="secondary"
              className="h-12 text-right justify-between"
              onClick={() => setOpenDate(true)}
            >
              <span>التواريخ</span>
              <Calendar className="w-5 h-5" />
            </Button>
            <DatePickerDialog
              open={openDat}
              onOpenChange={setOpenDate}
              selectedDate={date}
              onSelect={setDate}
            />
            <Button
              variant="secondary"
              className="h-12 text-right justify-between"
              onClick={() => {setOpeir(true) }}            >
              <span>مسار الرحلة</span>
              <MapPin className="w-5 h-5" />
            </Button>
      <DirDialog onOpenChange={setOpeir} open={openDir} />

          </div>

          {/* Search Bar */}
          <Link href="/travels">
          <Button
              variant="secondary"
              className="h-12 text-right justify-between w-full">
              بحث
            </Button>
            </Link>
        </div>
      </main>

      {/* Service Icons */}
      <div className="py-2 px-4 mb-20 grid grid-cols-4 gap-4">
        <Button
          variant="secondary"
          className="flex flex-col items-center gap-2 h-auto py-4 bg-gradient-to-b from-cyan-500 to-blue-900 "
        >
          <img className="w-full" src="/vercel.svg" alt="" />
        </Button>
        <Button
          variant="secondary"
          className="flex flex-col items-center gap-2 h-auto py-4"
        >
          <Building2 className="w-6 h-6" />
          <span>فنادق</span>
        </Button>
        <Button
          variant="secondary"
          className="flex flex-col items-center gap-2 h-auto py-4"
        >
          <Ship className="w-6 h-6" />
          <span>كروز</span>
        </Button>
        <Button
          variant="secondary"
          className="flex flex-col items-center gap-2 h-auto py-4"
        >
          <Plane className="w-6 h-6" />
          <span>طيران</span>
        </Button>
      </div>
<LocationFinder/>
    </div>
  );
}
