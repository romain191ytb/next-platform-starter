import { ImageResponse } from "next/server"

export const runtime = "edge"

export async function GET(): Promise<Response> {
  try {
    // Load external image and convert it to ArrayBuffer
    const interRegular = await fetch(new URL("../../../public/fonts/Inter-Regular.ttf", import.meta.url)).then((res) =>
      res.arrayBuffer(),
    )

    const interBold = await fetch(new URL("../../../public/fonts/Inter-Bold.ttf", import.meta.url)).then((res) =>
      res.arrayBuffer(),
    )

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(0,0,0)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            border: "6px solid rgb(255,255,255)",
            borderRadius: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontFamily: "Inter",
              fontWeight: 800,
              color: "rgb(255,255,255)",
              margin: 0,
              padding: 0,
            }}
          >
            RÈGLEMENT DU SERVEUR - NEW LAST RP 🚀
          </h1>
          <p
            style={{
              fontSize: "40px",
              fontFamily: "Inter",
              color: "rgb(255,255,255)",
              marginTop: "20px",
            }}
          >
            Bienvenue sur New Last RP
          </p>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: interRegular,
            style: "normal",
            weight: 400,
          },
          {
            name: "Inter",
            data: interBold,
            style: "normal",
            weight: 700,
          },
        ],
      },
    )
  } catch (e) {
    console.error(`${e}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
