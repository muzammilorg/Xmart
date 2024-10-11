const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  
export class Helpers {
    static validateEmail(email){
        return emailRegex.test(email)
    }

   static  validatePassword(password){
        return password.length > 7;
    }

    static validateName(name){
        return name.length > 2;
    }

    static priceFormater(amount){
        return new Intl.NumberFormat('es-US', {
            style: 'currency',
                currency: 'USD',
        }).format(amount)
    }
}