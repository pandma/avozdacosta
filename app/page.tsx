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
        height: "90vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
          }}
        >
          A VOZ DA COSTA
        </h1>
        <p
          style={{
            margin: "2rem",
            lineHeight: 1.4,
            fontSize: "34px",
          }}
        >
          A Voz Da Costa by <br /> Tatiana Da Costa
        </p>
        <p
          style={{
            fontStyle: "italic",
            color: "#787878",
            fontSize: "22px",
            margin: "3rem",
          }}
        >
          Fashion Epiphany: A Journey Through Tempting Style Realms.
        </p>

        <Link href={"/home"} passHref>
          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: "#FFEDFF",
              fontSize: "25px",
              borderRadius: "50px",
              padding: "27px 44px",
              color: "#000000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Explore my thoughts
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default Home
