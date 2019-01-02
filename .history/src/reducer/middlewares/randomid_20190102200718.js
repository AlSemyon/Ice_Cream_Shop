const randomid = store => next => action => {
    if (!action.randomId) {
        return next(action);
    }

    console.log(next);
        next({
        ...action,
        randomId: (Date.now() + (Math.random() * 1e7)).toString(36)
    })
};
export default randomid;