import React from 'react'
import { useState, useEffect } from 'react'
import { getAllItemsService } from '../Services/ItemService'

export const Home = () => {

  const [itemList, setItemsList] = useState([])

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const response = await getAllItemsService()
        if (response.status === 200) {
          setItemsList(response.data)
        }
      } catch (error) {
        console.log('Error en Home items ', error)
      }
    }
    fetchItemsData()
  }, [])

  return (
    <>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {/* Si itemsData no esta vacio, recorro el arreglo con Map y creo un Card de Bootstrap para cada elemento */}
        {itemList && itemList.map((product) => (
          <div className='card p-1' style={{ width: '18rem' }} key={product.id}>
            <img className='card-img-top rounded' style={{ maxHeight: '300px' }} src={product.image} alt={product.product_name} />
            <div className='card-body'>
              <h5 className='card-title'>{product.product_name}</h5>
              <p className='card-text'>{product.description}</p>
              {/* Aqui no se implementa el botón, pero basta con sustituir "a" por Link de react-router-dom y la ruta del enlace indicar el componente que mostrará la información de un solo producto, seguido del id del producto */}
              <a href='#' className='btn btn-primary'>Comprar</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}