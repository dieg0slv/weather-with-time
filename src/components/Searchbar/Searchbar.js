import React, { PureComponent, Fragment } from 'react'
import TextField from '@material-ui/core/TextField';

import { getWeather } from '../utils';

class Searchbar extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            local: '',
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(value) {
        const { setActivePlace, setForecast } = this.props;
        getWeather(value)
            .then((res) => {
                res.json().then((data) => {
                    setActivePlace(value);
                    setForecast(data)
                })
            })
    }

    render() {
        const { local } = this.state;
        const {style} = this.props;
        return (
            <Fragment>
                <TextField
                    id="outlined-search"
                    label="Search field"
                    type="search"
                    margin="0 px"
                    variant="outlined"
                    onChange={({ target: { value } }) => this.setState({ local: value })}
                    onKeyUp={({ key }) => key === 'Enter' && this.onSubmit(local)}
                    style={style}
                />
            </Fragment>
        )
    }

}

export default Searchbar;

