import { NextResponse } from 'next/server'

// Sample data - in a real app, this would come from a database
const messages = [
  {
    id: 1,
    sender: "خدمة العملاء",
    message: "مرحباً بك في خدمة العملاء! كيف يمكنني مساعدتك؟",
    timestamp: "2024-01-08T10:00:00Z",
    isNew: true,
  },
  {
    id: 2,
    sender: "حجوزات الطيران",
    message: "تم تأكيد حجز رحلتك إلى دبي. رقم الحجز: #12345",
    timestamp: "2024-01-07T15:30:00Z",
    isNew: true,
  },
  {
    id: 3,
    sender: "العروض الخاصة",
    message: "عرض خاص: خصم 20% على رحلات الكروز في فبراير!",
    timestamp: "2024-01-06T09:15:00Z",
    isNew: false,
  },
]

export async function GET() {
  return NextResponse.json(messages)
}

