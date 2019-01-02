const randomid = store => next => action => {
    if (!action.randomId) {
        return next(action);
    }

    console.log(next);
        next({
        ...action,
        randomId: 'sadfsadfasdf'
    })
};
export default randomid;