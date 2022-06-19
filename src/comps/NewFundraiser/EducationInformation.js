const EducationInformation = () => {
    return ( 
        <div className="d-flex justify-content-center ">
            <div className="card mt-2 col-xl-6 col-sm-12" style={{overflow: 'auto',width: '100%'}}>
                <form className="card-body">
                    <div className="d-flex">
                        <div className="form-group">
                            <label htmlFor="schoolName">Institute Name</label>
                            <input type="text" className="form-control" id="schoolName" placeholder="School Name" />
                        </div>
                        <div style={{width: '30px',}} className="d-xs-none"></div>
                        <div className="form-group">
                            <label htmlFor="schoolCity">Institute Place</label>
                            <input type="text" className="form-control" id="schoolCity" placeholder="School City" />
                        </div>
                    </div>
                    <div className="mt-2"></div>
                    <div className="d-lg-flex ">
                        <div className="d-flex">
                            <div className="form-group">
                                <label htmlFor="schoolState">Study Program(B.E,B.Tech..)</label>
                                <input type="text" className="form-control" id="schoolState" placeholder="School State" />
                            </div>
                            <div style={{width: '30px',}} className="d-xs-none"></div>
                            {/* <div className="form-group">
                                <label htmlFor="schoolZip">Institute Zip</label>
                                <input type="text" className="form-control" id="schoolZip" placeholder="School Zip" />
                            </div> */}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="schoolZip">Education Info</label>
                        <textarea className="form-control" id="schoolZip" placeholder="Education Info" rows="3"></textarea>
                    </div>

                </form>
            </div>
        </div>
     );
}
 
export default EducationInformation;