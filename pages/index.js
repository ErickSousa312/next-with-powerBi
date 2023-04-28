import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { toggleSidebar } = useProSidebar();

  return (
    <Navbar>
      <SubMenu>
        oi
      </SubMenu>
    </Navbar>
  );
}
