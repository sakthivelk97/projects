import { useState } from 'react'
import QrCode from 'react-qr-code'
import './style.css'



export default function QrCodeGenerator(){


    const[qrCode, setQrCode] = useState('')
    const[input,  setInput] = useState('')

    function handleGenetrateQrCode(){
        setQrCode(input)
        setInput()
    }

    return(
        <div>
            <h1>Qr Code Generator</h1>
            <div>
                <input onChange={(e)=> setInput(e.target.value)} type="text" name="Enter Your Value here" value={input} />

                <button disabled={input && input.trim() !=='' ? false : true} onClick={handleGenetrateQrCode}>Generate</button>
            </div>
            <div>
                 <QrCode 
                 id='qr-code-value'
                 value={qrCode} size={400} bgColor='white'/>
            </div>
        </div>
    )
}