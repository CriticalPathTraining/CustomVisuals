import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
export declare class Visual implements IVisual {
    private svgRoot;
    private ellipse;
    private text;
    private padding;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
}
