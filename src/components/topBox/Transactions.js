import React from 'react'
import './Transactions.scss'
import { topDealUsers } from '../../data'

const Transactions = () => {
  return (
    <div className='topBox'>
          <h2>Last Transactions</h2>
          <div className='list'>
              {topDealUsers.map(user => (
                  <div className='listItem' key={user.id}>
                      <div className='user'>
                          <img src={user.img} alt='' />
                          <div className='userTexts'>
                              <span className='username'>{user.username }</span>
                              <span className='email'>{user.email }</span>
                          </div>
                      </div>
                      <span className='amount'>${user.amount }</span>  
                  </div>   
              ))}
          </div>
    </div>
  )
}

export default Transactions