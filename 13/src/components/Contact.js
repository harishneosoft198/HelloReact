const Contact = ()=>{
    return(
        <div className="p-2 m-2">
            <h1 className="text-xl font-bold">This is Contact</h1>
            <form>
                <input className="border border-black" placeholder="Name"/>
                <input className="border border-black" placeholder="Message"/>
                <button className="border border-black bg-gray-500">Submit</button>
            </form>
        </div>
    )
}

export default Contact