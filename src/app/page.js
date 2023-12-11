import NavBar from '@/components/ui/nav/navbar'
import { Button } from '../components/ui/material_tailwind'
import Image from 'next/image'
import { ThemeSwitcher } from '@/Theme/ThemeSwitcher'

export default function Home() {
  return (
    <main>
     <NavBar></NavBar>
     <ThemeSwitcher/>
    </main>
  )
}
