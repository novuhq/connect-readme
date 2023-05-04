import { Coins, Drop, FirstAid, PawPrint, Tree } from "phosphor-react"

import { CategroyCheckbox } from "../CategoryCheckbox"

import * as S from './styles'

export const FilterBar = () => {
  return (
    <header className={S.container()}>
      <div className={S.categoryFilters()}>
        <CategroyCheckbox text='Health Care' icon={FirstAid}/>
        <CategroyCheckbox text='Trees' icon={Tree}/>
        <CategroyCheckbox text='Animals' icon={PawPrint}/>
        <CategroyCheckbox text='Water' icon={Drop}/>
        <CategroyCheckbox text='Inequality' icon={Coins}/>
      </div>
    </header>
  )
}