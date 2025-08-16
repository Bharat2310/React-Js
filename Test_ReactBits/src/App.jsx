import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TiltedCard from './components/tiled_card'
import TextCursor from './blocks/TextAnimations/TextCursor/TextCursor'
import PixelCard from './components/PixelCard'

function App() {
  

  return (
  <>
    
    <div className='bg-black w-full h-screen flex flex-col justify-center items-center gap-3'>
      <PixelCard variant='pink' className='bg-gray-900 mx-auto align-middle justify-center mb-3'>
        hello world
      </PixelCard>
      <TextCursor
    text="Hello!"
    delay={0.01}
    spacing={80}
    followMouseDirection={true}
    randomFloat={true}
    exitDuration={0.3}
    removalInterval={20}
    maxPoints={10}
    />

      <TiltedCard
        className="mb-4"
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-demo-text ml-3 mt-2 ">
            Kendrick Lamar - GNX
          </p>
        }
      />
    </div>
  </>
)
}

export default App
