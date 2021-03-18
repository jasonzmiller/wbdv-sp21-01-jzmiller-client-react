import React from 'react'

const ParagraphWidget = ({widget, editing=false}) => {
    return(
        <>
            {
                editing &&
                <>
                    <textarea className="form-control" value={widget.text}></textarea>
                </>
            }
            {
                !editing &&
                <p>
                    {widget.text}
                </p>
            }
        </>
    )
};

export default ParagraphWidget