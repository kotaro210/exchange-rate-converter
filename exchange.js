if (typeof window === 'object') {

    document.addEventListener('DOMContentLoaded', function(){
        
        const amount = document.getElementById('amount');
        const currency = document.getElementById('currency');
        const convert = document.getElementById('convert');
        const result = document.getElementById('result');
        const exchangeRate = document.getElementById('exchange-rate');
        
        const apiKey = "YOUR_API_KEY"
        const apiUrl="https://api.api-ninjas.com/v1/exchangerate?pair=USD_"
        
        convert.addEventListener('click', () => {
            console.log('hi')
            const amountTotal = amount.value;
            console.log('total', amountTotal)
            const currencyTotal = currency.value;
            const url = apiUrl + currencyTotal;
            console.log('url', url)
            
            if (amountTotal <= 0) {
                result.innerHTML = 'Please enter 1 or more.';
                exchangeRate.innerHTML = ''
                return;
            }

            fetch(url, {
                headers: {
                    'X-API-KEY': apiKey
                }
            })
            .then(response => response.json())
            .then(data => {
                const rate = data.exchange_rate;
                console.log('rate', rate)
                const resultPrice = amountTotal * rate;
                console.log('result', resultPrice)
                result.innerHTML = `${amountTotal} USD = ${resultPrice.toFixed(3)} ${currencyTotal}`;
                if(amount == 0) {console.log('Please enter 1 or more') }
                exchangeRate.innerHTML = `1 ${currencyTotal} = ${(1 / (resultPrice/ amountTotal)).toFixed(8)} USD`;
                
            })
            .catch(error => {
                console.error('Request failed:', error);
                result.innerHTML = `An error occurred please try again later.`
            })
        })
        
    })

}