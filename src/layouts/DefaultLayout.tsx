import AppBar from "@/components/layouts/AppBar";
import { TextField } from "@mui/material";

const DefaultLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return(
        <>
            <AppBar />
            <TextField
                label="ملصق"
                placeholder="العنصر النائب"
                helperText="هذا نص مساعد"
                variant="outlined"
            />
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