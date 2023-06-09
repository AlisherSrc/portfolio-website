import { ProjectProps } from "../components/project/Project";
import printerestImage from "./../assets/printerest.png";

import { db } from "../config/firebase";


const projects : ProjectProps[] = [
    {
        id: "1",
        title: "Printerest",
        subtitle: "Pinterest Clone with Angular and Django",
        images: [printerestImage],
        type:"Group project"
    }
]


export default projects;