import { Input } from "@chakra-ui/react"

interface Ipts {
    type: string;
    value?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Inputs = ({ type, value, onChange }: Ipts) => { 
    return (
        <Input
            value={value}
            onChange={onChange}
            type={type}
        />
    )
}
