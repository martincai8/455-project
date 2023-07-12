const getSessions = async () => {
  try {
    const res = await fetch("https://sketch-connect-be.onrender.com/sessions", {
      method: "GET",
    });
  
    return res.json();
  } catch (error) {
    console.error("Error getting session:", error);
    throw error;
  }
}

const addSession = async (session, host) => {
    try {
      const response = await fetch("https://sketch-connect-be.onrender.com/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          isPublic: session.isPublic,
          status: session.status,
          players: [host.id]
        },
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data?.message);
      }
  
      return data;
    } catch (error) {
      console.error("Error adding session:", error);
      throw error;
    }
  };
  
  const deleteSession = async (sessionId) => {
    try {
      const response = await fetch(`https://sketch-connect-be.onrender.com/sessions/${sessionId}`, {
        method: "DELETE",
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data?.message);
      }
    } catch (error) {
      console.error("Error deleting session:", error);
      throw error;
    }
  };
  
  const updateStatus = async (sessionId, status) => {
    try {
      const response = await fetch(`https://sketch-connect-be.onrender.com/sessions/${sessionId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data?.message);
      }
    } catch (error) {
      console.error("Error updating session:", error);
      throw error;
    }
  };

  const addPlayer = async (sessionId, playerId) => {
    try {
      const response = await fetch(`https://sketch-connect-be.onrender.com/sessions/${sessionId}/add-player`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          id: playerId
        },
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data?.message);
      }
    } catch (error) {
      console.error("Error adding player to session:", error);
      throw error;
    }
  };
  
  const services = { getSessions, addSession, deleteSession, updateStatus, addPlayer };
  
  export default services;
  