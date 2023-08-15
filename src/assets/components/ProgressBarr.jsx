export const ProgressBar=(bgColor, Completed) =>{
 
    const contanierStyle = {
        height: "50",
        backgroundColor:"#e0e0de",
        borderRadius:"50px",
        margin:"50px",
        with: "100%"

    };
    const fillerStyle = {
        backgroundColor: bgColor,
        height:"100%",
        width: `${Completed}`,
        borderRadius:"inherit",
        textAlign:"right",
        transition:"width 1s ease-in-out",
    };
    const labelStyle = {
        padding: 15,
        margin: 10,
        color: "#fff",
        fontWeight: "bold",

    };

    return(
        <div style={contanierStyle}>
          <div style={fillerStyle}>
            <span style={labelStyle}>{`${Completed}%`}</span>
          </div>
        </div>
    )
}