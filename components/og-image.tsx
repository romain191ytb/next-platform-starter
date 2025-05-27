import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "edge",
}

export default async function OgImage() {
  try {
    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(0, 0, 0)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "6em", fontWeight: 800, color: "rgb(255, 255, 255)" }}>
            RÈGLEMENT DU SERVEUR - NEW LAST RP 🚀
          </h1>
          <p style={{ fontSize: "2em", color: "rgb(255, 255, 255)" }}>Bienvenue sur New Last RP</p>
          <p style={{ fontSize: "1.5em", color: "rgb(255, 255, 255)" }}>
            En rejoignant New Last RP, vous acceptez notre règlement.
          </p>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: any) {
    console.error(`${e.message}`)
    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(0, 0, 0)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: "2em", color: "rgb(255, 255, 255)" }}>Failed to generate the image</p>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  }
}
