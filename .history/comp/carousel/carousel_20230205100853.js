import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Nav(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const router = useRouter();
    return (
    <>
        
    </>
    )
}