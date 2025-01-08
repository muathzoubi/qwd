'use client'

import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { X } from 'lucide-react'
import { addMonths } from 'date-fns'
import { ar } from 'date-fns/locale'

interface DatePickerDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedDate: Date | undefined
  onSelect: (date: Date | undefined) => void
}

export function DatePickerDialog({
  open,
  onOpenChange,
  selectedDate,
  onSelect,
}: DatePickerDialogProps) {
  const [date, setDate] = React.useState<Date | undefined>(selectedDate)
  
  const handleSelect = () => {
    onSelect(date)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <DialogTitle className="text-right">اختر تاريخ المغادرة</DialogTitle>
            <div className="text-sm text-muted-foreground">
              {date?.toLocaleDateString('ar-SA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            locale={ar}
            numberOfMonths={3}
            fromDate={new Date()}
            toDate={addMonths(new Date(), 12)}
            classNames={{
              head_cell: "text-muted-foreground font-normal",
              cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
              day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
              day_today: "bg-accent text-accent-foreground",
              day_outside: "text-muted-foreground opacity-50",
              day_disabled: "text-muted-foreground opacity-50",
              day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
              day_hidden: "invisible",
              nav: "space-x-1 flex items-center",
              nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              caption: "flex justify-center pt-1 relative items-center",
              caption_label: "text-sm font-medium",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              row: "flex w-full mt-2",
              day_range_end: "aria-selected:bg-accent aria-selected:text-accent-foreground",
              day_range_start: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            }}
          />
          <div className="flex justify-end">
            <Button onClick={handleSelect} className="w-24">
              طبق
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

