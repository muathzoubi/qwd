import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function AppDownload() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">حمل تطبيق ريزيرفال</h2>
        <p className="text-lg mb-8 text-muted-foreground">
          أكثر من400 شركة طيران حول العالم في انتظارك لخدمتك من خلال قنوات دفع آمنة وسهلة و عملية حجز سهلة من 4 خطوات.
        </p>
        <p className="text-xl font-semibold mb-6">متاح الآن</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="secondary" 
            className="bg-[#0A1E3B] text-white hover:bg-[#0A1E3B]/90 h-16"
          >
            <span className="flex flex-col items-end">
              <span className="text-xs">تحميل من</span>
              <span className="text-lg">متجر التطبيقات</span>
            </span>
          </Button>
          <Button 
            variant="secondary" 
            className="bg-[#0A1E3B] text-white hover:bg-[#0A1E3B]/90 h-16"
          >
            <span className="flex flex-col items-end">
              <span className="text-xs">احصل عليه من</span>
              <span className="text-lg">متجر جوجل بلاي</span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}

