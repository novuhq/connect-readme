import { cva } from "class-variance-authority";

const button = cva('p-4 rounded-lg border-2 border-[#E20062] flex items-center justify-center', {
  variants: {
    intent: {
      primary: 'bg-[#E20062] text-white hover:bg-[#AC003E] hover:border-[#AC003E]',
      secondary: `
         bg-transparent text-black 
        hover:bg-[#E20062] hover:text-white
      `
    }
  },
  defaultVariants: {
    intent: 'primary'
  }
})

interface ExampleComponentProps {
  intent?: 'primary' | 'secondary'
}

export const CVAExampleComponent = ({ intent }: ExampleComponentProps) => {
  return (
    <button className={button({intent})}>
      Example
    </button>
  )
}