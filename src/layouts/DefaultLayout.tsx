import NavigationDrawer from "@/components/layouts/NavigationDrawer";

const DefaultLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return(
        <>
            <NavigationDrawer>
                <main>
                    {children}
                </main>
            </NavigationDrawer>
        </>
    )
}

export default DefaultLayout;