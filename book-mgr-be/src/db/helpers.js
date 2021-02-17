module.exports = () => {
    return {
        meta: {
            createAt: {
                type: Number,
                default: (new Date()).getTime(),
            },
            updateAt: {
                type: Number,
                default: (new Date()).getTime(),
            }
        }
    }
}