import { TextInput } from '@mantine/core'
import { DatePicker } from '@mantine/dates'

export const Home = () => {
    return (
        <div>

            <TextInput
                label='kllkkllk'
                placeholder='soso'
                error="ll"
            />

            <DatePicker type="range" />
            <DatePicker type="default" />
        </div>
    )
}
