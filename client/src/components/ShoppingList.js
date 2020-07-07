import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v4 as uuid} from 'uuid';
import { connect } from 'react-redux' ;
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    // Use this lifecycle method when calling api or
    // so that it access the fully loaded page 
    componentDidMount(){
        this.props.getItems(); // Get all items as soon as
                              // this component loads 
    }
    render(){
        const { items } = this.props.item;
        return(
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter an Item: ');
                        if(name){
                            this.setState(state=>({
                                items: [...state.items, { id: uuid(), name}]
                            }));
                        }
                    }}
                    
                    >
                    Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ id, name})=> (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                  <ListGroupItem>
                                      <Button
                                      className="remove-btn"
                                      color = "danger"
                                      size="sm"
                                      onClick= { () => {
                                          this.setState(state=> ({
                                              items: state.items.filter(item=> item.id !== id)
                                          }))
                                      }}>
                                          &times;</Button>  {name}</ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired    
}

// Your mapStateToProps functions are expected to return an object.
// This object, normally referred to as stateProps, will be merged as props to your connected component. 
// If you define mergeProps, it will be supplied as the first parameter to mergeProps.
// The return of the mapStateToProps determine whether the connected component will re-render
const mapStateToProps  = (state) => ({
    item: state.item
}) 
// state.item is from itemReducer
// item prop of ShoppingList is equal to state of itemReducer
export default connect(mapStateToProps, { getItems })(ShoppingList);
// {getItems} parameter property is of form 'Object Shorthand Form' for 
// mapDispatchToProps parameter 