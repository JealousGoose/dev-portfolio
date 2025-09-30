import { counterItems } from "../constants"

const AnimatedCounter = () => {
    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item) => (
                    <div key={item.label} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
                        <div className="counter-number text-white text-4xl font-bold mb-2">
                            {item.value}{item.suffix}
                        </div>
                        <div className="text-white-45 text-lg">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimatedCounter