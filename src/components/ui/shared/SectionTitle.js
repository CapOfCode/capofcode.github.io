
const SectionTitle = ({title, subTitle}) => {
  return (
    <div className="flex flex-col justify-center text-center">
      <h1 className="text-3xl text-light font-medium drop-shadow">{title}</h1>
      <p className="text-lightDarker">{subTitle}</p>
      <div className="bg-accentRgb pt-1 rounded-lg w-20 mx-auto my-2"></div>
    </div>
  )
}

export default SectionTitle
