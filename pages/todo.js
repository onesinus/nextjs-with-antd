import Layout from './general/layout'
import { fetchTodos } from '../helpers/fetch-data'
import { useEffect, useState } from 'react'
const Todo = (props) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (props.data) {
            setIsLoading(false)
        }
    }, [props.data])

    return (
        <Layout
            content={(
                <>
                    {
                        isLoading 
                        && 
                        <div 
                            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
                        >
                            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                            <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
                            <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
                        </div>
                    }
                    {!isLoading 
                        && 
                        <table className="border-separate border">
                            <thead>
                                <tr>
                                    <th className="border border-green-600">#</th>
                                    <th className="border border-green-600">userId</th>
                                    <th className="border border-green-600">Title</th>
                                    <th className="border border-green-600">is Completed</th>
                                    <th className="border border-green-600">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.data.map(todo => (
                                    <tr key={todo.id}>
                                        <td className="border border-green-600">{todo.id}</td>
                                        <td className="border border-green-600">{todo.userId}</td>
                                        <td className="border border-green-600">{todo.title}</td>
                                        <td className="border border-green-600">{todo.is_completed}</td>
                                        <td className="border border-green-600">
                                            <button>Detail</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                </>
            )}
        />
    )
}

export default Todo

export async function getStaticProps(context) {
    const data = await fetchTodos()

    return {
        props: {
          data
        }
      }
}