import { useState } from "react";
import Child from "./Child";

function Parent(){
    const [client, setClient]=useState("Reliance");

    return(
        <div className="parent">
            <Child title="Client 1" clientName={client}/>
            <Child title="Client 2" clientName={client}/>
            <Child title="Client 3" clientName={client}/>

            <Child title="Client 4" clientName={client}>
                <p><strong>Hello World</strong></p>
            </Child>

            <Child title="Client 4" clientName={client}>
                <h2><strong>Hello World</strong></h2>
            </Child>

        </div>
    )
}
export default Parent;