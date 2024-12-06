const AuthLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return(
        <>
            <main className="absolute w-full h-full flex items-center justify-center bg-gray-200">
                <div className="bg-white rounded-2xl w-[50%] p-6">
                    {children}
                </div>
            </main>
        </>
    )
}

export default AuthLayout;