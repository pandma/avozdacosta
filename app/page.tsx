import { Button } from "antd"
import Link from "next/link"

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>A VOZ DA COSTA</h1>
        <p
          style={{
            fontStyle: "italic",
            fontFamily: `'Cursive Font', sans-serif`,
          }}
        >
          A blog by Tati
        </p>
        <br />
        <Link href={"/category"}>
          <Button style={{ background: "#846e453d" }}>LET´S GO</Button>
        </Link>
      </div>
    </div>
  )
}
export default Home
