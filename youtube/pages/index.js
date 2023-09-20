import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import storage from '../firebase /firebase/config/firebase.js'
import { ref,getDownloadURL} from "firebase/storage";
import {useState} from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const fileRef = ref(storage);
  const [videoUrl, setVideoUrl] = useState('');
 const num = fileRef.fullPath.length//.then((url) => {
  
    //setVideoUl(fileRef);
//  })
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p> {num}</p>
        <video src={videoUrl} controls width="640" height="360">
            Your browser does not support the video tag.
            </video> 
      </main>
      </>
      )
}
