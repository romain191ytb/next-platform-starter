export default function DiscordPreview() {
  return (
    <div className="max-w-md mx-auto my-8 bg-[#36393f] rounded-md overflow-hidden shadow-lg border border-[#202225]">
      <div className="flex items-center p-4 border-b border-[#202225]">
        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
          G
        </div>
        <div className="ml-3">
          <div className="flex items-center">
            <span className="text-[#dcddde] font-medium">Galactic Rp</span>
            <span className="ml-2 px-1 text-xs bg-[#5865f2] text-white rounded">APP</span>
          </div>
          <div className="text-xs text-[#b9bbbe]">31/03/2025 12:30</div>
        </div>
      </div>

      <div className="p-4">
        <div className="rounded-md overflow-hidden border border-[#202225]">
          <div className="p-4 bg-[#2f3136]">
            <h3 className="text-white font-bold flex items-center">📜 RÈGLEMENT DU SERVEUR - GALACTIC RP 🚀</h3>

            <p className="text-[#dcddde] text-sm mt-2">
              Bienvenue sur <span className="font-bold">Galactic RP</span> ! Afin de garantir une expérience RP
              immersive et agréable pour tous, merci de prendre connaissance et de respecter notre règlement.
            </p>

            <div className="mt-3">
              <p className="text-[#dcddde] text-sm flex items-center">
                🔗 Règlement complet ici : <span className="text-[#00aff4] ml-1">Cliquez ici</span>
              </p>
            </div>

            <div className="mt-3">
              <p className="text-[#ffd866] text-sm font-bold flex items-center">⚠️ Principales règles à retenir :</p>
            </div>

            <ul className="mt-2 space-y-1">
              {[
                "Respect & Fair-Play : Aucune insulte, menace ou comportement toxique ne sera toléré.",
                "Pas de Cheat / Mod Menu : Tricher entraîne un bannissement immédiat.",
                "Pas de Powergaming / Metagaming : Restez dans un jeu réaliste et immersif.",
                "Fear RP & NLR : Jouez en respectant la peur et l'oubli après la mort RP.",
                "Scénarios RP cohérents : Aucune action irréaliste ou abusive.",
              ].map((rule, i) => (
                <li key={i} className="text-[#dcddde] text-sm flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✅</span> {rule}
                </li>
              ))}
            </ul>

            <p className="text-[#dcddde] text-sm mt-3">
              📢 En rejoignant <span className="font-bold">Galactic RP</span>, vous acceptez ces règles. Toute
              infraction sera sanctionnée.
            </p>

            <p className="text-[#b58efd] text-sm font-bold mt-3 text-center">💠 Bon jeu à tous et amusez-vous ! 🎮🚀</p>
          </div>

          <div className="bg-[#2f3136] p-4 flex justify-center">
            <div className="bg-[#2d1b69] rounded-md p-3 flex flex-col items-center">
              <div className="bg-[#3b2483] rounded-md p-2 mb-2 flex justify-center">
                <span className="text-3xl">📖</span>
              </div>
              <p className="text-white font-bold">▶ RÈGLEMENTS ◀</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex items-center">
        <div className="bg-green-500 rounded-md p-1 mr-2">
          <span className="text-white text-xs">✓</span>
        </div>
        <span className="text-[#dcddde] text-sm">22</span>
        <div className="ml-2 bg-[#4f545c] rounded-full p-1">
          <span className="text-[#dcddde] text-xs">😊</span>
        </div>
      </div>
    </div>
  )
}
