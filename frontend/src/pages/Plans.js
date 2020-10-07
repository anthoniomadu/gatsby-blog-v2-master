import React from 'react';
import '../containers/pages/planscomponents/pricing.css'
import free from '../Static/Img/blog3.jpg'; 
import free2 from '../Static/Img/blog1.jpg'; 
// import Navigation from '../components/mainnav';
import { Container } from 'react-bootstrap';
// import free3 from '../../../Static/Img/blog2.jpg'; 

const PlansList = () => {
    return(
      <Container>
      
        <div>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h5 className="Cartext display-4">Choose Your Pricing Plan</h5>
          </div>
      
            <div className="container">
              <div className="card-deck mb-3 text-center">
                <div className="card mb-4 shadow-sm">
                  <div className="card-header">
                  <img src={free} alt= "" class="card-img" />
                    <h4 className="my-0 font-weight-normal">Free</h4>
            </div>
            <div className="card-body">
              <h4 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h4>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              
              <button type="button" className="Cartext btn btn-lg btn-block border btn-outline">Purchase</button>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
            <img src={free2} alt= "" class="card-img" />
              <h4 className="my-0 font-weight-normal">Pro</h4>
            </div>
            <div className="card-body">
              <h4 className="card-title pricing-card-title">$10 <small className="text-muted">/ mo</small></h4>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="Cartext btn btn-lg btn-block border btn-outline">Purchase</button>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
            <img src={free2} alt= "" class="card-img" />
              <h4 className="my-0 font-weight-normal">Pro plus</h4>
            </div>
            <div className="card-body">
              <h4 className="card-title pricing-card-title">On Request <small className="text-muted">/ mo</small></h4>
              <ul className="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="Cartext btn btn-lg btn-block border btn-outline">Contact us</button>
            </div>
          </div>
        </div>
        </div>
        </div>
        </Container>
      )
}

export default PlansList;