module.exports = function reverse(n) {
    return Number(
        String(n)
            .split("")
            .filter((item) => item !== "-")
            .reverse()
            .join("")
    );
};
