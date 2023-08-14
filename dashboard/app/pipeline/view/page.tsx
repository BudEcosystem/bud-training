import Canvas from "./canvas";
import ComponentProvider from "./component-provider";


export default function PipelineView(){
    return(
    <div className="-mt-10 -mx-8 h-full">
        <div className="fixed top-16 bottom-0 left-60 w-56 h-[-63px] border-r">
            <ComponentProvider></ComponentProvider>
        </div>
        <div className="lg:pl-56 h-full">
            <Canvas></Canvas>
        </div>

    </div>)
}