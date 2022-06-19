const EventInformation = () => {
    return ( 
        <div className="d-flex justify-content-center col-sm-12">
            <div className="card mt-2 col-xl-6 col-sm-12" style={{overflow: 'auto',width: '100%'}}>
                <form className="card-body">                    
                    <div className="form-group">
                        <label htmlFor="schoolName">Event Name</label>
                        <input type="text" className="form-control" name="eventName" placeholder="Event Name" />
                    </div>            
                    <div className="form-group">
                        <label htmlFor="schoolName">Event Date</label>
                        <input type="date" className="form-control" name="eventDate" placeholder="Event Date" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="schoolName">Event Info</label>
                        <textarea className="form-control" name="eventInfo" placeholder="Event Info" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="schoolName">Event Title Card Image</label>
                        <input type="file" className="form-control" name="eventTitleCardImage" placeholder="Event Title Card Image" />
                    </div>

                </form>
            </div>
        </div>
     );
}
 
export default EventInformation;