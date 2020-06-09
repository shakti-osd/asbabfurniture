import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import { withRouter } from 'react-router'

class Category extends Component {
   
    clickHandler = (e,key) => {
        e.preventDefault();
       // alert(key.key);
        var products = this.props.products;
        const filteredProducts = products.filter(product => product.category === key.key);
        console.log(filteredProducts)
       // this.setState({products: filteredProducts});
        this.props.changeProducts(filteredProducts)
    }
    
    render(){
        //console.log('props.products - Category:', this.props.products)
        //console.log('props.changeProducts - Category:', this.props.changeProducts)
        var products = this.props.products;

        var counterList = [];
        var counterSlugList = [];
            products.forEach(function(item,index){
            counterList[item.category] = (counterList[item.category]||0) + 1;
            counterSlugList[item.category]= item.cat_slug;
        })
        
        const items = [];

        for(let key in counterList){
            //console.log('counterList - Category:',counterSlugList[key])
            const catUrl = `/shop/${counterSlugList[key]}`
            //items.push(<li key={key}><NavLink onClick={e => this.clickHandler(e,{key})} to="/shop/fabric-sofa-sets">{key} - {counterList[key]}</NavLink></li>)
            items.push(<li key={key}><NavLink to={catUrl}>{key} - {counterList[key]}</NavLink></li>)

        }
      
            
    return (
        <>
           {items}
        </>
    )

    }
}


export default withRouter(Category)