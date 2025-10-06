'use client'
import React from 'react'
import InputField from "@/components/forms/InputField";
import {SubmitHandler, useForm} from "react-hook-form";
import FooterLink from "@/components/forms/FooterLink";
import {Button} from "@/components/ui/button";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            password: '',
            email: ''
        },
        mode: 'onBlur'
    });

    const onSubmit: SubmitHandler<Inputs> = async(data: SignUpFormData) => console.log(data)
    return (
        <div>
            <h1 className="form-title">Log in your Account</h1>
            <form className={"space-y-5"} onSubmit={handleSubmit(onSubmit)}>
                <InputField
                    name="email"
                    label="Email"
                    placeholder={"Type your email address"}
                    type="text"
                    error={errors.email}
                    register={register}
                    validation={{required: "email is required",  pattern: /^w+@\w+\.\w+/}}
                />
                <InputField
                    name="password"
                    label="Password"
                    placeholder={"Type your Password"}
                    type="password"
                    error={errors.password}
                    register={register}
                    validation={{required: "Password is required", minLength: 8}}
                />
                <Button type={"submit"} disabled={isSubmitting} className={"yellow-btn w-full mt-5"}>
                    {isSubmitting ? 'Sign in' : "Sign in"}
                </Button>
                <FooterLink text={"Don't have an account?"} linkText={"Sign Up"} href={"/sign-up"} />
            </form>
        </div>
    )
}
export default SignIn
