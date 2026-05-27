import React from 'react'

export default function Lightbox({open, type, src, alt, onClose}){
  if(!open) return null
  return (
    <div className="lightbox" role="dialog" aria-hidden={!open} onClick={onClose}>
      <button className="lb-close" onClick={onClose}>✕</button>
      <div className="lb-content" onClick={e=>e.stopPropagation()}>
        {type==='image' && <img src={src} alt={alt} style={{maxWidth:'100%', maxHeight:'80vh'}} />}
        {type==='video' && <video controls src={src} style={{maxWidth:'100%', maxHeight:'80vh'}} />}
        {alt && <div style={{color:'#fff',marginTop:8}}>{alt}</div>}
      </div>
    </div>
  )
}
