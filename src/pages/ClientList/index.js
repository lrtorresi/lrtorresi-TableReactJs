import React, { Component } from 'react';
import './styles.css';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as moment from 'moment';


export default class ClientList extends Component {

    // initially data is empty in state
    state = { data: [] };
    
    componentDidMount() {
        // when component mounted, start a GET request
        // to specified URL
        fetch('https://apinetmenu.azurewebsites.net/api/v1/stores/clientlistMDC')
            // when we get a response map the body to json
            .then(response => response.json())
            // and update the state data to said json
            .then(data => this.setState({ data }))
            .catch(error => error);

        console.log(this.state)
    }


    render() {
        moment.locale('pt-BR');

        const divStyle = {           
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
        };

        const divTable ={
            margin: 10
        }

        return (            
            <div style={divTable}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Cliente Nome</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>Estado</th>
                        <th>Cidade</th>
                        <th>Data Cadastro</th>
                        <th>Taxonomia</th>
                        <th>Regime Tributario</th>
                        <th>Número de Func.</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.sort((a, b) => a.state > b.state ? 1 : -1).map(function (list) {                        
                        return <tr key={list.name}>                            
                            <td><a href={"https://netmenu.mdc.com.br/menu/" + list.alias} target="_blank">{list.name}</a></td>
                            <td>{list.phoneNumber}</td>
                            <td>{list.email}</td>
                            <td>{list.state}</td>
                            <td>{list.city}</td>
                            <td>{moment(list.updatedAt).format('DD/MM/YYYY')}</td>
                            <td>{list.taxonomy}</td>
                            <td>{list.taxRegime}</td>
                            <td>{list.numberEmployees}</td>
                        </tr>
                    })}
                </tbody>                
                <div style={divStyle}>Total de clientes cadastrados: {this.state.data.length}</div>
            </Table>
            </div>
        );
    }
}




