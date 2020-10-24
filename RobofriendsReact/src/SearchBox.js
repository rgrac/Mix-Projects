import React from 'react';

class SearchBox extends React.Component {
    // console.log({onTextChange})
    constructor(){
        super();
        this.state = {
            text: '',
        }
    }
    handleText = (e) => {
        // console.log('hey', e.target.value)
        this.setState({txt:e.target.value})
    }
    render() {
        const {txt} = this.state
        const {onBtn} = this.props
        return (
            <div>
                <input type="text"
                    placeholder="type here to search"
                    onChange={this.handleText}></input>
                <button id="search" type="button" onClick={() => onBtn(txt)}>Search</button>
            </div>
        )
    }
}

export default SearchBox;