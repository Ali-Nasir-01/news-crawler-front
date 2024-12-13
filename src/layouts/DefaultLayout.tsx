import AppBar from "@/components/layouts/AppBar";

const DefaultLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return(
        <>
            <AppBar />
            <main>
                {children}
            </main>
            <footer className="">
                This is default footer
            </footer>
        </>
    )
}

export default DefaultLayout;