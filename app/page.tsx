import { Button } from "antd"
import Link from "next/link"

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center text-center h-screen">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-8xl">A VOZ DA COSTA</h1>
        <p className="m-8 text-4xl leading-normal">
          A Voz Da Costa by <br /> Tatiana Da Costa
        </p>
        <p className="italic text-gray-500 text-2xl m-12">
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
