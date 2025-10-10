
'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '_/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '_/components/ui/form'
import { Input } from '_/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form'
import { schema } from './Register.Schema';
import { RegisterFromType } from './register.type';
import { handelRegisterForm } from './register.Action';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';




export default function RegisterForm() {

     const router =useRouter()



    const RhfObj = useForm<RegisterFromType>({
        resolver: zodResolver(schema)
    });
    const { handleSubmit, control } = RhfObj;

   async function myHandelSubmit(data: RegisterFromType) {

      const response =  await handelRegisterForm(data)
 
      if(response === true)
      {
        toast.success('Congratulation Account Created Successfully ',{position:'top-center'});
        router.push('/login')
      }
       else
       {
        toast.error(response ,{position:'top-center'})
       }

    }

    return (

        <Form {...RhfObj}>
            <form onSubmit={handleSubmit(myHandelSubmit)}>


                <FormField name='name' control={control}

                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='py-1' > User Name: </FormLabel>
                            <FormControl>
                                { /* Your form field */}

                                <Input {...field} />
                            </FormControl>
                            <FormDescription />
                            <FormMessage />
                        </FormItem>
                    )} >

                </FormField>


                <FormField name='email' control={control}

                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='py-1' > User Email: </FormLabel>
                            <FormControl>
                                { /* Your form field */}

                                <Input {...field} type='email' />
                            </FormControl>
                            <FormDescription />
                            <FormMessage />
                        </FormItem>
                    )}  >


                </FormField>
                <FormField name='password' control={control}

                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='py-1' > Password: </FormLabel>
                            <FormControl>
                                { /* Your form field */}

                                <Input {...field} type='password' />
                            </FormControl>
                            <FormDescription />
                            <FormMessage />
                        </FormItem>
                    )}  >

                </FormField>

                <FormField name='rePassword' control={control}

                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='py-1' > Confirm Password: </FormLabel>
                            <FormControl>
                                { /* Your form field */}

                                <Input {...field} type='password' />
                            </FormControl>
                            <FormDescription />
                            <FormMessage />
                        </FormItem>
                    )}



                >




                </FormField>

                <FormField name='phone' control={control}

                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='py-1' > User Phone: </FormLabel>
                            <FormControl>
                                { /* Your form field */}

                                <Input {...field} type='tel' />
                            </FormControl>
                            <FormDescription />
                            <FormMessage />
                        </FormItem>
                    )}>

                </FormField>

                <Button className='my-2 bg-[#60CA60] hover:bg-[#2d672d]'>Register</Button>





            </form>

        </Form>
    )
}
