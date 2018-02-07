class App extends React.Component {
    render(){
        return (
            <div>
                <Home/>
                <Menu/>
                <Names/>
                <Raffle/>
                <Tickets/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));