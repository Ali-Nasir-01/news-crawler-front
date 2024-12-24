const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <main
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#e2e8f0",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            width: "500px",
            padding: "24px",
          }}
        >
          {children}
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
