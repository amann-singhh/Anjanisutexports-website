const path = require('path')
const fs = require('fs')
const sharp = require('sharp')
const {execFile} = require('child_process')

const rootAssets = path.join(__dirname, '..', '..', 'assets')
const imagesSrc = path.join(rootAssets, 'images', 'originals')
const imagesOut = path.join(rootAssets, 'images', 'web')
const videosSrc = path.join(rootAssets, 'videos', 'originals')
const videosOut = path.join(rootAssets, 'videos', 'web')

if(!fs.existsSync(imagesOut)) fs.mkdirSync(imagesOut, {recursive:true})
if(!fs.existsSync(videosOut)) fs.mkdirSync(videosOut, {recursive:true})

async function processImages(){
  if(!fs.existsSync(imagesSrc)) { console.log('No image originals found at', imagesSrc); return }
  const files = fs.readdirSync(imagesSrc).filter(f=>/\.(jpe?g|png|webp)$/i.test(f))
  for(const f of files){
    const inP = path.join(imagesSrc,f)
    const outP = path.join(imagesOut, f.replace(/\.(jpg|jpeg)/i,'.webp'))
    try{
      await sharp(inP).resize({width:1600}).webp({quality:80}).toFile(outP)
      console.log('Optimized image ->', outP)
    }catch(e){ console.error('Image failed',f,e) }
  }
}

function processVideos(){
  if(!fs.existsSync(videosSrc)) { console.log('No video originals found at', videosSrc); return }
  const files = fs.readdirSync(videosSrc).filter(f=>/\.(mp4|mov|mkv)$/i.test(f))
  for(const f of files){
    const inP = path.join(videosSrc,f)
    const outP = path.join(videosOut, f.replace(/\.[^.]+$/,'_web.mp4'))
    // ffmpeg required on PATH
    const args = ['-i', inP, '-c:v', 'libx264', '-crf', '28', '-preset', 'veryfast', '-c:a', 'aac', '-b:a', '96k', outP]
    execFile('ffmpeg', args, (err, stdout, stderr)=>{
      if(err) return console.error('Video failed',f, err.message)
      console.log('Transcoded video ->', outP)
    })
  }
}

async function run(){
  await processImages()
  processVideos()
}

run()
