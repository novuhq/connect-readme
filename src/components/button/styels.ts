import { cva } from "class-variance-authority";

export const button = cva(
  `border-2 border-magenta-500 rounded-2xl w-full duration-200`,
  {
    variants: {
      intent: {
        primary: `
          bg-magenta-500  text-gray-100 
          hover:bg-magenta-600 hover:border-magenta-600 
        `,
        secondary: `
          bg-transparent text-magenta-500
          hover:bg-magenta-500 hover:text-gray-100
        `
      },
      size: {
        sm: `px-4 py-3 text-base`,
        md: `px-4 py-3 text-2xl`,
        lg: `p-6 text-2xl`
      }
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md'
    }
  }
)