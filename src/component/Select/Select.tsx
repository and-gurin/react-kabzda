import React, {useState} from "react";
import styles from './Select.module.css'
export type ItemType = {
    title: string
    value: any

}
export type SelectPropsTitle = {
    items: Array<ItemType>
    onClick: (title: string)=>void
    value: string
}

function Select (props: SelectPropsTitle) {
    let [appear, setAppear] = useState(false)
    const selectedItem = props.items.find(item=>item.value === props.value )
    return (
            <div>
                <div className={styles.select} onClick={()=>setAppear(!appear)}>{selectedItem && selectedItem.title}</div>
                {appear && props.items.map((t, index)=> {
                    const onClickHandler = () => {
                        props.onClick(t.value)
                        setAppear(!appear)
                    }
                    return <div onClick={onClickHandler}
                                key={index}>{t.title}</div>
                })}
            </div>
        )
}



export default Select