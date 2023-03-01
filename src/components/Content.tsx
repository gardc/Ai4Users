import React from 'react'

const Content = (props: any) => {
    return (
        <div className="flex justify-center mb-6">
            <div className="w-full">{props.children}</div>
        </div>
    )
}

export default Content
