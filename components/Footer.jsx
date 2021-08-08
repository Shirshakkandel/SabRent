export default function Footer() {
  return (
    <footer className="grid grid-cols-1 px-32 text-gray-600 bg-gray-100 md:grid-cols-4 gap-y-10 py-14">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>How SabHousing works</p>
        <p>Investors</p>
        <p>SabHousing Plus</p>
        <p>SabHousing Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>Accessbility</p>
        <p>This is not a real state</p>
        <p>Its pretty awesome housing service</p>
        <p>Referrals accepted</p>
        <p>Sab brand Fan</p>
      </div>

      <div className="text-xs font-bold text-gray-800 ">Host</div>
      <div className="text-xs font-bold text-gray-800 ">Support</div>
    </footer>
  )
}
