import React from "react";
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

export default function YearDotCalendar() {
  const today = new Date();
  const yearStart = startOfYear(today);
  const yearEnd = new Date(today.getFullYear(), 11, 31);

  const days = eachDayOfInterval({ start: yearStart, end: yearEnd });

  const currentDateFormatted = format(today, "EEEE, MMMM d, yyyy");
  const dayOfYear = differenceInCalendarDays(today, yearStart) + 1;

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
                  className={`relative w-2.5 h-2.5 rounded-full cursor-pointer transition-transform duration-200 hover:scale-150 ${isCurrentDay
                      ? "dark:bg-green-500 bg-zinc-900"
                      : isPastDay
                        ? "dark:bg-zinc-700 bg-zinc-200"
                        : "bg-zinc-300"
                    }`}
                >
                  {/* {isCurrentDay && ( */}
                  {/*   <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs text-white"></div> */}
                  {/* )} */}
                </div>
              </TooltipTrigger>
              <TooltipContent>{formattedDate}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
