export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    };
};

export const decriment = () => {
    return {
        type: 'DECRIMENT'
    };
};