const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  
export const Helpers = {
    validateEmail(email){
        return emailRegex.test(email)
    },

    validatePassword(password){
        return password.length > 7;
    },

    validateName(name){
        return name.length > 2;
    }
}