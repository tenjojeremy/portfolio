import React, { useState, createContext, useContext } from 'react'
import Modal from '@tenjojeremy/web-toolkit/feedback/modal'
import Carousel from '@tenjojeremy/web-toolkit/dataDisplay/carousel'
import Image from '@tenjojeremy/web-toolkit/media/image'

export const CarouselContext = createContext(null)

export const CarouselProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(null)

  const updateCarousel = (data = [], index = 0) => {
    setShow(true)
    setData(data)
    setIndex(index)
  }

  return (
    <CarouselContext.Provider
      value={{
        updateCarousel,
      }}
    >
      <>
        <Modal show={show} animationStyle='centerOut' onClose={() => setShow(false)}>
          <Carousel wrapAround slideIndex={index}>
            {data.map((item) => (
              <Image
                key={item}
                src={item}
                styles={{ width: '300px', height: '300px', margin: '--0 auto' }}
              />
            ))}
          </Carousel>
        </Modal>
        {children}
      </>
    </CarouselContext.Provider>
  )
}

export default () => useContext(CarouselContext)
