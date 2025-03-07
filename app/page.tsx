import { ModeToggle } from "@/components/modeToggle";
import YearDotCalendar from "@/components/yearDotsGrid";

export default function Home() {
  return (
    <section className="container max-w-5xl mx-auto">
      <nav className="h-20 flex justify-end items-center px-4">
        <ModeToggle />
      </nav>
      <YearDotCalendar />
    </section>
  );
}
