import { Button } from "@/components/button";

export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100'
    >
      <div className="flex flex-col gap-4 w-[600px]">
        <div className="flex gap-2">
          <Button size="lg">
            Primary button
          </Button>
          <Button intent="secondary" size="lg">
            Secondary button
          </Button>
        </div>

        <div className="flex gap-2">
          <Button>
            Primary button
          </Button>
          <Button intent="secondary">
            Secondary button
          </Button>
        </div>

        <div className="flex gap-2" >
          <Button size="sm">
            Primary button
          </Button>
          <Button intent="secondary" size="sm">
            Secondary button
          </Button>
        </div>
      </div>
    </main>
  )
}
