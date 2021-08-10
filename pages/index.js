// import Todo from './todo'
// import { fetchTodos } from '../helpers/fetch-data'
import Layout from './general/layout'

const Index = (props) => {
    return (
        <Layout 
            content={(
                <div>This is home</div>
                // <Todo data={props.data} />
            )}
        />
    )
}

export default Index

// export async function getStaticProps(context) {
//     const data = await fetchTodos()

//     return {
//         props: {
//           data
//         }
//       }
// }