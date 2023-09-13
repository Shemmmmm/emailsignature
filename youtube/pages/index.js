import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import storage from './firebase.js'
import { ref, getDownloadURL } from "firebase/storage";
import {useState} from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const fileRef = ref(storage, 'Videos/screen-20230810-060148.mp4');
  const [videoUrl, setVideoUrl] = useState('');
  fileRef.getDownloadURL().then((url) => {
    
    setVideoUrl(url);
  })
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <video src={videoUrl} controls autoplay width="640" height="360">
            Your browser does not support the video tag.
            </video>
      </main>
      </>
      )
}
