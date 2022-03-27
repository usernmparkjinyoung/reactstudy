const loggerMiddleware = store => next => action => {
    console.group(action && action.type);
    console.log("이전 상태", store.getState());
    console.log("액션", action);
    next(action);
    console.log("다음 상태", store.getState());
    console.groupEnd(); // 그룹끝 
}

export default loggerMiddleware;