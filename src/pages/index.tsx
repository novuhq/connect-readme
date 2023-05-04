import { CategroyCheckbox } from "@/components/CategoryCheckbox";
import { FilterBar } from "@/components/FilterBar";
import { Drop, FirstAid, PawPrint, Tree } from "phosphor-react";

export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between bg-gray-100'
    >
      <FilterBar/>
    </main>
  )
}
