import * as zod from 'zod' ;

export const schema = zod.object({
    email:zod.email('please Enter User Email ').nonempty('User Email is Required').regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'Invaild Email') ,
    password: zod.string('invalid Password').nonempty('Please Add Password').regex( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'the password has eight characters including one uppercase letter, one lowercase letter, and one number or special character.'),
})
