import React, { FC, useState, useEffect } from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { motion, AnimatePresence } from 'framer-motion';
export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className='h-screen w-full flex items-center justify-center flex-col'>
      <DropdownMenu.Root
        open={isDropdownOpen}
        onOpenChange={setIsDropdownOpen}
      >
        <DropdownMenu.Trigger>
          <Aavatar></Aavatar>
        </DropdownMenu.Trigger>

        <AnimatePresence>
          {isDropdownOpen && (
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                align='start'
                sideOffset={6}
                className=' '
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 10,
                    scale: 0.45
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8
                  }}
                  className='w-[180px] bg-[#121314] rounded-md shadow-2xl backdrop-blur-sm text-gray-200 p-2 flex  flex-col gap-2 text-sm origin-top-left'
                >
                  <DropdownMenu.Group className='flex flex-col gap-2 '>
                    <DropdownMenu.Item className='dropdown-btn '>
                      查看个人档案
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className='dropdown-btn '>
                      编辑个人档案
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className='dropdown-btn '>
                      修改密码
                    </DropdownMenu.Item>
                  </DropdownMenu.Group>

                  <DropdownMenu.Separator className='bg-gray-500/50 h-px ' />

                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger className='dropdown-btn  '>
                      静音服务器
                    </DropdownMenu.SubTrigger>
                    <DropdownMenu.SubContent
                      sideOffset={14}
                      className='bg-[#121314] px-2 py-2 rounded-md'
                    >
                      <DropdownMenu.Item className='group text-[13px] leading-none  rounded-[3px] flex items-center h-[28px] p-2 relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none  data-[highlighted]:text-violet1 dropdown-btn-sub'>
                        Save Page As…
                        <div className='ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8'>
                          ⌘+S
                        </div>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item className='text-[13px] leading-none rounded-[3px] flex items-center h-[28px] p-2 relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none  data-[highlighted]:text-violet1  dropdown-btn-sub'>
                        Create Shortcut…
                      </DropdownMenu.Item>
                    </DropdownMenu.SubContent>
                  </DropdownMenu.Sub>

                  <DropdownMenu.Separator className='bg-gray-500/50 h-px ' />

                  <DropdownMenu.Group className='text-red-400 dropdown-btn-danger '>
                    <button
                      type='button'
                      className='font-semibold '
                    >
                      登出
                    </button>
                  </DropdownMenu.Group>
                </motion.div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
      <div className='w-52 '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aut
        explicabo dolor iusto ipsam quam sapiente aliquam enim modi officiis,
        dolore placeat esse corporis distinctio ratione, vel itaque alias nisi!
      </div>
    </div>
  );
}

function Aavatar() {
  return (
    <Avatar.Root className='bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle '>
      <Avatar.Image
        className='h-full w-full rounded-[inherit] object-cover'
        src='https://avatars.githubusercontent.com/u/9919?s=80&v=4'
        alt='Colm Tuite'
      />
      <Avatar.Fallback
        className='text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium'
        delayMs={400}
      >
        Kori
      </Avatar.Fallback>
    </Avatar.Root>
  );
}
