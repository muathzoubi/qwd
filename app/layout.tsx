import { Briefcase, Home, Tag, User } from 'lucide-react';
import './globals.css';

export const metadata = {
  title: 'Aroya Cruises',
  description: 'Book your next cruise vacation with Aroya Cruises',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="mobileBG overflow-hidden" style={{zoom:0.7}}>
      <main>
      {children}
      </main>
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
      </nav></body>
    </html>
  );
}
