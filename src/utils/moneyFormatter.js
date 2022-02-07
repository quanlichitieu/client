function getCurrencyCode(currency) {
    switch (currency) {
        case 'USD':
            return 'en-US';
        case 'EUR':
            return 'de-DE';
        case 'GBP':
            return 'en-GB';
        case 'JPY':
            return 'ja-JP';
        case 'CNY':
            return 'zh-CN';
        case 'AUD':
            return 'en-AU';
        case 'VND':
            return 'vi-VN';
        case 'KRW':
            return 'ko-KR';
    }
}

function currencyFormat(currency) {
    const unit = ['USD', 'EUR', 'GBP', 'JPY', 'CNY', 'AUD', 'VND', 'KRW'];
    if (unit.includes(currency))
        return currency
    else
        return 'USD'
}

export default function moneyFormatter(value, currency) {
    const currencyCode = getCurrencyCode(currency)
    const formatter = new Intl.NumberFormat(currencyCode, {
        style: 'currency',
        currency: currencyFormat(currency),
        minimumFractionDigits: 0,
        maximumFractionDigits: 5,
    });
    return formatter.format(value);
}