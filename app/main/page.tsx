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

export default function Page() {
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

      
      {/* Main Content */}
      <main className="px-8">
    
      </main>

   
    </div>
  );
}
