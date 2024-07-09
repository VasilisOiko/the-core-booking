type Props = {
    children: React.ReactNode
}

function MobileViewport({ children }: Props) {
    return (
        <div className="sm:hidden">
            {children}
        </div>
    )
}

export default MobileViewport