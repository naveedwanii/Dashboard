import React from 'react'
import './ChartBox.scss'
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
// import data from '../../data.js'
const ChartBox = () => {


  return (
    <div className='ChartBox'>
          <div className='boxInfo'>
              <div className='title'>
                  <img src='assets/user.svg' />
                  <span>Total Users</span>
              </div>
              <h1>$11.238</h1>
              <Link to='/'>View all</Link>
          </div>
          <div className='chartInfo'>
              <div className='chart'>
                  {/* <ResponsiveContainer width='100%' height='100%'>
                      <LineChart width={300} height={100}>
                          <Line
                              type='monotone'
                              dataKey='pv'
                              stroke='#8884d8'
                              strokeWidth={2}
                          />
                      </LineChart>
                  </ResponsiveContainer> */}
                  <div className='texts'>
                      <span className='percentage'>45%</span>
                      <span className='duration'>this month</span>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default ChartBox