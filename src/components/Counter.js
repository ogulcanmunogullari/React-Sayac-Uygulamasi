import { useState } from 'react';
function Counter(){
    
    const [sayac, setSayac] = useState(0)
    
    {/* onClick içerisinde çok yer kaplıyorsa burada da yazabiliriz. */}
    const azalt = () => {
        setSayac( sayac - 1 )
    }

    return(
        <>
        <h1>
          {sayac}
        </h1>
        <button onClick={() => setSayac( sayac + 1 )}> Arttır </button>
        <button onClick={azalt}> Azalt </button>
        <button onClick={() => setSayac( 0 )}> Reset </button>
        </>
    )
}
export default Counter