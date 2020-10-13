import {gql,useQuery} from '@apollo/client'
import React from 'react'
function Gtry(){
    const {loadiing,error,data} = useQuery(gql`
        query Products{
           products{
            id
            Title
           }
        }
    `)
    if(loadiing) return 'Loading....'
    if(error) return console.log(`${error.message}`)

    return(
        
        <ul>
            {/* { data.products.map(p => <li key={p.id}>{p.name}</li>) } */}
        </ul>
    )
}

export default Gtry