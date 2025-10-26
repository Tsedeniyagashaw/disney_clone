import React from 'react'

function HeadersItem({name, Icon}) {
  return (
    <div className='text-white flex item-center gap-2 text-[20px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2'>

     <Icon className="m-auto"/>
    <h2 className=''>{name}</h2>

    </div>
  )
}

export default HeadersItem
