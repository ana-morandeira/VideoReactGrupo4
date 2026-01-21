import Card from "../Card/Card.jsx"
import image from "../../assets/images/nueve_reinas.jpg"
function Main() {
    return (
        <>
            <Card
                image={image}
                title="Nueve Reinas"
                subtitle="Contenido exclusivo"
                year="2000"
                duration="1h 50m"
            />

            <h1 className="text-3xl font-bold text-center mt-10">
                Videoclub 📚
            </h1>
        </>
    )
}

export default Main;