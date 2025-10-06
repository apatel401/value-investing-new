'use client'
import React from 'react'
import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import SelectField from "@/components/forms/SelectField";
import {CountrySelectField} from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            password: '',
            country: 'US',
            investmentGoals: 'Growth',
            riskTolerance: 'medium',
            preferredIndustry: 'Technology'
        },
        mode: 'onBlur'
    });

    const onSubmit: SubmitHandler<Inputs> = async(data: SignUpFormData) => console.log(data)
    return (
        <>
            <h1 className="form-title">Sign Up & Personalize</h1>
            <form className={"space-y-5"} onSubmit={handleSubmit(onSubmit)}>
                {/* Inputs */}
                <InputField
                    name="fullName"
                    label="Full Name"
                    placeholder={"Type your name"}
                    type="text"
                    error={errors.fullName}
                    register={register}
                    validation={{required: "Full Name is required", minLength: 2}}
                />
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
                <InputField
                    name="fullName"
                    label="Full Name"
                    placeholder={"Type your name"}
                    type="password"
                    error={errors.fullName}
                    register={register}
                    validation={{required: "Full Name is required", minLength: 2}}
                />

                <CountrySelectField
                    name="country"
                control={control}
                label={"Country"}
                 error={errors.country}
                 required
                />
                <SelectField
                name={"investmentGoals"}
                label={"Investment Goals"}
                placeholder={"Select your investment Goals"}
                options={INVESTMENT_GOALS}
                control={control}
                error={errors.investmentGoals}
                required
                />
                <SelectField
                    name={"riskTolerance"}
                    label={"Risk Tolerance"}
                    placeholder={"Select your Risk level"}
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required

                />
                <SelectField
                    name={"preferredIndustry"}
                    label={"Preferred Industry"}
                    placeholder={"Select your preferred Industry"}
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                />
                <Button type={"submit"} disabled={isSubmitting} className={"yellow-btn w-full mt-5"}>
                    {isSubmitting ? 'Creating Account' : "Start Your Investing Journey"}
                </Button>
                <FooterLink text={"Already have an account?"} linkText={"Sign in"} href={"/sign-in"} />
            </form>
        </>
    )
}
export default SignUp