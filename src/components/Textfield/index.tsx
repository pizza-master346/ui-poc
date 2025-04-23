import { FormControl, FormControlProps, FormHelperText, FormHelperTextProps, InputLabel, InputLabelProps, styled } from "@mui/material";
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';

const BootstrapOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(2),
    }
}));

export interface XTextFieldProps extends FormControlProps {
    label?: InputLabelProps['children'];
    helperText?: FormHelperTextProps['children']
    slotProps?: {
        input?: OutlinedInputProps,
        label?: Omit<InputLabelProps, 'children'>,
        helperText?: FormHelperTextProps
    }
}

/**
 * XTextField is a custom text field component that uses Material-UI's FormControl and OutlinedInput components.
 * It allows for customization of the input field and its label.
 *
 * @param {XTextFieldProps} props - The props for the component.
 * 
 * */
export const XTextField = (props: XTextFieldProps) => {
    const { slotProps, label, helperText, ...rest } = props

    return (
        <FormControl variant='outlined'  {...rest}  >
            <InputLabel shrink  {...slotProps?.label} >{label}</InputLabel>
            <BootstrapOutlinedInput size='small'{...slotProps?.input} />
            <FormHelperText {...slotProps?.helperText} >{helperText}</FormHelperText>
        </FormControl>
    )
}

