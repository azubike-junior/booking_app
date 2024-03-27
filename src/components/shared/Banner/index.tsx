
type BannerProp = {
  firstname: string
}

export default function Banner({firstname}: BannerProp) {
  return (
   <div className={` bg-[#10375C] w-full  lg:h-[240px]`}>
        <div className="max-w-[1062px] px-6 md:px-10 py-10 mx-auto text-white">
          <p className="text-3xl lg:text-5xl lg:pt-10">Hi {firstname}</p>
          <p className="text-xl lg:text-2xl pt-6">
            Welcome to your Bookteller administrative dashboard
          </p>
        </div>
      </div>
  )
}
