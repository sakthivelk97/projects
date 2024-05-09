



export default function Suggestions({data, handleClick}){
    return(
        <ul style={{listStyle: 'none', background:'#E5E4E2', width:'280px', margin:'auto', textAlign: 'left', borderRadius: "10px", marginTop: '10px', padding:'10px'}}>

           { 
            data && data.length ?
            data.map((item,index) => <li style={{paddingTop: '10px', cursor: 'pointer'}} onClick={handleClick} key={index}>{item}</li>)
            : null
            }

        </ul>
          
    )
}