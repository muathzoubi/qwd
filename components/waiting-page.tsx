'use client'

import { useEffect, useState } from 'react'
import { Clock, Loader2 } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export  function WaitingPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        return Math.min(oldProgress + 1, 100)
      })
    }, 300)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-6">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Clock className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <CardTitle className="text-2xl font-bold">الرجاء الانتظار</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
          
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-center text-sm text-muted-foreground">
              جاري معالجة طلبك...
            </p>
          </div>

          <div className="rounded-lg bg-primary/10 p-4">
            <ul className="space-y-3 text-sm" dir="rtl">
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

          <p className="text-center text-sm text-muted-foreground">
            سيتم تحويلك تلقائياً عند اكتمال العملية
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

