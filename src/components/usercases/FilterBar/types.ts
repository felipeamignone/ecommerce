export interface IFilterBar {
    Filters: Array<string>;
    HandleFilter: (filter: string) => void;
}