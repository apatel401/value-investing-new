import React from 'react'
import {INVESTMENT_GOALS} from "@/lib/constants";
import {Label} from "@/components/ui/label";
import {Controller} from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const SelectField = ({ name,
                         label,
                         placeholder,
                         options,
                         control,
                         error,
                         required}: SelectFieldProps) => {
    return (
        <div className={"space-y-2"}>
            <Label htmlFor={name} className={"form-label"}>{label}</Label>
            <Controller
                render={({field}) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="select-trigger">
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 text-white">
                            {options.map((option) => (
                                <SelectItem key={option.value} value={option.value} className="focus:bg-gray-600 focus:text-white">{option.label}</SelectItem>
                            ))}
                        </SelectContent>
                        {error && <p className="text-sm text-red-500">{error.message}</p>}
                    </Select>
                )} name={name} control={control} rules={{
                required: required ? `Please select ${label.toLowerCase()}` : false
            }}

                        />
        </div>
    )
}
export default SelectField
