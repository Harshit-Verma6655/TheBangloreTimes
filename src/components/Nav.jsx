import React from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Card,
    Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import { useNewsContext } from "../context/NewsContext";
import { useNavigate } from "react-router-dom";

const menuItems = [

    {
        title: "Australia", id: "au"
    },
    {
        title:
            "Brazil", id: "br"
    },
    {
        title:
            "Canada", id: "ca"
    },
    {
        title:
            "China", id: "cn"
    },

    {
        title:
            "Egypt", id: "eg"
    },
    {
        title:
            "France", id: "fr"
    },
    {
        title:
            "Germany", id: "de"
    },
    {
        title:
            "Greece", id: "gr"
    },
    {
        title:
            "Hong Kong", id: "hk"
    },
    {
        title:
            "India", id: "in"
    },
    {
        title:
            "Ireland", id: "ie"
    },
    {
        title:
            "Israel", id: "il"
    },
    {
        title:
            "Italy", id: "it"
    },
    {
        title:
            "Japan", id: "jp"
    },
    {
        title:
            "Netherlands", id: "nl"
    },
    {
        title:
            "Norway", id: "no"
    },
    {
        title:
            "Pakistan", id: "pk"
    },
    {
        title:
            "Peru", id: "pe"
    },
    {
        title:
            "Philippines", id: "ph"
    },
    {
        title:
            "Portugal", id: "pt"
    },
    {
        title:
            "Romania", id: "ro"
    },
    {
        title:
            "Russian Federation", id: "ru"
    },
    {
        title:
            "Singapore", id: "sg"
    },
    {
        title:
            "Spain", id: "es"
    },
    {
        title:
            "Sweden", id: "se"
    },
    {
        title:
            "Switzerland", id: "ch"
    },
    {
        title:
            "Taiwan", id: "tw"
    },
    {
        title:
            "Ukraine", id: "ua"
    },
    {
        title:
            "United Kingdom", id: "gb"
    },
    {
        title:
            "United States", id: "us"
    }

];

export function MenuCustomList() {
    const [openMenu, setOpenMenu] = React.useState(false);
    const { setactive } = useNewsContext()
    const navigate = useNavigate();
    const handleWorld = (id) => {


        setactive(id);
        navigate(`/${id}`);
    }

    return (
        <Menu open={openMenu} handler={setOpenMenu} allowHover>
            <MenuHandler>
                <Button
                    variant="text"
                    className="flex items-center gap-3 text-base font-normal capitalize tracking-normal font-serif"
                >
                    World{" "}
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="flex flex-wrap w-[46rem] h-80 border-none   grid-cols-1 gap-4  lg:grid">

                <ul className="col-span-4 flex w-full flex-wrap text-wrap   gap-1">
                    {menuItems.map(({ title, id }) => (
                        <a href="#" key={title}>
                            <MenuItem>
                                <Typography variant="h6" onClick={() => handleWorld(id)} color="blue-gray" className="mb-1 font-serif">
                                    {title}
                                </Typography>

                            </MenuItem>
                        </a>
                    ))}
                </ul>
            </MenuList>
        </Menu>
    );
}