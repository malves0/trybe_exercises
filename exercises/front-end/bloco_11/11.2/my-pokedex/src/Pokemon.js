import React from 'react'

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        return (
            <div>
                <p>{ name }</p>
                <p>{ type }</p>
                <p>{ averageWeight }</p>
                <image src={image} />
            </div>
        )
        
    }
}

export default Pokemon