import React from 'react';
import axios from 'axios';

class App extends React.PureComponent {
//  Estado inicial de la variable a usar
    state = {
        capsules: [],
    };

//  React Lifecycle
    componentDidMount () {
        axios.get('https://api.spacexdata.com/v3/capsules')
        // Respuesta si se consigue los datos
        .then(response => {
            // Respuesta 
            this.setState({
                capsules: response.data,
            })
        })

// Caputar el error
        .catch(err => console.error(err));
    }

    render () {
        return (
            <div className="App">
                <h2>Capsules</h2>
                { this.state.capsules.length == 0
                ? 'No Capsules' 
                : this.state.capsules.map(capsule => <li>{capsule.type} - {capsule.details}</li>) }
            </div>
        );
    }

}

export default App;
