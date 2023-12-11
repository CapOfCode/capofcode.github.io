import NavBar from '@/components/ui/nav/navbar'
import { Button } from '../components/ui/material_tailwind'
import Image from 'next/image'
import { ThemeSwitcher } from '@/Theme/ThemeSwitcher'
import Banner from '@/components/ui/banner/Banner'
import SectionTitle from '@/components/ui/shared/SectionTitle'

export default function Home() {
  return (
    <main>
     <NavBar></NavBar>
     <Banner></Banner>
     
    <SectionTitle></SectionTitle>
    </main>
  )
}
