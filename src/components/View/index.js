import {connect} from 'react-redux';

import View from './View';

export default connect(
    ({ isLoading }) => ({ isLoading })
)(View);
