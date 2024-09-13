import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function HorizontalCard({ obj }) {
    const navigate = useNavigate();
    const handleClick = async () => {
        await localStorage.setItem(JSON.stringify(obj), 'obj');
        navigate("/news");
    }

    return (

        <div onClick={handleClick} className="min-w-[400px] cursor-pointer max-h-[100px] border-r  border-gray-500 px-3 pb-4 mb-2 mr-4  flex gap-2">
            <p className="font-bold text-sm font-sans">{obj?.title}</p>
            <div className="">
                <img className="object-fill w-[200px] max-w-[200px] max-h-[100px]" src={obj?.image} />
                {/* <p className="text-xs">publishedAt: 2024-09-11T05:27:59Z</p> */}
            </div>

        </div>
    );
}
