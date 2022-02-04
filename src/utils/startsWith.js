export const startsWith = function (string, array) {
    let bool = false
    array.forEach(function (item) {
        if (string.startsWith(item))
            bool = true
    })
    return bool
}