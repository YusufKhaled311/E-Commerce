import * as zod from 'zod' ;

export const schema = zod.object({
    name: zod.string('please Enter User Name').nonempty('User Name Is Required').min(3,'User Name must be at latest 3 characters').max(15,'User Name must be less than 15 characters'),
    email:zod.email('please Enter User Email ').nonempty('User Email is Required').regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'Invaild Email') ,
    password: zod.string('invalid Password').nonempty('Please Add Password').regex( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'the password has eight characters including one uppercase letter, one lowercase letter, and one number or special character.'),
    rePassword: zod.string('invalid Password').nonempty('Re-password Is Required').regex( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'the Re-password has eight characters including one uppercase letter, one lowercase letter, and one number or special character.'),
    phone:zod.string('Invalid Phone').regex(/^01[0125][0-9]{8}$/,'plaese Enter Your Egyptian Phone Number')
}).refine(function(object)
{

    return object.password ===object.rePassword ;


},{
    path:['rePassword'],
    error:'Re-Password Miss Match Password' 
})


