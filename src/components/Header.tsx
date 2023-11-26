import Image from 'next/image'
import React from 'react'

const Header = () => {
    const headerList = [
        {
          "title":"Servecis"
        },
        {
          "title":"Our Products"
        },
        {
          "title":"Help"
        },
        {
          "title":"Contact Us"
        },
      ]
  return (
    <header className="header p-2 flex justify-evenly">
        <span className="my-auto">
          <Image loading="lazy" alt="cookiy" width={35} height={35} src={'/brand-logo.png'} />
        </span>

        <div className="list my-auto flex gap-3">
          {
            headerList?.map((item:any) => (
              <p key={item?.title} className="cursor-pointer">{item?.title}</p>
            ))
          }
        </div>
      </header>
  )
}

export default Header