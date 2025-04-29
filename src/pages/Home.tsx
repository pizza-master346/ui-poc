import { SegmentedControl, TextInput } from '@mantine/core'
import { DatePicker } from '@mantine/dates'

export const Home = () => {
    return (
        <div>

            <TextInput
                label='kllkkllk'
                placeholder='soso'
                error="ll"
            />
            <SegmentedControl


                withItemsBorders={false}
                radius='lg'
                defaultValue='Profit'
                size='md'
                data={['Profit', 'Statistics', 'Schedulers']} />


            <DatePicker type="range" />
            <DatePicker type="default" />
        </div>
    )
}
