import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import storage from '../firebase /firebase/config/firebase.js'
import { ref } from "firebase/storage";
import {useEffect, useState} from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [videoUrl, setVideoUrl] = useState('');
 //const num = ref('gs://fir-c5188.appspot.com/Videos/VID-20230916-WA0002.mp4')//.then((url) => {
 async function handler() {
     const url = await fetch('gs://fir-c5188.appspot.com/VID-20230916-WA0002.mp4');
      setVideoUrl(url);
  }
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <video src= 'https://player.vimeo.com/external/403132008.sd.mp4?s=2272c12c9edcb5235ae7e4dfe18fd9180c686375&profile_id=164&oauth2_token_id=57447761' controls width="640" height="360" >
            Your browser does not support the video tag.
        </video>
      </main>
      </>
      )
}
