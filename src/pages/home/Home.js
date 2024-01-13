import React from 'react'
import './home.scss'
// import TopBox from '../../components/topBox/Transactions'
import ChartBox from '../../components/ChartBox/ChartBox'
import Transactions from '../../components/topBox/Transactions'
import ListItems from '../../components/ListItems/ListItems'
import BarChartBox from '../../components/BarChartBox/BarChartBox'
import { barChartBoxRevenue, barChartBoxVisit } from '../../data'
// import {bar}
import PieChartBox from '../../components/PieChartBox/PieChartBox'
import BigChartBox from '../../components/BigChartBox/BigChartBox'

const Home = () => {
  return (
    <div className='home'>
      <div className='box box1'>
        {/* <ListItems /> */}
         <Transactions />
      </div>
      <div className='box box2'><ChartBox /></div>
      <div className='box box3'><ChartBox /></div>
      <div className='box box4'>
        <PieChartBox />
      </div>
      <div className='box box5'>
       
        <ChartBox />
      </div>
      <div className='box box6'><ChartBox /></div>
      <div className='box box7'><BigChartBox /></div>
      <div className='box box8'>
        <BarChartBox { ...barChartBoxVisit}/>
      </div>
      <div className='box box9'><BarChartBox { ...barChartBoxRevenue }/></div>

    </div>
  )
}

export default Home