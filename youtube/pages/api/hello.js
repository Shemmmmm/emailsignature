// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
 const url = fetch('gs://fir-c5188.appspot.com/VID-20230916-WA0002.mp4');
 return url;
}
