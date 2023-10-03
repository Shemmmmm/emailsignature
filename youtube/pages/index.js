import {useEffect, useState} from 'react';
import Head from 'next/head'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] }) '@/components/displayVideos';
export default function Home() {
const [url, setUrl] = useState('');
useEffect(() =>
fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-deeyw/endpoint/Cluster0/YouTube/Videos').then((data) =>{ setUrl(data)}),[]);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <video src={url} width={300+'px'} height ={300+ 'px'} controls ></video>
        {url.length}
      </main>
      </>
      )
}
