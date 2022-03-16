function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    //enteredCode and correctCode need to match 
    //currentDate and expirationDate need to match or be before expiration
    return (enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate));
}