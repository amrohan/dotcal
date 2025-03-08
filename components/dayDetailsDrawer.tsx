"use client";
import React from "react";
import { format } from "date-fns";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";

interface DayDetailsDrawerProps {
  selectedDate: Date | null;
  onClose: () => void;
}

export default function DayDetailsDrawer({
  selectedDate,
  onClose,
}: DayDetailsDrawerProps) {
  return (
    <Drawer
      open={Boolean(selectedDate)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DrawerContent className="min-h-96">
        <DrawerHeader>
          <DrawerTitle className="text-start">
            {selectedDate ? format(selectedDate, "EEEE, MMMM d, yyyy") : ""}
          </DrawerTitle>
          <DrawerDescription className="text-start">
            Information regarding this day in progress...
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
