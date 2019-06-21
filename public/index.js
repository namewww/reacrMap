import React from 'react'
import { render } from 'react-dom'

class Hello extends React.Component {
    render() {
       return (
           <p>hello react</p>
        )
    }
}
render(
    <Hello/>,
    document.body
)