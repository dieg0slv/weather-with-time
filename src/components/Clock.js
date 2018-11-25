import React, { Component, Fragment } from 'react';
import moment from 'moment-timezone';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: moment.tz(this.props.timezone),
            intervalID: null
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }


    tick() {
        this.setState({
            date: moment.tz(this.props.timezone)
        });
    }


    updateInterval() {
        this.setInterval(() => {
            this.forceUpdate();
        }, 1000);
    }

    render() {
        const { date } = this.state;
        return (
            <Fragment>
                <div style={{ margin: 'O auto', textAlign: 'center', fontSize: '20px' }}>
                   {date.format('DD/MM/YYYY HH:mm:ss')}
                </div>
            </Fragment>
        )
    }
}

export default Clock;