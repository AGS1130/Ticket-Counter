class Home extends React.Component{
    render(){
        return(
        <h1 class="text-center" style="color:rgb(255,255,255);padding-top:130px;"> Pip's Ticket Counter</h1>
        <div id="awesome-container">
        <div id="log-in" class="container" style="display:none;background-color:rgba(0,0,0,0.6);">
            <form>
                <ul class="flex-outer">
                    <li><span class="label label-default">User Name </span></li>
                    <li><span class="label label-default">Password </span></li>
                </ul><input class="form-control" type="text" required="" placeholder="Enter your user name here"/><input class="form-control" type="password" required="" placeholder="Enter your password here" id="entry-field"/>
                <div class="checkbox"><label><input type="checkbox" id="toggle" onclick="passwordToggle()"/>Show Password</label></div><button class="btn btn-warning" type="button">Sign Up</button><button class="btn btn-info" type="submit">Log In</button></form>
        </div>
        <div id="register" class="container" style="display:block;background-color:rgba(0,0,0,0.6);">
            <form>
                <ul class="flex-outer">
                    <li><span class="label label-default">User Name </span></li>
                    <li><span class="label label-default">Password </span></li>
                    <li><span class="label label-default">Pip's Auth Key</span></li>
                </ul><input class="form-control" type="text" required="" placeholder="Enter your user name here"/><input class="form-control" type="text" required="" placeholder="Enter your password here"/><input class="form-control" type="text" required=""
                    placeholder="Enter authentication key"/><button class="btn btn-warning" type="button">Log In</button><button class="btn btn-info" type="submit">Sign Up</button></form>
        </div>
        </div>
        );
    }
}

ReactDOM.render(<Home/>, document.getElementById("app"))