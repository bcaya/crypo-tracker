import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { Table, Divider, Header } from 'semantic-ui-react';
import { getCoins } from '../actions/coins';

class CoinList extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCoins())
  }

  render() {
    const {coins} =this.props;
    return (
      <div>
        <Divider/>
        <Table celled striped>
          <Table.Header>
            { ['Symbol', 'Name', 'Price'].map( header => <Table.HeaderCell key={header}>{header}</Table.HeaderCell>)}
          </Table.Header>
          <Table.Body>
            { coins.map( coin => {
              const { name, price, symbol, id, cmc_id } = coin 
              return (
                <Table.Row key={id}>
                  <Table.Cell>
                    <Link to={`/coins/${cmc_id}`}>
                      { symbol }
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    { name }
                  </Table.Cell>
                  <Table.Cell>
                    ${ price }
                  </Table.Cell>
                </Table.Row>
              )
            })
          }
          </Table.Body>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { coins: state.coins }
}

export default connect(mapStateToProps)(CoinList);