import { ModeToggle } from "@/components/modeToggle";
import YearDotCalendar from "@/components/yearDotsGrid";

export default function Home() {
  return (
    <section className="container max-w-5xl mx-auto px-2">
      <nav className="h-20 flex justify-end items-center">
        <ModeToggle />
      </nav>
      <YearDotCalendar />
    </section>
  );
}
