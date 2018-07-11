import { LegendItemType } from "./LegendItem";
import { AreaChartStyle, BarChartStyle, CategoryStyle, ScatterChartStyle, BoxChartStyle, BandChartStyle, LineChartStyle } from "./style";
export declare type KeyedStyle = {
    key: string;
};
export declare type StylerStyle = {
    key: string;
    style?: StylerStyle;
    color?: string;
    selected?: string;
    width?: number;
    dashed?: boolean;
};
export declare type Column = string | StylerStyle;
export declare class Styler {
    colorScheme: string;
    columnNames: any[];
    columnStyles: {
        [columnName: string]: StylerStyle;
    };
    constructor(columns: Column[], scheme?: string);
    numColumns(): number;
    colorLookup(columnCount: number): string[];
    legendStyle(column: string, type: LegendItemType): CategoryStyle;
    areaChartStyle(): AreaChartStyle;
    lineChartStyle(): LineChartStyle;
    barChartStyle(): BarChartStyle;
    scatterChartStyle(): ScatterChartStyle;
    axisStyle(column: string): {
        fill: string;
    };
    boxChartStyle(): BoxChartStyle;
    bandChartStyle(): BandChartStyle;
}
export declare function styler(columns: Column[], scheme?: string): Styler;