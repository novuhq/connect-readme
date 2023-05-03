import { CVAExampleComponent } from "@/components/example/CVA";

export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-500'
    >
      <p>Hello world</p>
      <CVAExampleComponent/>
      <CVAExampleComponent intent="secondary"/>
    </main>
  )
}
