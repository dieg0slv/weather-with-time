/**
 * Creates an action creator function.
 * 
 * @function makeChangeAction
 * 
 * @param {String} actionType - the value of the action type property
 * @param {String} actionKey - the key of the action value
 * 
 * @returns {Function}
 */
export const makeChangeAction =
    (actionType, actionKey) => (actionValue) => ({
        type: actionType,
        ...(typeof actionKey === 'string'
            ? { [actionKey]: actionValue }
            : {}
        ),
    });


/**
 * The redux store prefix.
 * 
 * @exports
 * @constant
 */
export const REDUX_STORE_PREFIX = '@@weather-app';
