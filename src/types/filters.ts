export interface FilterOptions {
  title: string;
  key: string;
  value: string[];
  component: "select" | "checkbox" | "radio" | "range" | "switch";
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: string | string[];
}

export interface FilterCardProps {
  filters: FilterOptions[];
  handleFilterChange: (key: string, value: string[]) => void;
  onSubmit: () => void;
  onReset: () => void;
}
