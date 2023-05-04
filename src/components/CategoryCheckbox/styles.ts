import { cva } from "class-variance-authority";

export const checkboxRoot = cva(`
  flex items-center gap-3 justify-center group
  px-4 py-2 rounded-full text-gray-900
  bg-gray-100 border-2 border-magenta-500
  data-[state=checked]:bg-magenta-500 
  data-[state=checked]:border-magenta-500
  data-[state=checked]:text-gray-100
`)

export const icon = cva(`
  text-magenta-500 group-data-[state=checked]:text-gray-100
`)