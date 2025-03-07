"use client";
import React from "react";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface DayDetailsModalProps {
  selectedDate: Date | null;
  onClose: () => void;
}

export default function DayDetailsModal({
  selectedDate,
  onClose,
}: DayDetailsModalProps) {
  return (
    <Dialog
      open={Boolean(selectedDate)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {selectedDate ? format(selectedDate, "EEEE, MMMM d, yyyy") : ""}
          </DialogTitle>
          <DialogDescription>
            Information regarding this day in progress...
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
