const fetchTodos = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)    
    return await res.json()
}


export {
    fetchTodos
}