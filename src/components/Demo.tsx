import Link from 'next/link';
import React from 'react';

export default function Demo() {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <Link
        href='/dropdown'
        type='button'
        className=' px-24 py-8 text-3xl font-bold bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.red.950)_0%,theme(colors.green.300)_10%,theme(colors.slate.900)_20%)] animate-[shimmer_4s_linear_infinite] rounded-[24px]
        relative
        after:flex after:absolute after:inset-[2px] after:bg-slate-900 after:rounded-[22px] after:content-[attr(aria-label)] after:items-center after:justify-center 
        '
        aria-label='生成 Ai 内容'
      >
        <p className='opacity-0 '>生成 Ai 内容</p>
      </Link>
    </div>
  );
}
