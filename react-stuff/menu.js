class Menu extends React.Component{
    render(){
        return(
            <div style="background-size:cover;height:auto;width:auto;">
            <div class="header-dark" style="background-color:rgba(0,0,0,0.6);background-image:url(&quot;none&quot;);height:650px;">
                <nav class="navbar navbar-default navigation-clean-search">
                    <div class="container">
                        <div class="navbar-header"><a class="navbar-brand" href="#">Pip's Ticket Counter</a><button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div>
                        <div
                            class="collapse navbar-collapse" id="navcol-1">
                            <p class="navbar-text navbar-right"> <a class="btn btn-default action-button" role="button" href="/index.html" style="background-color:#C8A461;">Log Out</a></p>
                    </div>
            </div>
            </nav>
            <div class="container hero">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <div id="options" style="display:block;">
                            <h1 class="text-center">Welcome </h1>
                            <p>Select an option:</p>
                            <p class="center-buttn"><button class="btn btn-danger" type="button" id="admin-add" data-toggle="modal" data-target="#attendee-modal">Add Attendees</button></p>
                            <p class="center-buttn"><a class="btn btn-info" role="button" href="/tickets.html" src="/menu.html">Add Tickets</a></p>
                            <p class="center-buttn"><button class="btn btn-info" type="button" data-toggle="modal" data-target="#raffle-modal">Raffle </button></p>
                            <p class="center-buttn"> <button class="btn btn-danger" type="button" id="print-list">Print List</button></p>
                        </div>
                        <div class="embed-responsive embed-responsive-16by9" id="sql-list" style="display:none;"><iframe class="embed-responsive-item"></iframe></div><button class="btn btn-danger" type="button" id="list" style="display:none;">Go Back</button></div>
                </div>
            </div>
        </div>
        </div>
        <div class="modal fade" role="dialog" tabindex="-1" id="attendee-modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        <h4 class="modal-title addAttendees" style="display:inline;">New Attendee Registration</h4>
                        <h4 class="modal-title add-internToFaculty" style="display:none;">Assign Interns to Faculty</h4>
                    </div>
                    <div class="modal-body">
                        <div class="addAttendees" style="display: inline;">
                            <p>First Name</p><input type="text" placeholder="Enter first name here" style="color:rgb(0,0,0);"/>
                            <p>Last Name</p><input type="text" placeholder="Enter last name here" style="color:rgb(0,0,0);"/>
                            <p>Email </p><input type="text" inputmode="email" style="color:rgb(0,0,0);"/>
                            <p>Phone Number</p><input type="text" inputmode="tel" style="color:rgb(0,0,0);"/>
                            <p>Social Media (optional)</p><input type="text" placeholder="Facebook, Twitter, etc." style="color:rgb(0,0,0);"/>
                            <h3><strong>Faculty or Intern?</strong></h3>
                            <div class="radio"><label><input type="radio"/>Faculty</label></div>
                            <div class="radio"><label><input type="radio"/>Intern</label></div>
                        </div>
                        <div class="add-internToFaculty" style="display:none;">
                            <p>Faculty Name</p>
                            <div class="dropdown"><button class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button">Faculty <span class="caret"></span></button>
                                <ul class="dropdown-menu" role="menu">
                                    <li role="presentation"><a href="#">First Item</a></li>
                                    <li role="presentation"><a href="#">Second Item</a></li>
                                    <li role="presentation"><a href="#">Third Item</a></li>
                                </ul>
                            </div>
                            <p>Students </p><textarea placeholder="To add multiple students enter first and last name and seperate with commmas" id="student-inquiry"></textarea></div>
                    </div>
                    <div class="modal-footer"><button class="btn btn-default add-internToFaculty" type="button" id="switchToFaculty" data-dismiss="modal" style="display:inline;">Add Interns to Faculty</button><button class="btn btn-default addAttendees" type="button" id="switchToAttendee"
                            data-dismiss="modal" style="display:none;">Register Attendees</button><button class="btn btn-primary" type="button">Save</button></div>
                </div>
            </div>
        </div>
        <div class="modal fade" role="dialog" tabindex="-1" id="raffle-modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
                    <div class="modal-body" style="padding-top:60px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
                        <p class="text-center"><a class="btn btn-default" role="button" href="/namesForRaffle.html">Sign in for Attendees</a></p>
                        {/* <p class="text-center">Next Raffle in {{LIVE JS COUNTDOWN: 00:00:00}}</p> */}
                        <p class="text-center"><a class="btn btn-default" role="button" href="/raffle.html">Raffle Tickets</a></p>
                    </div>
                    <div class="modal-footer hidden"><button class="btn btn-default" type="button" data-dismiss="modal">Close</button><button class="btn btn-primary" type="button">Save</button></div>
                </div>
            </div>
        </div>
        );
    }
}

ReactDOM.render(<Home/>, document.getElementById("app"))