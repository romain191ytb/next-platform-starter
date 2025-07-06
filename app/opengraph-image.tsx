import { ImageResponse } from "next/og"

export const runtime = "edge"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        padding: "32px",
        backgroundImage: "linear-gradient(to bottom right, #1a1a1a, #0a0a0a)",
        borderRadius: "12px",
        border: "2px solid #8b5cf6",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          backgroundColor: "rgba(0,0,0,0.7)",
          borderRadius: "8px",
          border: "1px solid #8b5cf6",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          📜 RÈGLEMENT DU SERVEUR - GALACTIC RP V2 🚀
        </h1>

        <p style={{ fontSize: "18px", color: "white", marginBottom: "16px" }}>
          Bienvenue sur <span style={{ fontWeight: "bold" }}>Galactic RP V2</span> ! Afin de garantir une expérience RP
          immersive et agréable pour tous, merci de prendre connaissance et de respecter notre règlement.
        </p>

        <div style={{ marginBottom: "8px" }}>
          <p style={{ fontSize: "18px", color: "#fbbf24", fontWeight: "bold", display: "flex", alignItems: "center" }}>
            ⚠️ Principales règles à retenir :
          </p>
        </div>

        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          {[
            "Respect & Fair-Play",
            "Pas de Cheat / Mod Menu",
            "Pas de Powergaming / Metagaming",
            "Fear RP & NLR",
            "Scénarios RP cohérents",
          ].map((rule, i) => (
            <li
              key={i}
              style={{
                fontSize: "16px",
                color: "white",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#10b981", marginRight: "8px" }}>✅</span>{" "}
              <span style={{ fontWeight: "bold" }}>{rule}</span>
            </li>
          ))}
        </ul>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#2d1b69",
              padding: "12px 24px",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                backgroundColor: "#3b2483",
                borderRadius: "8px",
                padding: "8px",
                marginBottom: "8px",
              }}
            >
              <span style={{ fontSize: "32px" }}>📖</span>
            </div>
            <p style={{ fontSize: "24px", color: "white", fontWeight: "bold" }}>▶ RÈGLEMENTS ◀</p>
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
