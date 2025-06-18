
function FormValidate(email,password) {

    const verifyEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const verifyPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    if(!verifyEmail)return "Email is not Valid" 
    if(!verifyPassword)return "Password is not Valid" 
    return null

}

export default FormValidate