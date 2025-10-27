import React from 'react'

const Flex = ({id,dir,children}) => {
    let classNama = `d-flex justify-content-start align-items-center flex-${dir} gap-2`
    return (
        <div id={id} className={classNama}>
            {children}
        </div>
    )
}

export default Flex