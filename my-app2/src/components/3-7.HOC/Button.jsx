import React from 'react'
import withLoading from './withLoading'

/* 
export default function Button() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);

        return () => clearTimeout(timer);
    }, [])

    return loading ? <p>Loading...</p> : <button>Button</button>;

}
*/

function Button(){
    return <button>Button</button>;
}

export default withLoading(Button);