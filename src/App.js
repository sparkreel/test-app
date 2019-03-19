import React, {Component} from 'react';
import './App.css';
import MockBackend from './MockBackend';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            clients: MockBackend.listClients()
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Clients</h1>
                    <ul>
                        {this.state.clients.map(client => (<div>{client.name}</div>))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
