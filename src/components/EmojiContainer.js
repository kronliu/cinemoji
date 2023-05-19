import React, { useState } from 'react'

const lst =[{
  name: "Lion King",
  emoji: ['🦁', '👑']
},
{
  name: "Titanic",
  emoji: ['🚢']
},
{
  name: "Spider-man",
  emoji: ['🕷️', '🧑']
},
{
  name: "Men in Black",
  emoji: ['🤵🏽', '🤵🏽','⚫', '👽']
},
{
  name: "Teenage Mutant Ninja Turles",
  emoji: ['🐢', '🐢','🐢', '🐢' , '🐀','👊',]
},
{
  name: "Harry Potter",
  emoji: ['🧙‍♂️', '👓','⚡']
},
{
  name: "Star Wars",
  emoji: ['⭐', '⚔️']
},
{
  name: "Finding Nemo",
  emoji: ['🔍', '🐟']
},
{
  name: "Up",
  emoji: ['🎈', '🎈', '🎈','🏠','👴','👦']
},
{
  name: "The Ring",
  emoji: ['💍', '📺']
},
{
  name: "Kungfu Panda",
  emoji: ['🐼', '👊']
},
]

export const EmojiContainer = () => {
 const [selected, setSelected] = useState(0)
 const [show, setShow] = useState(false)

const next =() => {
  if(lst.length -1> selected) {
    setShow(false)
    setSelected(pv => pv+1)
  }
  
}

const prev =() => {
  if(0 < selected) {
    setShow(false)
    setSelected(pv => pv-1)
  }
  
}

const handleShow = () => {
  setShow(pv => !pv)
}

const classN = show ? "emoji-size show" : "emoji-size hide"


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 mb-4">
          <div className="text-center d-flex justify-content-center">
          <h1 className="emoji-size">{lst[selected].emoji}</h1>
          </div>
        </div>
        <div className="col-12 mb-4">
          <div className="text-center d-flex justify-content-center">
          <h1 className={classN}>{lst[selected].name}</h1>
          </div>
        </div>
        <div className="col-12">
          <div className="text-center d-flex justify-content-center">
          <button className='button text-center d-flex justify-content-center mr-4' onClick={prev}>prev</button>
          <button className='button text-center d-flex justify-content-center mr-4' onClick={handleShow}>Reveal</button>
          <button className='button text-center d-flex justify-content-center' onClick={next}>Next</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EmojiContainer;