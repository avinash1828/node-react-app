import { useEffect, useState } from "react";

function App() {
    const [status, setStatus] = useState("Loading...");

    useEffect(() => {
        fetch("http://localhost:3001/api/status")
            .then(res => res.json())
            .then(data => setStatus(data.status))
            .catch(() => setStatus("Error fetching status"));
    }, []);

    return (
        <div>
            <h1>Hello from React!</h1>
            <p>Backend Status: {status}</p>
        </div>
    );
}

export default App;
