import * as RCheckbox from '@radix-ui/react-checkbox'

import * as S from './styles'

interface CategoryCheckboxProps {
  text: string
  icon: any
}

export const CategroyCheckbox = ({ icon: Icon, text }: CategoryCheckboxProps) => {
  return (
    <RCheckbox.Root className={S.checkboxRoot()}>
      <Icon weight='fill' className={S.icon()}/>
      {text}
    </RCheckbox.Root>
  )
}