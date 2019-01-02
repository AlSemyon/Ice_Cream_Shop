const randomid = store => next => action => {
    if (!action.randomId) {
        return next(action);
    }

    console.log(next);
        next({
        ...action,
        randomId: (Date.now() + (Math.random() * 3e9)).toString(36)
    })
};
export default randomid;