'use client'

import { useState, useEffect } from 'react'
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { format } from 'date-fns'
import { ar } from 'date-fns/locale'

interface Message {
  id: number
  sender: string
  message: string
  timestamp: string
  isNew: boolean
}

export function ChatBanner() {
  const [messages, setMessages] = useState<Message[]>([])
  const [open, setOpen] = useState(false)
  const newMessages = messages.filter(msg => msg.isNew).length

  useEffect(() => {
    fetch('/api/messages')
      .then(res => res.json())
      .then(data => setMessages(data))
  }, [])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label={`الرسائل - ${newMessages} رسائل جديدة`}
        >
          <Bell className="h-5 w-5" />
          {newMessages > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              {newMessages}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg" dir="rtl">
        <SheetHeader>
          <SheetTitle className="text-right">الرسائل</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] mt-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 rounded-lg ${
                  message.isNew ? 'bg-blue-50' : 'bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{message.sender}</h3>
                  <span className="text-xs text-gray-500">
                    {format(new Date(message.timestamp), 'PPp', { locale: ar })}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{message.message}</p>
                {message.isNew && (
                  <span className="inline-block mt-2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded">
                    جديد
                  </span>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

