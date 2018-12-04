// Redux
import { connect } from 'react-redux';

// Components 
import Searchbar from './Searchbar';

// Actions 
import { setActivePlace, setForecast } from '../../ducks/weather';


const mapStateToProps = ({place, forecast}) => ({
    place,
    forecast,
})

const mapDispatchToProps = (dispatch) => ({
    setActivePlace: (place) => dispatch(setActivePlace(place)),
    setForecast: (forecast) => dispatch(setForecast(forecast))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Searchbar);