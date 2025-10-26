import React from 'react';
import logo from '/assets/logo.png';
import user from '/assets/james.jfif';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2';
import { HiDotsVertical, HiPlus } from 'react-icons/hi';
import HeadersItem from './HeadersItem';

function Header() {
  const [toggle, setToggle] = React.useState(false);

  const menu = [
    {
      name: "home",
      icon: HiHome
    },
    {
      name: "search",
      icon: HiMagnifyingGlass
    },
    {
      name: "watch list",
      icon: HiPlus
    },
    {
      name: "originals",
      icon: HiStar
    },
    {
      name: "movies",
      icon: HiPlayCircle
    },
    {
      name: "series",
      icon: HiTv
    }
  ];

  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex gap-8 items-center '>
        <img src={logo} alt="Logo" className="w-[80px] md:w-[115px] object-cover" />
       <div className='hidden md:flex gap-8'>
        {menu.map((item) => (
          <HeadersItem key={item.name} name={item.name} Icon={item.icon} />
        ))}
      </div>

       <div className='flex md:hidden gap-5'>
        {menu.map((item, index) =>index < 3 && (
          <HeadersItem key={item.name} name={''} Icon={item.icon} />
        ))}
        <div className='md-hidden' onClick={()=>setToggle(!toggle)}>
          <HeadersItem name={''} Icon={HiDotsVertical} />
          {toggle ? <div className='absolute mt-3 bg-gray-900 p-3 border-[1px] border-gray-700 px-5 py-4'>
              {menu.map((item, index) =>index > 2 && (
          <HeadersItem key={item.name} name={item.name} Icon={item.icon} />
        ))} 
          </div>: null }
        </div>
      </div>
</div>
      <img src={user} alt="user" className='w-[40px] rounded-full' />
    </div>
  );
}

export default Header;


