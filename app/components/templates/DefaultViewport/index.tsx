type Props = {
    children: React.ReactNode
}

function DefaultViewport({ children }: Props) {
    return (
        <div className="hidden sm:block">
            {children}
        </div>
    )
}

export default DefaultViewport