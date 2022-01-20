export const USDto = function(currency, amount) {
    let result = 0
    switch (currency) {
        case 'USD':
            result = amount
            break
        case 'EUR':
            result = amount * 0.88
            break
        case 'GPB':
            result = amount * 0.73
            break
        case 'JPY':
            result = amount * 114.19
            break
        case 'CNY':
            result = amount * 6.34
            break
        case 'AUD':
            result = amount * 1.38
            break
        case 'VND':
            result = amount * 22650
            break
        case 'KRW':
            result = amount * 1188.79
            break
    }
    return result
}

export const toUSD = function(currency, amount) {
    let result = 0
    switch (currency) {
        case 'USD':
            result = amount
            break
        case 'EUR':
            result = amount / 0.88
            break
        case 'GPB':
            result = amount / 0.73
            break
        case 'JPY':
            result = amount / 114.19
            break
        case 'CNY':
            result = amount / 6.34
            break
        case 'AUD':
            result = amount / 1.38
            break
        case 'VND':
            result = amount / 22650
            break
        case 'KRW':
            result = amount / 1188.79
            break
    }
    return result
}
