export const depositCoins = (coinAmount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: coinAmount,
        });
    };
};

export const withdrawCoins = (coinAmount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: coinAmount,
        });
    };
};
