import Link from "next/link"
import {Avatar} from "../material_tailwind"

const NavBar = () => {
  return (
    <div>
      <nav className="bg-darkLighter w-full">
        <div className="logo">
            <Link href="/">
            <Avatar src="https://i.ibb.co/sRJYQrx/profile-pic-2.png" alt="avatar" />
            </Link>
        </div>
        <div className="menu">
          <p className="text-accent">Hello</p>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
