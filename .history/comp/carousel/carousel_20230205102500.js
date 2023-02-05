import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {ImageData} from './ImageData'

export default function Images(){
    return (
    <>
        {ImageData.map((slide, index)=>{
            return(
                <img src={slide.image} alt = "carousel"/>
            )
        })}
    </>
    )
}