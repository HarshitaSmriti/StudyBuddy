import {useState} from "react";

function UserSetup({onSave}) {
    const [name, setName] = useState("");

    const handleSave = () => {
        if (!name.trim())return;
        localStorage.setItem("userName",name);
        onSave(name);
    };
    return(
        <div
        style={{
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            background:"#f5f0e6",
        }}
    >
        <div 
        style={{
            background:"white",
            padding:"24px",
            borderRadius:"12px",
            width:"320px",
            textAlign:"center",
        }}
        >
            <h2> Welcome Warrior</h2>
            <p> What should we call you?</p>
            <input
            value={
                name
            }
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{
                width: "100%",
                padding: "8px",
                marginTop:"12px",
            }}
            />
            <button
            onClick={handleSave}
            style={{
                marginTop: "16px",
                padding: "8px",
                width: "100%",
            }}
            >
                Continue
            </button>
        </div>
    </div>
    );
}

export default UserSetup;