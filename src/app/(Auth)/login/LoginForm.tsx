
'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '_/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '_/components/ui/form'
import { Input } from '_/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form'
import { schema } from './Login.Schema';
import { LoginFromType } from './Login.type';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';




export default function LoginForm() {


    


    const RhfObj = useForm<LoginFromType>({
        resolver: zodResolver(schema)
    }); 
    const { handleSubmit, control } = RhfObj;

    async function myHandelSubmit(data: LoginFromType) {

       const res = await  signIn('credentials', { ...data , redirect:false  })

        if(res?.ok)
        {
            toast.success('welcome Back ',{position:'top-center'})
           window.location.href ='/';
        }
        else
        {
             toast.error('Email or Password is in-correct' ,{position:'top-center'})
        }
      

    }

    return (

        <Form {...RhfObj}>
            <form onSubmit={handleSubmit(myHandelSubmit)}>





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





                <Button className='my-2 bg-[#60CA60] hover:bg-[#2d672d]'>Login</Button>





            </form>

        </Form>
    )
}
