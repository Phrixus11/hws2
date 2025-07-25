import React from 'react'
import up from './img/Up.svg'
import down from './img/Down.svg'
import noneFilter from './img/noneFilter.svg'

// добавить в проект иконки и импортировать✅
const downIcon = down//'[\\/]'
const upIcon = up //'[/\\]'
const noneIcon = noneFilter//'[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    const result = sort === down
        ? up
        : sort === up
            ? ''
            : down
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

    return result // исправить ✅
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку✅*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt={'icon'}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
