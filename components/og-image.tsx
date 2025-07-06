import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
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

        <div style={{ marginBottom: "16px" }}>
          <p style={{ fontSize: "18px", color: "white", display: "flex", alignItems: "center" }}>
            🔗 Règlement complet ici : <span style={{ color: "#3b82f6", marginLeft: "4px" }}>Cliquez ici</span>
          </p>
        </div>

        <div style={{ marginBottom: "8px" }}>
          <p style={{ fontSize: "18px", color: "#fbbf24", fontWeight: "bold", display: "flex", alignItems: "center" }}>
            ⚠️ Principales règles à retenir :
          </p>
        </div>

        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          {[
            "Respect & Fair-Play : Aucune insulte, menace ou comportement toxique ne sera toléré.",
            "Pas de Cheat / Mod Menu : Tricher entraîne un bannissement immédiat.",
            "Pas de Powergaming / Metagaming : Restez dans un jeu réaliste et immersif.",
            "Fear RP & NLR : Jouez en respectant la peur et l'oubli après la mort RP.",
            "Scénarios RP cohérents : Aucune action irréaliste ou abusive.",
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
              <span style={{ fontWeight: i === 0 ? "bold" : "normal" }}>{rule}</span>
            </li>
          ))}
        </ul>

        <p style={{ fontSize: "16px", color: "white", marginTop: "16px" }}>
          📢 En rejoignant <span style={{ fontWeight: "bold" }}>Galactic RP V2</span>, vous acceptez ces règles. Toute
          infraction sera sanctionnée.
        </p>

        <p style={{ fontSize: "18px", color: "#8b5cf6", fontWeight: "bold", marginTop: "16px", textAlign: "center" }}>
          💠 Bon jeu à tous et amusez-vous ! 🎮🚀
        </p>
      </div>

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
    </div>,
    {
      width: 800,
      height: 600,
    },
  )
}
