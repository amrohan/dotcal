"use client";
import React, { useState } from "react";
import {
  startOfYear,
  eachDayOfInterval,
  format,
  isToday,
  isPast,
  differenceInCalendarDays,
} from "date-fns";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DayDetailsModal from "./dayDetailsModal";

export default function YearDotCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const today = new Date();
  const yearStart = startOfYear(today);
  const yearEnd = new Date(today.getFullYear(), 11, 31);
  const days = eachDayOfInterval({ start: yearStart, end: yearEnd });
  const currentDateFormatted = format(today, "EEEE, MMMM d, yyyy");
  const dayOfYear = differenceInCalendarDays(today, yearStart) + 1;

  const handleDotClick = (day: Date) => {
    setSelectedDate(day);
  };

  const closeModal = () => {
    setSelectedDate(null);
  };

  return (
    <div className="flex flex-col items-center mt-4 px-2">
      {/* Current Date and Progress */}
      <div className="mb-6 text-center">
        <div className="text-2xl md:text-4xl mb-1 font-bold dark:text-white">
          {currentDateFormatted}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-300">
          Day {dayOfYear} of {days.length}
        </div>
      </div>

      {/* Dot Calendar */}
      <div className="flex flex-wrap gap-2.5 justify-start">
        {days.map((day, index) => {
          const isCurrentDay = isToday(day);
          const isPastDay = isPast(day) && !isCurrentDay;
          const formattedDate = format(day, "MMM d");

          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div
                  onClick={() => handleDotClick(day)}
                  className={`relative w-2.5 h-2.5 rounded-full cursor-pointer transition-transform duration-200 hover:scale-150 ${isCurrentDay
                      ? "bg-blue-500"
                      : isPastDay
                        ? "dark:bg-gray-700 bg-gray-100"
                        : "dark:bg-gray-400 bg-gray-300"
                    }`}
                ></div>
              </TooltipTrigger>
              <TooltipContent>{formattedDate}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>

      {/* Modal for extra day details */}
      <DayDetailsModal selectedDate={selectedDate} onClose={closeModal} />
    </div>
  );
}
