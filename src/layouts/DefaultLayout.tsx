const DefaultLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return(
        <>
            <header>This is default header</header>
            <main>
                {children}
            </main>
            <footer>
                This is default footer
            </footer>
        </>
    )
}

export default DefaultLayout;