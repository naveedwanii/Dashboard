import React from 'react'
import './ListItems.scss'
import { listItems } from '../../data'

const ListItems = () => {
  return (
      <div className='listItems'>
          <h3>List of Items to Buy</h3>
          <div className='listTiming'>
              <span>02:00</span> <br />
              <span>Sat, August 12</span>
              <span>05:30</span> <br />
              <span>Sun, August 13</span>
          </div>
          <form className='listOptions'>
              
              {
                  listItems.map((item) => (
                      <div className='listCheckbox'>
                          <input type="checkbox" />
                          <label>{item.name}</label>
                      </div>
                  ))
              }
  
  
    </form>
    </div>
  )
}

export default ListItems