import React, { Fragment,useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifReactApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const handleAdd = () => {
    setCategories([...categories,'Pokemon'])
    // setCategories( cat => [...cat,'Pokemon'])
  }

  return (
    <Fragment>
        <h2>GifReactApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>

        {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>
          {
            categories.map(category =>(
              <GifGrid 
                key={category} 
                category={category}
                />
            ))
          }
        </ol>

    </Fragment>
  )
}
