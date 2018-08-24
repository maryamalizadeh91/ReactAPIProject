import React from 'react';
import './Users.css';
import { Container, Row, Table } from 'reactstrap';

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(
                json => {
                    this.setState({
                        users: json.results
                    })
                }
            )
    }




    render() {
        return (
            <Container className="Alignment">

                {this.state.users.map(item => (
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Avatar</th>
                                <th>Username</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.num}</td>
                                <td><img src={item.picture.thumbnail} /></td>
                                <td>{item.login.username}</td>
                                <td>{item.email}</td>
                            </tr>
                        </tbody>
                    </Table>
                ))
                }
            </Container>
        )
    }
}

export default Users;