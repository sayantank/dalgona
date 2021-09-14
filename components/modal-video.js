import ModalVideo from 'react-modal-video'
import React, { useState } from 'react'
import Image from "next/image";

export default function Container() {

    const [isOpen, setOpen] = useState(false)

    return (
        <>
        <ModalVideo channel='youtube' autoplay mute={0} isOpen={isOpen} videoId="cDWELu9L6z8" onClose={() => setOpen(false)} />

        <div className="w-full">
            <div className="mx-auto text-center">
            <Image
              src="/images/thumbnail.png"
              width={500}
              height={500}>
            </Image>
            </div>
        </div>

            <button id="play-video" className="video-play-button" onClick={()=> setOpen(true)}>
            <span></span>
            </button>
                
        </>
    );
  }