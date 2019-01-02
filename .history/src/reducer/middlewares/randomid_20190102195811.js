const randomid = store => next => action => {
    if (!action.randomId) {
        return next(action);
    }

    next({
        ...action,
        randomId: (Date.now() + (Math.random() * 1e7).toString(36)
    });
};
    export default randomid;