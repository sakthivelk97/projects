import { useRef } from "react"
import { useState } from "react"
import useOutsideClick from "."



export default function UseOnClickOutsideTest(){
    const [showContent, setShowContent]  = useState(false)
    const ref = useRef()
    useOutsideClick(ref, ()=>setShowContent(false))
    
    return(
        <div ref={ref}>
            {
                showContent? <div>
                    <h1>This is Random Content</h1>
                    <p>Plese click outside of this to close this. It won't close if you click inside this content</p>
                </div> : <button onClick={()=>setShowContent(true)}>Show Content</button>
            }
        </div>
    )
}