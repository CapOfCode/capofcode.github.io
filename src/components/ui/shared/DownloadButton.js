'use client'
import Link from "next/link"


const DownloadButton = () => {
  return (
    <div>
      <Link className=" text-darkLighter font-medium bg-accentRgb px-4 py-3 rounded-md shadow-customShadow hover:bg-accent hover:translate-x-1 transition-all ease-in-out" href="https://docs.google.com/document/d/1kj6NViwHd5_0jWXYqgRCDa-SU_48HE0Vz-gz6DNTPVQ/export?format=pdf">Resume</Link>
    </div>
  )
}

export default DownloadButton
