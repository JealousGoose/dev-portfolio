import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";

const FeatureCards = () => {
    return (
        <div className="w-full padding-x-lg">
            
            <div className="mt-16 mb-16">
                <TitleHeader title="My strengths" sub="✨ Perks of working with me" />
            </div>
            <div className="mx-auto grid-3-cols">
                {abilities.map(({imgPath, title, desc}) => (
                    <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
                        <div className="size-14 flex items-center  rounded-full overflow-hidden self-start">
                            <img src={imgPath} alt={title} className="w-8 h-8 object-contain" />
                        </div>
                       <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3> 
                       <p className="text-white-50 text-lg">
                        {desc}
                       </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureCards;

