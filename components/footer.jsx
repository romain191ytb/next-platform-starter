"use client"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} New Last RP. All rights reserved.</p>
        {/* Add any other relevant information or links here */}
      </div>
      <style jsx>{`
        footer {
          background-color: #333;
          color: #fff;
          padding: 20px 0;
          text-align: center;
          margin-top: 50px; /* Add some space between content and footer */
        }

        .container {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 20px;
        }
      `}</style>
    </footer>
  )
}

export default Footer
