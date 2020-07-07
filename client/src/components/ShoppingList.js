import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux' ;
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    // Use this lifecycle method when calling api or
    // so that it access the fully loaded page 
    componentDidMount(){
        this.props.getItems(); // Get all items as soon as
                              // this component loads 
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }
    render(){
        const { items } = this.props.item;
        return(
            <Container>
                
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name})=> (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                  <ListGroupItem>
                                      <Button
                                      className="remove-btn"
                                      color = "danger"
                                      size="sm"
                                      onClick= { this.onDeleteClick.bind(this, _id)}>
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
export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
// {getItems} parameter property is of form 'Object Shorthand Form' for 
// mapDispatchToProps parameter 