'use client'

import { useEffect, useState } from 'react'
import { Clock, Loader2 } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

export default function WaitingPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        return Math.min(oldProgress + 1, 100)
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-6 text-center">
      <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
        <Clock className="h-8 w-8 text-primary animate-pulse" />
      </div>
      
      <div className="flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
      
      <div className="space-y-2">
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-muted-foreground">
          جاري معالجة طلبك...
        </p>
      </div>

      <div className="rounded-lg bg-primary/10 p-4">
        <ul className="space-y-3 text-sm text-right">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>التحقق من المعلومات</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>تأكيد الحجز</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>إعداد تفاصيل الرحلة</span>
          </li>
        </ul>
      </div>

      <p className="text-sm text-muted-foreground">
        سيتم تحويلك تلقائياً عند اكتمال العملية
      </p>
    </div>
  )
}

