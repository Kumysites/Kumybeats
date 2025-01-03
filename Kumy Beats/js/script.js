async function effectuerPaiement(amount, orderId) {
    const token = await obtenirToken();
    const url = 'https://sandbox.moncashbutton.digicelgroup.com/v1/CreatePayment';
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
    const body = JSON.stringify({ amount, orderId });
    const response = await fetch(url, { method: 'POST', headers: headers, body: body });
    const data = await response.json();
    window.location.href = data.redirect_url;
}

async function obtenirToken() {
    const url = 'https://sandbox.moncashbutton.digicelgroup.com/oauth/token';
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    };
    const body = 'grant_type=client_credentials&client_id=10a48447b6c79ac9da12e90a52bc4e0d&client_secret=Hi6out21NLG9NNBZUiWiSCJH7JR6aivtc_YfMPJ5WkTrvu_bTDieSRid4f79_MwV&scope=read,write';
    const response = await fetch(url, { method: 'POST', headers: headers, body: body });
    const data = await response.json();
    return data.access_token;
}
