const d = new Date()

export const date = d

export const yearValidate = function(year) {
    if (typeof year !== 'number')
        return false
    if (!year.match(/^(19|20)\d{2}$/))
        return false
    return true
}