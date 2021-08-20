import Menu from './menu'

const LayoutComponent = (props) => {
    // const router = useRouter()

    return (
        <>
            <Menu />
            {props.content}
        </>
    )
}

export default LayoutComponent