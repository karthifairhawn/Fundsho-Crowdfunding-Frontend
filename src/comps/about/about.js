import React from 'react';
import Navbar from '../Footers_Header/navbar';
class about extends React.Component{
    componentDidMount(){

    }
    render(){
        return(
            <>
            <Navbar/>
            <>
            <div className="container">                
                <div className="about-content card">
                
                <div className="all-about-info card-body">
                    <div className="brief-about-us">
                        <p>Fundsho is one-stop solution through which various services starting from student application, application receipt, processing, sanction and disbursal of various scholarships to Students are enabled. National Scholarships Portal is taken as Mission Mode Project under National e-Governance Plan (NeGP)</p>
                    </div>

                    <div className="sub-container">
                        <div className="about-us-sub-title">
                            Vision
                        </div>
                        <div className="about-us-content">
                        <b>Fundsho</b> is one-stop solution through which various services starting from student application, application receipt, processing, sanction and disbursal of various scholarships to Students are enabled.
    This initiative aims at providing a Simplified, Mission-oriented, Accountable, Responsive & Transparent 'SMART' System for faster & effective disposal of Scholarships applications and delivery of funds directly into beneficiaries account without any leakages.
                        </div>
                    </div>

                    <div className="sub-container">
                        <div className="about-us-sub-title">
                            Mission
                        </div>
                        <div className="about-us-content">
                        Fundsho is one-stop solution through which various services starting from student application, application receipt, processing, sanction and disbursal of various scholarships to Students are enabled.
    This initiative aims at providing a Simplified, Mission-oriented, Accountable, Responsive & Transparent 'SMART' System for faster & effective disposal of Scholarships applications and delivery of funds directly into beneficiaries account without any leakages.
                        </div>
                    </div>

                    <div className="sub-container">
                        <div className="about-us-sub-title">
                        Objectives
                        </div>
                        <div className="about-us-content">
                        Ensure timely disbursement of Scholarships to studentsProvide a common portal for various Scholarships schemes of Central and State GovernmentsCreate a transparent database of scholarsAvoid duplication in processingHarmonisation of different Scholarships schemes & normsApplication of Direct Benefit Transfer
                        </div>
                    </div>

                    <div className="sub-container">
                        <div className="about-us-sub-title">
                            Objectives
                        </div>
                        <div className="about-us-content">
                            <ul>
                                <li>Simplified process for the students</li>
                                <ol>
                                    <li>All scholarships information available under one umbrella.</li>
                                    <li>Single integrated application for all scholarships</li>                                
                                </ol>
                                <li>Improved transparency :</li>
                                <ol>
                                    <li>System suggests the schemes for which a student is eligible.</li>
                                    <li>Duplicates can be reduced to the maximum extent</li>                                
                                </ol>
                                <li>Helps in standardisation :</li>
                                <ol>
                                    <li>Master data for Institutions and courses at all India level .</li>
                                    <li>Scholarships processing</li>                                
                                </ol>
                                <li> Serves as a decision support system (DSS) for Ministries and departments as up-to date information will be available on demand.</li>
                                <li>Comprehensive MIS System to facilitate monitoring every stage of Scholarships distribution i.e. from student registration to delivery of funds</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>    
                </div>            
            </>
            
            </>        
        );
    }
}

export default about;