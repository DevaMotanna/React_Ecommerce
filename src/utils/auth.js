export const generateMockToken = (payload,expireInMinutes) => {

    const expiresAt = Date.now() + expireInMinutes * 60 * 1000;

    return btoa (
        JSON.stringify({
            ...payload,
            expiresAt,
        })
    )
}

export const decodeMockToken = (token) => {
    try {
        return JSON.parse(atob(token));
    } catch (error) {
        return error;
    }
}

export const isTokenExpired = (token) => {
    try {
        const decode = decodeMockToken(token);
        if(!decode?.expiresAt) return true;
        return Date.now() > decode.expiresAt;
    } catch (error) {
        return error;
    }
}