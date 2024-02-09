import React, { Component } from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap'

export default class Category extends Component {
   state = {
        categories:[
            {categoryId:1,categoryName:"giyim"},
            {categoryId:2,categoryName:"mobilya"},
            {categoryId:3,categoryName:"teknoloji"},
        ],
        currentCategory :""
    };
    changeCategory = (category)=>{
        this.setState({currentCategory:category.categoryName})
    }
  render() {
    return (
        <div class="col-6">
        <h3>Category List</h3>
            <ListGroup>
            {this.state.categories.map(category=>(
                <ListGroupItem><button onClick={()=>this.changeCategory(category)} key={category.categoryId} class="btn btn-primary">{category.categoryName}</button></ListGroupItem>
            ))}
            </ListGroup>
            <h4>{this.state.currentCategory}</h4>
        </div>
    )
  }
}
