import React from 'react';
import Card from './Card';
import { FaArrowAltCircleUp, FaArrowCircleDown, FaDollarSign, FaPlus } from 'react-icons/fa';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.png';

const Content = () => {
  return (
    <div className="col-md-9">
      <main>
        <h2>Minimal Dashboard</h2>
        <p>/ Dashboards / Minimal Dashboard Example</p>
        <div className='bg-info'>
          <p> ? This dashboard example was created using only the available elements and components, no additional SCSS was written!</p>
        </div>

        <div className="row mt-4">
          <div className="col-md-3">
            <Card title="NEW ACCOUNTS" number="234 %" borderColor="blue" icon={FaArrowAltCircleUp} iconColor="green"/>
          </div>
          <div className="col-md-3">
            <Card title="TOTAL EXPENSES" number="71 %" borderColor="green" icon={FaArrowCircleDown} iconColor="red" />
          </div>
          <div className="col-md-3">
            <Card title="COMPANY VALUE" number="1.45M" borderColor="red" icon={FaDollarSign} />
          </div>
          <div className="col-md-3">
            <Card title="NEW EMPLOYEES" number="34 hires" borderColor="orange" icon={FaPlus} iconColor="green" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-8">
            <h3>Traffic Sources</h3>
            <img src={image1} alt="Img" className='img-fluid' width={520}/>
          </div>
          <div className="col-md-4">
            <h3>Income</h3>
            <img src={image2} alt="Imag" className='img-fluid' />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-3">
            <Card title="Income" number="5,456" borderColor="blue" icon={FaDollarSign} iconColor="gray"/>
          </div>
          <div className="col-md-3">
            <Card title="Expenses" number="4,764" borderColor="green" icon={FaDollarSign} iconColor="gray" />
          </div>
          <div className="col-md-3">
            <Card title="Spendings" number="$ 1.5M" borderColor="red" icon={FaArrowCircleDown} iconColor="green"/>
          </div>
          <div className="col-md-3">
            <Card title="Totals" number="$ 31,564" borderColor="orange" icon={FaDollarSign} iconColor="gray" />
          </div>
        </div>

        <div className="row mt-5">
          <h3>Target Section</h3>
          <div className="col-md-3">
            <Card title="Income" number="5,456" borderColor="blue" icon={FaDollarSign} iconColor="gray"/>
          </div>
          <div className="col-md-3">
            <Card title="Expenses" number="4,764" borderColor="green" icon={FaDollarSign} iconColor="gray" />
          </div>
          <div className="col-md-3">
            <Card title="Spendings" number="$ 1.5M" borderColor="red" icon={FaArrowCircleDown} iconColor="green"/>
          </div>
          <div className="col-md-3">
            <Card title="Totals" number="$ 31,564" borderColor="orange" icon={FaDollarSign} iconColor="gray" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Content;
