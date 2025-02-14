import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const ChooseAccount = () => {
    console.log("ChooseAccount.js is rendering...");
    
    const navigate = useNavigate();
    const { setUserType, setIsFirstTimeUser } = useUser();

    console.log("ChooseAccount is rendering...");
    console.log("setUserType:", setUserType);
    console.log("setIsFirstTimeUser:", setIsFirstTimeUser);

    if (!setUserType || !setIsFirstTimeUser) {
    console.error("Error: UserContext is not available!");
    return <div>Error: Context not available</div>;
    }

    const handleSelection = (userType) => {
    console.log(`User selected: ${userType}`);
    localStorage.setItem("userType", userType);
    setUserType(userType);
    setIsFirstTimeUser(false);

    setTimeout(() => {
        if (userType === "gig-worker") {
            navigate("/gig-worker/dashboard", { replace: true });
        } else {
            navigate("/client/dashboard", { replace: true });
        }
        // window.location.reload(); // Ensure UI updates with the correct state
        }, 100);
    };

    return (
        <div style={styles.container}> 
        <h2 style={styles.title}>Choose Account Type</h2>
  
        <div style={{ ...styles.optionBox, backgroundColor: "#e0f7fa" }} onClick={() => handleSelection("gig-worker")}>
          <h3 style={styles.optionTitle}>Sign up as a <strong>Gig Worker</strong></h3>
          <p style={styles.optionText}>"I am looking for gigs"</p>
        </div>
  
        <div style={{ ...styles.optionBox, backgroundColor: "#ffebee" }} onClick={() => handleSelection("client")}>
          <h3 style={styles.optionTitle}>Sign up as a <strong>Client</strong></h3>
          <p style={styles.optionText}>"I am looking to hire gig workers"</p>
        </div>
      </div>
      );
    };

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f8f8f8",
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    optionBox: {
        width: "90%",
        maxWidth: "300px",
        padding: "15px",
        border: "2px solid #ccc",
        borderRadius: "10px",
        margin: "10px",
        cursor: "pointer",
        textAlign: "center",
        transition: "background 0.3s ease-in-out",
    },
    optionTitle: {
        fontSize: "18px",
        fontWeight: "500",
    },
    optionText: {
        fontSize: "14px",
        color: "#555",
    },
};

export default ChooseAccount;
