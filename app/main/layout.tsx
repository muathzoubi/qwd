import { Button } from '@/components/ui/button';
import { Briefcase, Building2, Home, Ship, Tag, User } from 'lucide-react';

export const metadata = {
  title: 'Aroya Cruises',
  description: 'Book your next cruise vacation with Aroya Cruises',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main className="mobileBG" style={{zoom:0.7}}><>{children}
      </>
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
      <main className="px-8">
      {children}
        </main>
         {/* Service Icons */}
         <div className="py-8 px-4 mb-20 grid grid-cols-4 gap-4">
        <Button
          variant="secondary"
          className="flex flex-col items-center gap-2 h-auto py-4 bg-[#03156c]"
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
          <Ship className="w-6 h-6" />
          <span>كروز</span>
        </Button>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#001838] text-white p-4">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1">
            <User className="w-6 h-6" />
            <span className="text-xs">لوحة التحكم</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Briefcase className="w-6 h-6" />
            <span className="text-xs">حجوزاتي</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Tag className="w-6 h-6" />
            <span className="text-xs">العروض</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-sky-400">
            <Home className="w-6 h-6" />
            <span className="text-xs">الصفحة الرئيسية</span>
          </button>
        </div>
      </nav></main>
  );
}
