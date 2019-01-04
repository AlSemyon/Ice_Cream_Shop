const randomid = store => next => action => {
    if (!action.randomId) {
        return next(action);
    }

    next({
        ...action,
        randomId: (Date.now() + (Math.random() * 1e7)).toString(36)
    })
};
/*
var randomId = function randomId(store){
    return function (next) {
        return function (action) {
            ...
        }
    }
}
*/
export default randomid;