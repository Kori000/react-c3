import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import Demo from '../components/Demo';

export default function Home() {
  return <Demo></Demo>;
}
